<template>
  <div>
    <!-- header -->
    <div class="header p-2 flex justify-between items-center">
      <PlusSvg />
      <h1 class="font-bold text-2xl italic">Instagram</h1>
      <LikeSvg />
    </div>

    <!-- stories -->
    <StoriesComp />

    <!-- Posts -->
    <PostsComp />
  </div>
</template>

<script>
import PostsComp from '@/components/home/PostsComp.vue'
import StoriesComp from '@/components/home/StoriesComp.vue'
import LikeSvg from '@/components/icons/likeSvg.vue'
import PlusSvg from '@/components/icons/plusSvg.vue'

export default {
  components: {
    LikeSvg,
    PlusSvg,
    StoriesComp,
    PostsComp,
  },
}
</script>

<style lang="scss" scoped></style>
