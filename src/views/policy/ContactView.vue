<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-bl from-slate-950 via-purple-900 to-cyan-900">
    <!-- Pattern overlay -->
    <div class="absolute inset-0 opacity-100">
      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <Container class="relative z-10 py-16">
      <GlossyContainer>
        <h1 class="text-3xl font-bold tracking-tight text-white mb-8 text-center">
          CONTACT
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <!-- Left side: Forms -->
          <div class="order-1">
            <!-- Tab Menu -->
            <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-8 border-b border-purple-400 pb-4">
              <button
                @click="activeTab = 'service'"
                :class="[
                  'px-6 py-3 rounded-lg font-semibold transition-colors',
                  activeTab === 'service'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                ]"
              >
                Cerere de servicii
              </button>
              <button
                @click="activeTab = 'general'"
                :class="[
                  'px-6 py-3 rounded-lg font-semibold transition-colors',
                  activeTab === 'general'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                ]"
              >
                Contact general
              </button>
            </div>

            <!-- Forms -->
            <div>
              <ServiceRequestForm v-if="activeTab === 'service'" />
              <GeneralContactForm v-if="activeTab === 'general'" />
            </div>
          </div>

          <!-- Right side: Contact Info -->
          <div class="order-2 md:border-l md:border-purple-400 md:pl-8">
            <h2 class="text-xl font-bold text-white mb-6">Informații de contact</h2>
            <div class="space-y-4 text-gray-300">
              <div>
                <p class="font-semibold text-white">Denumire firmă:</p>
                <p class="mt-1">[DENUMIRE SRL]</p>
              </div>

              <div>
                <p class="font-semibold text-white">Email:</p>
                <a href="mailto:agencyonlinepresence@gmail.com" class="mt-1 block text-purple-400 hover:text-purple-300 transition-colors">
                  agencyonlinepresence@gmail.com
                </a>
              </div>

              <div>
                <p class="font-semibold text-white">Program:</p>
                <p class="mt-1">Luni – Vineri, 09:00 – 17:00</p>
              </div>
            </div>
          </div>
        </div>
      </GlossyContainer>
    </Container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Container from '@/components/Container.vue'
import GlossyContainer from '@/components/GlossyContainer.vue'
import ServiceRequestForm from '@/components/forms/ServiceRequestForm.vue'
import GeneralContactForm from '@/components/forms/GeneralContactForm.vue'

const activeTab = ref('service')
</script>
