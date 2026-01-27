<template>
  <header class="bg-gray-900 text-gray-100">
    <nav>
      <Container class="relative z-50 flex justify-between py-6">
        <div class="relative z-10 flex items-center gap-16">
          <RouterLink :to="{ name: 'home' }" aria-label="Home">
            <Logo class="h-10 w-auto" />
          </RouterLink>
          <div class="hidden lg:flex lg:gap-10">
            <NavLinks />
          </div>
        </div>
        <div class="flex items-center gap-6">
          <Popover class="lg:hidden">
            <PopoverButton
              class="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-100 p-2 hover:bg-white/10 hover:stroke-white active:stroke-white"
              aria-label="Toggle site navigation"
            >
              <template #default="{ open }">
                <svg v-if="open" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6">
                  <path d="M17 14l-5-5-5 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" />
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6">
                  <path d="M5 6h14M5 18h14M5 12h14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" />
                </svg>
              </template>
            </PopoverButton>
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-8"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-8"
            >
              <PopoverPanel class="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-900 px-6 pt-32 pb-6 shadow-2xl shadow-black/40 ring-1 ring-white/10">
                <div class="space-y-4">
                  <PopoverButton
                    :as="RouterLink"
                    :to="{ name: 'home' }"
                    :class="['block text-base/7 tracking-tight', isActive('/') ? 'text-white font-semibold' : 'text-gray-300']"
                  >
                    Acasa
                  </PopoverButton>
                  <PopoverButton
                    :as="RouterLink"
                    to="/features"
                    :class="['block text-base/7 tracking-tight', isActive('/features') ? 'text-white font-semibold' : 'text-gray-300']"
                  >
                    Functionalitati
                  </PopoverButton>
                  <PopoverButton
                    :as="RouterLink"
                    to="/reviews"
                    :class="['block text-base/7 tracking-tight', isActive('/reviews') ? 'text-white font-semibold' : 'text-gray-300']"
                  >
                    Recenzii
                  </PopoverButton>
                  <PopoverButton
                    :as="RouterLink"
                    to="/pricing"
                    :class="['block text-base/7 tracking-tight', isActive('/pricing') ? 'text-white font-semibold' : 'text-gray-300']"
                  >
                    Preturi
                  </PopoverButton>
                  <PopoverButton
                    :as="RouterLink"
                    to="/faqs"
                    :class="['block text-base/7 tracking-tight', isActive('/faqs') ? 'text-white font-semibold' : 'text-gray-300']"
                  >
                    Intrebari frecvente
                  </PopoverButton>
                </div>
                <div class="mt-8 flex flex-col gap-4">
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <div class="flex items-center gap-6 max-lg:hidden">
          </div>
        </div>
      </Container>
    </nav>
  </header>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import Container from './Container.vue'
import Logo from './Logo.vue'
import NavLinks from './NavLinks.vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>
