import { defineStore } from 'pinia'
import reelsData from '@/data/reels.json'

export const useReelsStore = defineStore('reelsStore', {
  state: () => ({
    reels: reelsData,
  }),
})
