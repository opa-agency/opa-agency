<template>
  <div class="py-16">
    <Container>
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          TERMENI ȘI CONDIȚII
        </h1>
        
        <p class="mt-6 text-sm text-gray-600">
          Ultima actualizare: {{ lastUpdateDate }}
        </p>

        <div class="mt-8 space-y-8 text-base text-gray-700 leading-relaxed">
          <p>
            Acest website este operat de [DENUMIRE SRL], cu sediul în [localitate], România. 
            Prin accesarea și utilizarea acestui site, sunteți de acord cu termenii și condițiile de mai jos.
          </p>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Servicii oferite</h2>
            <p>Oferim servicii digitale personalizate, inclusiv:</p>
            <ul class="mt-3 ml-6 space-y-2 list-disc">
              <li>crearea de landing pages și integrare Shopify;</li>
              <li>realizarea de materiale creative pentru promovare (imagini și video generate cu AI).</li>
            </ul>
            <p class="mt-3">Serviciile sunt livrate în format digital.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Procesul de comandă</h2>
            <p>
              Clientul accesează oferta și completează un formular inițial de solicitare, necesar pentru 
              evaluarea cerințelor proiectului.
            </p>
            <p class="mt-3">
              Ulterior, clientul va fi contactat telefonic pentru confirmarea comenzii și clarificarea detaliilor.
            </p>
            <p class="mt-3">După confirmare, clientul va primi pe adresa de email:</p>
            <ul class="mt-3 ml-6 space-y-2 list-disc">
              <li>contractul de prestări servicii;</li>
              <li>un formular detaliat pentru colectarea informațiilor necesare procesului de creație;</li>
              <li>factura fiscală.</li>
            </ul>
            <p class="mt-3">Lucrările vor începe exclusiv după achitarea integrală a facturii.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Termen de livrare</h2>
            <p>
              Termenul de livrare este între 7 și 30 de zile calendaristice, în funcție de pachetul ales 
              și complexitatea proiectului.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Obligațiile clientului</h2>
            <p>
              Clientul este responsabil pentru furnizarea informațiilor corecte și complete necesare 
              realizării proiectului.
            </p>
            <p class="mt-3">
              Întârzierile cauzate de lipsa informațiilor pot prelungi termenul de livrare.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Limitarea răspunderii</h2>
            <p>
              Nu garantăm rezultate comerciale (vânzări, trafic, conversii). Serviciile sunt livrate 
              ca suport creativ și tehnic.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Proprietate intelectuală</h2>
            <p>
              Drepturile asupra materialelor livrate se transferă clientului după achitarea integrală 
              a serviciilor.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Modificări</h2>
            <p>
              Ne rezervăm dreptul de a actualiza acești termeni fără notificare prealabilă.
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
