<template>
  <section id="testimonial-two-column" aria-labelledby="testimonial-title" class="border-t border-gray-200 bg-white py-20 sm:py-32">
    <Container>
      <div class="grid grid-cols-1 gap-x-2 rounded-xl bg-gray-900/5 p-2 lg:grid-cols-2">
        <div class="flex flex-col items-start justify-between gap-10 p-6 text-gray-900 sm:p-10">
          <blockquote class="relative flex flex-col gap-4 text-2xl leading-9 text-pretty">
            <p>
              "{{ quote }}"
            </p>
          </blockquote>
          <div class="text-sm">
            <p class="font-semibold">{{ name }}</p>
            <p class="text-gray-700">{{ byline }}</p>
          </div>
        </div>
        <div class="flex overflow-hidden rounded-sm outline -outline-offset-1 outline-black/5 aspect-[4/3]">
          <img 
            :src="imageSrc" 
            :alt="imageAlt" 
            class="w-full h-full object-cover object-center bg-gray-100"
            width="1400"
            height="1000"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../Container.vue'

const quote = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.'
const name = 'Lorem Ipsum'
const byline = 'Dolor Sit Amet'
const imageSrc = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=faces'
const imageAlt = 'Lorem ipsum'
</script>
