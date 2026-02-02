<template>
  <section id="reviews" aria-labelledby="reviews-title" class="py-16 sm:py-20">
    <Container>
      <h2 id="reviews-title" class="text-3xl font-medium tracking-tight text-white sm:text-center">
        Toată lumea își dezvoltă afacerea cu Online Presence Agency.
      </h2>
      <p class="mt-2 text-lg text-gray-300 sm:text-center">
        Mii de persoane și-au dublat valoarea netă în ultimele 30 de zile.
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
        <div class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black" />
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black" />
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
    title: 'Funcționează cu adevărat.',
    body: 'Online Presence Agency mi-a transformat prezența afacerii și mi-a triplat solicitările de la clienți într-o lună.',
    author: 'InvestitorNebun',
    rating: 5
  },
  {
    title: 'Ai nevoie de această aplicație.',
    body: 'Nu înțelegeam marketingul digital înainte de a lucra cu Online Presence Agency. Acum afacerea mea prosperă online.',
    author: 'FărăIdeeDarBogat',
    rating: 5
  },
  {
    title: 'Asta nu ar trebui să fie legal.',
    body: 'Online Presence Agency face atât de ușoară construirea unui brand digital puternic încât nu pot crede diferența pe care o face.',
    author: 'VisulMeu',
    rating: 5
  },
  {
    title: 'La naiba cu consultanții financiari.',
    body: 'Prezența mea web anterioară abia genera interes. Cu Online Presence Agency, afacerea mea înflorește.',
    author: 'JordanBelfort1962',
    rating: 5
  },
  {
    title: 'Îmi place!',
    body: 'Am început să furnizez eu însumi informații privilegiate și acum primesc noi sfaturi privilegiate la fiecare 5 minute. Lamborghini nou este livrat săptămâna viitoare!',
    author: 'DlBurns',
    rating: 5
  },
  {
    title: 'Prea bun pentru a fi adevărat.',
    body: 'Rezultatele au venit atât de repede cu Online Presence Agency încât am crezut că este prea bun pentru a fi adevărat. Dar clienții potențiali și conversiile sunt reale. Acest serviciu este uimitor!',
    author: 'LeneBogat99',
    rating: 5
  },
  {
    title: 'Aș vrea să pot da 6 stele',
    body: 'Aceasta este literalmente cea mai importantă aplicație pe care o vei descărca vreodată în viața ta. Intră pe asta înainte ca să devină atât de populară încât toți ceilalți primesc și ei aceste sfaturi.',
    author: 'SaraIubeșteBanii',
    rating: 5
  },
  {
    title: 'Am cumpărat o insulă.',
    body: 'Da, ai citit bine. Vrei și tu o afacere online înfloritoare? Ia Online Presence Agency.',
    author: 'UnchiuScrooge',
    rating: 5
  },
  {
    title: 'Nu mai am datorii!',
    body: 'După 2 săptămâni cu Online Presence Agency afacerea mea a atins noi repere de creștere. De ce nu am făcut asta mai devreme?',
    author: 'BruceWayne',
    rating: 5
  },
  {
    title: 'Am 13 ani și sunt bogat.',
    body: 'Iubesc că cu anonimizarea tranzacțiilor Pocket m-am putut înscrie și începe să tranzacționez când aveam 12 ani. Aveam un milion de dolari înainte să am păr sub axile!',
    author: 'BogătașulRichie',
    rating: 5
  },
  {
    title: 'Am început o firmă de investiții.',
    body: 'Le taxez clienților un comision de management de 3% și arunc toate investițiile lor în Pocket. Bani ușori!',
    author: 'ConteleDeMonteCristo',
    rating: 5
  },
  {
    title: 'Este ca o superputere.',
    body: 'Fiecare sfat pe care mi l-a trimis Pocket s-a concretizat. Este ca și cum ai juca Blackjack dar știi exact ce carte vine următoarea!',
    author: 'ClarkKent',
    rating: 5
  },
  {
    title: 'Mi-am dat demisia.',
    body: 'Am descărcat Pocket acum trei zile și mi-am dat demisia astăzi. Nu pot crede că nimeni altcineva nu s-a gândit să construiască o aplicație de tranzacționare care funcționează așa!',
    author: 'GeorgeCostanza',
    rating: 5
  },
  {
    title: 'Nu descărca această aplicație',
    body: 'Doar dacă nu vrei să ai cea mai bună viață vreodată! Scriu literalmente asta de pe un iaht.',
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
      class: `animate-fade-in rounded-3xl bg-gray-800 p-6 opacity-0 shadow-md shadow-black/50 ${props.className || ''}`,
      style: { animationDelay }
    }, [
      h('blockquote', { class: 'text-white' }, [
        h(StarRating, { rating: props.rating }),
        h('p', { class: 'mt-4 text-lg/6 font-semibold before:content-[\'"\'] after:content-[\'"\']' }, props.title),
        h('p', { class: 'mt-3 text-base/7' }, props.body)
      ]),
      h('figcaption', { class: 'mt-3 text-sm text-gray-400 before:content-[\'–_\']' }, props.author)
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
