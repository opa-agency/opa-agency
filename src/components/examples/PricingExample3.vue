<template>
  <section id="pricing-comparison" aria-labelledby="pricing-comparison-title" class="border-t border-gray-200 bg-white py-20 sm:py-32">
    <Container>
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 id="pricing-comparison-title" class="text-3xl font-medium tracking-tight text-gray-900">
          Lorem ipsum dolor
        </h2>
        <p class="mt-2 text-lg text-gray-600">
          Consectetur adipiscing elit sed do eiusmod tempor.
        </p>
      </div>

      <!-- Desktop Table -->
      <div class="hidden sm:block overflow-x-auto">
        <table class="w-full border-collapse text-left text-sm">
          <colgroup>
            <col class="w-2/5" />
            <col v-for="plan in plans" :key="plan" :style="{ width: `calc(60% / ${plans.length})` }" />
          </colgroup>
          <thead>
            <tr>
              <th class="sticky top-0 bg-gray-100 py-5 pr-3 text-base font-medium text-gray-900">
                Lorem ipsum
              </th>
              <th v-for="plan in plans" :key="plan" 
                  class="sticky top-0 bg-gray-100 p-3 text-center font-semibold text-gray-900">
                {{ plan }}
              </th>
            </tr>
          </thead>
          <tbody v-for="(group, groupIndex) in features" :key="groupIndex">
            <tr>
              <th :colspan="plans.length + 1" scope="colgroup" 
                  class="border-t border-b border-gray-200 pt-14 pb-4 font-semibold text-gray-900">
                {{ group.title }}
              </th>
            </tr>
            <tr v-for="(feature, featureIndex) in group.features" :key="featureIndex" class="group">
              <th scope="row" class="border-t border-gray-200 py-4 pr-3 font-normal text-gray-700 group-first:border-gray-300">
                {{ feature.name }}
              </th>
              <td v-for="plan in plans" :key="plan" 
                  class="border-t border-gray-200 px-3 py-4 text-center text-gray-700 group-first:border-gray-300">
                <template v-if="typeof feature.value === 'object' && feature.value !== null">
                  <svg v-if="feature.value[plan] === true" class="mx-auto h-6 w-6 stroke-gray-900" viewBox="0 0 24 24" fill="none" stroke-width="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <svg v-else-if="feature.value[plan] === false" class="mx-auto h-6 w-6 stroke-gray-400" viewBox="0 0 24 24" fill="none" stroke-width="2">
                    <path d="M5 12h14" />
                  </svg>
                  <span v-else>{{ feature.value[plan] }}</span>
                </template>
                <template v-else>
                  <svg v-if="feature.value === true" class="mx-auto h-6 w-6 stroke-gray-900" viewBox="0 0 24 24" fill="none" stroke-width="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <svg v-else-if="feature.value === false" class="mx-auto h-6 w-6 stroke-gray-400" viewBox="0 0 24 24" fill="none" stroke-width="2">
                    <path d="M5 12h14" />
                  </svg>
                  <span v-else>{{ feature.value }}</span>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile Tabs -->
      <div class="sm:hidden">
        <div class="flex gap-4 border-b border-gray-200 mb-8">
          <button v-for="plan in plans" :key="plan" 
                  @click="selectedPlan = plan"
                  :class="[
                    'relative flex-1 border-b-2 px-2 py-4 text-sm font-medium transition-colors',
                    selectedPlan === plan 
                      ? 'border-gray-900 text-gray-900' 
                      : 'border-transparent text-gray-500'
                  ]">
            {{ plan }}
          </button>
        </div>
        
        <table class="w-full border-collapse text-left text-sm">
          <colgroup>
            <col class="w-3/4" />
            <col class="w-1/4" />
          </colgroup>
          <tbody v-for="(group, groupIndex) in features" :key="groupIndex">
            <tr>
              <th colspan="2" scope="colgroup" 
                  class="border-t border-b border-gray-200 pt-14 pb-4 font-semibold text-gray-900">
                {{ group.title }}
              </th>
            </tr>
            <tr v-for="(feature, featureIndex) in group.features" :key="featureIndex" class="group">
              <th scope="row" class="border-t border-gray-200 py-4 pr-3 font-normal text-gray-700 group-first:border-gray-300">
                {{ feature.name }}
              </th>
              <td class="border-t border-gray-200 px-3 py-4 text-center text-gray-700 group-first:border-gray-300">
                <template v-if="typeof feature.value === 'object' && feature.value !== null">
                  <svg v-if="feature.value[selectedPlan] === true" class="mx-auto h-6 w-6 stroke-gray-900" viewBox="0 0 24 24" fill="none" stroke-width="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <svg v-else-if="feature.value[selectedPlan] === false" class="mx-auto h-6 w-6 stroke-gray-400" viewBox="0 0 24 24" fill="none" stroke-width="2">
                    <path d="M5 12h14" />
                  </svg>
                  <span v-else>{{ feature.value[selectedPlan] }}</span>
                </template>
                <template v-else>
                  <svg v-if="feature.value === true" class="mx-auto h-6 w-6 stroke-gray-900" viewBox="0 0 24 24" fill="none" stroke-width="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <svg v-else-if="feature.value === false" class="mx-auto h-6 w-6 stroke-gray-400" viewBox="0 0 24 24" fill="none" stroke-width="2">
                    <path d="M5 12h14" />
                  </svg>
                  <span v-else>{{ feature.value }}</span>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Container from '../Container.vue'

const selectedPlan = ref('Lorem')

const plans = ['Lorem', 'Ipsum', 'Dolor']

const features = [
  {
    title: 'Consectetur adipiscing',
    features: [
      {
        name: 'Sed do eiusmod',
        value: { Lorem: '2', Ipsum: 'Tempor', Dolor: 'Tempor' }
      },
      { name: 'Incididunt ut labore', value: true },
      { name: 'Dolore magna aliqua', value: true },
      {
        name: 'Ut enim ad minim',
        value: { Lorem: false, Ipsum: true, Dolor: true }
      },
      {
        name: 'Veniam quis nostrud',
        value: { Lorem: false, Ipsum: true, Dolor: true }
      },
      {
        name: 'Exercitation ullamco',
        value: { Lorem: false, Ipsum: true, Dolor: true }
      }
    ]
  },
  {
    title: 'Laboris nisi',
    features: [
      { name: 'Aliquip ex ea', value: true },
      {
        name: 'Commodo consequat',
        value: { Lorem: false, Ipsum: true, Dolor: true }
      },
      {
        name: 'Duis aute irure',
        value: { Lorem: false, Ipsum: true, Dolor: true }
      },
      {
        name: 'Dolor in reprehenderit',
        value: { Lorem: false, Ipsum: true, Dolor: true }
      },
      {
        name: 'Voluptate velit esse',
        value: { Lorem: false, Ipsum: false, Dolor: true }
      }
    ]
  },
  {
    title: 'Cillum dolore',
    features: [
      {
        name: 'Eu fugiat nulla',
        value: { Lorem: 'Pariatur 5', Ipsum: true, Dolor: true }
      },
      {
        name: 'Excepteur sint',
        value: { Lorem: false, Ipsum: true, Dolor: true }
      },
      {
        name: 'Occaecat cupidatat',
        value: { Lorem: false, Ipsum: true, Dolor: true }
      },
      {
        name: 'Non proident sunt',
        value: { Lorem: false, Ipsum: false, Dolor: true }
      },
      {
        name: 'Culpa qui officia',
        value: { Lorem: false, Ipsum: false, Dolor: true }
      }
    ]
  },
  {
    title: 'Deserunt mollit',
    features: [
      { name: 'Anim id est', value: true },
      {
        name: 'Laborum et dolore',
        value: { Lorem: false, Ipsum: true, Dolor: true }
      },
      {
        name: 'Magna aliqua ut',
        value: { Lorem: false, Ipsum: false, Dolor: true }
      }
    ]
  }
]
</script>
