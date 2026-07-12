import { defineStore } from 'pinia'
import reelsData from '@/data/reels.json'

export const useReelsStore = defineStore('reelsStore', {
  state: () => ({
    reels: reelsData,
  }),

  getters: {
    getUserReels: (state) => {
      return (id) => {
        return state.reels.filter((reel) => reel.user.id == id)
      }
    },
  },
})
