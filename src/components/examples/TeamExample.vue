<template>
  <section id="team" aria-labelledby="team-title" class="border-t border-gray-200 bg-white py-20 sm:py-32">
    <Container>
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 id="team-title" class="text-3xl font-medium tracking-tight text-gray-900">
          Lorem ipsum dolor sit
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <ul role="list" class="grid grid-cols-2 gap-x-2 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        <li 
          v-for="member in teamMembers" 
          :key="member.name"
          class="flex flex-col gap-4 text-sm"
        >
          <div class="aspect-[3/4] w-full overflow-hidden rounded-sm outline -outline-offset-1 outline-gray-900/10">
            <img 
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <p class="font-semibold text-gray-900">{{ member.name }}</p>
            <p class="text-gray-600">{{ member.byline }}</p>
          </div>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script setup>
import Container from '../Container.vue'

const teamMembers = [
  {
    name: 'Lorem Ipsum',
    byline: 'Dolor Sit',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
  },
  {
    name: 'Consectetur Adipiscing',
    byline: 'Elit Sed',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop'
  },
  {
    name: 'Duis Aute',
    byline: 'Irure Dolor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop'
  },
  {
    name: 'Excepteur Sint',
    byline: 'Occaecat Cupidatat',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop'
  },
  {
    name: 'Sed Ut Perspiciatis',
    byline: 'Unde Omnis',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
  },
  {
    name: 'Totam Rem',
    byline: 'Aperiam Eaque',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop'
  },
  {
    name: 'Ipsa Quae Ab',
    byline: 'Illo Inventore',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop'
  },
  {
    name: 'Veritatis Quasi',
    byline: 'Architecto Beatae',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop'
  }
]
</script>
