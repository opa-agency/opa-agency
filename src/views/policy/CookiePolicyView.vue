<template>
  <div class="py-16">
    <Container>
      <div class="max-w-5xl mx-auto">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          POLITICA DE COOKIE-URI
        </h1>
        
        <p class="mt-6 text-sm text-gray-600">
          Ultima actualizare: {{ lastUpdateDate }}
        </p>

        <div class="mt-8 space-y-8 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Politica noastră privind cookie-urile</h2>
            <p class="mb-4">
              La Online Presence Agency, confidențialitatea și securitatea datelor dumneavoastră sunt prioritățile noastre absolute.
            </p>
            <p class="mb-4">
              <strong>Nu folosim cookie-uri și nu colectăm sau transmitem date personale către terți.</strong>
            </p>
            <p>
              Website-ul nostru funcționează fără a stoca informații în browser-ul dumneavoastră și fără a urmări activitatea online. 
              Nu folosim instrumente de analiză, cookie-uri publicitare sau cookie-uri de urmărire de orice tip.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">De ce am ales această abordare?</h2>
            <p class="mb-4">
              În era modernă în care trăim, preocupările legate de confidențialitatea datelor au crescut semnificativ. 
              Companiile colectează din ce în ce mai multe informații despre utilizatori, adesea fără cunoștința sau consimțământul acestora.
            </p>
            <p class="mb-4">
              <strong>Noi credem că cele mai bune practici sunt practici sigure.</strong>
            </p>
            <p>
              De aceea, am ales să operăm într-un mod care respectă pe deplin dreptul dumneavoastră la confidențialitate, 
              fără a stoca sau partaja nicio informație personală, cu excepția cazului în care alegeți să ne contactați direct.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Ce înseamnă asta pentru dumneavoastră?</h2>
            <ul class="ml-6 space-y-2 list-disc">
              <li>Nu vom stoca nicio informație în browser-ul dumneavoastră</li>
              <li>Nu vom urmări comportamentul dumneavoastră pe website</li>
              <li>Nu vom partaja datele dumneavoastră cu terți</li>
              <li>Nu veți primi publicitate țintită bazată pe vizita dumneavoastră pe site-ul nostru</li>
              <li>Experiența dumneavoastră de navigare este complet privată</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Comunicarea directă</h2>
            <p>
              Singurele date pe care le colectăm sunt cele pe care alegeți să ni le furnizați direct prin intermediul 
              formularelor de contact sau prin email. Aceste informații sunt folosite exclusiv pentru a vă răspunde 
              solicitării și nu sunt partajate cu terți.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Angajamentul nostru</h2>
            <p>
              Ne angajăm să menținem această politică de confidențialitate și să continuăm să operăm într-un mod 
              transparent și sigur, respectând pe deplin drepturile dumneavoastră la confidențialitate.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p>
              Dacă aveți întrebări despre politica noastră de cookie-uri sau despre modul în care gestionăm datele, 
              vă rugăm să ne contactați folosind informațiile disponibile în secțiunea de contact.
            </p>
          </section>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from '@/components/Container.vue'

const lastUpdateDate = new Date(new Date().getFullYear(), 0, 1).toLocaleDateString('ro-RO', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
</script>
