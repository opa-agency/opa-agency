<template>
  <div>
    <!-- Hero Section with solid dark background -->
    <div class="border-b border-purple-500/30 bg-gray-900 py-16">
      <Container>
        <section class="text-center">
          <h1 class="mb-6 text-5xl font-bold text-white">Servicii</h1>
          <p class="mx-auto max-w-2xl text-lg text-gray-300">
            Soluții complete pentru prezența ta online și creșterea afacerii.
          </p>
        </section>
      </Container>
    </div>

    <!-- Service Navigation -->
    <div class="sticky top-[88px] z-40 border-b border-purple-500/30 bg-gray-900/95 backdrop-blur-sm">
      <Container>
        <nav class="flex justify-center gap-8 py-4">
          <button @click="scrollToSection('prezenta-web')" class="text-sm text-gray-300 transition hover:text-white">Prezență Web</button>
          <button @click="scrollToSection('marketing')" class="text-sm text-gray-300 transition hover:text-white">Marketing</button>
        </nav>
      </Container>
    </div>

    <!-- Services Section with pattern background -->
    <div class="relative overflow-hidden bg-gradient-to-bl from-slate-950 via-purple-900 to-cyan-900">
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
        <div class="space-y-16">
          <!-- Solutii Prezenta Web -->
        <section id="prezenta-web">
          <h2 class="mb-8 text-3xl font-bold text-white">Solutii Prezenta Web</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div class="rounded-lg bg-gray-800/50 p-6 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col">
              <RouterLink :to="{ name: 'one-page-website' }" class="cursor-pointer">
                <h3 class="mb-3 text-lg font-semibold text-white hover:text-purple-400 border-b-2 border-purple-400 pb-2">One Page Website</h3>
              </RouterLink>
              <p class="mb-4 text-gray-300 block grow">
                Pagina web de prezentare tip landing page
              </p>
              <div class="border-t border-gray-700/50 pt-4">
                <div class="flex justify-between items-center flex-wrap">
                  <span class="text-gray-300">Preturi de la 600 Ron / proiect</span>
                  <RouterLink :to="{ name: 'one-page-website' }" class="text-purple-400 hover:text-purple-300 text-sm font-medium">mai multe detalii →</RouterLink>
                </div>
              </div>
            </div>
            <div class="rounded-lg bg-gray-800/50 p-6 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col">
              <RouterLink :to="{ name: 'multi-page-website' }" class="cursor-pointer">
                <h3 class="mb-3 text-lg font-semibold text-white hover:text-purple-400 border-b-2 border-purple-400 pb-2">Multi Page Website</h3>
              </RouterLink>
              <p class="mb-4 text-gray-300 block grow">
                Site web cu mai multe pagini pentru o prezenta online completa.
              </p>
              <div class="border-t border-gray-700/50 pt-4">
                <div class="flex justify-between items-center flex-wrap">
                  <span class="text-gray-300">Preturi de la 1500 Ron / proiect</span>
                  <RouterLink :to="{ name: 'multi-page-website' }" class="text-purple-400 hover:text-purple-300 text-sm font-medium">mai multe detalii →</RouterLink>
                </div>
              </div>
            </div>
            <div class="rounded-lg bg-gray-800/50 p-6 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col">
              <RouterLink :to="{ name: 'ecommerce-website' }" class="cursor-pointer">
                <h3 class="mb-3 text-lg font-semibold text-white hover:text-purple-400 border-b-2 border-purple-400 pb-2">E-commerce Website</h3>
              </RouterLink>
              <p class="mb-4 text-gray-300 block grow">
                Dezvoltare magazin online pentru comert electronic.
              </p>
              <div class="border-t border-gray-700/50 pt-4">
                <div class="flex justify-between items-center flex-wrap">
                  <span class="text-gray-300">Preturi de la 6500 Ron / proiect</span>
                  <RouterLink :to="{ name: 'ecommerce-website' }" class="text-purple-400 hover:text-purple-300 text-sm font-medium">mai multe detalii →</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Solutii Marketing -->
        <section id="marketing">
          <h2 class="mb-8 text-3xl font-bold text-white">Solutii Marketing</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div class="rounded-lg bg-gray-800/50 p-6 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col">
              <RouterLink :to="{ name: 'facebook-ads' }" class="cursor-pointer">
                <h3 class="mb-3 text-lg font-semibold text-white border-b-2 border-purple-400 pb-2 hover:text-purple-400">Reclame Facebook</h3>
              </RouterLink>
              <p class="mb-4 text-gray-300 block grow">
                Campanii publicitare pe Facebook pentru a atrage clienti si a creste vanzarile.
              </p>
              <div class="border-t border-gray-700/50 pt-4">
                <div class="flex justify-between items-center flex-wrap">
                  <span class="text-gray-300">Preturi de la 200 Ron / proiect</span>
                  <RouterLink :to="{ name: 'facebook-ads' }" class="text-purple-400 hover:text-purple-300 text-sm font-medium">mai multe detalii →</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
    </div>
  </div>
</template>

<script setup>
import Container from '../components/Container.vue'
import { RouterLink } from 'vue-router'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 88 + 56 // Header height + nav height
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>
