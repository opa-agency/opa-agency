<template>
  <div class="relative w-full max-w-5xl drop-shadow-2xl">
    <!-- Mac top bezel -->
    <div class="bg-gray-900 rounded-t-3xl pt-3 px-12 relative z-10">
      <div class="flex items-center justify-center gap-2 pb-3">
        <div class="flex gap-2 absolute left-6">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span class="text-xs text-gray-500">{{ title }}</span>
      </div>
    </div>
    <!-- Mac content area -->
    <div class="bg-gray-900 px-3 pb-1 relative z-10">
      <div class="rounded-lg overflow-hidden bg-black h-[600px]">
        <iframe 
          :src="src"
          title="Portfolio example"
          class="w-full h-full border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
    <!-- Mac bottom bezel with stand -->
    <div class="bg-gray-900 rounded-b-3xl h-2 relative z-10"></div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Portfolio Example'
  }
})
</script>
