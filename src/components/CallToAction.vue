<template>
  <section id="get-free-shares-today" class="relative overflow-hidden bg-gray-900 py-20 sm:py-28">
    <div class="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
      <svg viewBox="0 0 558 558" width="558" height="558" fill="none" aria-hidden="true" class="animate-spin-slower">
        <defs>
          <linearGradient id="cta-gradient" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse">
            <stop stop-color="#ffffff" />
            <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#ffffff" />
        <path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#cta-gradient)" stroke-linecap="round" />
      </svg>
    </div>
    <Container class="relative">
      <div class="mx-auto max-w-md sm:text-center">
        <h2 class="text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Primește primele sfaturi astăzi
        </h2>
        <p class="mt-4 text-lg text-gray-300">
          Durează 30 de secunde să te înregistrezi. Descarcă aplicația și
          creează un cont astăzi și îți vom trimite un sfat garantat să
          dubleze prima ta investiție.
        </p>
        <div class="mt-8 flex justify-center">
          <AppStoreLink color="white" />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from './Container.vue'
import AppStoreLink from './AppStoreLink.vue'
</script>
