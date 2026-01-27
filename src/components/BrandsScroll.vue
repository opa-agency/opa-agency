<template>
  <div class="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
    <p class="text-center text-sm font-semibold text-gray-900 lg:text-left">
      Brandurile care lucrează activ cu noi
    </p>
    <div class="mx-auto mt-8 max-w-xl overflow-hidden lg:mx-0">
      <div 
        ref="scrollRef"
        class="inline-flex gap-x-2 will-change-transform animate-scroll-horizontal"
        :style="{ '--scroll-width': `${scrollWidth}px` }"
      >
        <template v-for="n in 3" :key="`set-${n}`">
          <template v-for="(brand, index) in brands" :key="`brand-${n}-${index}`">
            <div 
              :class="[
                'flex flex-shrink-0',
                brand.hasBackground ? 'rounded-md bg-gray-900 px-3 py-2' : 'px-3 py-2'
              ]"
            >
              <img :src="brand.logo" :alt="brand.name" class="h-8" />
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import nortiastoreLogo from '@/images/logos/nortiastore.png'
import smartdealzzLogo from '@/images/logos/smartdealzz.png'
import trendySaleLogo from '@/images/logos/trendy_sale.png'
import trustyshopLogo from '@/images/logos/trustyshop.png'

const brands = [
  { name: 'Nortiastore', logo: nortiastoreLogo, hasBackground: false },
  { name: 'Smartdealzz', logo: smartdealzzLogo, hasBackground: true },
  { name: 'Trendy Sale', logo: trendySaleLogo, hasBackground: false },
  { name: 'Trustyshop', logo: trustyshopLogo, hasBackground: true }
]

const scrollRef = ref(null)
const scrollWidth = ref(0)

onMounted(() => {
  if (!scrollRef.value) return

  const updateWidth = () => {
    // Calculate the width of one complete set (total width / 3)
    const totalWidth = scrollRef.value?.scrollWidth ?? 0
    scrollWidth.value = totalWidth / 3
  }

  const resizeObserver = new ResizeObserver(updateWidth)
  resizeObserver.observe(scrollRef.value)
  
  // Initial calculation with delay to ensure images are loaded
  setTimeout(updateWidth, 100)

  onUnmounted(() => {
    resizeObserver.disconnect()
  })
})
</script>


