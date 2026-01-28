<template>
  <div class="min-h-screen bg-white">
    <!-- Portfolio Header -->
    <section class="bg-gradient-to-bl from-slate-950 via-purple-900 to-cyan-900 py-12 sm:py-16">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <h1 class="text-4xl font-bold text-white mb-4">Portofoliul Nostru</h1>
          <p class="text-lg text-gray-200">Explorați exemplele de lucrări și proiecte pe care le-am realizat</p>
        </div>
      </div>
    </section>

    <!-- Portfolio Examples -->
    <section class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <!-- Example 1 -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Portofoliu Multipagină</h2>
          <div class="flex items-center justify-center">
            <PortfolioFrame 
              :src="'https://multipage-portofolio-1.presentationlab.org/#/'"
              title="Multipage Portfolio"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PortfolioFrame from '@/components/PortfolioFrame.vue'
</script>
