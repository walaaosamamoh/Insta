<template>
  <div class="min-h-screen flex flex-col md:grid md:grid-cols-[80px_1fr]">
    <div class="flex-1 min-h-0 md:col-start-2 md:h-screen">
      <div class="md:max-w-xl mx-auto h-full relative">
        <router-view :key="$route.fullPath" />
      </div>
    </div>
    <nav
      class="sticky inset-0 z-20 h-14 bg-white flex flex-row justify-around md:flex-col md:gap-8 md:fixed md:left-0 md:top-0 md:w-20 md:h-screen px-6 py-4 border-t border-t-gray-200"
    >
      <div v-for="nav in menu" :key="nav.title">
        <router-link :to="nav.to" v-slot="{ isExactActive }">
          <component :is="nav.icon" :is-active="isExactActive" />
        </router-link>
      </div>
    </nav>
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
