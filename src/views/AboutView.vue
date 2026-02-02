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
      <GlossyContainer>
        <h1 class="text-5xl font-bold text-white mb-6 text-center">Despre Noi</h1>
        <p class="text-lg text-gray-300 mb-12 text-center">
          Agenția ta de încredere pentru prezență online și marketing digital.
        </p>

        <!-- Mission -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Misiunea Noastră</h2>
          <p class="text-gray-300 text-lg leading-relaxed">
            La OPA (Online Presence Agency), suntem dedicați să transformăm viziunea ta digitală în realitate. 
            Credem că fiecare afacere merită o prezență online profesională și impactantă care să reflecte cu adevărat 
            valorile și calitatea serviciilor tale.
          </p>
        </section>

        <!-- What we do -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce Facem</h2>
          <div class="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 class="text-xl font-semibold text-white mb-3">Dezvoltare Web</h3>
              <p>Creăm site-uri web moderne, responsive și optimizate pentru performanță maximă.</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white mb-3">Marketing Digital</h3>
              <p>Dezvoltăm strategii de marketing eficiente care aduc rezultate măsurabile.</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white mb-3">E-commerce</h3>
              <p>Construim magazine online complete care cresc vânzările și loialitatea clienților.</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white mb-3">Publicitate Online</h3>
              <p>Gestionăm campanii publicitare pe platforme sociale pentru vizibilitate maximă.</p>
            </div>
          </div>
        </section>

        <!-- Values -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Valorile Noastre</h2>
          <ul class="grid md:grid-cols-2 gap-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span><strong class="text-white">Profesionalism:</strong> Fiecare proiect este tratat cu seriozitate și atenție la detalii.</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span><strong class="text-white">Transparență:</strong> Comunicare clară și raportare constantă a progresului.</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span><strong class="text-white">Inovație:</strong> Folosim cele mai noi tehnologii și strategii din industrie.</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span><strong class="text-white">Rezultate:</strong> Ne concentrăm pe rezultate măsurabile și impact real.</span>
            </li>
          </ul>
        </section>

        <!-- CTA -->
        <section class="border-t-2 border-purple-400 pt-8 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Hai să colaborăm</h2>
          <p class="text-gray-300 mb-6">Suntem gata să transformăm viziunea ta digitală în realitate.</p>
          <RouterLink 
            :to="{ name: 'contact' }" 
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Contactează-ne
          </RouterLink>
        </section>
      </GlossyContainer>
    </Container>
  </div>
</template>

<script setup>
import Container from '@/components/Container.vue'
import GlossyContainer from '@/components/GlossyContainer.vue'
import { RouterLink } from 'vue-router'
</script>
