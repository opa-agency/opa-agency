<template>
  <section id="reviews" aria-labelledby="reviews-title" class="pt-20 pb-16 sm:pt-32 sm:pb-24">
    <Container>
      <h2 id="reviews-title" class="text-3xl font-medium tracking-tight text-gray-900 sm:text-center">
        Everyone is growing their business with Online Presence Agency.
      </h2>
      <p class="mt-2 text-lg text-gray-600 sm:text-center">
        Thousands of people have doubled their net-worth in the last 30 days.
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
import Container from './Container.vue'
import { cn } from '@/utils/cn'

const reviews = [
  {
    title: 'It really works.',
    body: 'Online Presence Agency transformed my business presence and tripled my client inquiries within a month.',
    author: 'CrazyInvestor',
    rating: 5
  },
  {
    title: 'You need this app.',
    body: 'I didn\'t understand digital marketing before working with Online Presence Agency. Now my business is thriving online.',
    author: 'CluelessButRich',
    rating: 5
  },
  {
    title: 'This shouldn\'t be legal.',
    body: 'Online Presence Agency makes it so easy to build a strong digital brand that I can\'t believe the difference it makes.',
    author: 'LivingDaDream',
    rating: 5
  },
  {
    title: 'Screw financial advisors.',
    body: 'My previous web presence was barely generating interest. With Online Presence Agency, my business is booming.',
    author: 'JordanBelfort1962',
    rating: 5
  },
  {
    title: 'I love it!',
    body: 'I started providing insider information myself and now I get new insider tips every 5 minutes. I don\'t even have time to act on all of them. New Lamborghini is being delivered next week!',
    author: 'MrBurns',
    rating: 5
  },
  {
    title: 'Too good to be true.',
    body: 'Results came so fast with Online Presence Agency that I thought it was too good to be true. But the leads and conversions are real. This service is amazing!',
    author: 'LazyRich99',
    rating: 5
  },
  {
    title: 'Wish I could give 6 stars',
    body: 'This is literally the most important app you will ever download in your life. Get on this before it\'s so popular that everyone else is getting these tips too.',
    author: 'SarahLuvzCash',
    rating: 5
  },
  {
    title: 'Bought an island.',
    body: 'Yeah, you read that right. Want your own thriving online business too? Get Online Presence Agency.',
    author: 'ScroogeMcduck',
    rating: 5
  },
  {
    title: 'No more debt!',
    body: 'After 2 weeks with Online Presence Agency my business hit new growth milestones. Why didn\'t I do this sooner?',
    author: 'BruceWayne',
    rating: 5
  },
  {
    title: 'I\'m 13 and I\'m rich.',
    body: 'I love that with Pocket\'s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!',
    author: 'RichieRich',
    rating: 5
  },
  {
    title: 'Started an investment firm.',
    body: 'I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!',
    author: 'TheCountOfMonteChristo',
    rating: 5
  },
  {
    title: 'It\'s like a superpower.',
    body: 'Every tip Pocket has sent me has paid off. It\'s like playing Blackjack but knowing exactly what card is coming next!',
    author: 'ClarkKent',
    rating: 5
  },
  {
    title: 'Quit my job.',
    body: 'I downloaded Pocket three days ago and quit my job today. I can\'t believe no one else thought to build a stock trading app that works this way!',
    author: 'GeorgeCostanza',
    rating: 5
  },
  {
    title: 'Don\'t download this app',
    body: 'Unless you want to have the best life ever! I am literally writing this from a yacht.',
    author: 'JeffBezos',
    rating: 5
  }
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
