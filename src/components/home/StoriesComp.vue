<template>
  <div class="flex overflow-auto scroll-bar lg:w-3xl lg:translate-x-[-50%] lg:ml-[50%]">
    <!-- my story -->
    <div
      class="py-4 px-2 flex flex-col items-center gap-2 cursor-pointer"
      @click="openStory(currentUser.id)"
    >
      <div class="relative w-fit">
        <div
          class="rounded-full p-0.5"
          :class="myStories?.length > 0 ? 'bg-green-700' : 'bg-gray-300'"
        >
          <ProfilePic :user="currentUser" class="w-14 h-14 md:w-20 md:h-20 border-2 border-white" />
        </div>
        <plusSvg
          v-if="myStories?.length === 0"
          class="absolute bottom-0 -right-2 w-6 h-6 bg-black text-white rounded-full border-3 border-white"
        />
      </div>
      <span class="text-xs text-gray-800">Your story</span>
    </div>
    <!-- others stories -->
    <div v-for="story in otherUsersStories" :key="story.username">
      <div
        @click="openStory(story.userId)"
        class="py-4 px-2 flex flex-col justify-center items-center gap-2"
      >
        <div
          class="rounded-full p-0.5 cursor-pointer"
          :class="
            story.hasUnviewed
              ? 'bg-linear-to-tr from-yellow-500 via-pink-500 to-purple-600'
              : 'bg-gray-300'
          "
        >
          <div class="rounded-full border-2 border-white overflow-hidden w-14 h-14 md:w-20 md:h-20">
            <img
              :src="story.avatar"
              :alt="story.username"
              class="size-full object-cover"
              @error="$event.target.src = 'https://i.pravatar.cc/150'"
            />
          </div>
        </div>
        <span class="text-xs text-gray-800">{{ story.username }}</span>
      </div>
    </div>
  </div>
  <div>
    <ShowViewer
      v-if="showViewer"
      :user-id="selectedUserId"
      @close="closeViewer"
      @viewed="markStoriesViewed"
    />
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { useStoriesStore } from '@/stores/stories'
import { mapState } from 'pinia'
import ProfilePic from '../common/profilePic.vue'
import PlusSvg from '../icons/plusSvg.vue'
import ShowViewer from '../ShowViewer.vue'

export default {
  data() {
    return {
      selectedUserId: null,
      showViewer: false,
    }
  },
  components: {
    ProfilePic,
    PlusSvg,
    ShowViewer,
  },
  computed: {
    ...mapState(useAuthStore, ['currentUser']),
    ...mapState(useStoriesStore, ['getCurrentUserStory', 'getOtherUsersStories']),

    myStories() {
      return this.currentUser ? this.getCurrentUserStory(this.currentUser.id) : []
    },

    otherUsersStories() {
      return this.getOtherUsersStories(this.currentUser?.id)
    },
  },
  methods: {
    markStoriesViewed(userId) {
      const story = this.otherUsersStories.find((s) => s.userId === userId)

      if (story) {
        story.hasUnviewed = false
      }
    },
    openStory(userId) {
      this.selectedUserId = userId
      this.showViewer = true
    },
    closeViewer() {
      this.showViewer = false
      this.selectedUserId = null
      document.body.style.overflow = ''
    },
  },
}
</script>
<style scoped>
.scroll-bar {
  /* Hides scrollbar for Firefox */
  scrollbar-width: none;

  /* Hides scrollbar for Internet Explorer and legacy Edge */
  -ms-overflow-style: none;
}

/* Hides scrollbar for Chrome, Safari, Opera, and Chromium-Edge */
.scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
