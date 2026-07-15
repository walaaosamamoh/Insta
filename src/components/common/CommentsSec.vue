<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-end justify-center md:justify-end transition-opacity duration-300"
    @click.self="$emit('close')"
  >
    <div
      class="bg-white w-full md:w-90 md:m-10 md:pb-8 md:rounded-4xl md:h-150 md:shadow-[0_0_30px_rgba(0,0,0,0.16)] md:bottom-6 rounded-t-4xl h-full flex flex-col justify-between animate-slide-up md:animate-fade-in"
    >
      <div
        class="flex justify-center py-3 border-b border-gray-100 cursor-pointer"
        @click="$emit('close')"
      >
        <div class="w-10 h-1 bg-gray-300 rounded-full"></div>
      </div>

      <div class="text-center py-2 font-semibold border-b border-gray-100 text-sm">Comments</div>

      <div class="flex-1 overflow-y-auto p-4 space-y-4">
        <div v-for="comment in getCommentsByPostId(item.id)" :key="comment.id">
          <div class="flex gap-3 text-sm">
            <!-- user pic -->
            <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
              <img :src="comment.user.avatar" class="size-full object-cover" />
            </div>
            <!-- user name and comment -->
            <div class="flex-1">
              <span class="font-semibold block text-xs">{{ comment.user.username }}</span>
              <div class="flex items-center justify-between">
                <p class="text-gray-800 mt-0.5">{{ comment.text }}</p>
                <div class="flex items-center gap-2">
                  <span class="text-xs text-gray-500">{{ comment.stats.likes }} likes</span>
                  <LikeSvg class="w-4 h-4" :item="comment" />
                </div>
              </div>
              <!-- reply -->
              <div class="mt-1">
                <button class="text-gray-700 text-xs font-semibold">Reply</button>
              </div>
            </div>
          </div>
          <!-- view replies -->
          <div
            v-show="!showReplies.includes(comment.id) && comment.replies.length > 0"
            @click="showReplies.push(comment.id)"
            class="flex items-center gap-2 px-8 py-2 cursor-pointer"
          >
            <hr class="w-18 text-gray-300" />
            <span class="text-gray-700 text-xs font-semibold">
              View {{ comment.replies.length }} more replies</span
            >
          </div>
          <div v-if="showReplies.includes(comment.id)" class="ml-20 mt-8">
            <div v-for="reply in comment.replies" :key="reply.id">
              <div class="flex gap-3 text-sm">
                <!-- user pic -->
                <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
                  <img :src="reply.user.avatar" class="size-full object-cover" />
                </div>
                <!-- user name and reply -->
                <div class="flex-1">
                  <span class="font-semibold block text-xs">{{ reply.user.username }}</span>
                  <div class="flex items-center justify-between">
                    <p class="text-gray-800 mt-0.5">{{ reply.text }}</p>
                    <div class="flex items-center gap-2">
                      <span class="text-xs text-gray-500">{{ reply.stats.likes }} likes</span>
                      <LikeSvg class="w-4 h-4" :item="reply" />
                    </div>
                  </div>
                  <!-- reply -->
                  <div>
                    <button class="text-gray-700 text-xs font-semibold">Reply</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              @click="showReplies = showReplies.filter((id) => id !== comment.id)"
              class="flex items-center gap-2 px-8 py-2 cursor-pointer"
            >
              <hr class="w-18 text-gray-300" />
              <span class="text-gray-700 text-xs font-semibold"> Hide replies</span>
            </div>
          </div>
        </div>
      </div>

      <div class="p-3 border-t border-gray-100 flex items-center gap-3 bg-white">
        <profile-nav class="h-8 w-8" />
        <input
          type="text"
          placeholder="Add comment..."
          class="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm outline-none border border-gray-200 focus:border-gray-400"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import profileNav from '../profileNav.vue'
import { useCommentsStore } from '@/stores/comments.js'
import LikeSvg from '@/components/icons/likeSvg.vue'
export default {
  data() {
    return {
      showReplies: [],
    }
  },
  components: {
    profileNav,
    LikeSvg,
  },
  props: ['isOpen', 'item'],
  computed: {
    ...mapState(useCommentsStore, ['getCommentsByPostId']),
  },
  methods: {
    handleBackButton() {
      this.$emit('close')
    },
  },

  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
        window.history.pushState({ sheetOpen: true }, '')
        window.addEventListener('popstate', this.handleBackButton)
      } else {
        window.removeEventListener('popstate', this.handleBackButton)
        if (window.history.state && window.history.state.sheetOpen) {
          window.history.back()
        }
        document.body.style.overflow = ''
      }
    },
  },
  unmounted() {
    window.removeEventListener('popstate', this.handleBackButton)
    document.body.style.overflow = ''
  },
}
</script>

<style scoped>
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-slide-up {
  animation: slideUp 0.3s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>
