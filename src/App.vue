<template>
  <div>
    <component :is="layout" />
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
export default {
  computed: {
    layout() {
      const layouts = {
        default: MainLayout,
        auth: AuthLayout,
      }
      const selected = this.$route.meta.layout || 'default'
      return layouts[selected]
    },
  },
}
</script>
