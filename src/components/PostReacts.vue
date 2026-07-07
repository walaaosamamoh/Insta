<template>
  <div>
    <div class="flex items-center gap-3 p-2">
      <div class="flex">
        <div>
          <LikeSvg :post="post" />
        </div>
        <span class="text-sm font-semibold">{{ post.stats.likes }}</span>
      </div>
      <div class="flex">
        <div @click="$emit('openComments', post)">
          <CommentSvg />
        </div>
        <span class="text-sm font-semibold">{{ post.stats.comments }}</span>
      </div>
      <div class="flex">
        <div>
          <RepostSvg :post="post" />
        </div>
        <span class="text-sm font-semibold">{{ post.stats.reposts }}</span>
      </div>
      <div class="flex">
        <div>
          <ShareSvg :post="post" />
        </div>
        <span class="text-sm font-semibold">{{ post.stats.shares }}</span>
      </div>

      <BookmarkSvg :post="post" class="ml-auto" />
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
  props: ['post'],
  components: {
    LikeSvg,
    CommentSvg,
    RepostSvg,
    ShareSvg,
    BookmarkSvg,
  },
}
</script>
