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
      <div class="max-w-7xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-2xl ring-1 ring-white/10">
        <h1 class="text-5xl font-bold text-white mb-6 text-center">One Page Website</h1>
        <p class="text-lg text-gray-300 mb-12 text-center">
          Soluția perfectă pentru afaceri care au nevoie de o prezență online rapidă și profesională.
        </p>

        <!-- Ce include -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce include</h2>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Design modern și responsive (optimizat pentru mobil, tabletă și desktop)</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Secțiuni personalizabile (Hero, Servicii, Despre, Contact)</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Formular de contact funcțional</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Optimizare SEO de bază</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Integrare Google Maps</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Viteză de încărcare optimizată</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Certificat SSL (securitate HTTPS)</span>
            </li>
          </ul>
        </section>

        <!-- Cum functioneaza -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Cum funcționează</h2>
          <ol class="space-y-4 text-gray-300">
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">1.</span>
              <div>
                <strong class="text-white">Consultație inițială</strong>
                <p class="mt-1">Discutăm despre afacerea ta, obiectivele și viziunea pentru site.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">2.</span>
              <div>
                <strong class="text-white">Design și aprobare</strong>
                <p class="mt-1">Creăm mockup-uri și primim feedback-ul tău pentru ajustări.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">3.</span>
              <div>
                <strong class="text-white">Dezvoltare</strong>
                <p class="mt-1">Transformăm designul în site funcțional și optimizat.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">4.</span>
              <div>
                <strong class="text-white">Testare și lansare</strong>
                <p class="mt-1">Verificăm totul și lansăm site-ul live pentru publicul tău.</p>
              </div>
            </li>
          </ol>
        </section>

        <!-- Pricing -->
        <section class="border-t-2 border-purple-400 pt-8 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Preț: de la 600 Ron</h2>
          <p class="text-gray-300 mb-6">Livrare în 5-7 zile lucrătoare</p>
          <RouterLink 
            :to="{ name: 'contact' }" 
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Contactează-ne pentru ofertă
          </RouterLink>
        </section>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from '@/components/Container.vue'
import { RouterLink } from 'vue-router'
</script>
