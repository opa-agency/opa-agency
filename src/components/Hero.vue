<template>
  <section class="relative overflow-hidden bg-gradient-to-bl from-slate-950 via-purple-900 to-cyan-900 py-12 sm:py-16">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl flex items-center justify-center">
        <!-- Mac Screen Frame -->
        <div class="relative w-full max-w-5xl drop-shadow-2xl">
          <!-- Mac top bezel -->
          <div class="bg-gray-900 rounded-t-3xl pt-3 px-12 relative z-10">
            <div class="flex items-center justify-center gap-2 pb-3">
              <div class="flex gap-2 absolute left-6">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span class="text-xs text-gray-500">Online Presence Agency</span>
            </div>
          </div>
          <!-- Mac content area -->
          <div class="bg-gray-900 px-3 pb-1 relative z-10">
            <div class="rounded-lg overflow-hidden bg-black">
              <img 
                src="@/images/hero-image.jpeg" 
                alt="Online Presence Agency Services Showcase" 
                class="w-full h-auto object-cover"
              />
            </div>
          </div>
          <!-- Mac bottom bezel with stand -->
          <div class="bg-gray-900 rounded-b-3xl h-2 relative z-10"></div>
          <!-- Mac stand -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Container from './Container.vue'
</script>
