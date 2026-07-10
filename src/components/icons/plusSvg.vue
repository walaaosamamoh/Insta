<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-6"
    @click="openGallery"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
  <input type="file" class="hidden" ref="fileInput" />
</template>

<script>
export default {
  methods: {
    openGallery() {
      this.$refs.fileInput.click()
    },
  },
}
</script>
