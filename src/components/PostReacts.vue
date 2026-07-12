<template>
  <div class="flex items-center gap-3 p-2" :class="reels ? 'flex-col' : ''">
    <div class="flex" :class="reels ? 'flex-col justify-center items-center' : ''">
      <div>
        <LikeSvg :item="item" />
      </div>
      <span class="text-sm font-semibold">{{ item.stats.likes }}</span>
    </div>
    <div class="flex" :class="reels ? 'flex-col justify-center items-center' : ''">
      <div @click="$emit('openComments', item)">
        <CommentSvg />
      </div>
      <span class="text-sm font-semibold">{{ item.stats.comments }}</span>
    </div>
    <div class="flex" :class="reels ? 'flex-col justify-center items-center' : ''">
      <div>
        <repost-icon :item="item" />
      </div>
      <span class="text-sm font-semibold">{{ item.stats.reposts }}</span>
    </div>
    <div class="flex" :class="reels ? 'flex-col justify-center items-center' : ''">
      <div>
        <ShareSvg :item="item" />
      </div>
      <span class="text-sm font-semibold">{{ item.stats.shares }}</span>
    </div>
    <div :class="reels ? 'flex-col justify-center items-center' : 'ml-auto'">
      <div>
        <BookmarkSvg :item="item" :reels="reels" />
      </div>
      <span v-show="reels" class="text-sm font-semibold">{{ item.stats.bookmarks }}</span>
    </div>
  </div>
</template>

<script>
import LikeSvg from '@/components/icons/likeSvg.vue'
import CommentSvg from '@/components/icons/commentSvg.vue'
import ShareSvg from '@/components/icons/shareSvg.vue'
import BookmarkSvg from '@/components/icons/bookmarkSvg.vue'
import RepostIcon from './icons/RepostIcon.vue'
export default {
  props: ['item', 'reels'],
  components: {
    LikeSvg,
    CommentSvg,
    ShareSvg,
    BookmarkSvg,
    RepostIcon,
  },
}
</script>
