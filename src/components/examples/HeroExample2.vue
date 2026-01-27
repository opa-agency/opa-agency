<template>
  <section class="relative overflow-hidden bg-gradient-to-tr from-blue-950 via-indigo-900 to-slate-900 py-12 sm:py-16">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content Section -->
          <div class="space-y-6">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Lorem <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ipsum</span> Dolor
            </h1>
            <p class="text-lg text-slate-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                Lorem
              </button>
              <button class="px-8 py-3 border-2 border-slate-400 text-slate-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300">
                Ipsum
              </button>
            </div>
          </div>

          <!-- Mac Screen Frame -->
          <div class="relative drop-shadow-2xl">
            <!-- Mac top bezel -->
            <div class="bg-gray-800 rounded-t-3xl pt-3 px-12 relative z-10">
              <div class="flex items-center justify-center gap-2 pb-3">
                <div class="flex gap-2 absolute left-6">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span class="text-xs text-gray-400">www.opaagency.ro</span>
              </div>
            </div>
            <!-- Mac content area -->
            <div class="bg-gray-800 px-3 pb-1 relative z-10">
              <div class="rounded-lg overflow-hidden bg-black">
                <img 
                  src="@/images/hero-image.jpeg" 
                  alt="OPA Agency - Servicii Web și Marketing" 
                  class="w-full h-auto object-cover"
                />
              </div>
            </div>
            <!-- Mac bottom bezel with stand -->
            <div class="bg-gray-800 rounded-b-3xl h-2 relative z-10"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
