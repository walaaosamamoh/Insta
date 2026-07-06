<template>
  <div class="overflow-y-auto">
    <div v-for="post in posts" :key="post.id">
      <div class="p-2">
        <div class="flex items-center gap-2">
          <ProfilePic :user="post.user" />
          <div class="flex flex-col">
            <div class="flex items-center gap-1">
              <h2 class="font-semibold text-sm">{{ post.user.username }}</h2>
              <VerifiedSvg />
            </div>
            <span class="text-xs text-gray-700">{{ post.location }}</span>
          </div>
        </div>
        <div>
          <Swiper
            :cssMode="true"
            :pagination="true"
            :mousewheel="true"
            :keyboard="true"
            :modules="modules"
            class="mySwiper"
          >
            <SwiperSlide v-for="item in post.media" :key="item.url">
              <div class="h-96 overflow-hidden">
                <img
                  v-if="item.type === 'image'"
                  :src="item.url"
                  :alt="item.type"
                  class="w-full h-full object-cover"
                />

                <video
                  v-else
                  :src="item.url"
                  class="block w-full h-full object-cover"
                  autoplay
                  muted
                  playsinline
                  loop
                  controls
                ></video>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <!-- reaction icons -->
        <div class="flex items-center gap-3 p-2">
          <div class="flex">
            <div>
              <LikeSvg :post />
            </div>
            <span class="text-sm font-semibold">{{ post.stats.likes }}</span>
          </div>
          <div class="flex">
            <div @click="openComments(post)">
              <CommentSvg />
            </div>
            <span class="text-sm font-semibold">{{ post.stats.comments }}</span>
          </div>
          <div class="flex">
            <div>
              <RepostSvg :post />
            </div>
            <span class="text-sm font-semibold">{{ post.stats.reposts }}</span>
          </div>
          <div class="flex">
            <div @click="handleShare(post)">
              <ShareSvg />
            </div>
            <span class="text-sm font-semibold">{{ post.stats.shares }}</span>
          </div>

          <BookmarkSvg :post class="ml-auto" />
        </div>

        <!-- caption and hashtags -->
        <div class="flex items-center flex-wrap gap-2">
          <h2 class="font-semibold text-sm">{{ post.user.username }}</h2>
          <span class="text-sm">{{ post.caption }}</span>
          <div v-if="post.hashtags" class="flex flex-wrap gap-1 text-sm text-blue-600">
            <span v-for="hashtag in post.hashtags" :key="hashtag">#{{ hashtag }} </span>
          </div>
        </div>

        <div>
          <CommentsSec :isOpen />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePostsStore } from '@/stores/posts'
import { mapState } from 'pinia'
import ProfilePic from '../common/profilePic.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

import { Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import LikeSvg from '../icons/likeSvg.vue'
import CommentSvg from '../icons/commentSvg.vue'
import RepostSvg from '../icons/repostSvg.vue'
import ShareSvg from '../icons/shareSvg.vue'
import BookmarkSvg from '../icons/bookmarkSvg.vue'
import VerifiedSvg from '../icons/verifiedSvg.vue'
import CommentsSec from '../common/CommentsSec.vue'

export default {
  data() {
    return {
      modules: [Pagination, Mousewheel, Keyboard],
      liked: false,
      reposted: false,
      isOpen: false,
    }
  },
  components: {
    ProfilePic,
    Swiper,
    SwiperSlide,
    LikeSvg,
    CommentSvg,
    RepostSvg,
    ShareSvg,
    BookmarkSvg,
    VerifiedSvg,
    CommentsSec,
  },
  computed: {
    ...mapState(usePostsStore, ['posts']),
  },
  methods: {
    handleShare(post) {
      navigator.share({
        title: post.caption,
        url: `${window.location.origin}/posts/${post.id}`,
      })
    },
    openComments() {
      this.isOpen = true
    },
  },
  created() {
    console.log('the length of posts is : ', this.posts.length)
  },
}
</script>
<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;
}

.swiper-slide img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet {
  bottom: -50%;
  background: #999;
  opacity: 1;
  margin: 0 6px !important;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
  background: #007bff;
  transform: scale(1.3);
}
</style>
