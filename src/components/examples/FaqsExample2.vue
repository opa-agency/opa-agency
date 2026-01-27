<template>
  <section id="faqs" aria-labelledby="faqs-title" class="border-t border-gray-200 bg-white py-20 sm:py-32">
    <Container>
      <div class="mx-auto max-w-3xl">
        <div class="mb-12">
          <h2 id="faqs-title" class="text-3xl font-medium tracking-tight text-gray-900 mb-4">
            Lorem ipsum dolor sit
          </h2>
          <p class="text-lg text-gray-600">
            Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div class="divide-y divide-gray-200 border-y border-gray-200">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="border-t border-gray-200"
          >
            <button
              @click="toggleFaq(index)"
              type="button"
              class="flex w-full items-start justify-between gap-6 py-4 text-left text-base text-gray-900 hover:text-cyan-600 transition-colors"
            >
              <span class="font-medium">{{ faq.question }}</span>
              <svg 
                v-if="!expandedFaqs[index]"
                class="h-6 w-6 flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <svg 
                v-else
                class="h-6 w-6 flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15" />
              </svg>
            </button>
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-96 opacity-100"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="max-h-96 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div 
                v-if="expandedFaqs[index]"
                class="overflow-hidden"
              >
                <p class="pr-12 pb-4 text-sm text-gray-600">
                  {{ faq.answer }}
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Container from '../Container.vue'

const expandedFaqs = ref({})

const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet?',
    answer: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  },
  {
    question: 'Sed ut perspiciatis unde omnis?',
    answer: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    question: 'Excepteur sint occaecat cupidatat?',
    answer: 'Non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.'
  },
  {
    question: 'Totam rem aperiam eaque ipsa?',
    answer: 'Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.'
  }
]

function toggleFaq(index) {
  expandedFaqs.value[index] = !expandedFaqs.value[index]
}
</script>
