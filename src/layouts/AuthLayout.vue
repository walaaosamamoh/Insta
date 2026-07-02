<template>
  <div class="min-h-screen">
    <router-view :key="$route.fullPath" />
  </div>
</template>
