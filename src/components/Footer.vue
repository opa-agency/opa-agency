<template>
  <footer class="border-t border-gray-200">
    <Container>
      <div class="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
        <div class="flex flex-wrap items-center justify-between w-full">
          <RouterLink :to="{ name: 'home' }" class="flex items-center text-gray-900">
            <img src="@/images/Logo.png" alt="Online Presence Agency" class="h-10 flex-none" />
            <div class="ml-4">
              <p class="text-base font-semibold">Online Presence Agency</p>
              <p class="mt-1 text-sm">Construiește-ți Brandul Digital</p>
            </div>
          </RouterLink>
          <nav class="mt-11 flex flex-col gap-4 text-sm text-gray-600 md:flex-row md:gap-6">
            <RouterLink
              :to="{ name: 'terms' }"
              :class="['transition-colors hover:text-gray-900', isActive('/termeni-si-conditii') ? 'text-gray-900 font-semibold' : 'text-gray-600']"
            >
              Termeni si Conditii
            </RouterLink>
            <RouterLink
              :to="{ name: 'privacy' }"
              :class="['transition-colors hover:text-gray-900', isActive('/politica-de-confidentialitate') ? 'text-gray-900 font-semibold' : 'text-gray-600']"
            >
              Politica de Confidentialitate
            </RouterLink>
            <RouterLink
              :to="{ name: 'delivery' }"
              :class="['transition-colors hover:text-gray-900', isActive('/politica-de-livrare') ? 'text-gray-900 font-semibold' : 'text-gray-600']"
            >
              Politica de Livrare
            </RouterLink>
            <RouterLink
              :to="{ name: 'contact' }"
              :class="['transition-colors hover:text-gray-900', isActive('/contact') ? 'text-gray-900 font-semibold' : 'text-gray-600']"
            >
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
import { RouterLink, useRoute } from 'vue-router'
import Container from './Container.vue'

const route = useRoute()
const isActive = (path) => route.path.startsWith(path)
</script>
