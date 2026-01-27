<template>
  <RouterLink
    v-for="(link, index) in links"
    :key="link.label"
    :to="link.to"
    class="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
    @mouseenter="handleMouseEnter(index)"
    @mouseleave="handleMouseLeave"
  >
    <Transition>
      <span
        v-if="hoveredIndex === index"
        class="absolute inset-0 rounded-lg bg-gray-100"
      />
    </Transition>
    <span class="relative z-10">{{ link.label }}</span>
  </RouterLink>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQs', to: '/faqs' }
]

const hoveredIndex = ref(null)
let timeoutRef = null

function handleMouseEnter(index) {
  if (timeoutRef) {
    clearTimeout(timeoutRef)
  }
  hoveredIndex.value = index
}

function handleMouseLeave() {
  timeoutRef = setTimeout(() => {
    hoveredIndex.value = null
  }, 200)
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.15s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
