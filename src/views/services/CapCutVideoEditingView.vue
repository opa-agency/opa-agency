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
          <span class="text-6xl mr-4">✂️</span>
          <h1 class="text-5xl font-bold text-white">Editare Video în CapCut</h1>
        </div>
        <p class="text-lg text-gray-300 mb-12 text-center">
          Pentru clipurile deja filmate de tine (maxim 1 minut).
        </p>

        <!-- Beneficii -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Beneficii</h2>
          <ul class="grid md:grid-cols-2 gap-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Clipuri profesionale fără costuri mari:</strong>
                <span class="block">Transformăm materialele tale în videoclipuri de calitate profesională la un preț accesibil.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Creșterea retenției și timpului de vizionare:</strong>
                <span class="block">Editare optimizată care menține spectatorii captivați până la final.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Imagine mai serioasă pentru brand:</strong>
                <span class="block">Prezentare profesională care îți crește credibilitatea în fața publicului.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Conținut gata de postat:</strong>
                <span class="block">Primești videoclipuri finalizate, optimizate și pregătite pentru publicare imediată.</span>
              </span>
            </li>
          </ul>
        </section>

        <!-- Ce primești -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce primești</h2>
          <ul class="grid md:grid-cols-2 gap-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Editare video completă:</strong>
                <span class="block">Procesare profesională a întregului material video.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Tăiere și montaj profesionist:</strong>
                <span class="block">Selecția celor mai bune momente și asamblare fluidă.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Tranziții moderne:</strong>
                <span class="block">Efecte vizuale contemporane pentru treceri naturale între scene.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Muzică și sunet:</strong>
                <span class="block">Design sonor profesional cu muzică de fundal potrivită și mixaj audio.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Texte animate și subtitrări:</strong>
                <span class="block">Grafică text dinamică și subtitrări pentru accesibilitate și impact.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Voce AI (opțional):</strong>
                <span class="block">Narațiune generată cu AI pentru povești mai captivante.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Inserare imagini / elemente grafice:</strong>
                <span class="block">Integrare logo, grafică și alte elemente vizuale de brand.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Adaptare pentru social media:</strong>
                <span class="block">Format vertical (9:16) optimizat pentru Reels, TikTok și Stories.</span>
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
                <strong class="text-white">Primire material video</strong>
                <p class="mt-1">Trimiți clipul tău filmat (maxim 1 minut) și ne spui ce viziune ai pentru el.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">2.</span>
              <div>
                <strong class="text-white">Analiză și planificare</strong>
                <p class="mt-1">Evaluăm materialul și stabilim stilul de editare, muzica și efectele potrivite.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">3.</span>
              <div>
                <strong class="text-white">Editare în CapCut</strong>
                <p class="mt-1">Montaj profesional cu tăieri, tranziții, efecte, texte și design sonor.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">4.</span>
              <div>
                <strong class="text-white">Optimizare finală</strong>
                <p class="mt-1">Ajustări de culoare, sunet și format pentru platformele social media.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">5.</span>
              <div>
                <strong class="text-white">Livrare & ajustări</strong>
                <p class="mt-1">Primești videoclipul finalizat și poți solicita o rundă de modificări.</p>
              </div>
            </li>
          </ol>
        </section>

        <!-- Pricing -->
        <section class="border-t-2 border-purple-400 pt-8 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Investiție</h2>
          <div class="bg-purple-900/40 border-2 border-purple-400 rounded-lg p-8 mb-8 max-w-md mx-auto">
            <div class="text-5xl font-bold text-white mb-2">99 lei</div>
            <div class="text-xl text-purple-300">per clip video</div>
            <div class="text-sm text-gray-400 mt-2">maxim 1 minut</div>
          </div>
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Trimite clipul tău pentru editare
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
