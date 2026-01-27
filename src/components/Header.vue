<template>
  <header>
    <nav>
      <Container class="relative z-50 flex justify-between py-8">
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
              class="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900"
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
              <PopoverPanel class="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pt-32 pb-6 shadow-2xl shadow-gray-900/20">
                <div class="space-y-4">
                  <PopoverButton :as="RouterLink" :to="{ name: 'home' }" class="block text-base/7 tracking-tight text-gray-700">
                    Acasa
                  </PopoverButton>
                  <PopoverButton :as="RouterLink" to="/features" class="block text-base/7 tracking-tight text-gray-700">
                    Functionalitati
                  </PopoverButton>
                  <PopoverButton :as="RouterLink" to="/reviews" class="block text-base/7 tracking-tight text-gray-700">
                    Recenzii
                  </PopoverButton>
                  <PopoverButton :as="RouterLink" to="/pricing" class="block text-base/7 tracking-tight text-gray-700">
                    Preturi
                  </PopoverButton>
                  <PopoverButton :as="RouterLink" to="/faqs" class="block text-base/7 tracking-tight text-gray-700">
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
import { RouterLink } from 'vue-router'
</script>
