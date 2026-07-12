<template>
  <div
    class="fixed inset-0 bg-black/90 h-dvh lg:w-4xl lg:mx-auto flex flex-col justify-center items-start z-50"
  >
    <!-- progress bar -->
    <div class="absolute top-4 left-4 right-4 flex gap-1">
      <div v-for="(story, index) in stories" :key="story.id" class="flex-1 h-1 bg-white/30 rounded">
        <div
          class="h-full bg-white rounded"
          :class="{
            'w-full': index < currentIndex,
            'w-0': index > currentIndex,
            'animate-progress': index === currentIndex,
          }"
        />
      </div>
    </div>

    <div class="absolute top-8 left-0 px-4 flex justify-between items-center w-full">
      <div class="flex items-center gap-2">
        <ProfilePic :user="currentStory.user" class="w-12 h-12" />
        <h2 class="font-semibold text-white">{{ currentStory.user.username }}</h2>
        <span v-if="currentStory.user.verified"><VerifiedSvg /></span>
      </div>
      <button class="text-white text-3xl" @click="$emit('close')">✕</button>
    </div>

    <div class="h-full w-full overflow-hidden">
      <img
        v-if="currentStory.media.type === 'image'"
        :src="currentStory.media.url"
        class="w-full h-full object-cover"
        @click="handleClick($event)"
      />

      <video
        v-else
        :src="currentStory.media.url"
        class="w-full h-full object-cover"
        autoplay
        muted
        @click="handleClick"
        @ended="nextStory"
      />
    </div>

    <div
      class="w-full bg-black text-white flex justify-center items-center gap-2 p-4 absolute bottom-0 left-0 z-50"
    >
      <input
        v-model="comment"
        type="text"
        placeholder="Send message"
        class="flex-1 placeholder:text-white rounded-full px-4 py-2 text-sm outline-none border border-gray-200 focus:border-gray-400"
        @focus="pauseStory"
        @blur="resumeStory"
      />
      <like-svg :item="currentStory" />
      <ShareSvg :item="currentStory" />
    </div>
  </div>
</template>

<script>
import { useStoriesStore } from '@/stores/stories'
import { mapState } from 'pinia'
import ProfilePic from './common/profilePic.vue'
import VerifiedSvg from './icons/verifiedSvg.vue'
import LikeSvg from './icons/likeSvg.vue'
import ShareSvg from './icons/shareSvg.vue'

export default {
  props: ['userId'],
  components: { ProfilePic, VerifiedSvg, LikeSvg, ShareSvg },

  data() {
    return {
      currentIndex: 0,
      timer: null,
      paused: false,
      comment: '',
    }
  },
  computed: {
    ...mapState(useStoriesStore, ['getCurrentUserStory']),

    stories() {
      return this.getCurrentUserStory(this.userId)
    },

    currentStory() {
      return this.stories[this.currentIndex]
    },
  },
  mounted() {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', this.handleKey)
    if (!this.stories.length) {
      this.$emit('close')
      return
    }

    this.startTimer()
  },

  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKey)
    clearTimeout(this.timer)
  },

  methods: {
    startTimer() {
      clearTimeout(this.timer)

      if (this.paused) return

      this.timer = setTimeout(() => {
        this.nextStory()
      }, 5000)
    },

    pauseStory() {
      this.paused = true
      clearTimeout(this.timer)
    },

    resumeStory() {
      this.paused = false
      this.startTimer()
    },

    handleClick(e) {
      const half = window.innerWidth / 2

      if (e.clientX < half) {
        this.previousStory()
      } else {
        this.nextStory()
      }

      if (this.currentIndex === this.stories.length - 1) {
        console.log(this.currentIndex)
        this.currentStory.viewer.viewed = true
      }
    },

    nextStory() {
      if (this.currentIndex < this.stories.length - 1) {
        this.currentIndex++
        this.startTimer()
      } else {
        this.$emit('viewed', this.userId)
        this.$emit('close')
      }

      if (this.comment) {
        this.comment = ''
      }
    },

    previousStory() {
      if (this.currentIndex > 0) {
        this.currentIndex--
        this.startTimer()
      }
    },

    handleKey(e) {
      if (e.key === 'ArrowRight') {
        this.nextStory()
      }

      if (e.key === 'ArrowLeft') {
        this.previousStory()
      }

      if (e.key === 'Escape') {
        this.$emit('close')
      }
    },
  },

  watch: {
    userId() {
      this.currentIndex = 0
    },
  },
}
</script>

<style>
@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.animate-progress {
  animation: progress 5s linear forwards;
}
</style>
