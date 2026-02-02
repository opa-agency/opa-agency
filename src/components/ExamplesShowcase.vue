<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-bl from-slate-950 via-purple-900 to-cyan-900">
    <!-- Pattern overlay -->
    <div class="absolute inset-0 opacity-100">
      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <Container class="relative z-10 py-16">
      <div class="space-y-16">
        
        <!-- Loop through examples -->
        <div v-for="(example, index) in examples" :key="index" class="mb-16">
          <div class="w-full flex-col items-center mb-12 hidden md:flex">
            <PortfolioFrame 
              :src="example.url"
              :title="example.title"
              view-mode="desktop"
            />
          </div>
          <div class="w-full flex flex-col items-center md:hidden">
            <PortfolioFrame 
              :src="example.url"
              :title="example.title"
              view-mode="mobile"
            />
          </div>
        </div>

        <!-- Back Button -->
        <div v-if="backLink" class="flex justify-center mt-12">
          <RouterLink
            :to="backLink.url"
            class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            {{ backLink.text }}
          </RouterLink>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Container from '@/components/Container.vue'
import PortfolioFrame from '@/components/PortfolioFrame.vue'

const props = defineProps({
  examples: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(item => item.url && item.title)
    }
  },
  backLink: {
    type: Object,
    default: null,
    validator: (value) => {
      return !value || (value.url && value.text)
    }
  }
})
</script>
