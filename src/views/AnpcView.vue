<template>
  <div class="py-16">
    <Container>
      <div class="mx-auto max-w-4xl space-y-10">
        <header class="space-y-3 text-center">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ANPC</h1>
        </header>

        <div class="grid gap-8 md:grid-cols-2">
          <a
            href="https://reclamatiisal.anpc.ro/"
            target="_blank"
            rel="noreferrer"
            class="group block overflow-hidden"
          >
            <img :src="salImage" alt="ANPC SAL" class="h-auto max-h-96 w-auto object-contain p-4" />
          </a>

          <a
            href="https://consumer-redress.ec.europa.eu/site-relocation_en?event=main.home2.show&lng=RO"
            target="_blank"
            rel="noreferrer"
            class="group block overflow-hidden"
          >
            <img :src="solImage" alt="ANPC SOL" class="h-auto max-h-96 w-auto object-contain p-4" />
          </a>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from '../components/Container.vue'
import salImage from '@/images/anpc/sal_1.webp'
import solImage from '@/images/anpc/sol_1.webp'
</script>
