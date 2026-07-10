<template>
  <div>
    <!-- header -->
    <div class="header p-2 flex justify-between items-center">
      <PlusSvg />
      <div class="flex justify-center items-center gap-2">
        <h1 class="font-bold text-2xl italic">{{ currentUser.username }}</h1>
        <VerifiedSvg v-show="currentUser.verified" />
      </div>
      <MenubarSvg />
    </div>

    <!-- user info -->
    <div class="flex items-center gap-8 p-6">
      <div class="relative">
        <profile-nav class="w-20 h-20 md:w-40 md:h-40" />
      </div>
      <div class="flex-1">
        <h2 class="font-semibold">{{ currentUser.displayName }}</h2>
        <div class="mt-2 flex justify-between items-center">
          <div class="flex flex-col md:flex-row md:gap-1 md:justify-center md:items-center">
            <span class="font-semibold">{{ currentUser.posts }}</span>
            <span class="text-sm text-gray-600">posts</span>
          </div>
          <div class="flex flex-col md:flex-row md:gap-1 md:justify-center md:items-center">
            <span class="font-semibold">{{ currentUser.followers }}</span>
            <span class="text-sm text-gray-600">followers</span>
          </div>
          <div class="flex flex-col md:flex-row md:gap-1 md:justify-center md:items-center">
            <span class="font-semibold">{{ currentUser.following }}</span>
            <span class="text-sm text-gray-600">following</span>
          </div>
        </div>
      </div>
    </div>

    <!-- bio -->
    <div class="px-6 text-sm md:text-center md:-mt-10 md:ml-10">
      {{ currentUser.bio }}
    </div>

    <!-- tabs -->
    <div>
      <div class="flex justify-around items-center border-b border-gray-200 mt-8 md:mt-16">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.component"
          class="flex-1 flex justify-center py-3 cursor-pointer relative transition-colors duration-200"
          :class="activeTab === tab.component ? 'text-black' : 'text-gray-400'"
        >
          <component :is="tab.icon"></component>
          <div
            v-if="activeTab === tab.component"
            class="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
          ></div>
        </button>
      </div>
      <div>
        <keep-alive>
          <component
            :is="activeTab"
            :id="currentUser.id"
            class="grid grid-cols-3 gap-0.5 lg:grid-cols-4 lg:min-w-4xl lg:absolute lg:left-[50%] lg:translate-x-[-50%] lg:rounded-md lg:overflow-hidden"
          />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import GridSvg from '@/components/icons/GridSvg.vue'
import MenubarSvg from '@/components/icons/MenubarSvg.vue'
import PlusSvg from '@/components/icons/plusSvg.vue'
import ReelsSvg from '@/components/icons/reelsSvg.vue'
import RepostSvg from '@/components/icons/RepostSvg.vue'
import TagSvg from '@/components/icons/TagSvg.vue'
import VerifiedSvg from '@/components/icons/verifiedSvg.vue'
import UserPosts from '@/components/profile/UserPosts.vue'
import UserReels from '@/components/profile/UserReels.vue'
import UserReposts from '@/components/profile/UserReposts.vue'
import UserTagged from '@/components/profile/UserTagged.vue'
import profileNav from '@/components/profileNav.vue'
import { useAuthStore } from '@/stores/auth'
import { mapState } from 'pinia'

export default {
  components: {
    PlusSvg,
    MenubarSvg,
    profileNav,
    VerifiedSvg,
    ReelsSvg,
    RepostSvg,
    GridSvg,
    TagSvg,
    UserPosts,
    UserReels,
    UserReposts,
    UserTagged,
  },
  data() {
    return {
      activeTab: 'UserPosts',
      tabs: [
        { id: 1, icon: 'GridSvg', component: 'UserPosts' },
        { id: 2, icon: 'ReelsSvg', component: 'UserReels' },
        { id: 3, icon: 'RepostSvg', component: 'UserReposts' },
        { id: 4, icon: 'TagSvg', component: 'UserTagged' },
      ],
    }
  },
  computed: {
    ...mapState(useAuthStore, ['currentUser']),
  },
}
</script>

<style></style>
