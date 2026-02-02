<template>
  <template v-for="(link, index) in links" :key="link.label">
    <!-- Dropdown for Portofoliu -->
    <div 
      v-if="link.dropdown"
      class="relative"
      @mouseenter="handleDropdownEnter(index)"
      @mouseleave="handleDropdownLeave"
    >
      <button
        :class="[
          'relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm transition-colors delay-150 hover:text-white hover:delay-0',
          isDropdownActive(link.dropdown) ? 'text-white font-semibold' : 'text-gray-200'
        ]"
      >
        <Transition>
          <span
            v-if="hoveredIndex === index"
            class="absolute inset-0 rounded-lg bg-white/10"
          />
        </Transition>
        <span class="relative z-10 flex items-center gap-1">
          {{ link.label }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <!-- Dropdown Menu -->
      <Transition name="dropdown">
        <div 
          v-if="dropdownOpen === index"
          class="absolute top-full left-0 mt-2 w-56 rounded-lg bg-gray-900/95 backdrop-blur-sm shadow-xl border border-white/10 py-2 z-50"
        >
          <RouterLink
            v-for="item in link.dropdown"
            :key="item.label"
            :to="item.to"
            class="block px-4 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </Transition>
    </div>

    <!-- Regular Link -->
    <RouterLink
      v-else
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
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const links = [
  { label: 'Acasa', to: '/' },
  { label: 'Despre Noi', to: '/despre-noi' },
  { label: 'Servicii', to: '/servicii' },
  { 
    label: 'Portofoliu',
    dropdown: [
      { label: 'One Page Examples', to: '/servicii/one-page-website/exemple' },
      { label: 'Multi Page Examples', to: '/servicii/multi-page-website/exemple' }
    ]
  },
  { label: 'Contact', to: '/contact' }
]

const route = useRoute()

const hoveredIndex = ref(null)
const dropdownOpen = ref(null)
let timeoutRef = null
let dropdownTimeoutRef = null

const isActive = (to) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

const isDropdownActive = (dropdownItems) => {
  return dropdownItems.some(item => route.path.startsWith(item.to))
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

function handleDropdownEnter(index) {
  if (dropdownTimeoutRef) {
    clearTimeout(dropdownTimeoutRef)
  }
  hoveredIndex.value = index
  dropdownOpen.value = index
}

function handleDropdownLeave() {
  dropdownTimeoutRef = setTimeout(() => {
    dropdownOpen.value = null
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

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

