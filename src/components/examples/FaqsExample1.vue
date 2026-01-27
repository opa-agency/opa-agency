<template>
  <section id="faqs" aria-labelledby="faqs-title" class="border-t border-gray-200 py-20 sm:py-32">
    <Container>
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 id="faqs-title" class="text-3xl font-medium tracking-tight text-gray-900">
          Lorem ipsum dolor sit amet
        </h2>
        <p class="mt-2 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <a href="mailto:info@example.com" class="text-gray-900 underline">Lorem ipsum</a>.
        </p>
      </div>
      <ul role="list" class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
        <li v-for="(column, columnIndex) in faqs" :key="columnIndex">
          <ul role="list" class="space-y-10">
            <li v-for="(faq, faqIndex) in column" :key="faqIndex">
              <h3 class="text-lg/6 font-semibold text-gray-900">{{ faq.question }}</h3>
              <p class="mt-4 text-sm text-gray-700">{{ faq.answer }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script setup>
import Container from '../Container.vue'

const faqs = [
  [
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      question: 'Consectetur adipiscing elit?',
      answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      question: 'Sed do eiusmod tempor?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ],
  [
    {
      question: 'Ut enim ad minim veniam?',
      answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      question: 'Quis nostrud exercitation?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      question: 'Ullamco laboris nisi?',
      answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ],
  [
    {
      question: 'Duis aute irure dolor?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      question: 'Excepteur sint occaecat?',
      answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      question: 'Sunt in culpa?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]
]
</script>
