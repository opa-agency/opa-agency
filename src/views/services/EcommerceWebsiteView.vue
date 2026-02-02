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
        <h1 class="text-5xl font-bold text-white mb-6 text-center">E-commerce Website</h1>
        <p class="text-lg text-gray-300 mb-12 text-center">
          Magazin online complet pentru a-ți vinde produsele sau serviciile online cu sistem de plată integrat.
        </p>

        <!-- Ce include -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce include</h2>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Platformă e-commerce completă (WooCommerce/Shopify)</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Design personalizat și responsive</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Adăugare până la 100 produse (descrieri, imagini, prețuri)</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Sistem de coș de cumpărături</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Integrare procesare plăți (Card, PayPal, Transfer bancar)</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Sistem de comenzi și facturare automată</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Gestionare stocuri și inventar</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Opțiuni de livrare multiple</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Conturi clienți și istoric comenzi</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Optimizare SEO pentru produse</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Certificat SSL și securitate avansată</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>Training complet pentru administrare</span>
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
                <strong class="text-white">Consultație business și planificare</strong>
                <p class="mt-1">Discutăm despre produse, public țintă, metode de plată și livrare.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">2.</span>
              <div>
                <strong class="text-white">Alegerea platformei și structură</strong>
                <p class="mt-1">Selectăm cea mai potrivită platformă și definim categoriile de produse.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">3.</span>
              <div>
                <strong class="text-white">Design personalizat magazin</strong>
                <p class="mt-1">Creăm designul pentru homepage, pagini produse, checkout, etc.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">4.</span>
              <div>
                <strong class="text-white">Dezvoltare și configurare</strong>
                <p class="mt-1">Construim magazinul, integrăm plățile, configurăm livrările și adăugăm produsele.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">5.</span>
              <div>
                <strong class="text-white">Testare comenzi și training</strong>
                <p class="mt-1">Testăm procesul complet de comandă, te învățăm să gestionezi magazinul.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">6.</span>
              <div>
                <strong class="text-white">Lansare și suport</strong>
                <p class="mt-1">Lansăm magazinul online și oferim suport pentru primele comenzi.</p>
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
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from '@/components/Container.vue'
import { RouterLink } from 'vue-router'
</script>
