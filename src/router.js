import { createRouter, createWebHistory } from 'vue-router'
import ContactView from './views/ContactView.vue'
import DeliveryPolicyView from './views/DeliveryPolicyView.vue'
import FaqsView from './views/FaqsView.vue'
import FeaturesView from './views/FeaturesView.vue'
import HomeView from './views/HomeView.vue'
import PricingView from './views/PricingView.vue'
import PrivacyPolicyView from './views/PrivacyPolicyView.vue'
import ReturnsPolicyView from './views/ReturnsPolicyView.vue'
import ReviewsView from './views/ReviewsView.vue'
import TermsView from './views/TermsView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/features', name: 'features', component: FeaturesView },
    { path: '/reviews', name: 'reviews', component: ReviewsView },
    { path: '/pricing', name: 'pricing', component: PricingView },
    { path: '/faqs', name: 'faqs', component: FaqsView },
    { path: '/termeni-si-conditii', name: 'terms', component: TermsView },
    { path: '/politica-de-confidentialitate', name: 'privacy', component: PrivacyPolicyView },
    { path: '/politica-de-livrare', name: 'delivery', component: DeliveryPolicyView },
    { path: '/politica-de-retur', name: 'returns', component: ReturnsPolicyView },
    { path: '/contact', name: 'contact', component: ContactView }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
