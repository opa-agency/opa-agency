<template>
  <header class="sticky top-0 z-50 bg-gray-900 text-gray-100">
    <nav>
      <Container class="relative z-50 flex justify-between items-center py-6 border-b border-gray-800">
        <div class="relative z-10">
          <RouterLink :to="{ name: 'home' }" aria-label="Home">
            <Logo class="h-10 w-auto" />
          </RouterLink>
        </div>
        <div class="hidden lg:flex lg:gap-10">
          <NavLinks />
        </div>
        <div class="flex lg:hidden items-center gap-6">
          <Popover class="lg:hidden" v-slot="{ close: closePopover }">
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
                  <RouterLink
                    :to="{ name: 'home' }"
                    @click="closePopover"
                    :class="['block text-base/7 tracking-tight', isActive('/') ? 'text-white font-semibold' : 'text-gray-300']"
                  >
                    Acasa
                  </RouterLink>
                  <RouterLink
                    to="/despre-noi"
                    @click="closePopover"
                    :class="['block text-base/7 tracking-tight', isActive('/despre-noi') ? 'text-white font-semibold' : 'text-gray-300']"
                  >
                    Despre Noi
                  </RouterLink>
                  <RouterLink
                    to="/servicii"
                    @click="closePopover"
                    :class="['block text-base/7 tracking-tight', isActive('/servicii') ? 'text-white font-semibold' : 'text-gray-300']"
                  >
                    Servicii
                  </RouterLink>
                  
                  <!-- Portofoliu Dropdown -->
                  <div class="space-y-2">
                    <button
                      @click="toggleMobileDropdown"
                      :class="['flex items-center justify-between w-full text-base/7 tracking-tight', isDropdownActive() ? 'text-white font-semibold' : 'text-gray-300']"
                    >
                      <span>Portofoliu</span>
                      <svg 
                        :class="['w-4 h-4 transition-transform', mobileDropdownOpen ? 'rotate-180' : '']"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <transition
                      enter-active-class="transition duration-200 ease-out"
                      enter-from-class="opacity-0 max-h-0"
                      enter-to-class="opacity-100 max-h-32"
                      leave-active-class="transition duration-150 ease-in"
                      leave-from-class="opacity-100 max-h-32"
                      leave-to-class="opacity-0 max-h-0"
                    >
                      <div v-if="mobileDropdownOpen" class="pl-4 space-y-2 overflow-hidden">
                        <RouterLink
                          to="/servicii/one-page-website/exemple"
                          @click="closePopover"
                          :class="['block text-sm/7 tracking-tight', isActive('/servicii/one-page-website/exemple') ? 'text-white font-semibold' : 'text-gray-400']"
                        >
                          One Page Examples
                        </RouterLink>
                        <RouterLink
                          to="/servicii/multi-page-website/exemple"
                          @click="closePopover"
                          :class="['block text-sm/7 tracking-tight', isActive('/servicii/multi-page-website/exemple') ? 'text-white font-semibold' : 'text-gray-400']"
                        >
                          Multi Page Examples
                        </RouterLink>
                      </div>
                    </transition>
                  </div>
                  
                  <RouterLink
                    to="/contact"
                    @click="closePopover"
                    :class="['block text-base/7 tracking-tight', isActive('/contact') ? 'text-white font-semibold' : 'text-gray-300']"
                  >
                    Contact
                  </RouterLink>
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
import { ref } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import Container from './Container.vue'
import Logo from './Logo.vue'
import NavLinks from './NavLinks.vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const mobileDropdownOpen = ref(false)

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const isDropdownActive = () => {
  return route.path.startsWith('/servicii/one-page-website/exemple') || route.path.startsWith('/servicii/multi-page-website/exemple')
}

const toggleMobileDropdown = () => {
  mobileDropdownOpen.value = !mobileDropdownOpen.value
}
</script>
