<template>
  <div class="flex overflow-auto scroll-bar">
    <!-- my story -->
    <div class="py-4 px-2 flex flex-col items-center gap-2">
      <div class="relative w-fit">
        <div
          class="rounded-full p-0.5"
          :class="
            myStories?.length > 0
              ? 'bg-linear-to-tr from-yellow-500 via-pink-500 to-purple-600'
              : 'bg-gray-300'
          "
        >
          <ProfilePic :user="currentUser" class="w-14 h-14 border-2 border-white" />
        </div>
        <plusSvg
          v-if="myStories?.length === 0"
          class="absolute bottom-0 -right-2 w-6 h-6 bg-black text-white rounded-full border-3 border-white"
        />
      </div>
      <span class="text-xs text-gray-800">Your story</span>
    </div>
    <!-- others stories -->
    <div
      v-for="story in otherUsersStories"
      :key="story.username"
      class="py-4 px-2 flex flex-col items-center gap-2"
    >
      <div
        class="rounded-full p-0.5"
        :class="
          story.hasUnviewed
            ? 'bg-linear-to-tr from-yellow-500 via-pink-500 to-purple-600'
            : 'bg-gray-300'
        "
      >
        <div class="rounded-full border-2 border-white overflow-hidden w-14 h-14">
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
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { useStoriesStore } from '@/stores/stories'
import { mapState } from 'pinia'
import ProfilePic from '../common/profilePic.vue'
import PlusSvg from '../icons/plusSvg.vue'

export default {
  components: {
    ProfilePic,
    PlusSvg,
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
