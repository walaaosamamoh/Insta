<template>
  <div class="min-h-screen flex flex-col container">
    <router-view :key="$route.fullPath" class="flex-1" />
    <nav
      class="sticky z-20 bg-white bottom-0 flex flex-row justify-around items-center px-6 py-4 border-t border-t-gray-200"
    >
      <div v-for="nav in navigation" :key="nav.title">
        <router-link :to="nav.to" v-slot="{ isExactActive }">
          <component :is="nav.icon" :is-active="isExactActive" />
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import homeSvg from '@/components/icons/homeSvg.vue'
import searchSvg from '@/components/icons/searchSvg.vue'
import reelsSvg from '@/components/icons/reelsSvg.vue'
import ProfileNav from '@/components/profileNav.vue'
import { markRaw } from 'vue'

export default {
  data() {
    return {
      navigation: [
        { title: 'home', icon: markRaw(homeSvg), to: { name: 'home' } },
        { title: 'search', icon: markRaw(searchSvg), to: { name: 'search' } },
        { title: 'reels', icon: markRaw(reelsSvg), to: { name: 'reels' } },
        { title: 'profile', icon: markRaw(ProfileNav), to: { name: 'profile' } },
      ],
    }
  },
}
</script>
