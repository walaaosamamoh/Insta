<template>
  <div class="h-screen flex flex-col justify-around max-w-xl mx-auto">
    <div class="flex justify-center items-center mt-8">
      <img src="/src/assets/images/logo.png" alt="instagram-logo" class="w-14 h-14 object-cover" />
    </div>

    <div>
      <form @submit.prevent="Login" class="mx-6 flex flex-col gap-4">
        <div class="relative">
          <input
            v-model="user.email"
            id="email"
            type="email"
            placeholder=" "
            class="peer w-full rounded-xl border border-gray-300 px-3 pt-6 pb-2 focus:border-blue-500 focus:outline-none"
          />

          <label
            for="email"
            class="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm"
          >
            Email address
          </label>
        </div>
        <div class="relative">
          <input
            v-model="user.password"
            id="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder=" "
            class="peer w-full rounded-xl border border-gray-300 px-3 pt-6 pb-2 focus:border-blue-500 focus:outline-none"
          />

          <label
            for="password"
            class="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm"
          >
            Password
          </label>
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <svg
              v-if="!showPassword"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </button>
        </div>
        <button type="submit" class="bg-blue-600 text-white rounded-4xl p-2.5">Log in</button>
        <div v-if="error" class="text-sm text-red-600 text-center">{{ error }}</div>
      </form>
    </div>

    <div class="p-6">
      <button class="w-full text-blue-600 border border-blue-600 rounded-4xl p-2.5">
        Create new account
      </button>
      <div class="mt-2 mx-auto flex justify-center items-center gap-1">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="size-4"
          stroke="#0467DF"
        >
          <title>Meta</title>
          <path
            d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
          />
        </svg>
        <span class="text-gray-800">Meta</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      showPassword: false,
      user: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapState(useAuthStore, ['error']),
  },
  methods: {
    ...mapActions(useAuthStore, ['login']),
    Login() {
      const user = this.login(this.user.email, this.user.password)
      console.log(user)
      if (user) {
        this.$router.push({ name: 'home' })
      }
    },
  },
}
</script>
