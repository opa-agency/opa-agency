<template>
  <div class="min-h-screen">
    <!-- Examples Navigation Menu -->
    <div class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <Container>
        <nav class="flex overflow-x-auto py-4 gap-6 text-sm">
          <button 
            @click="activeExample = 'hero'" 
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'hero' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Hero
          </button>
          <button 
            @click="activeExample = 'features'" 
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'features' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Funcționalități
          </button>
          <button 
            @click="activeExample = 'call-to-action'" 
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'call-to-action' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Call To Action
          </button>
          <button 
            @click="activeExample = 'reviews'" 
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'reviews' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Recenzii
          </button>
          <button 
            @click="activeExample = 'pricing'" 
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'pricing' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Preț
          </button>
          <button 
            @click="activeExample = 'faqs'" 
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'faqs' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Întrebări Frecvente
          </button>
        </nav>
      </Container>
    </div>

    <!-- Examples Content -->
    <div class="py-16">
      <!-- Hero Examples Section -->
      <section v-if="activeExample === 'hero'">
        <HeroExample1 />
        <HeroExample2 />
      </section>

      <!-- Features Section -->
      <section v-if="activeExample === 'features'">
        <FeatureExample1 />
        <FeatureExample2 />
      </section>

      <!-- Call To Action Examples Section -->
      <section v-if="activeExample === 'call-to-action'">
        <CallToActionExample1 />
      </section>

      <!-- Reviews Examples Section -->
      <section v-if="activeExample === 'reviews'">
        <ReviewsExample1 />
      </section>

      <!-- Pricing Examples Section -->
      <section v-if="activeExample === 'pricing'">
        <PricingExample1 />
      </section>

      <!-- FAQs Examples Section -->
      <section v-if="activeExample === 'faqs'">
        <FaqsExample1 />
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Container from '../components/Container.vue'
import HeroExample1 from '../components/examples/HeroExample1.vue'
import HeroExample2 from '../components/examples/HeroExample2.vue'
import FeatureExample1 from '../components/examples/FeatureExample1.vue'
import FeatureExample2 from '../components/examples/FeatureExample2.vue'
import CallToActionExample1 from '../components/examples/CallToActionExample1.vue'
import ReviewsExample1 from '../components/examples/ReviewsExample1.vue'
import PricingExample1 from '../components/examples/PricingExample1.vue'
import FaqsExample1 from '../components/examples/FaqsExample1.vue'

const activeExample = ref('hero')
</script>
