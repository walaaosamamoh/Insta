<template>
  <div class="min-h-screen flex flex-col md:grid md:grid-cols-[80px_1fr]">
    <nav
      class="fixed z-20 bg-white bottom-0 left-0 right-0 flex flex-row justify-around md:flex-col md:gap-8 md:fixed md:left-0 md:top-0 md:w-20 md:h-screen px-6 py-4 border-t border-t-gray-200"
    >
      <div v-for="nav in menu" :key="nav.title">
        <router-link :to="nav.to" v-slot="{ isExactActive }">
          <component :is="nav.icon" :is-active="isExactActive" />
        </router-link>
      </div>
    </nav>
    <div class="flex-1 md:col-start-2 max-w-2xl mx-auto">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
import { menu } from '@/utils/constants'

export default {
  data() {
    return {
      menu,
    }
  },
}
</script>
