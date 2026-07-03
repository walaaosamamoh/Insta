import { defineStore } from 'pinia'
import users from '@/data/users.json'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    users: users,
    currentUser: null,
    error: '',
  }),

  actions: {
    login(email, password) {
      const found = this.users.find((user) => user.email == email)
      if (found) {
        if (found.password == password) {
          this.currentUser = found
          return found
        } else {
          this.error = 'incorrect password'
          return null
        }
      }
      this.error = 'user not found'
      return null
    },
  },
})
