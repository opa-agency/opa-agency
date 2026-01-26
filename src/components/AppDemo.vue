<template>
  <div class="flex flex-col">
    <div class="flex justify-between px-4 pt-4">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6 flex-none">
        <path d="M5 6h14M5 18h14M5 12h14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <img src="@/images/Logo.png" alt="Logo" class="h-6 flex-none" />
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6 flex-none">
        <path d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div class="mt-6 flex-auto rounded-t-2xl bg-white">
      <div class="p-4">
        <div class="flex gap-2">
          <div class="text-xs/6 text-gray-500">Tailwind Labs, Inc.</div>
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
</template>

<script setup>
</script>
