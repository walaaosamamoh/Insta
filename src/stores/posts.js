import { defineStore } from 'pinia'
import posts from '@/data/posts.json'

export const usePostsStore = defineStore('postsStore', {
  state: () => ({
    posts: posts,
    likesCount: '',
  }),

  getters: {
    getLikesCount: (state) => {
      return (id) => {
        const post = state.posts.find((post) => post.id == id)
        state.likesCount = post.stats.likes
        return post.stats.likes
      }
    },
  },
})
