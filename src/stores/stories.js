import { defineStore } from 'pinia'
import stories from '@/data/stories.json'

export const useStoriesStore = defineStore('storiesStore', {
  state: () => ({
    stories: stories,
  }),

  getters: {
    getCurrentUserStory: (state) => {
      return (userId) => {
        const myStory = state.stories.filter((story) => story.user.id == userId)
        console.log(myStory)
        return myStory
      }
    },

    getOtherUsersStories: (state) => {
      return (currentUserId) => {
        const usersMap = {}

        state.stories.forEach((story) => {
          if (story.user.id !== currentUserId) {
            const userId = story.user.id
            if (!usersMap[userId]) {
              usersMap[userId] = {
                username: story.user.username,
                avatar: story.user.avatar,
                hasUnviewed: story.viewer.viewed === false,
              }
            } else if (story.viewer.viewed === false) {
              usersMap[userId].hasUnviewed = true
            }
          }
        })

        console.log(Object.values(usersMap))
        return Object.values(usersMap)
      }
    },
  },
})
