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
      <label for="message" class="block text-sm font-medium text-white mb-2">Mesaj *</label>
      <textarea
        id="message"
        v-model="formData.message"
        required
        rows="6"
        class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
        placeholder="Scrie-ne mesajul tău aici..."
      ></textarea>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ isSubmitting ? 'Se trimite...' : 'Trimite mesaj' }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  phone: '+4',
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
      message: formData.message
    }

    await window.emailjs.send('service_mre17p6', 'template_hwh3m9e', templateParams)
    
    alert('Mesajul tău a fost trimis! Îți vom răspunde în cel mai scurt timp.')
    // Reset form
    formData.name = ''
    formData.email = ''
    formData.phone = '+4'
    formData.message = ''
    phoneNumber.value = ''
  } catch (error) {
    console.error('EmailJS error:', error)
    alert('A apărut o eroare la trimiterea mesajului. Te rugăm încearcă din nou.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
