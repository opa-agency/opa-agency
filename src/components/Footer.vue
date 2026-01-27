<template>
  <footer class="border-t border-gray-200">
    <Container>
      <div class="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
        <div class="flex flex-wrap items-center justify-between w-full">
          <div class="flex items-center text-gray-900">
            <img src="@/images/Logo.png" alt="Online Presence Agency" class="h-10 flex-none" />
            <div class="ml-4">
              <p class="text-base font-semibold">Online Presence Agency</p>
              <p class="mt-1 text-sm">Construiește-ți Brandul Digital</p>
            </div>
          </div>
          <nav class="mt-11 flex flex-col gap-4 text-sm text-gray-600 md:flex-row md:gap-6">
            <RouterLink :to="{ name: 'terms' }" class="hover:text-gray-900 transition-colors">
              Termeni si Conditii
            </RouterLink>
            <RouterLink :to="{ name: 'privacy' }" class="hover:text-gray-900 transition-colors">
              Politica de Confidentialitate
            </RouterLink>
            <RouterLink :to="{ name: 'delivery' }" class="hover:text-gray-900 transition-colors">
              Politica de Livrare
            </RouterLink>
            <RouterLink :to="{ name: 'contact' }" class="hover:text-gray-900 transition-colors">
              Informatii de Contact
            </RouterLink>
          </nav>
        </div>
      </div>
      <div class="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
        <p class="mt-6 text-sm text-gray-500 md:mt-0">
          &copy; Drepturi de autor Online Presance Agency, {{ new Date().getFullYear() }}. Toate drepturile rezervate.
        </p>
      </div>
    </Container>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Container from './Container.vue'
</script>
