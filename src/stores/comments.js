import { defineStore } from 'pinia'
import commentsData from '@/data/comments.json'

export const useCommentsStore = defineStore('commentsStore', {
  state: () => ({
    comments: commentsData,
  }),

  getters: {
    getCommentsByPostId: (state) => {
      return (id) => {
        return state.comments.filter((comment) => comment.postId == id)
      }
    },
  },
})
