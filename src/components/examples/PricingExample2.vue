<template>
  <section id="pricing-multi-tier" aria-labelledby="pricing-multi-tier-title" class="border-t border-gray-200 bg-white py-20 sm:py-32">
    <Container>
      <div class="mx-auto max-w-2xl text-center">
        <h2 id="pricing-multi-tier-title" class="text-3xl font-medium tracking-tight text-gray-900">
          Lorem ipsum dolor sit amet
        </h2>
        <p class="mt-2 text-lg text-gray-600">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-2 sm:mt-20 lg:max-w-none lg:grid-cols-3">
        <div v-for="plan in plans" :key="plan.name" 
             class="flex flex-col justify-between gap-6 rounded-xl bg-gray-900/5 p-6">
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl tracking-tight text-gray-900">{{ plan.name }}</h3>
              <div v-if="plan.badge" 
                   class="order-last inline-flex rounded-full bg-gray-900/10 px-2 text-xs/6 font-medium text-gray-900">
                {{ plan.badge }}
              </div>
            </div>
            
            <p class="mt-1 inline-flex gap-1 text-base">
              <span class="text-gray-900 font-semibold">{{ plan.price }}</span>
              <span v-if="plan.period" class="text-gray-500">{{ plan.period }}</span>
            </p>

            <div class="mt-4 text-sm text-gray-700">
              <p>{{ plan.description }}</p>
            </div>

            <ul class="mt-4 space-y-2 text-sm text-gray-700">
              <li v-for="feature in plan.features" :key="feature" class="flex gap-4">
                <svg class="h-6 w-6 shrink-0 stroke-gray-900" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p>{{ feature }}</p>
              </li>
            </ul>
          </div>

          <Button 
            :href="plan.cta.href" 
            :color="plan.featured ? 'cyan' : 'gray'"
            class="w-full">
            {{ plan.cta.label }}
          </Button>
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
    price: 'Gratis',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
    features: [
      'Ut enim ad minim',
      'Quis nostrud exercitation',
      'Ullamco laboris nisi',
      'Aliquip ex ea commodo'
    ],
    cta: { label: 'Lorem ipsum', href: '#' },
    featured: false
  },
  {
    name: 'Ipsum',
    price: '$29',
    period: '/lună',
    description: 'Duis aute irure dolor in reprehenderit in voluptate.',
    badge: 'Lorem ipsum',
    features: [
      'Tot din Lorem',
      'Velit esse cillum',
      'Dolore eu fugiat',
      'Nulla pariatur excepteur',
      'Sint occaecat cupidatat',
      'Non proident sunt'
    ],
    cta: { label: 'Începe', href: '#' },
    featured: true
  },
  {
    name: 'Dolor',
    price: '$99',
    period: '/lună',
    description: 'Excepteur sint occaecat cupidatat non proident culpa.',
    features: [
      'Tot din Ipsum',
      'Mollit anim id est',
      'Laborum consectetur',
      'Adipiscing elit sed',
      'Tempor incididunt ut',
      'Eiusmod magna aliqua',
      'Veniam quis nostrud'
    ],
    cta: { label: 'Contactează-ne', href: '#' },
    featured: false
  }
]
</script>
