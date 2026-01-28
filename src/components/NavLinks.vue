<template>
  <RouterLink
    v-for="(link, index) in links"
    :key="link.label"
    :to="link.to"
    :class="[
      'relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm transition-colors delay-150 hover:text-white hover:delay-0',
      isActive(link.to) ? 'text-white font-semibold' : 'text-gray-200'
    ]"
    @mouseenter="handleMouseEnter(index)"
    @mouseleave="handleMouseLeave"
  >
    <Transition>
      <span
        v-if="hoveredIndex === index"
        class="absolute inset-0 rounded-lg bg-white/10"
      />
    </Transition>
    <span class="relative z-10">{{ link.label }}</span>
  </RouterLink>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const links = [
  { label: 'Acasa', to: '/' },
  { label: 'Portofoliu', to: '/portofoliu' },
  { label: 'Exemple', to: '/examples' }
]

const route = useRoute()

const hoveredIndex = ref(null)
let timeoutRef = null

const isActive = (to) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

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
