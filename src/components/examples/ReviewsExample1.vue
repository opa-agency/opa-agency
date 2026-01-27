<template>
  <section id="reviews" aria-labelledby="reviews-title" class="py-16 sm:py-20">
    <Container>
      <h2 id="reviews-title" class="text-3xl font-medium tracking-tight text-gray-900 sm:text-center">
        Lorem ipsum dolor sit amet
      </h2>
      <p class="mt-2 text-lg text-gray-600 sm:text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div ref="containerRef" class="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
        <template v-if="isInView">
          <ReviewColumn
            :reviews="[...column1, ...column3Flat, ...column2]"
            :review-class-name="(reviewIndex) => cn(
              reviewIndex >= column1.length + column3[0].length && 'md:hidden',
              reviewIndex >= column1.length && 'lg:hidden'
            )"
            :ms-per-pixel="10"
          />
          <ReviewColumn
            :reviews="[...column2, ...column3[1]]"
            class="hidden md:block"
            :review-class-name="(reviewIndex) => reviewIndex >= column2.length ? 'lg:hidden' : ''"
            :ms-per-pixel="15"
          />
          <ReviewColumn
            :reviews="column3Flat"
            class="hidden lg:block"
            :ms-per-pixel="10"
          />
        </template>
        <div class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-50" />
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
      </div>
    </Container>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Container from '../Container.vue'
import { cn } from '@/utils/cn'

const reviews = [
  { title: 'Lorem ipsum dolor', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Lorem Ipsum', rating: 5 },
  { title: 'Sit amet consectetur', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', author: 'Dolor Sit', rating: 5 },
  { title: 'Adipiscing elit sed', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', author: 'Amet Consectetur', rating: 5 },
  { title: 'Duis aute irure', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', author: 'Irure Dolor', rating: 5 },
  { title: 'Excepteur sint occaecat', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', author: 'Occaecat Cupidatat', rating: 5 },
  { title: 'Tempor incididunt', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', author: 'Tempor Elit', rating: 5 },
  { title: 'Ullamco laboris', body: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', author: 'Ullamco Consequat', rating: 5 },
  { title: 'Velit esse cillum', body: 'Velit esse cillum dolore eu fugiat nulla pariatur.', author: 'Cillum Dolore', rating: 5 },
  { title: 'Fugiat nulla pariatur', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.', author: 'Fugiat Nulla', rating: 5 },
  { title: 'Nemo enim ipsam', body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.', author: 'Nemo Enim', rating: 5 },
  { title: 'Neque porro quisquam', body: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.', author: 'Porro Quisquam', rating: 5 },
  { title: 'Ut enim ad', body: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.', author: 'Minima Veniam', rating: 5 },
  { title: 'Quis autem vel', body: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.', author: 'Vel Eum', rating: 5 },
  { title: 'Illum qui dolorem', body: 'Illum qui dolorem eum fugiat quo voluptas nulla pariatur.', author: 'Illum Quo', rating: 5 }
]

function splitArray(array, numParts) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

const columns = splitArray(reviews, 3)
const column1 = columns[0]
const column2 = columns[1]
const column3 = splitArray(columns[2], 2)
const column3Flat = computed(() => column3.flat())

const containerRef = ref(null)
const isInView = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isInView.value = true
      }
    },
    { threshold: 0.4 }
  )

  if (containerRef.value) {
    observer.observe(containerRef.value)
  }

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<script>
import { defineComponent, h } from 'vue'

const StarIcon = (props) => h('svg', { viewBox: '0 0 20 20', 'aria-hidden': 'true', ...props }, [
  h('path', { d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' })
])

const StarRating = defineComponent({
  props: {
    rating: Number
  },
  setup(props) {
    return () => h('div', { class: 'flex' }, 
      [...Array(5).keys()].map((index) =>
        h(StarIcon, {
          key: index,
          class: props.rating > index ? 'h-5 w-5 fill-cyan-500' : 'h-5 w-5 fill-gray-300'
        })
      )
    )
  }
})

const Review = defineComponent({
  props: {
    title: String,
    body: String,
    author: String,
    rating: Number,
    className: String
  },
  setup(props) {
    const possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    const animationDelay = possibleAnimationDelays[Math.floor(Math.random() * possibleAnimationDelays.length)]

    return () => h('figure', {
      class: `animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5 ${props.className || ''}`,
      style: { animationDelay }
    }, [
      h('blockquote', { class: 'text-gray-900' }, [
        h(StarRating, { rating: props.rating }),
        h('p', { class: 'mt-4 text-lg/6 font-semibold before:content-[\'"\'] after:content-[\'"\']' }, props.title),
        h('p', { class: 'mt-3 text-base/7' }, props.body)
      ]),
      h('figcaption', { class: 'mt-3 text-sm text-gray-600 before:content-[\'–_\']' }, props.author)
    ])
  }
})

export const ReviewColumn = defineComponent({
  props: {
    reviews: Array,
    className: String,
    reviewClassName: Function,
    msPerPixel: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const columnRef = ref(null)
    const columnHeight = ref(0)

    onMounted(() => {
      if (!columnRef.value) return

      const resizeObserver = new ResizeObserver(() => {
        columnHeight.value = columnRef.value?.offsetHeight ?? 0
      })

      resizeObserver.observe(columnRef.value)

      onUnmounted(() => {
        resizeObserver.disconnect()
      })
    })

    const duration = computed(() => `${columnHeight.value * props.msPerPixel}ms`)

    return () => h('div', {
      ref: columnRef,
      class: `animate-marquee space-y-8 py-4 ${props.className || ''}`,
      style: { '--marquee-duration': duration.value }
    }, 
      props.reviews.concat(props.reviews).map((review, reviewIndex) =>
        h(Review, {
          key: reviewIndex,
          'aria-hidden': reviewIndex >= props.reviews.length,
          className: props.reviewClassName?.(reviewIndex % props.reviews.length),
          ...review
        })
      )
    )
  }
})
</script>
