<template>
  <ExamplesShowcase 
    :examples="examples"
    :back-link="backLink"
  />
</template>

<script setup>
import ExamplesShowcase from '@/components/ExamplesShowcase.vue'

const examples = [
  {
    url: 'https://onepage-book-1.presentationlab.org/#/',
    title: 'One Page - Carte'
  },
  {
    url: 'https://onepage-conference-1.presentationlab.org/#/',
    title: 'One Page - Conferință'
  },
  {
    url: 'https://onepage-presentation-1.presentationlab.org/#/',
    title: 'One Page - Prezentare Produs'
  },
  {
    url: 'https://onepage-presentation-2.presentationlab.org/#/',
    title: 'One Page - Prezentare Produs 2'
  },
  {
    url: 'https://onepage-services-1.presentationlab.org/#/',
    title: 'One Page - Servicii'
  }
]

const backLink = {
  url: '/servicii/one-page-website',
  text: 'Înapoi la One Page Website'
}
</script>
