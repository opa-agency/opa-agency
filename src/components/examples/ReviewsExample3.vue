<template>
  <section id="testimonials-grid" aria-labelledby="testimonials-title" class="border-t border-gray-200 bg-white py-20 sm:py-32">
    <Container>
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 id="testimonials-title" class="text-3xl font-medium tracking-tight text-gray-900">
          Lorem ipsum dolor sit
        </h2>
        <p class="mt-2 text-lg text-gray-600">
          Consectetur adipiscing elit sed do eiusmod tempor incididunt.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="testimonial in testimonials" :key="testimonial.name" 
             class="flex flex-col rounded-xl bg-gray-900/5 p-6">
          <div class="mb-6 overflow-hidden rounded-lg">
            <img 
              :src="testimonial.image" 
              :alt="testimonial.name"
              class="w-full h-48 object-cover"
            />
          </div>
          <blockquote class="flex-1 text-sm text-gray-700 mb-6">
            "{{ testimonial.review }}"
          </blockquote>
          <div class="text-sm">
            <p class="font-semibold text-gray-900">{{ testimonial.name }}</p>
            <p class="text-gray-600">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../Container.vue'

const testimonials = [
  {
    name: 'Lorem Ipsum',
    role: 'Dolor Sit',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop&crop=faces',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Consectetur Adipiscing',
    role: 'Elit Sed',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces',
    review: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Duis Aute',
    role: 'Irure Dolor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=faces',
    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
]
</script>
