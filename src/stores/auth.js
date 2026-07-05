import { defineStore } from 'pinia'
import users from '@/data/users.json'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    users: users,
    currentUser: JSON.parse(localStorage.getItem('user')) || null,
    error: '',
  }),

  actions: {
    login(email, password) {
      const found = this.users.find((user) => user.email == email)
      if (found) {
        if (found.password == password) {
          localStorage.setItem('user', JSON.stringify(found))
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
