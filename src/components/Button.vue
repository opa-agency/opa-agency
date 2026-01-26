<template>
  <component
    :is="is"
    :href="href"
    :class="buttonClasses"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { cn } from '@/utils/cn'

const props = defineProps({
  href: String,
  variant: {
    type: String,
    default: 'solid'
  },
  color: {
    type: String,
    default: 'gray'
  },
  className: String
})

const baseStyles = {
  solid: 'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold transition-colors',
  outline: 'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm transition-colors'
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    white: 'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80'
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80'
  }
}

const is = computed(() => props.href ? 'a' : 'button')

const buttonClasses = computed(() => {
  return cn(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    props.className
  )
})
</script>
