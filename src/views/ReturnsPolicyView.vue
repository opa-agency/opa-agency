<template>
  <div class="py-16">
    <Container>
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          POLITICA DE RETUR ȘI ANULARE
        </h1>
        
        <p class="mt-6 text-sm text-gray-600">
          Ultima actualizare: {{ lastUpdateDate }}
        </p>

        <div class="mt-8 space-y-8 text-base text-gray-700 leading-relaxed">
          <p>
            Serviciile oferite de [DENUMIRE SRL] sunt servicii digitale personalizate, realizate conform 
            cerințelor clientului.
          </p>

          <p>
            Conform legislației în vigoare (OUG 34/2014), dreptul de retragere nu se aplică în cazul serviciilor 
            personalizate sau al serviciilor digitale începute cu acordul clientului.
          </p>

          <p>
            Prin confirmarea comenzii și efectuarea plății, clientul își exprimă acordul ca prestarea serviciilor 
            să înceapă și acceptă faptul că nu poate solicita returnarea contravalorii serviciilor.
          </p>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Anularea comenzii</h2>
            <p>
              Clientul poate anula comanda doar înainte de achitarea facturii.
            </p>
            <p class="mt-3">
              Factura transmisă are un termen de plată de 48 de ore. În cazul în care plata nu este efectuată 
              în acest interval, comanda și proiectul se vor anula automat, fără obligații din partea ambelor părți.
            </p>
            <p class="mt-3">
              După efectuarea plății și începerea lucrărilor, anularea comenzii și rambursarea nu mai sunt posibile.
            </p>
            <p class="mt-3">
              În situații excepționale, eventualele neconformități pot fi analizate și soluționate de comun acord.
            </p>
          </section>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Container from '../components/Container.vue'

const lastUpdateDate = computed(() => {
  const currentYear = new Date().getFullYear()
  return `01.01.${currentYear}`
})
</script>
