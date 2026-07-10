import { defineStore } from 'pinia'
import posts from '@/data/posts.json'

export const usePostsStore = defineStore('postsStore', {
  state: () => ({
    posts: posts,
    likesCount: '',
  }),

  getters: {
    getUserPosts: (state) => {
      return (id) => {
        return state.posts.filter((post) => post.user.id == id)
      }
    },

    getUserReposts: (state) => {
      return state.posts.filter((post) => post.viewer.reposted == true)
    },
  },
})
