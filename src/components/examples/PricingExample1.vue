<template>
  <section id="pricing" aria-labelledby="pricing-title" class="border-t border-gray-200 bg-gray-100 py-20 sm:py-32">
    <Container>
      <div class="mx-auto max-w-2xl text-center">
        <h2 id="pricing-title" class="text-3xl font-medium tracking-tight text-gray-900">
          Lorem ipsum dolor sit amet.
        </h2>
        <p class="mt-2 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
        <div v-for="(plan, index) in plans" :key="plan.name" 
             :class="[
               'relative rounded-3xl p-8',
               plan.featured ? 'bg-gray-900' : 'bg-white',
               plan.featured ? 'ring-2 ring-cyan-500' : 'border border-gray-200'
             ]">
          <div class="flex items-center gap-x-4">
            <img src="@/images/Logo.png" alt="Pocket" class="h-10" />
            <h3 :class="['text-sm font-semibold', plan.featured ? 'text-white' : 'text-gray-900']">
              {{ plan.name }}
            </h3>
          </div>
          <p :class="['mt-4 text-sm', plan.featured ? 'text-gray-300' : 'text-gray-700']">
            {{ plan.description }}
          </p>
          <p class="mt-4 flex items-baseline gap-x-2">
            <span :class="['text-5xl font-bold tracking-tight', plan.featured ? 'text-white' : 'text-gray-900']">
              {{ plan.price }}
            </span>
            <span :class="['text-sm font-semibold', plan.featured ? 'text-gray-300' : 'text-gray-600']">
              pe lună
            </span>
          </p>
          <Button :href="plan.button.href" :color="plan.featured ? 'cyan' : 'gray'" class="mt-8 w-full">
            {{ plan.button.label }}
          </Button>
          <ul role="list" :class="['mt-10 space-y-4 text-sm', plan.featured ? 'text-gray-300' : 'text-gray-700']">
            <li v-for="feature in plan.features" :key="feature" class="flex gap-x-3">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none" :class="plan.featured ? 'text-cyan-500' : 'text-gray-400'">
                <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" fill="currentColor" />
                <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../Container.vue'
import Button from '../Button.vue'

const plans = [
  {
    name: 'Lorem',
    featured: false,
    price: '$0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    button: { label: 'Lorem ipsum', href: '#' },
    features: [
      'Sed do eiusmod tempor',
      'Incididunt ut labore',
      'Dolore magna aliqua',
      'Ut enim ad minim veniam'
    ],
    logomarkClassName: 'fill-gray-300'
  },
  {
    name: 'Ipsum',
    featured: false,
    price: '$7',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    button: { label: 'Dolor sit', href: '#' },
    features: [
      'Ut enim ad minim veniam',
      'Quis nostrud exercitation',
      'Ullamco laboris nisi',
      'Aliquip ex ea commodo',
      'Duis aute irure dolor'
    ],
    logomarkClassName: 'fill-gray-500'
  },
  {
    name: 'Dolor',
    featured: true,
    price: '$199',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    button: { label: 'Consectetur', href: '#' },
    features: [
      'Mollit anim id est',
      'Laborum et dolore magna',
      'Pariatur in voluptate',
      'Velit esse cillum dolore',
      'Eu fugiat nulla pariatur',
      'Sunt in culpa qui officia'
    ],
    logomarkClassName: 'fill-cyan-500'
  }
]
</script>
