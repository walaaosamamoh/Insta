<template>
  <div class="min-h-screen flex flex-col container">
    <router-view :key="$route.fullPath" class="flex-1" />
    <nav
      class="sticky z-20 bg-white inset-0 flex flex-row justify-around items-center px-6 py-4 border-t border-t-gray-200"
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
