<template>
  <div :class="cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)">
    <slot />
  </div>
</template>

<script setup>
import { cn } from '@/utils/cn'

defineProps({
  className: String
})
</script>
