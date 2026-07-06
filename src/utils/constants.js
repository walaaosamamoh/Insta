import { markRaw } from 'vue'
import homeSvg from '@/components/icons/homeSvg.vue'
import searchSvg from '@/components/icons/searchSvg.vue'
import reelsSvg from '@/components/icons/reelsSvg.vue'
import ProfileNav from '@/components/profileNav.vue'
export const menu = [
  { title: 'home', icon: markRaw(homeSvg), to: { name: 'home' } },
  { title: 'search', icon: markRaw(searchSvg), to: { name: 'search' } },
  { title: 'reels', icon: markRaw(reelsSvg), to: { name: 'reels' } },
  { title: 'profile', icon: markRaw(ProfileNav), to: { name: 'profile' } },
]
