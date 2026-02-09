<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-bl from-slate-950 via-purple-900 to-cyan-900">
    <!-- Pattern overlay -->
    <div class="absolute inset-0 opacity-100">
      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <Container class="relative z-10 py-16">
      <GlossyContainer>
        <div class="flex items-center justify-center mb-6">
          <span class="text-6xl mr-4">📊</span>
          <h1 class="text-5xl font-bold text-white">Mini Strategie de Marketing</h1>
        </div>
        <p class="text-lg text-gray-300 mb-12 text-center">
          Strategie realizată pe baza materialelor tale existente. Primești un ghid clar, ușor de aplicat, care te ajută să postezi eficient și să vinzi mai mult.
        </p>

        <!-- Beneficii -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce beneficii ai</h2>
          <ul class="grid md:grid-cols-2 gap-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Postezi organizat, nu la întâmplare:</strong>
                <span class="block">Plan structurat care elimină ghicitul și îți oferă direcție clară.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Știi exact ce funcționează pentru brandul tău:</strong>
                <span class="block">Recomandări personalizate bazate pe analiza brandului și publicului tău.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Economisești timp:</strong>
                <span class="block">Template-uri și exemple gata de folosit care accelerează crearea conținutului.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Crești șansele de conversie:</strong>
                <span class="block">Strategii dovedite care transformă urmăritorii în clienți.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✓</span>
              <span>
                <strong class="text-white">Ai un plan clar pe termen scurt:</strong>
                <span class="block">Acțiuni concrete pe care le poți implementa imediat pentru rezultate rapide.</span>
              </span>
            </li>
          </ul>
        </section>

        <!-- Ce include PDF-ul -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Ce include PDF-ul</h2>
          <ul class="grid md:grid-cols-2 gap-3 text-gray-300">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Analiză rapidă a brandului tău:</strong>
                <span class="block">Evaluare a poziționării actuale și oportunităților de creștere.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Tipuri de conținut recomandate:</strong>
                <span class="block">Formatul ideal de postări pentru brandul și nișa ta.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Structură de postări săptămânale:</strong>
                <span class="block">Calendar de conținut care asigură prezență constantă și variată.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Exemple de hook-uri eficiente:</strong>
                <span class="block">Începuturi de postări care captează atenția în primele secunde.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Template-uri de texte (copywriting):</strong>
                <span class="block">Formule de scriere dovedite pentru postări care convertesc.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">CTA-uri pentru vânzare și engagement:</strong>
                <span class="block">Îndemn la acțiune care motivează publicul să interacționeze sau să cumpere.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Strategii pentru creșterea CTR:</strong>
                <span class="block">Tehnici pentru mărirea ratei de click pe linkuri și reclame.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Idei de campanii promoționale:</strong>
                <span class="block">Concepte de campanii pentru perioade speciale sau lansări de produse.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Ghid de folosire Reels / TikTok / Stories:</strong>
                <span class="block">Best practices pentru conținut video pe platformele populare.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Sfaturi pentru reclame (basic):</strong>
                <span class="block">Noțiuni de bază pentru publicitate plătită eficientă.</span>
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">✔</span>
              <span>
                <strong class="text-white">Plan ușor de urmat, aplicabil imediat:</strong>
                <span class="block">Structură pas cu pas pe care o poți implementa din prima zi.</span>
              </span>
            </li>
          </ul>
        </section>

        <!-- Cum functioneaza -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6 border-b-2 border-purple-400 pb-3">Cum lucrăm împreună (Pas cu Pas)</h2>
          <ol class="grid md:grid-cols-2 gap-4 text-gray-300">
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">1.</span>
              <div>
                <strong class="text-white">Primire informații</strong>
                <p class="mt-1">Completezi un formular cu detalii despre brand, produse/servicii și publicul tău țintă.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">2.</span>
              <div>
                <strong class="text-white">Analiză & cercetare</strong>
                <p class="mt-1">Analizăm materialele tale existente și studiem piața și competiția.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">3.</span>
              <div>
                <strong class="text-white">Creare strategie</strong>
                <p class="mt-1">Dezvoltăm planul personalizat cu recomandări concrete și exemple practice.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">4.</span>
              <div>
                <strong class="text-white">Livrare PDF</strong>
                <p class="mt-1">Primești documentul complet în format PDF, gata de implementare.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="font-bold text-purple-400 mr-4 text-xl">5.</span>
              <div>
                <strong class="text-white">Implementare</strong>
                <p class="mt-1">Începi să aplici strategia și să observi rezultatele îmbunătățite.</p>
              </div>
            </li>
          </ol>
        </section>

        <!-- Pricing -->
        <section class="border-t-2 border-purple-400 pt-8 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Investiție</h2>
          <div class="bg-purple-900/40 border-2 border-purple-400 rounded-lg p-8 mb-8 max-w-md mx-auto">
            <div class="text-5xl font-bold text-white mb-2">199 lei</div>
            <div class="text-xl text-purple-300">PDF personalizat</div>
          </div>
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Comandă strategia ta acum
          </RouterLink>
        </section>
      </GlossyContainer>
    </Container>
  </div>
</template>

<script setup>
import Container from '@/components/Container.vue'
import GlossyContainer from '@/components/GlossyContainer.vue'
import { RouterLink } from 'vue-router'
</script>
