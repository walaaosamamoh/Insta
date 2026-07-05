<template>
  <div class="rounded-full overflow-hidden w-6 h-6">
    <img :src="user?.avatar" alt="Profile" class="size-full object-cover" />
  </div>
</template>

<script>
export default {
  props: ['user'],
}
</script>
