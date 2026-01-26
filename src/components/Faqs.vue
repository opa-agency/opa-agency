<template>
  <section id="faqs" aria-labelledby="faqs-title" class="border-t border-gray-200 py-20 sm:py-32">
    <Container>
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 id="faqs-title" class="text-3xl font-medium tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <p class="mt-2 text-lg text-gray-600">
          If you have anything else you want to ask,
          <a href="mailto:info@example.com" class="text-gray-900 underline">reach out to us</a>.
        </p>
      </div>
      <ul role="list" class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
        <li v-for="(column, columnIndex) in faqs" :key="columnIndex">
          <ul role="list" class="space-y-10">
            <li v-for="(faq, faqIndex) in column" :key="faqIndex">
              <h3 class="text-lg/6 font-semibold text-gray-900">{{ faq.question }}</h3>
              <p class="mt-4 text-sm text-gray-700">{{ faq.answer }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script setup>
import Container from './Container.vue'

const faqs = [
  [
    {
      question: 'How do I know the tips are good?',
      answer: 'Our whole business depends on our tips being good, so it\'s in our best interest that they are. The results of our customers speak for themselves, just trust us.'
    },
    {
      question: 'Isn\'t this insider trading?',
      answer: 'Yes exactly. But at scale! Our agency brings expert digital strategies from industry professionals you may not know directly.'
    },
    {
      question: 'But isn\'t insider trading illegal?',
      answer: 'Here\'s the thing: you\'re the one doing the insider trading, not us. We\'re just giving you the tips and some tools to make trades. We\'re not doing anything wrong here.'
    }
  ],
  [
    {
      question: 'Do the people giving you tips realize what they are doing?',
      answer: 'Again I would argue this isn\'t really our responsibility. People make their own choices. If they don\'t research the consequences that\'s on them, not on us.'
    },
    {
      question: 'Where is Online Presence Agency based?',
      answer: 'Let\'s just say it\'s not somewhere where the SEC is going to find us.'
    },
    {
      question: 'Who can use Online Presence Agency services?',
      answer: 'For our free plan, the age limit is based on the minimum age to trade in your country of residence. Our VIP plan uses advanced transaction anonymization though.'
    }
  ],
  [
    {
      question: 'How did you get this on the App Store?',
      answer: 'Honestly we were surprised too, but eventually we found out that the app reviewer found the app so compelling they approved it just so they could use it themselves.'
    },
    {
      question: 'What support does Online Presence Agency provide?',
      answer: 'We provide comprehensive support for all our clients, from strategy development to implementation and ongoing optimization.'
    },
    {
      question: 'How do I become an insider?',
      answer: 'Contact us with some details about your industry and the type of access you have to apply for an insider account.'
    }
  ]
]
</script>
