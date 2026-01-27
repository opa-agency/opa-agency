<template>
  <section class="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
    <Container>
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
        <div class="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
          <h1 class="text-4xl font-medium tracking-tight text-gray-900">
            Construiește-ți Prezența Digitală Perfectă
          </h1>
          <p class="mt-6 text-lg text-gray-600">
            Prin utilizarea expertizei din rețeaua noastră de profesioniști,
            vei știi exact când să investești în marketingul tău digital pentru a
            maximiza rezultatele și să eviți pierderile de timp și bani.
          </p>
        </div>
        <div class="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
          <div class="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-spin-slow">
              <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.7" />
              <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#hero-gradient-1)" stroke-linecap="round" />
              <defs>
                <linearGradient id="hero-gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#06b6d4" />
                  <stop offset="1" stop-color="#06b6d4" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-spin-reverse-slower">
              <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.7" />
              <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#hero-gradient-2)" stroke-linecap="round" />
              <defs>
                <linearGradient id="hero-gradient-2" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#06b6d4" />
                  <stop offset="1" stop-color="#06b6d4" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="-mx-4 h-[448px] mask-[linear-gradient(to_bottom,white_60%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
            <PhoneFrame class="mx-auto max-w-[366px]">
              <AppDemo />
            </PhoneFrame>
          </div>
        </div>
        <BrandsScroll />
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from './Container.vue'
import PhoneFrame from './PhoneFrame.vue'
import AppDemo from './AppDemo.vue'
import BrandsScroll from './BrandsScroll.vue'
</script>
