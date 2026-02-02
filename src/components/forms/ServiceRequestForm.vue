<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-white mb-2">Nume complet *</label>
      <input
        type="text"
        id="name"
        v-model="formData.name"
        required
        class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        placeholder="Ionescu Andrei"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-white mb-2">Email *</label>
      <input
        type="email"
        id="email"
        v-model="formData.email"
        required
        class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        placeholder="andrei@exemplu.ro"
      />
    </div>

    <div>
      <label for="phone" class="block text-sm font-medium text-white mb-2">Telefon *</label>
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
          <span class="text-xl">🇷🇴</span>
          <span class="font-semibold">+4</span>
        </div>
        <input
          type="tel"
          id="phone"
          v-model="phoneNumber"
          @input="handlePhoneInput"
          required
          class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="0712345678"
        />
      </div>
    </div>

    <div>
      <label for="service" class="block text-sm font-medium text-white mb-2">Serviciu dorit *</label>
      <select
        id="service"
        v-model="formData.service"
        required
        class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        <option value="">Selectează un serviciu</option>
        <option value="one-page">One Page Website</option>
        <option value="multi-page">Multi Page Website</option>
        <option value="ecommerce">E-commerce Website</option>
        <option value="facebook-ads">Reclame Facebook & Instagram</option>
      </select>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-white mb-2">Detalii *</label>
      <textarea
        id="message"
        v-model="formData.message"
        required
        rows="5"
        class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
        placeholder="Descrie pe scurt proiectul tău și cerințele specifice..."
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
    >
      Trimite cerere de ofertă
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  phone: '+4',
  service: '',
  message: ''
})

const phoneNumber = ref('')

const handlePhoneInput = (event) => {
  let value = event.target.value
  // Remove any non-digit characters
  value = value.replace(/\D/g, '')
  phoneNumber.value = value
  formData.phone = '+4' + value
}

const handleSubmit = () => {
  console.log('Service request submitted:', formData)
  // Here you would handle form submission (e.g., send to backend)
  alert('Cererea ta a fost trimisă! Te vom contacta în curând.')
}
</script>
