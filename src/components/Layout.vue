<template>
  <div class="bg-gray-50 antialiased">
    <Header />
    <main class="flex-auto">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>
