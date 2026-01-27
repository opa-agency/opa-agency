<template>
  <div class="py-16">
    <Container>
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          INFORMAȚII DE CONTACT
        </h1>

        <div class="mt-8 space-y-6 text-base text-gray-700 leading-relaxed">
          <div>
            <p class="font-semibold text-gray-900">Denumire firmă:</p>
            <p class="mt-1">[DENUMIRE SRL]</p>
          </div>

          <div>
            <p class="font-semibold text-gray-900">Email:</p>
            <p class="mt-1">[emailul tău]</p>
          </div>

          <div>
            <p class="font-semibold text-gray-900">Program:</p>
            <p class="mt-1">Luni – Vineri, 09:00 – 17:00</p>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from '../components/Container.vue'
</script>
