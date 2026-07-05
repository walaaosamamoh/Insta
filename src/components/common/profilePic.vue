<template>
  <div class="rounded-full overflow-hidden w-6 h-6">
    <img
      :src="user?.avatar || defaultAvatar"
      @error="onImageError"
      alt="Profile"
      class="size-full object-cover"
    />
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      defaultAvatar: 'https://i.pravatar.cc/600?img=8',
    }
  },
  methods: {
    onImageError(event) {
      event.target.src = this.defaultAvatar
    },
  },
}
</script>
