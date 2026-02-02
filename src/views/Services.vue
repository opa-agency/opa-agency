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
        <section>
          <h2 class="mb-8 text-3xl font-bold text-white">Solutii Prezenta Web</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div v-for="i in 3" :key="`web-${i}`" class="rounded-lg bg-gray-800/50 p-6 ring-1 ring-white/10 hover:ring-white/20 transition">
              <h3 class="mb-3 text-lg font-semibold text-white">Serviciu {{ i }}</h3>
              <p class="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        <!-- Solutii Creere Continut -->
        <section>
          <h2 class="mb-8 text-3xl font-bold text-white">Solutii Creere Continut</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div v-for="i in 3" :key="`content-${i}`" class="rounded-lg bg-gray-800/50 p-6 ring-1 ring-white/10 hover:ring-white/20 transition">
              <h3 class="mb-3 text-lg font-semibold text-white">Serviciu {{ i }}</h3>
              <p class="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        <!-- Solutii Marketing -->
        <section>
          <h2 class="mb-8 text-3xl font-bold text-white">Solutii Marketing</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div v-for="i in 3" :key="`marketing-${i}`" class="rounded-lg bg-gray-800/50 p-6 ring-1 ring-white/10 hover:ring-white/20 transition">
              <h3 class="mb-3 text-lg font-semibold text-white">Serviciu {{ i }}</h3>
              <p class="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        <!-- Solutii Gestiune -->
        <section>
          <h2 class="mb-8 text-3xl font-bold text-white">Solutii Gestiune</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div v-for="i in 3" :key="`management-${i}`" class="rounded-lg bg-gray-800/50 p-6 ring-1 ring-white/10 hover:ring-white/20 transition">
              <h3 class="mb-3 text-lg font-semibold text-white">Serviciu {{ i }}</h3>
              <p class="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
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
</script>
