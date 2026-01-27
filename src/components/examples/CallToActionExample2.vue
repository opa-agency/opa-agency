<template>
  <section id="call-to-action" class="border-t border-gray-200 bg-gray-900 py-16 sm:py-24">
    <Container>
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-6">
          <div class="flex max-w-4xl flex-col gap-2">
            <p v-if="eyebrow" class="text-sm font-semibold text-cyan-400">{{ eyebrow }}</p>
            <h2 class="text-3xl font-medium tracking-tight text-white">
              Lorem ipsum dolor sit amet?
            </h2>
          </div>
          <p class="max-w-3xl text-lg text-gray-400">
            Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
          </p>
        </div>
        <div class="flex items-center gap-4">
          <Button variant="solid" color="white">
            Lorem ipsum
          </Button>
          <button class="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
            Dolor sit amet
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../Container.vue'
import Button from '../Button.vue'

defineProps({
  eyebrow: {
    type: String,
    default: null
  }
})
</script>
