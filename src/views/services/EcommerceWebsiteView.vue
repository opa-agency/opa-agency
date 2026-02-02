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
        <h1 class="text-5xl font-bold text-white mb-6 text-center">E-commerce Website</h1>
        <p class="text-lg text-gray-300 mb-12 text-center">
          Magazin online complet pentru a-ți vinde produsele sau serviciile online cu sistem de plată integrat.
        </p>

        <!-- Ce include -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce include</h2>
          <ul class="grid md:grid-cols-2 gap-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Platformă e-commerce completă (Shopify)</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Implementare design customizat</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Adăugare până la 100 produse (descrieri, imagini, prețuri)</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Configurare magazin online</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Configurare aplicații Shopify</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Configurare metode de plată si de livrare</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Configurare opțiuni de livrare multiple</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Integrare Google și Facebook tags manager</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Configurare Domeniu si Email pentru brand</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Training complet pentru administrare in 3 sedinte de 2 ore</span>
            </li>
          </ul>
        </section>

        <!-- Cum functioneaza -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Cum funcționează</h2>
          <ol class="grid md:grid-cols-2 gap-4 text-gray-300">
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">1.</span>
              <div>
                <strong class="text-white">Consultație business și planificare</strong>
                <p class="mt-1">Discutăm despre produse, public țintă, metode de plată și livrare.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">2.</span>
              <div>
              <strong class="text-white">Design personalizat și implementare</strong>
              <p class="mt-1">Creăm design customizat și implementăm platforma Shopify cu configurare complete.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">3.</span>
              <div>
              <strong class="text-white">Adăugare produse și configurare magazin</strong>
              <p class="mt-1">Adăugăm până la 100 produse cu descrieri, imagini și prețuri, configurăm opțiunile de magazin.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">4.</span>
              <div>
              <strong class="text-white">Metode de plată, livrare și integrări</strong>
              <p class="mt-1">Configurăm metode de plată, opțiuni de livrare multiple, Google și Facebook tags manager.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">5.</span>
              <div>
              <strong class="text-white">Setup domeniu, email și training</strong>
              <p class="mt-1">Configurăm domeniu și email pentru brand, apoi oferim training complet în 3 ședințe de 2 ore.</p>
              </div>
            </li>
          </ol>
        </section>

        <!-- Pricing -->
        <section class="border-t-2 border-purple-400 pt-8 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Preț: de la 6500 Ron</h2>
          <p class="text-gray-300 mb-6">Livrare în 20-30 zile lucrătoare</p>
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
