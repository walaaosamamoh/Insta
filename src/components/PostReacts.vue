<template>
  <div>
    <div class="flex items-center gap-3 p-2">
      <div class="flex">
        <div>
          <LikeSvg :item="item" />
        </div>
        <span class="text-sm font-semibold">{{ item.stats.likes }}</span>
      </div>
      <div class="flex">
        <div @click="$emit('openComments', item)">
          <CommentSvg />
        </div>
        <span class="text-sm font-semibold">{{ item.stats.comments }}</span>
      </div>
      <div class="flex">
        <div>
          <RepostSvg :item="item" />
        </div>
        <span class="text-sm font-semibold">{{ item.stats.reposts }}</span>
      </div>
      <div class="flex">
        <div>
          <ShareSvg :item="item" />
        </div>
        <span class="text-sm font-semibold">{{ item.stats.shares }}</span>
      </div>

      <BookmarkSvg :item="item" class="ml-auto" />
    </div>
  </div>
</template>

<script>
import LikeSvg from '@/components/icons/likeSvg.vue'
import CommentSvg from '@/components/icons/commentSvg.vue'
import RepostSvg from '@/components/icons/RepostSvg.vue'
import ShareSvg from '@/components/icons/shareSvg.vue'
import BookmarkSvg from '@/components/icons/bookmarkSvg.vue'
export default {
  props: ['item'],
  components: {
    LikeSvg,
    CommentSvg,
    RepostSvg,
    ShareSvg,
    BookmarkSvg,
  },
}
</script>
