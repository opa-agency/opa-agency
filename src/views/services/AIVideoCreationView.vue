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
          <span class="text-6xl mr-4">🎬</span>
          <h1 class="text-5xl font-bold text-white">Creare Video cu AI</h1>
        </div>
        <p class="text-lg text-gray-300 mb-12 text-center">
          Clipuri video de maxim 50 secunde, create special pentru promovarea brandului tău.
        </p>

        <!-- Beneficii -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce beneficii ai</h2>
          <ul class="grid md:grid-cols-2 gap-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Crești vizibilitatea pe social media:</strong>
                <span class="block">Videoclipurile atrag mai multă atenție decât imaginile statice, crescând engagementul publicului tău.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Atragere rapidă a atenției:</strong>
                <span class="block">Hook-uri optimizate special pentru primele secunde, care captează interesul spectatorului instant.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Conținut modern, diferit de competiție:</strong>
                <span class="block">Tehnologie AI de ultimă generație care te diferențiază de concurență.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Mai multe conversii și click-uri (CTR crescut):</strong>
                <span class="block">Videoclipuri optimizate pentru acțiune, care transformă spectatorii în clienți.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Economisești timp și bani:</strong>
                <span class="block">Față de filmările clasice, obții conținut profesional într-o fracțiune din timp și costuri.</span>
              </span>
            </li>
          </ul>
        </section>

        <!-- Ce include -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce include serviciul</h2>
          <ul class="grid md:grid-cols-2 gap-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Creare avatar AI:</strong>
                <span class="block">Personaj original sau clonă digitală adaptată brandului tău.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Integrare produs / serviciu în video:</strong>
                <span class="block">Prezentarea profesională a ofertei tale în context video captivant.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Imagini AI adaptate în format video:</strong>
                <span class="block">Grafica generată cu AI, optimizată pentru storytelling vizual.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Voce AI sau text animat:</strong>
                <span class="block">Narațiune profesională sau texte animate care susțin mesajul video.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Editare completă:</strong>
                <span class="block">Tranziții fluide, efecte vizuale și design sonor profesional.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Hook-uri pentru primele secunde:</strong>
                <span class="block">Începuturi impactante care reduc rata de abandon.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Texte orientate spre conversii:</strong>
                <span class="block">CTA și CTR optimizate pentru rezultate maxime.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Format optimizat:</strong>
                <span class="block">Perfect adaptat pentru Reels, TikTok și campanii publicitare.</span>
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
                <strong class="text-white">Brief & Strategie</strong>
                <p class="mt-1">Discutăm despre brandul tău, publicul țintă și mesajul pe care vrei să-l transmiți.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">2.</span>
              <div>
                <strong class="text-white">Creare concept</strong>
                <p class="mt-1">Dezvoltăm scenariul, stilul vizual și alegem tehnologia AI potrivită.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">3.</span>
              <div>
                <strong class="text-white">Generare avatar & grafică</strong>
                <p class="mt-1">Creăm avatarul AI și elementele vizuale folosind tehnologie avansată.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">4.</span>
              <div>
                <strong class="text-white">Editare & finalizare</strong>
                <p class="mt-1">Asamblăm toate elementele, adăugăm efecte, sunet și optimizăm pentru platforme.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">5.</span>
              <div>
                <strong class="text-white">Livrare & ajustări</strong>
                <p class="mt-1">Primești videoclipul finalizat și poți solicita o rundă de modificări dacă este necesar.</p>
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
            <div class="text-sm text-gray-400 mt-2">maxim 50 secunde</div>
          </div>
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Comandă un video acum
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
