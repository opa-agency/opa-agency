<template>
  <div class="py-16">
    <Container>
      <div class="max-w-5xl mx-auto">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          POLITICA DE CONFIDENȚIALITATE
        </h1>
        
        <p class="mt-6 text-sm text-gray-600">
          Ultima actualizare: {{ lastUpdateDate }}
        </p>

        <div class="mt-8 space-y-8 text-base text-gray-700 leading-relaxed">
          <p>
            [DENUMIRE SRL] respectă confidențialitatea datelor dumneavoastră.
          </p>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Ce date colectăm:</h2>
            <ul class="ml-6 space-y-2 list-disc">
              <li>Nume și prenume</li>
              <li>Adresă de email</li>
              <li>Număr de telefon</li>
              <li>Informații despre proiect</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Cum folosim datele:</h2>
            <ul class="ml-6 space-y-2 list-disc">
              <li>Pentru comunicarea cu clienții</li>
              <li>Pentru procesarea comenzilor</li>
              <li>Pentru transmiterea contractelor și documentelor</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Protecția datelor:</h2>
            <p>
              Datele sunt păstrate în siguranță și nu sunt transmise către terți, cu excepția obligațiilor legale.
            </p>
            <p class="mt-3">
              Datele clienților vor fi șterse automat din baza noastră de date după o perioadă de doi ani de inactivitate (fără comenzi noi sau comunicări inițiate), cu excepția cazurilor în care s-a convenit altfel prin contract sau prin solicitarea expresă a clientului de a păstra datele pentru o perioadă mai lungă.
            </p>
            <p class="mt-3">
              Aveți dreptul să solicitați accesul, modificarea sau ștergerea datelor personale prin email.
            </p>
          </section>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Container from '@/components/Container.vue'

const lastUpdateDate = computed(() => {
  const currentYear = new Date().getFullYear()
  return `01.01.${currentYear}`
})
</script>
