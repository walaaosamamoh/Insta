<template>
  <div>
    <!-- Overlay -->
    <div
      v-if="modelValue"
      class="fixed inset-0 bg-black/50"
      @click="$emit('update:modelValue', false)"
    />

    <!-- Sheet -->
    <div
      class="fixed left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-xl transform transition-transform duration-300"
      :class="modelValue ? 'translate-y-0' : 'translate-y-full'"
    >
      <!-- Handle -->
      <div class="w-full flex justify-center py-2">
        <div class="w-12 h-1.5 bg-gray-300 rounded-full"></div>
      </div>

      <!-- Content -->
      <div class="p-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
})

defineEmits(['update:isOpen'])
</script>
