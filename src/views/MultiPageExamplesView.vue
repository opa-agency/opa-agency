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
    url: 'https://multipage-courses-1.presentationlab.org/#/',
    title: 'Multi Page - Cursuri'
  },
  {
    url: 'https://multipage-docs-1.presentationlab.org/#/',
    title: 'Multi Page - Documentație 1'
  },
  {
    url: 'https://multipage-docs-2.presentationlab.org/#/',
    title: 'Multi Page - Documentație 2'
  },
  {
    url: 'https://multipage-portofolio-1.presentationlab.org/#/',
    title: 'Multi Page - Portofoliu'
  },
  {
    url: 'https://multipage-services-1.presentationlab.org/#/',
    title: 'Multi Page - Servicii'
  },
  {
    url: 'https://multipage-studio-1.presentationlab.org/#/',
    title: 'Multi Page - Studio'
  },
  {
    url: 'https://multipage-podcast-1.presentationlab.org/#/',
    title: 'Multi Page - Podcast'
  }
]

const backLink = {
  url: '/servicii/multi-page-website',
  text: 'Înapoi la Multi Page Website'
}
</script>
