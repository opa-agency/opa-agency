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
        <h1 class="text-5xl font-bold text-white mb-6 text-center">Reclame Facebook</h1>
        <p class="text-lg text-gray-300 mb-12 text-center">
          Campanii publicitare pe Facebook și Instagram pentru a atrage clienți noi și a crește vânzările.
        </p>

        <!-- Ce include -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce include</h2>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Strategie publicitară personalizată</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Cercetare și definire public țintă</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Creare și optimizare campanii Facebook Ads</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Design materiale publicitare (bannere, imagini, video)</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Copywriting persuasiv pentru anunțuri</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Configurare Facebook Pixel pentru tracking</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>A/B testing pentru optimizare performanță</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Monitorizare și raportare zilnică</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Optimizare buget publicitar</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Rapoarte lunare detaliate cu rezultate</span>
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
                <strong class="text-white">Consultație și analiza</strong>
                <p class="mt-1">Discutăm obiectivele, bugetul și analizăm competiția.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">2.</span>
              <div>
                <strong class="text-white">Strategia publicitară</strong>
                <p class="mt-1">Definim publicul țintă, mesajele și obiectivele campaniilor.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">3.</span>
              <div>
                <strong class="text-white">Creare materiale</strong>
                <p class="mt-1">Dezvoltăm anunțurile, imaginile și textele persuasive.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">4.</span>
              <div>
                <strong class="text-white">Lansare campanie</strong>
                <p class="mt-1">Configurăm și lansăm campaniile cu setările optime.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">5.</span>
              <div>
                <strong class="text-white">Monitorizare și optimizare</strong>
                <p class="mt-1">Urmărim performanța zilnic și ajustăm pentru rezultate maxime.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">6.</span>
              <div>
                <strong class="text-white">Raportare și îmbunătățiri</strong>
                <p class="mt-1">Prezentăm rezultatele și recomandări pentru campanii viitoare.</p>
              </div>
            </li>
          </ol>
        </section>

        <!-- Pricing -->
        <section class="border-t-2 border-purple-400 pt-8 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Preț: de la 500 Ron / lună</h2>
          <p class="text-gray-300 mb-6">+ Buget publicitar (separat, recomandat minim 300 Ron/lună)</p>
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
