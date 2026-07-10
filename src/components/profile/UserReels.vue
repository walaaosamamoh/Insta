<template>
  <div class="grid grid-cols-3 gap-0.5">
    <div v-for="reel in getUserReels(id)" :key="reel.id" class="h-50 md:h-96">
      <img :src="reel.video" :alt="reel.caption" class="h-full object-cover" />
    </div>
  </div>
</template>

<script>
import { useReelsStore } from '@/stores/reels'
import { mapState } from 'pinia'

export default {
  props: ['id'],
  computed: {
    ...mapState(useReelsStore, ['getUserReels']),
  },
}
</script>
