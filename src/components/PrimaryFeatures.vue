<template>
  <section id="features" aria-label="Pachete pentru landing page-uri" class="bg-gray-900 py-20 sm:py-32">
    <Container>
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
        <h2 class="text-3xl font-medium tracking-tight text-white">
          Ofertele noastre pentru Landing Page
        </h2>
        <p class="mt-2 text-lg text-gray-400">
          Oferim soluții complete de landing page-uri personalizate pentru nevoile tale.
        </p>
        <p class="mt-2 text-lg text-gray-400">
          Design modern și responsive - avem pachetul potrivit pentru nevoile tale.
        </p>
        <p class="mt-2 text-lg text-gray-400">
          Fiecare cerere este unică, iar dacă niciun pachet nu îți satisface nevoile, contactează-ne pentru o ofertă personalizată.
        </p>
        <div class="mt-8 rounded-lg bg-gray-800/50 p-4 sm:p-6">
          <p class="text-sm text-gray-300">
            <span class="font-semibold text-white">Inclus în toate pachetele pe o durată de un an:</span>
          </p>
          <ul class="space-y-2">
            <li class="flex items-center gap-3 text-sm text-gray-300">
              <svg class="h-5 w-5 text-cyan-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Domeniu personalizat</span>
            </li>
            <li class="flex items-center gap-3 text-sm text-gray-300">
              <svg class="h-5 w-5 text-cyan-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Hosting și certificate de securitate https</span>
            </li>
          </ul>
          <p class="mt-4 text-sm text-gray-400">
            <span class="text-white font-semibold">După primul an:</span> Taxa anuală de €50 pentru menținerea domeniului și hostingului.
          </p>
        </div>
      </div>
    </Container>

    <!-- Mobile version -->
    <div class="mt-16 md:hidden">
      <div class="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden">
        <div v-for="(offer, index) in offers" :key="offer.name" class="w-full flex-none snap-center px-4 sm:px-6">
          <div class="relative transform rounded-2xl bg-gray-800 px-5 py-6 flex flex-col">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <svg viewBox="0 0 558 558" width="558" height="558" fill="none" aria-hidden="true" :class="index % 2 === 1 ? 'rotate-180' : ''">
                <defs>
                  <linearGradient :id="`mobile-gradient-${index}`" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#13B5C8" />
                    <stop offset="1" stop-color="#13B5C8" stop-opacity="0" />
                  </linearGradient>
                </defs>
                <path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#13B5C8" />
                <path d="M1 279C1 125.465 125.465 1 279 1" :stroke="`url(#mobile-gradient-${index})`" stroke-linecap="round" />
              </svg>
            </div>
            <div class="relative z-10 min-h-[500px] flex items-center justify-center">
              <PhoneFrame class="w-full max-w-[366px]">
                <component :is="offer.screen" />
              </PhoneFrame>
            </div>
            <div class="relative z-20 bg-gray-800/95 p-6 backdrop-blur-sm sm:p-10 mt-6">
              <div class="flex items-center gap-4">
                <component :is="offer.icon" class="h-8 w-8 flex-shrink-0" />
                <h3 class="text-sm font-semibold text-white sm:text-lg">{{ offer.name }}</h3>
              </div>
              <p class="mt-4 text-sm text-gray-400">{{ offer.description }}</p>
              <div class="mt-4">
                <span class="text-2xl font-bold text-white">{{ offer.price }}</span>
                <span class="text-sm text-gray-400"> / {{ offer.priceUnit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 flex justify-center gap-3">
        <button v-for="(_, index) in offers" :key="index" type="button" class="relative h-0.5 w-4 rounded-full bg-gray-500">
          <span class="absolute -inset-x-1.5 -inset-y-3" />
        </button>
      </div>
    </div>

    <!-- Desktop version -->
    <Container class="hidden md:mt-20 md:block">
      <div class="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24">
        <div class="relative z-10 order-last col-span-6 space-y-6">
          <div v-for="(offer, index) in offers" :key="offer.name" 
               @click="selectedIndex = index"
               :class="['relative rounded-2xl transition-colors hover:bg-gray-800/30 cursor-pointer', index === selectedIndex ? 'bg-gray-800' : '']">
            <div class="relative z-10 p-8">
              <div class="flex items-center gap-4">
                <component :is="offer.icon" class="h-8 w-8 flex-shrink-0" />
                <h3 class="text-lg font-semibold text-white">{{ offer.name }}</h3>
              </div>
              <p class="mt-4 text-sm text-gray-400">{{ offer.description }}</p>
              <div class="mt-4">
                <span class="text-3xl font-bold text-white">{{ offer.price }}</span>
                <span class="text-sm text-gray-400"> / {{ offer.priceUnit }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="relative col-span-6">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 558 558" width="558" height="558" fill="none" aria-hidden="true" class="animate-spin-slower">
              <defs>
                <linearGradient id="desktop-gradient" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#13B5C8" />
                  <stop offset="1" stop-color="#13B5C8" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#13B5C8" />
              <path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#desktop-gradient)" stroke-linecap="round" />
            </svg>
          </div>
          <PhoneFrame class="z-10 mx-auto w-full max-w-[366px]">
            <component :is="offers[selectedIndex].screen" />
          </PhoneFrame>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'
import Container from './Container.vue'
import PhoneFrame from './PhoneFrame.vue'

const selectedIndex = ref(0)

// Icon components
const PackageBasicIcon = () => h('svg', { viewBox: '0 0 32 32', 'aria-hidden': 'true', class: 'text-white' }, [
  h('circle', { cx: 16, cy: 16, r: 16, fill: '#A3A3A3', 'fill-opacity': 0.2 }),
  h('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z', fill: '#A3A3A3' }),
  h('circle', { cx: 16, cy: 16, r: 5, fill: '#737373' })
])

const PackageStandardIcon = () => h('svg', { viewBox: '0 0 32 32', 'aria-hidden': 'true', class: 'text-white' }, [
  h('circle', { cx: 16, cy: 16, r: 16, fill: '#A3A3A3', 'fill-opacity': 0.2 }),
  h('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z', fill: '#A3A3A3' }),
  h('path', { d: 'M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z', fill: '#737373' }),
  h('circle', { cx: 16, cy: 20, r: 3, fill: '#06B6D4' })
])

const PackagePremiumIcon = () => h('svg', { viewBox: '0 0 32 32', fill: 'none', 'aria-hidden': 'true', class: 'text-white' }, [
  h('circle', { cx: 16, cy: 16, r: 16, fill: '#A3A3A3', 'fill-opacity': 0.2 }),
  h('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4 4 0 01-4 4H9a4 4 0 01-4-4V4z', fill: '#737373' }),
  h('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M9 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z', fill: '#A3A3A3' }),
  h('path', { d: 'M16 10l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z', fill: '#06B6D4' })
])

// Offer screen components - showing pricing details on phone
const BasicScreen = () => h('div', { class: 'flex flex-col bg-gray-900 h-full' }, [
  h('div', { class: 'flex justify-between px-4 pt-4 bg-gray-800' }, [
  ]),
  h('div', { class: 'px-4 pb-6 pt-2 bg-gray-800 text-white' }, [
    h('div', { class: 'text-2xl font-bold' }, 'Pachet Basic'),
    h('div', { class: 'text-sm opacity-70' }, 'Perfect pentru început')
  ]),
  h('div', { class: 'flex-auto bg-gray-900 p-4' }, [
    h('div', { class: 'space-y-3' }, [
      ...[
        'O pagină de prezentare cu 3-6 secțiuni',
        '3 modificări după setup-ul inițial',
        'Animații interactive',
        'Domeniu și hosting inclus pe un an',
        'Livrare în 3-5 zile'
      ].map(feature =>
        h('div', { key: feature, class: 'flex items-start gap-2' }, [
          h('svg', { class: 'h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5', viewBox: '0 0 20 20', fill: 'currentColor' }, [
            h('path', { 'fill-rule': 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z', 'clip-rule': 'evenodd' })
          ]),
          h('span', { class: 'text-sm text-gray-300' }, feature)
        ])
      )
    ])
  ])
])

const StandardScreen = () => h('div', { class: 'flex flex-col bg-gray-900 h-full' }, [
  h('div', { class: 'flex justify-between px-4 pt-4 bg-gray-800' }, [
  ]),
  h('div', { class: 'px-4 pb-6 pt-2 bg-gray-800 text-white' }, [
    h('div', { class: 'text-2xl font-bold' }, 'Pachet Standard'),
    h('div', { class: 'text-sm opacity-70' }, 'Cel mai popular')
  ]),
  h('div', { class: 'flex-auto bg-gray-900 p-4' }, [
    h('div', { class: 'space-y-3' }, [
      ...[
        'Tot din Basic, plus:',
        'Multi-pagină: până la 5 pagini',
        '4 secțiuni pe fiecare pagină',
        'Animații interactive',
        'Livrare în 5-14 zile'
      ].map(feature =>
        h('div', { key: feature, class: 'flex items-start gap-2' }, [
          h('svg', { class: 'h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5', viewBox: '0 0 20 20', fill: 'currentColor' }, [
            h('path', { 'fill-rule': 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z', 'clip-rule': 'evenodd' })
          ]),
          h('span', { class: 'text-sm text-gray-300' }, feature)
        ])
      )
    ])
  ])
])

const PremiumScreen = () => h('div', { class: 'flex flex-col bg-gray-900 h-full' }, [
  h('div', { class: 'flex justify-between px-4 pt-4 bg-gray-800' }, [
  ]),
  h('div', { class: 'px-4 pb-6 pt-2 bg-gray-800 text-white' }, [
    h('div', { class: 'text-2xl font-bold' }, 'Pachet Premium'),
    h('div', { class: 'text-sm opacity-70' }, 'Pentru rezultate maxime')
  ]),
  h('div', { class: 'flex-auto bg-gray-900 p-4' }, [
    h('div', { class: 'space-y-3' }, [
      ...[
        'Tot din Standard, plus:',
        'Secțiuni nelimitate',
        'Suport pentru modificări 3 luni post-setup',
        'Livrare în 7-30 zile'
      ].map(feature =>
        h('div', { key: feature, class: 'flex items-start gap-2' }, [
          h('svg', { class: 'h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5', viewBox: '0 0 20 20', fill: 'currentColor' }, [
            h('path', { 'fill-rule': 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z', 'clip-rule': 'evenodd' })
          ]),
          h('span', { class: 'text-sm text-gray-300' }, feature)
        ])
      )
    ])
  ])
])

const offers = [
  {
    name: 'Pachet Basic',
    description: 'Perfect pentru o prezenta online de bază.',
    price: '€299',
    priceUnit: 'plată unică',
    icon: PackageBasicIcon,
    screen: BasicScreen
  },
  {
    name: 'Pachet Standard',
    description: 'Soluție multi-pagină cu până la 5 pagini. Include toate din Basic plus 4 secțiuni pe fiecare pagină și animații interactive pentru o prezență online profesională.',
    price: '€499',
    priceUnit: 'plată unică',
    icon: PackageStandardIcon,
    screen: StandardScreen
  },
  {
    name: 'Pachet Premium',
    description: 'Soluția completă pentru afaceri serioase. Include toate funcționalitățile avansate, CMS personalizat și suport dedicat pentru rezultate maxime.',
    price: '€799',
    priceUnit: 'plată unică',
    icon: PackagePremiumIcon,
    screen: PremiumScreen
  }
]
</script>
