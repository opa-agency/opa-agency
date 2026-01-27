<template>
  <section id="features" aria-label="Features for investing all your money" class="bg-gray-900 py-12 sm:pt-8 sm:pb-20">
    <Container>
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
        <h2 class="text-3xl font-medium tracking-tight text-white">
          Lorem ipsum dolor sit amet
        </h2>
        <p class="mt-2 text-lg text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </Container>

    <!-- Mobile version -->
    <div class="mt-16 md:hidden">
      <div class="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden">
        <div v-for="(feature, index) in features" :key="feature.name" class="w-full flex-none snap-center px-4 sm:px-6">
          <div class="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
            <PhoneFrame class="relative mx-auto w-full max-w-[366px]">
              <component :is="feature.screen" />
            </PhoneFrame>
            <div class="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur-sm sm:p-10">
              <component :is="feature.icon" class="h-8 w-8" />
              <h3 class="mt-6 text-sm font-semibold text-white sm:text-lg">{{ feature.name }}</h3>
              <p class="mt-2 text-sm text-gray-400">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 flex justify-center gap-3">
        <button v-for="(_, index) in features" :key="index" type="button" class="relative h-0.5 w-4 rounded-full bg-gray-500">
          <span class="absolute -inset-x-1.5 -inset-y-3" />
        </button>
      </div>
    </div>

    <!-- Desktop version -->
    <Container class="hidden md:mt-20 md:block">
      <div class="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24">
        <div class="relative z-10 order-last col-span-6 space-y-6">
          <div v-for="(feature, index) in features" :key="feature.name" 
               @click="selectedIndex = index"
               :class="['relative rounded-2xl transition-colors hover:bg-gray-800/30 cursor-pointer', index === selectedIndex ? 'bg-gray-800' : '']">
            <div class="relative z-10 p-8">
              <component :is="feature.icon" class="h-8 w-8" />
              <h3 class="mt-6 text-lg font-semibold text-white">{{ feature.name }}</h3>
              <p class="mt-2 text-sm text-gray-400">{{ feature.description }}</p>
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
            <component :is="features[selectedIndex].screen" />
          </PhoneFrame>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'
import Container from '../Container.vue'
import PhoneFrame from '../PhoneFrame.vue'

const selectedIndex = ref(0)

// Icon components
const DeviceUserIcon = () => h('svg', { viewBox: '0 0 32 32', 'aria-hidden': 'true', class: 'text-white' }, [
  h('circle', { cx: 16, cy: 16, r: 16, fill: '#A3A3A3', 'fill-opacity': 0.2 }),
  h('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z', fill: '#737373' }),
  h('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z', fill: '#A3A3A3' })
])

const DeviceNotificationIcon = () => h('svg', { viewBox: '0 0 32 32', 'aria-hidden': 'true', class: 'text-white' }, [
  h('circle', { cx: 16, cy: 16, r: 16, fill: '#A3A3A3', 'fill-opacity': 0.2 }),
  h('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z', fill: '#A3A3A3' }),
  h('path', { d: 'M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z', fill: '#737373' })
])

const DeviceTouchIcon = () => h('svg', { viewBox: '0 0 32 32', fill: 'none', 'aria-hidden': 'true', class: 'text-white' }, [
  h('circle', { cx: 16, cy: 16, r: 16, fill: '#A3A3A3', 'fill-opacity': 0.2 }),
  h('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z', fill: '#737373' }),
  h('path', { d: 'M24 18a6 6 0 11-12 0 6 6 0 0112 0z', fill: '#06B6D4' })
])

// Feature screen components
const InviteScreen = () => h('div', { class: 'flex flex-col' }, [
  h('div', { class: 'flex justify-between px-4 pt-4' }, [
    h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'h-6 w-6', 'aria-hidden': 'true' }, [
      h('path', { d: 'M5 6h14M5 18h14M5 12h14', stroke: '#fff', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
    ])
  ]),
  h('div', { class: 'mt-6 px-4 text-white' }, [
    h('div', { class: 'text-2xl' }, 'Invită Prieteni')
  ]),
  h('div', { class: 'mt-6 flex-auto rounded-t-2xl bg-white' }, [
    h('div', { class: 'p-4' }, [
      h('div', { class: 'space-y-4' }, [
        ...[1, 2, 3, 4].map(i => 
          h('div', { key: i, class: 'flex items-center gap-3 rounded-lg bg-gray-50 p-3' }, [
            h('div', { class: 'h-10 w-10 rounded-full bg-gray-200' }),
            h('div', { class: 'flex-auto' }, [
              h('div', { class: 'text-sm font-medium text-gray-900' }, `Prieten ${i}`),
              h('div', { class: 'text-xs text-gray-500' }, 'prieten@example.com')
            ]),
            h('button', { class: 'rounded bg-cyan-500 px-3 py-1 text-xs font-semibold text-white' }, 'Invită')
          ])
        ),
        h('div', { class: 'mt-6 rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white' }, 'Invită persoană')
      ])
    ])
  ])
])

const StocksScreen = () => h('div', { class: 'flex flex-col' }, [
  h('div', { class: 'flex justify-between px-4 pt-4' }, [
    h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'h-6 w-6' }, [
      h('path', { d: 'M5 6h14M5 18h14M5 12h14', stroke: '#fff', 'stroke-width': '2', 'stroke-linecap': 'round' })
    ])
  ]),
  h('div', { class: 'mt-6 px-4 text-white' }, [
    h('div', { class: 'text-2xl' }, 'Acțiuni'),
    h('div', { class: 'text-sm text-gray-500' }, 'Martie 9, 2022')
  ]),
  h('div', { class: 'mt-6 flex-auto rounded-t-2xl bg-white' }, [
    h('div', { class: 'divide-y divide-gray-100' }, [
      ...[
        { name: 'Laravel', price: '4,098.01', change: '+4.98%', positive: true },
        { name: 'Tuple', price: '5,451.10', change: '-3.38%', positive: false },
        { name: 'Transistor', price: '4,098.41', change: '+6.25%', positive: true },
        { name: 'Diageo', price: '250.65', change: '+1.25%', positive: true },
        { name: 'StaticKit', price: '250.65', change: '-3.38%', positive: false },
        { name: 'Statamic', price: '5,040.85', change: '-3.11%', positive: false }
      ].map(stock =>
        h('div', { key: stock.name, class: 'flex items-center gap-4 px-4 py-3' }, [
          h('div', { class: 'h-10 w-10 flex-none rounded-full bg-gray-200' }),
          h('div', { class: 'flex-auto text-sm text-gray-900' }, stock.name),
          h('div', { class: 'flex-none text-right' }, [
            h('div', { class: 'text-sm font-medium text-gray-900' }, stock.price),
            h('div', { class: `text-xs/5 ${stock.positive ? 'text-cyan-500' : 'text-gray-500'}` }, stock.change)
          ])
        ])
      )
    ])
  ])
])

const InvestScreen = () => h('div', { class: 'flex flex-col' }, [
  h('div', { class: 'flex justify-between px-4 pt-4' }, [
    h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'h-6 w-6' }, [
      h('path', { d: 'M5 6h14M5 18h14M5 12h14', stroke: '#fff', 'stroke-width': '2', 'stroke-linecap': 'round' })
    ])
  ]),
  h('div', { class: 'mt-6 px-4 text-white' }, [
    h('div', { class: 'text-2xl' }, 'Buy $LA'),
    h('div', { class: 'text-sm' }, [
      h('span', { class: 'text-white' }, '$34.28'),
      ' per share'
    ])
  ]),
  h('div', { class: 'mt-6 flex-auto rounded-t-2xl bg-white' }, [
    h('div', { class: 'px-4 py-6' }, [
      h('div', { class: 'space-y-4' }, [
        ...[
          { label: 'Număr de acțiuni', value: '100' },
          { label: 'Preț curent de piață', value: '$34.28' },
          { label: 'Cost estimat', value: '$3,428.00' }
        ].map(item =>
          h('div', { key: item.label, class: 'flex justify-between border-b border-gray-100 pb-4' }, [
            h('div', { class: 'text-sm text-gray-500' }, item.label),
            h('div', { class: 'text-sm font-semibold text-gray-900' }, item.value)
          ])
        ),
        h('div', { class: 'rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white' }, 'Cumpără acțiuni')
      ])
    ])
  ])
])

const features = [
  {
    name: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: DeviceUserIcon,
    screen: InviteScreen
  },
  {
    name: 'Sed do eiusmod',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: DeviceNotificationIcon,
    screen: StocksScreen
  },
  {
    name: 'Ut enim ad minim',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    icon: DeviceTouchIcon,
    screen: InvestScreen
  }
]
</script>
