<template>
  <div class="rounded-full overflow-hidden w-6 h-6" :class="isActive ? 'border-2' : ''">
    <img :src="currentUser?.avatar" alt="Profile" class="size-full object-cover" />
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { mapState } from 'pinia'

export default {
  props: ['isActive'],
  computed: {
    ...mapState(useAuthStore, ['currentUser']),
  },
}
</script>
