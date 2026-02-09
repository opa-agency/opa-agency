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
      <div class="flex items-center gap-1 sm:gap-2">
        <div class="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white flex-shrink-0">
          <span class="text-lg sm:text-xl">🇷🇴</span>
          <span class="font-semibold text-xs sm:text-base">+4</span>
        </div>
        <input
          type="tel"
          id="phone"
          v-model="phoneNumber"
          @input="handlePhoneInput"
          required
          class="flex-1 min-w-0 px-3 sm:px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
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
        <optgroup label="Prezență Web">
          <option value="one-page">One Page Website</option>
          <option value="multi-page">Multi Page Website</option>
          <option value="ecommerce">E-commerce Website</option>
        </optgroup>
        <optgroup label="Marketing">
          <option value="facebook-ads">Reclame Facebook & Instagram</option>
          <option value="ai-video-creation">Creare Video cu AI</option>
          <option value="ai-image-creation">Creare Imagini cu AI</option>
          <option value="capcut-video-editing">Editare Video în CapCut</option>
          <option value="mini-marketing-strategy">Mini Strategie de Marketing</option>
        </optgroup>
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
      :disabled="isSubmitting"
      class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ isSubmitting ? 'Se trimite...' : 'Trimite cerere de ofertă' }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const serviceNames = {
  'one-page': 'One Page Website',
  'multi-page': 'Multi Page Website',
  'ecommerce': 'E-commerce Website',
  'facebook-ads': 'Reclame Facebook & Instagram',
  'ai-video-creation': 'Creare Video cu AI',
  'ai-image-creation': 'Creare Imagini cu AI',
  'capcut-video-editing': 'Editare Video în CapCut',
  'mini-marketing-strategy': 'Mini Strategie de Marketing'
}

const formData = reactive({
  name: '',
  email: '',
  phone: '+4',
  service: '',
  message: ''
})

const phoneNumber = ref('')
const isSubmitting = ref(false)

const handlePhoneInput = (event) => {
  let value = event.target.value
  // Remove any non-digit characters
  value = value.replace(/\D/g, '')
  phoneNumber.value = value
  formData.phone = '+4' + value
}

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    const templateParams = {
      to_email: 'agencyonlinepresence@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: serviceNames[formData.service] || formData.service,
      message: formData.message
    }

    await window.emailjs.send('service_mre17p6', 'template_hwh3m9e', templateParams)
    
    alert('Cererea ta a fost trimisă! Te vom contacta în curând.')
    // Reset form
    formData.name = ''
    formData.email = ''
    formData.phone = '+4'
    formData.service = ''
    formData.message = ''
    phoneNumber.value = ''
  } catch (error) {
    console.error('EmailJS error:', error)
    alert('A apărut o eroare la trimiterea cererii. Te rugăm încearcă din nou.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
