<template>
  <div class="grid grid-cols-3 gap-0.5">
    <div v-for="post in getUserReposts" :key="post.id" class="h-50 md:h-96">
      <img :src="post.media[0].url" :alt="post.caption" class="h-full object-cover" />
    </div>
  </div>
</template>

<script>
import { usePostsStore } from '@/stores/posts'
import { mapState } from 'pinia'

export default {
  props: ['id'],
  computed: {
    ...mapState(usePostsStore, ['getUserReposts']),
  },
}
</script>
