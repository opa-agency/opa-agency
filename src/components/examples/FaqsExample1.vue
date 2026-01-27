<template>
  <section id="faqs" aria-labelledby="faqs-title" class="border-t border-gray-200 py-20 sm:py-32">
    <Container>
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 id="faqs-title" class="text-3xl font-medium tracking-tight text-gray-900">
          Întrebări frecvente
        </h2>
        <p class="mt-2 text-lg text-gray-600">
          Dacă ai alte întrebări,
          <a href="mailto:info@example.com" class="text-gray-900 underline">contactează-ne</a>.
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
import Container from '../Container.vue'

const faqs = [
  [
    {
      question: 'Cum știu că sfaturile sunt bune?',
      answer: 'Întreaga noastră afacere depinde de calitatea sfaturilor noastre, deci este în interesul nostru ca acestea să fie excelente. Rezultatele clienților noștri vorbesc de la sine, pur și simplu ai încredere în noi.'
    },
    {
      question: 'Nu este aceasta tranzacționare pe bază de informații privilegiate?',
      answer: 'Da exact. Dar la scară mare! Agenția noastră aduce strategii digitale de la profesioniști din industrie pe care poate nu îi cunoști direct.'
    },
    {
      question: 'Dar nu este ilegal tranzacționarea pe bază de informații privilegiate?',
      answer: 'Iată care este treaba: tu ești cel care face tranzacționarea, nu noi. Noi îți oferim doar sfaturile și câteva instrumente pentru a face tranzacții. Nu facem nimic greșit aici.'
    }
  ],
  [
    {
      question: 'Oamenii care vă dau sfaturi realizează ce fac?',
      answer: 'Din nou, aș argumenta că aceasta nu este cu adevărat responsabilitatea noastră. Oamenii fac propriile alegeri. Dacă nu cercetează consecințele, este treaba lor, nu a noastră.'
    },
    {
      question: 'Unde este bazată Online Presence Agency?',
      answer: 'Să spunem doar că nu este undeva unde SEC ne va găsi.'
    },
    {
      question: 'Cine poate folosi serviciile Online Presence Agency?',
      answer: 'Pentru planul nostru gratuit, limita de vârstă se bazează pe vârsta minimă pentru tranzacționare în țara ta de reședință. Planul nostru VIP folosește anonimizare avansată a tranzacțiilor.'
    }
  ],
  [
    {
      question: 'Cum ați reușit să puneți asta pe App Store?',
      answer: 'Sincer, am fost surprinși și noi, dar în cele din urmă am aflat că recenzentul aplicației a găsit aplicația atât de convingătoare încât a aprobat-o doar ca să o poată folosi ei înșiși.'
    },
    {
      question: 'Ce suport oferă Online Presence Agency?',
      answer: 'Oferim suport cuprinzător pentru toți clienții noștri, de la dezvoltarea strategiei până la implementare și optimizare continuă.'
    },
    {
      question: 'Cum devin un insider?',
      answer: 'Contactează-ne cu câteva detalii despre industria ta și tipul de acces pe care îl ai pentru a solicita un cont de insider.'
    }
  ]
]
</script>
