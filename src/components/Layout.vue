<template>
  <div class="flex min-h-screen flex-col bg-black antialiased">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>
