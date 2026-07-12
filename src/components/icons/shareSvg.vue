<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-6 -rotate-z-26 cursor-pointer"
    @click="handleShare(item)"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
    />
  </svg>
</template>
<script>
export default {
  props: ['item'],
  emits: ['openComments'],
  methods: {
    handleShare(item) {
      navigator.share({
        title: item.caption,
        url: `${window.location.origin}/posts/${item.id}`,
      })
    },
  },
}
</script>
