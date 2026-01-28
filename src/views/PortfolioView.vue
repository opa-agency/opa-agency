<template>
  <div class="min-h-screen bg-white">
    <!-- Portfolio Navigation Menu -->
    <div class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <Container>
        <nav class="flex overflow-x-auto py-4 gap-6 text-sm">
          <router-link
            to="/portofoliu?category=multipage"
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activePortfolio === 'multipage' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Portofoliu Multipagină
          </router-link>
        </nav>
      </Container>
    </div>

    <!-- Portfolio Examples -->
    <section class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <!-- Example 1 - Multipage Portfolio -->
        <div v-if="activePortfolio === 'multipage'" class="mb-16">
          <!-- Title and Description -->
          <div class="mb-8 max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Portofoliu Multipagină - Dezvoltator Software</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Portofoliu pentru dezvoltator software cu newsletter, mod întunecat/luminos, traduceri română/engleză, secțiuni pentru articole si alte pagini de prezentare.
            </p>
          </div>

          <!-- Control Buttons -->
          <div class="flex flex-wrap gap-3 mb-8 justify-center">
            <button
              @click="openInNewTab('https://multipage-portofolio-1.presentationlab.org/#/')"
              class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
            >
              Live Preview
            </button>
          </div>

          <!-- Desktop View -->
          <div class="w-full flex-col items-center mb-12 hidden md:flex">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
            <PortfolioFrame 
              :src="'https://multipage-portofolio-1.presentationlab.org/#/'"
              title="Vizualizare Desktop"
              view-mode="desktop"
            />
          </div>
          
          <!-- Mobile View -->
          <div class="w-full flex flex-col items-center">
            <h3 class="text-lg font-semibold text-gray-700 mb-4 md:hidden">Vizualizare Mobil</h3>
            <PortfolioFrame 
              :src="'https://multipage-portofolio-1.presentationlab.org/#/'"
              title="Online Presance Agency"
              view-mode="mobile"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Container from '@/components/Container.vue'
import PortfolioFrame from '@/components/PortfolioFrame.vue'

const route = useRoute()
const activePortfolio = ref('multipage')

watch(
  () => route.query.category,
  (newCategory) => {
    activePortfolio.value = newCategory || 'multipage'
  },
  { immediate: true }
)

const openInNewTab = (url) => {
  window.open(url, '_blank')
}
</script>
