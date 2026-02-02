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
            Site-uri Multipagină
          </router-link>
          <router-link
            to="/portofoliu?category=onepage"
            :class="[
              'whitespace-nowrap font-medium transition-colors',
              activePortfolio === 'onepage' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-900 hover:text-cyan-600'
            ]"
          >
            Site-uri One-Page
          </router-link>
        </nav>
      </Container>
    </div>

    <!-- Portfolio Examples -->
    <section class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <!-- Multipage Examples -->
        <div v-if="activePortfolio === 'multipage'" class="space-y-16">
          <!-- Example 1 - Portofoliu -->
          <div class="mb-16">
            <div class="mb-8 max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Portofoliu Multipagină - Dezvoltator Software</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                Portofoliu pentru dezvoltator software cu newsletter, mod întunecat/luminos, traduceri română/engleză, secțiuni pentru articole si alte pagini de prezentare.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                @click="openInNewTab('https://multipage-portofolio-1.presentationlab.org/#/')"
                class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
              >
                Live Preview
              </button>
            </div>
            <div class="w-full flex-col items-center mb-12 hidden md:flex">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
              <PortfolioFrame 
                :src="'https://multipage-portofolio-1.presentationlab.org/#/'"
                title="Vizualizare Desktop"
                view-mode="desktop"
              />
            </div>
            <div class="w-full flex flex-col items-center md:hidden">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Mobil</h3>
              <PortfolioFrame 
                :src="'https://multipage-portofolio-1.presentationlab.org/#/'"
                title="Portofoliu"
                view-mode="mobile"
              />
            </div>
          </div>

          <!-- Example 2 - Cursuri -->
          <div class="mb-16">
            <div class="mb-8 max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Platformă Cursuri Online</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                Platformă pentru cursuri online cu mod întunecat/luminos, newsletter, secțiuni pentru cursuri și articole educaționale.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                @click="openInNewTab('https://multipage-courses-1.presentationlab.org/#/')"
                class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
              >
                Live Preview
              </button>
            </div>
            <div class="w-full flex-col items-center mb-12 hidden md:flex">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
              <PortfolioFrame 
                :src="'https://multipage-courses-1.presentationlab.org/#/'"
                title="Vizualizare Desktop"
                view-mode="desktop"
              />
            </div>
            <div class="w-full flex flex-col items-center md:hidden">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Mobil</h3>
              <PortfolioFrame 
                :src="'https://multipage-courses-1.presentationlab.org/#/'"
                title="Cursuri Online"
                view-mode="mobile"
              />
            </div>
          </div>

          <!-- Example 3 - Documentație 1 -->
          <div class="mb-16">
            <div class="mb-8 max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Site Documentație - Variantă 1</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                Site de documentație tehnică cu căutare, navigare pe secțiuni, mod întunecat/luminos și export PDF.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                @click="openInNewTab('https://multipage-docs-1.presentationlab.org/#/')"
                class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
              >
                Live Preview
              </button>
            </div>
            <div class="w-full flex-col items-center mb-12 hidden md:flex">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
              <PortfolioFrame 
                :src="'https://multipage-docs-1.presentationlab.org/#/'"
                title="Vizualizare Desktop"
                view-mode="desktop"
              />
            </div>
            <div class="w-full flex flex-col items-center md:hidden">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Mobil</h3>
              <PortfolioFrame 
                :src="'https://multipage-docs-1.presentationlab.org/#/'"
                title="Documentație"
                view-mode="mobile"
              />
            </div>
          </div>

          <!-- Example 4 - Documentație 2 -->
          <div class="mb-16">
            <div class="mb-8 max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Site Documentație - Variantă 2</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                Site de documentație cu design alternativ, navigare îmbunătățită și funcționalități avansate de căutare.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                @click="openInNewTab('https://multipage-docs-2.presentationlab.org/#/')"
                class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
              >
                Live Preview
              </button>
            </div>
            <div class="w-full flex-col items-center mb-12 hidden md:flex">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
              <PortfolioFrame 
                :src="'https://multipage-docs-2.presentationlab.org/#/'"
                title="Vizualizare Desktop"
                view-mode="desktop"
              />
            </div>
            <div class="w-full flex flex-col items-center md:hidden">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Mobil</h3>
              <PortfolioFrame 
                :src="'https://multipage-docs-2.presentationlab.org/#/'"
                title="Documentație"
                view-mode="mobile"
              />
            </div>
          </div>

          <!-- Example 5 - Servicii -->
          <div class="mb-16">
            <div class="mb-8 max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Site Servicii Multipagină</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                Site pentru prezentarea serviciilor companiei cu secțiuni dedicate, portofoliu și formular de contact.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                @click="openInNewTab('https://multipage-services-1.presentationlab.org/#/')"
                class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
              >
                Live Preview
              </button>
            </div>
            <div class="w-full flex-col items-center mb-12 hidden md:flex">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
              <PortfolioFrame 
                :src="'https://multipage-services-1.presentationlab.org/#/'"
                title="Vizualizare Desktop"
                view-mode="desktop"
              />
            </div>
            <div class="w-full flex flex-col items-center md:hidden">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Mobil</h3>
              <PortfolioFrame 
                :src="'https://multipage-services-1.presentationlab.org/#/'"
                title="Servicii"
                view-mode="mobile"
              />
            </div>
          </div>

          <!-- Example 6 - Studio -->
          <div class="mb-16">
            <div class="mb-8 max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Site Studio Creativ</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                Site pentru studio creativ cu galerie de proiecte, despre echipă, servicii și formular de contact.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                @click="openInNewTab('https://multipage-studio-1.presentationlab.org/#/')"
                class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
              >
                Live Preview
              </button>
            </div>
            <div class="w-full flex-col items-center mb-12 hidden md:flex">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
              <PortfolioFrame 
                :src="'https://multipage-studio-1.presentationlab.org/#/'"
                title="Vizualizare Desktop"
                view-mode="desktop"
              />
            </div>
            <div class="w-full flex flex-col items-center md:hidden">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Mobil</h3>
              <PortfolioFrame 
                :src="'https://multipage-studio-1.presentationlab.org/#/'"
                title="Studio"
                view-mode="mobile"
              />
            </div>
          </div>
        </div>

        <!-- One-Page Examples -->
        <div v-if="activePortfolio === 'onepage'" class="space-y-16">
          <!-- Example 1 - Carte -->
          <div class="mb-16">
            <div class="mb-8 max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Landing Page Carte</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                Pagină de promovare pentru o carte cu prezentare autor, recenzii și formular de comandă.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                @click="openInNewTab('https://onepage-book-1.presentationlab.org/#/')"
                class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
              >
                Live Preview
              </button>
            </div>
            <div class="w-full flex-col items-center mb-12 hidden md:flex">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
              <PortfolioFrame 
                :src="'https://onepage-book-1.presentationlab.org/#/'"
                title="Vizualizare Desktop"
                view-mode="desktop"
              />
            </div>
            <div class="w-full flex flex-col items-center md:hidden">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Mobil</h3>
              <PortfolioFrame 
                :src="'https://onepage-book-1.presentationlab.org/#/'"
                title="Carte"
                view-mode="mobile"
              />
            </div>
          </div>

          <!-- Example 2 - Conferință -->
          <div class="mb-16">
            <div class="mb-8 max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Landing Page Conferință</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                Pagină eveniment pentru conferință cu program, vorbitori, sponsori și înregistrare participanți.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                @click="openInNewTab('https://onepage-conference-1.presentationlab.org/#/')"
                class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
              >
                Live Preview
              </button>
            </div>
            <div class="w-full flex-col items-center mb-12 hidden md:flex">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
              <PortfolioFrame 
                :src="'https://onepage-conference-1.presentationlab.org/#/'"
                title="Vizualizare Desktop"
                view-mode="desktop"
              />
            </div>
            <div class="w-full flex flex-col items-center md:hidden">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Mobil</h3>
              <PortfolioFrame 
                :src="'https://onepage-conference-1.presentationlab.org/#/'"
                title="Conferință"
                view-mode="mobile"
              />
            </div>
          </div>

          <!-- Example 3 - Podcast -->
          <div class="mb-16">
            <div class="mb-8 max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Landing Page Podcast</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                Pagină de prezentare podcast cu episoade, gazde, invitați și formular de abonare.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                @click="openInNewTab('https://multipage-podcast-1.presentationlab.org/#/')"
                class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
              >
                Live Preview
              </button>
            </div>
            <div class="w-full flex-col items-center mb-12 hidden md:flex">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
              <PortfolioFrame 
                :src="'https://multipage-podcast-1.presentationlab.org/#/'"
                title="Vizualizare Desktop"
                view-mode="desktop"
              />
            </div>
            <div class="w-full flex flex-col items-center md:hidden">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Mobil</h3>
              <PortfolioFrame 
                :src="'https://multipage-podcast-1.presentationlab.org/#/'"
                title="Podcast"
                view-mode="mobile"
              />
            </div>
          </div>

          <!-- Example 4 - Prezentare 1 -->
          <div class="mb-16">
            <div class="mb-8 max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Landing Page Prezentare Companie - Variantă 1</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                Pagină de prezentare companie cu servicii, echipă, realizări și formular de contact.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                @click="openInNewTab('https://onepage-presentation-1.presentationlab.org/#/')"
                class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
              >
                Live Preview
              </button>
            </div>
            <div class="w-full flex-col items-center mb-12 hidden md:flex">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
              <PortfolioFrame 
                :src="'https://onepage-presentation-1.presentationlab.org/#/'"
                title="Vizualizare Desktop"
                view-mode="desktop"
              />
            </div>
            <div class="w-full flex flex-col items-center md:hidden">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Mobil</h3>
              <PortfolioFrame 
                :src="'https://onepage-presentation-1.presentationlab.org/#/'"
                title="Prezentare"
                view-mode="mobile"
              />
            </div>
          </div>

          <!-- Example 5 - Prezentare 2 -->
          <div class="mb-16">
            <div class="mb-8 max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Landing Page Prezentare Companie - Variantă 2</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                Pagină de prezentare companie cu design alternativ, secțiuni pentru produse/servicii și prezentare echipă.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                @click="openInNewTab('https://onepage-presentation-2.presentationlab.org/#/')"
                class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
              >
                Live Preview
              </button>
            </div>
            <div class="w-full flex-col items-center mb-12 hidden md:flex">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
              <PortfolioFrame 
                :src="'https://onepage-presentation-2.presentationlab.org/#/'"
                title="Vizualizare Desktop"
                view-mode="desktop"
              />
            </div>
            <div class="w-full flex flex-col items-center md:hidden">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Mobil</h3>
              <PortfolioFrame 
                :src="'https://onepage-presentation-2.presentationlab.org/#/'"
                title="Prezentare"
                view-mode="mobile"
              />
            </div>
          </div>

          <!-- Example 6 - Servicii -->
          <div class="mb-16">
            <div class="mb-8 max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Landing Page Servicii</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                Pagină one-page pentru servicii cu prezentare oferite, prețuri, testimoniale și call-to-action.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                @click="openInNewTab('https://onepage-services-1.presentationlab.org/#/')"
                class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm"
              >
                Live Preview
              </button>
            </div>
            <div class="w-full flex-col items-center mb-12 hidden md:flex">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Desktop</h3>
              <PortfolioFrame 
                :src="'https://onepage-services-1.presentationlab.org/#/'"
                title="Vizualizare Desktop"
                view-mode="desktop"
              />
            </div>
            <div class="w-full flex flex-col items-center md:hidden">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Vizualizare Mobil</h3>
              <PortfolioFrame 
                :src="'https://onepage-services-1.presentationlab.org/#/'"
                title="Servicii"
                view-mode="mobile"
              />
            </div>
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
