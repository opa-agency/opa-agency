<template>
  <section class="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
    <Container>
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
        <div class="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
          <h1 class="text-4xl font-medium tracking-tight text-gray-900">
            Lorem ipsum dolor sit amet
          </h1>
          <p class="mt-6 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
          <div class="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0 hidden lg:block">
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
          <div class="-mx-4 h-auto px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 lg:mask-[linear-gradient(to_bottom,white_60%,transparent)] xl:-bottom-32">
            <PhoneFrame :dark-case="false" class="mx-auto max-w-[366px]">
              <div class="flex flex-col">
                <div class="flex justify-between px-4 pt-4">
                  <img src="@/images/Logo.png" alt="Logo" class="h-6 flex-none" />
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6 flex-none">
                    <path d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div class="mt-6 flex-auto rounded-t-2xl bg-white">
                  <div class="p-4">
                    <div class="flex gap-2">
                      <div class="text-xs/6 text-gray-500">Brand Labs, Inc.</div>
                      <div class="text-sm text-gray-900">$CSS</div>
                      <svg viewBox="0 0 24 24" class="ml-auto h-6 w-6" fill="none">
                        <path d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM12 9v6M15 12H9" stroke="#171717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <div class="mt-3 border-t border-gray-200 pt-5">
                      <div class="flex items-baseline gap-2">
                        <div class="text-2xl tracking-tight text-gray-900 tabular-nums">752.56</div>
                        <div class="text-sm text-gray-900">USD</div>
                        <div class="ml-auto text-sm tracking-tight tabular-nums text-cyan-500">+12.21%</div>
                      </div>
                      <div class="mt-6 flex gap-4 text-xs text-gray-500">
                        <div>1D</div>
                        <div>5D</div>
                        <div class="font-semibold text-cyan-600">1M</div>
                        <div>6M</div>
                        <div>1Y</div>
                        <div>5Y</div>
                      </div>
                      <div class="mt-3 rounded-lg bg-gray-50 ring-1 ring-black/5 ring-inset">
                        <svg viewBox="0 0 286 208" class="w-full" fill="none">
                          <defs>
                            <linearGradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stop-color="#13B5C8" />
                              <stop offset="100%" stop-color="#13B5C8" stop-opacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M16 160 L30 145 L50 155 L70 130 L90 140 L110 115 L130 125 L150 100 L170 110 L190 85 L210 95 L230 70 L250 80 L270 55" stroke="#06b6d4" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M16 160 L30 145 L50 155 L70 130 L90 140 L110 115 L130 125 L150 100 L170 110 L190 85 L210 95 L230 70 L250 80 L270 55 V 208 H 16 Z" fill="url(#chart-gradient)" opacity="0.5" />
                        </svg>
                      </div>
                      <div class="mt-4 rounded-lg bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white">
                        Trade
                      </div>
                      <div class="mt-3 divide-y divide-gray-100 text-sm">
                        <div class="flex justify-between py-1">
                          <div class="text-gray-500">Open</div>
                          <div class="font-medium text-gray-900">6,387.55</div>
                        </div>
                        <div class="flex justify-between py-1">
                          <div class="text-gray-500">Closed</div>
                          <div class="font-medium text-gray-900">6,487.09</div>
                        </div>
                        <div class="flex justify-between py-1">
                          <div class="text-gray-500">Low</div>
                          <div class="font-medium text-gray-900">6,322.01</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PhoneFrame>
          </div>
        </div>
        <BrandsScroll />
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../Container.vue'
import PhoneFrame from '../PhoneFrame.vue'
import BrandsScroll from '../BrandsScroll.vue'
</script>
