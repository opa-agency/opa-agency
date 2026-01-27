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

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.name"
          class="flex flex-col justify-between gap-6 rounded-lg bg-gray-900/5 p-6"
        >
          <blockquote class="flex flex-col gap-4 text-sm text-gray-700">
            <p>"{{ testimonial.quote }}"</p>
          </blockquote>
          <div class="flex items-center gap-4">
            <img 
              :src="testimonial.image"
              :alt="testimonial.name"
              class="h-12 w-12 rounded-full object-cover bg-gray-100"
            />
            <div>
              <p class="font-semibold text-gray-900">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-600">{{ testimonial.byline }}</p>
            </div>
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
    byline: 'Dolor Sit',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Consectetur Adipiscing',
    byline: 'Elit Sed',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Duis Aute',
    byline: 'Irure Dolor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    name: 'Excepteur Sint',
    byline: 'Occaecat Cupidatat',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
    quote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    name: 'Sed Ut Perspiciatis',
    byline: 'Unde Omnis',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  },
  {
    name: 'Totam Rem Aperiam',
    byline: 'Eaque Ipsa',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    quote: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  }
]
</script>
