<template>
  <div class="min-h-screen">
    <!-- Examples Navigation Menu -->
    <div class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <Container>
        <nav class="flex overflow-x-auto py-4 gap-6 text-sm">
          <router-link
            to="/examples?category=hero"
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'hero' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Hero
          </router-link>
          <router-link
            to="/examples?category=features"
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'features' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Funcționalități
          </router-link>
          <router-link
            to="/examples?category=call-to-action"
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'call-to-action' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Call To Action
          </router-link>
          <router-link
            to="/examples?category=reviews"
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'reviews' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Recenzii
          </router-link>
          <router-link
            to="/examples?category=pricing"
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'pricing' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Preț
          </router-link>
          <router-link
            to="/examples?category=faqs"
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'faqs' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Întrebări Frecvente
          </router-link>
          <router-link
            to="/examples?category=team"
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'team' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Echipă
          </router-link>
          <router-link
            to="/examples?category=footer"
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activeExample === 'footer' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Subsol
          </router-link>
        </nav>
      </Container>
    </div>

    <!-- Examples Content -->
    <div class="py-16">
      <!-- Hero Examples Section -->
      <section v-if="activeExample === 'hero'">
        <HeroExample1 />
        <div class="relative py-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
          </div>
        </div>
        <HeroExample2 />
      </section>

      <!-- Features Section -->
      <section v-if="activeExample === 'features'">
        <FeatureExample1 />
        <div class="relative py-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
          </div>
        </div>
        <FeatureExample2 />
      </section>

      <!-- Call To Action Examples Section -->
      <section v-if="activeExample === 'call-to-action'">
        <CallToActionExample1 />
        <div class="relative py-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
          </div>
        </div>
        <CallToActionExample2 />
      </section>

      <!-- Reviews Examples Section -->
      <section v-if="activeExample === 'reviews'">
        <ReviewsExample1 />
        <div class="relative py-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
          </div>
        </div>
        <ReviewsExample2 />
        <div class="relative py-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
          </div>
        </div>
        <ReviewsExample3 />
        <div class="relative py-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
          </div>
        </div>
        <ReviewsExample4 />
      </section>

      <!-- Pricing Examples Section -->
      <section v-if="activeExample === 'pricing'">
        <PricingExample1 />
        <div class="relative py-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
          </div>
        </div>
        <PricingExample2 />
        <div class="relative py-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
          </div>
        </div>
        <PricingExample3 />
      </section>

      <!-- FAQs Examples Section -->
      <section v-if="activeExample === 'faqs'">
        <FaqsExample1 />
        <div class="relative py-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
          </div>
        </div>
        <FaqsExample2 />
      </section>

      <!-- Team Examples Section -->
      <section v-if="activeExample === 'team'">
        <TeamExample />
      </section>

      <!-- Footer Examples Section -->
      <section v-if="activeExample === 'footer'">
        <FooterExample />
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Container from '@/components/Container.vue'
import HeroExample1 from '@/components/examples/HeroExample1.vue'
import HeroExample2 from '@/components/examples/HeroExample2.vue'
import FeatureExample1 from '@/components/examples/FeatureExample1.vue'
import FeatureExample2 from '@/components/examples/FeatureExample2.vue'
import CallToActionExample1 from '@/components/examples/CallToActionExample1.vue'
import CallToActionExample2 from '@/components/examples/CallToActionExample2.vue'
import ReviewsExample1 from '@/components/examples/ReviewsExample1.vue'
import ReviewsExample2 from '@/components/examples/ReviewsExample2.vue'
import ReviewsExample3 from '@/components/examples/ReviewsExample3.vue'
import ReviewsExample4 from '@/components/examples/ReviewsExample4.vue'
import PricingExample1 from '@/components/examples/PricingExample1.vue'
import PricingExample2 from '@/components/examples/PricingExample2.vue'
import PricingExample3 from '@/components/examples/PricingExample3.vue'
import FaqsExample1 from '@/components/examples/FaqsExample1.vue'
import FaqsExample2 from '@/components/examples/FaqsExample2.vue'
import TeamExample from '@/components/examples/TeamExample.vue'
import FooterExample from '@/components/examples/FooterExample.vue'

const route = useRoute()
const router = useRouter()

const activeExample = ref(route.query.category || 'hero')

// Watch for route changes
watch(
  () => route.query.category,
  (newCategory) => {
    activeExample.value = newCategory || 'hero'
  }
)

// Ensure initial category is in URL
if (!route.query.category) {
  router.replace({ query: { category: 'hero' } })
}
</script>
