<template>
  <div>
    <div v-for="post in getUserPosts(id)" :key="post.id" class="h-50 md:h-96">
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
    ...mapState(usePostsStore, ['getUserPosts']),
  },
}
</script>
