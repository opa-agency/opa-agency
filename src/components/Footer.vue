<template>
  <footer class="border-t border-white/10 bg-gray-900 text-gray-100">
    <Container>
      <div class="flex flex-col items-start justify-between gap-y-12 pt-8 pb-6 lg:flex-row lg:items-center lg:pt-8">
        <div class="flex flex-wrap items-center justify-between w-full md:space-y-12 space-y-reverse">
          <nav class="flex flex-col gap-4 text-sm text-gray-300">
            <RouterLink
              :to="{ name: 'terms' }"
              :class="['transition-colors hover:text-white', isActive('/termeni-si-conditii') ? 'text-white font-semibold' : 'text-gray-300']"
            >
              Termeni si Conditii
            </RouterLink>
            <RouterLink
              :to="{ name: 'privacy' }"
              :class="['transition-colors hover:text-white', isActive('/politica-de-confidentialitate') ? 'text-white font-semibold' : 'text-gray-300']"
            >
              Politica de Confidentialitate
            </RouterLink>
            <RouterLink
              :to="{ name: 'cookies' }"
              :class="['transition-colors hover:text-white', isActive('/politica-de-cookie-uri') ? 'text-white font-semibold' : 'text-gray-300']"
            >
              Politica de Cookie-uri
            </RouterLink>
            <RouterLink
              :to="{ name: 'delivery' }"
              :class="['transition-colors hover:text-white', isActive('/politica-de-livrare') ? 'text-white font-semibold' : 'text-gray-300']"
            >
              Politica de Livrare
            </RouterLink>
            <RouterLink
              :to="{ name: 'contact' }"
              :class="['transition-colors hover:text-white', isActive('/contact') ? 'text-white font-semibold' : 'text-gray-300']"
            >
              Informatii de Contact
            </RouterLink>
              <RouterLink
                :to="{ name: 'anpc' }"
                :class="['transition-colors hover:text-white', isActive('/anpc') ? 'text-white font-semibold' : 'text-gray-300']"
              >
                ANPC
              </RouterLink>
          </nav>
          <RouterLink :to="{ name: 'home' }" class="flex items-center text-white mt-11 md:mt-0">
            <img src="@/images/Logo.png" alt="Online Presence Agency" class="h-10 flex-none" />
            <div class="ml-4">
              <p class="text-base font-semibold">Online Presence Agency</p>
              <p class="mt-1 text-sm text-gray-300">Construiește-ți Brandul Digital</p>
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="flex flex-col items-center border-t border-white/10 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
        <p class="mt-6 text-sm text-gray-400 md:mt-0">
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
