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
          <img src="@/images/logos/meta-svgrepo-com.svg" alt="Meta" class="w-16 h-16 mr-4" />
          <h1 class="text-5xl font-bold text-white">Reclame Facebook & Instagram</h1>
        </div>
        <p class="text-lg text-gray-300 mb-12 text-center">
          Strategii de publicitate plătite care îți aduc clienți, nu doar vizualizări.
        </p>

        <!-- Ce include -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce primești când colaborăm</h2>
          <ul class="grid md:grid-cols-2 gap-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Strategie personalizată:</strong>
                <span class="block">Construiesc un plan bazat pe obiectivele tale de business și pe analiza competiției.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Targetare de precizie:</strong>
                <span class="block">Găsesc publicul tău ideal pentru a ne asigura că reclama ajunge la cine trebuie.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Tehnologie și tracking:</strong>
                <span class="block">Configurez Facebook Pixel pentru a măsura exact fiecare leu investit și pentru a face retargeting celor interesați.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Optimizare continuă:</strong>
                <span class="block">Testez variante de reclame și ajustez bugetul zilnic pentru a obține cel mai mic cost per client.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Transparență totală:</strong>
                <span class="block">Primești rapoarte zilnice clare cu rezultatele obținute.</span>
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
                <strong class="text-white">Analiză &amp; audit</strong>
                <p class="mt-1">Evaluăm situația actuală și stabilim obiectivele.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">2.</span>
              <div>
                <strong class="text-white">Configurare cont</strong>
                <p class="mt-1">Pregătim infrastructura tehnică (Pixel, audiențe, catalog produse).</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">3.</span>
              <div>
                <strong class="text-white">Lansare creative</strong>
                <p class="mt-1">Creăm anunțurile vizuale și textele care vor rula pe Facebook și Instagram.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">4.</span>
              <div>
                <strong class="text-white">Monitorizare activă</strong>
                <p class="mt-1">Urmărim performanța în timp real și eliminăm ce nu funcționează.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">5.</span>
              <div>
                <strong class="text-white">Scalare</strong>
                <p class="mt-1">Reinvestim bugetul în reclamele cele mai profitabile pentru a crește volumul de vânzări.</p>
              </div>
            </li>
          </ol>
        </section>

        <!-- Pricing -->
        <section class="border-t-2 border-purple-400 pt-8 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Investiție</h2>
          <p class="text-gray-300 mb-2">Alege modalitatea de colaborare care se potrivește afacerii tale:</p>
          <div class="mx-auto max-w-3xl text-left text-gray-300 space-y-3 mb-8">
            <p><strong class="text-white">Comision procentual:</strong> 10% din bugetul de reclame investit. (Opțiune recomandată pentru bugete de peste 5.000 RON/lună).</p>
            <p><strong class="text-white">Taxă fixă (Retainer):</strong> Minim 500 RON / lună. (Pentru bugete mai mici, unde munca de setare și optimizare necesită un efort minim garantat).</p>
          </div>
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Contactează-ne pentru ofertă
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
