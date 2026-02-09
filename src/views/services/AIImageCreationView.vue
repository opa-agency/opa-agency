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
        <div class="flex items-center justify-center mb-6">
          <span class="text-6xl mr-4">📌</span>
          <h1 class="text-5xl font-bold text-white">Creare Imagini cu AI</h1>
        </div>
        <p class="text-lg text-gray-300 mb-12 text-center">
          Imagini profesionale pentru promovarea online a brandului tău.
        </p>

        <!-- Beneficii -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce beneficii ai</h2>
          <ul class="grid md:grid-cols-2 gap-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Prezență vizuală premium:</strong>
                <span class="block">Imagini de calitate profesională care îți ridică standardul vizual al brandului.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Branding coerent și memorabil:</strong>
                <span class="block">Identitate vizuală consecventă care consolidează recunoașterea brandului tău.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Conținut personalizat pentru publicul tău:</strong>
                <span class="block">Imagini create special pentru a rezona cu audiența ta țintă.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Mai mult engagement pe postări:</strong>
                <span class="block">Conținut vizual care atrage mai multe like-uri, comentarii și share-uri.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Diferențiere față de concurență:</strong>
                <span class="block">Imagini unice generate cu AI care te fac să ieși în evidență.</span>
              </span>
            </li>
          </ul>
        </section>

        <!-- Ce poți obține -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce poți obține</h2>
          <ul class="grid md:grid-cols-2 gap-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Editare poze produse:</strong>
                <span class="block">Îmbunătățirea imaginilor produselor tale pentru prezentare profesională.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Integrare logo și elemente de brand:</strong>
                <span class="block">Aplicarea identității vizuale pe toate materialele grafice.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Creare imagini promoționale:</strong>
                <span class="block">Grafică specială pentru campanii de marketing și promovări.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Carusele pentru social media:</strong>
                <span class="block">Set-uri de imagini coordonate pentru postări Instagram/Facebook.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Mockup-uri de produs:</strong>
                <span class="block">Vizualizări realiste ale produselor tale în context.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Creare clonă digitală / avatar AI:</strong>
                <span class="block">Personaj digital personalizat pentru brandul tău.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Storytelling vizual:</strong>
                <span class="block">Imagini care spun povestea brandului tău într-un mod captivant.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Bannere pentru reclame:</strong>
                <span class="block">Creativități publicitare optimizate pentru campanii plătite.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Postări tematice:</strong>
                <span class="block">Conținut vizual pentru campanii, oferte speciale și lansări de produse.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Format optimizat:</strong>
                <span class="block">Imagini adaptate perfect pentru Instagram, Facebook și TikTok.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">1 rundă de ajustări inclusă:</strong>
                <span class="block">Modificări gratuite pentru a ne asigura că ești 100% mulțumit.</span>
              </span>
            </li>
          </ul>
        </section>

        <!-- Cum functioneaza -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Cum lucrăm împreună (Pas cu Pas)</h2>
          <ol class="grid md:grid-cols-2 gap-4 text-gray-300">
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">1.</span>
              <div>
                <strong class="text-white">Brief & Concept</strong>
                <p class="mt-1">Discutăm despre viziunea ta, stilul dorit și mesajul pe care vrei să-l transmiți.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">2.</span>
              <div>
                <strong class="text-white">Strategie vizuală</strong>
                <p class="mt-1">Stabilim paleta de culori, stilul grafic și elementele de branding necesare.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">3.</span>
              <div>
                <strong class="text-white">Creare cu AI</strong>
                <p class="mt-1">Generăm imaginile folosind tehnologie AI avansată, adaptate exact nevoilor tale.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">4.</span>
              <div>
                <strong class="text-white">Editare & finalizare</strong>
                <p class="mt-1">Rafinăm detaliile, aplicăm branding-ul și optimizăm pentru platforme.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">5.</span>
              <div>
                <strong class="text-white">Livrare & ajustări</strong>
                <p class="mt-1">Primești imaginile în format digital și poți solicita o rundă de modificări.</p>
              </div>
            </li>
          </ol>
        </section>

        <!-- Pricing -->
        <section class="border-t-2 border-purple-400 pt-8 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Investiție</h2>
          <div class="bg-purple-900/40 border-2 border-purple-400 rounded-lg p-8 mb-8 max-w-md mx-auto">
            <div class="text-5xl font-bold text-white mb-2">50 lei</div>
            <div class="text-xl text-purple-300">per imagine</div>
          </div>
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Comandă imagini acum
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
