<template>
  <div
    class="h-[calc(100vh-48px)] md:h-screen md:my-6 md:rounded-2xl overflow-hidden flex-1 w-full bg-black"
  >
    <swiper
      :direction="'vertical'"
      :slides-per-view="1"
      :mousewheel="true"
      :modules="modules"
      class="mySwiper h-full w-full"
    >
      <swiper-slide v-for="reel in reels" :key="reel.id">
        <div class="w-full h-full relative">
          <video
            :src="reel.video"
            class="block w-full h-full object-cover"
            autoplay
            muted
            playsinline
            loop
            controls
          ></video>

          <div class="absolute bottom-16 left-4 z-10 text-white">
            <div class="flex items-center gap-2">
              <ProfilePic :user="reel.user" />
              <div class="flex flex-col">
                <div class="flex items-center gap-1">
                  <h2 class="font-semibold text-sm">{{ reel.user.username }}</h2>
                  <VerifiedSvg v-show="reel.user.verified" />
                </div>
                <span class="text-xs text-gray-300 mt-0.5 flex items-center"
                  ><music-svg class="mr-1" />{{ reel.music.artist }} . {{ reel.music.title }}</span
                >
              </div>
            </div>
            <div class="text-sm mt-4">
              {{ reel.caption }}
            </div>
          </div>

          <div class="absolute right-2 bottom-16 z-10 text-white">
            <post-reacts :item="reel" :reels="true" @openComments="openComments" />
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div>
      <CommentsSec :item="selectedPost" :isOpen="isOpen" @close="isOpen = false" />
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
// import { Pagination } from 'swiper/modules'

import { useReelsStore } from '@/stores/reels.js'
import { mapState } from 'pinia'
import ProfilePic from '@/components/common/profilePic.vue'
import VerifiedSvg from '@/components/icons/verifiedSvg.vue'
import MusicSvg from '@/components/icons/musicSvg.vue'
import PostReacts from '@/components/PostReacts.vue'
import CommentsSec from '@/components/common/CommentsSec.vue'
import { Mousewheel } from 'swiper/modules'
// import 'swiper/css/mousewheel'

export default {
  data() {
    return {
      isOpen: false,
      selectedPost: null,
      modules: [Mousewheel],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ProfilePic,
    VerifiedSvg,
    MusicSvg,
    PostReacts,
    CommentsSec,
  },
  computed: {
    ...mapState(useReelsStore, ['reels']),
  },
  methods: {
    openComments(reel) {
      this.isOpen = true
      this.selectedPost = reel
      console.log(`The value received is : ${this.selectedPost}`)
    },
  },
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
