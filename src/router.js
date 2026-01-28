import { createRouter, createWebHashHistory } from 'vue-router'
import ContactView from './views/ContactView.vue'
import CookiePolicyView from './views/CookiePolicyView.vue'
import DeliveryPolicyView from './views/DeliveryPolicyView.vue'
import ExamplesView from './views/ExamplesView.vue'
import HomeView from './views/HomeView.vue'
import PortfolioView from './views/PortfolioView.vue'
import PrivacyPolicyView from './views/PrivacyPolicyView.vue'
import ReturnsPolicyView from './views/ReturnsPolicyView.vue'
import TermsView from './views/TermsView.vue'
import AnpcView from './views/AnpcView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/examples', name: 'examples', component: ExamplesView },
    { path: '/portofoliu', name: 'portfolio', component: PortfolioView },
    { path: '/termeni-si-conditii', name: 'terms', component: TermsView },
    { path: '/politica-de-confidentialitate', name: 'privacy', component: PrivacyPolicyView },
    { path: '/politica-de-cookie-uri', name: 'cookies', component: CookiePolicyView },
    { path: '/politica-de-livrare', name: 'delivery', component: DeliveryPolicyView },
    { path: '/politica-de-retur', name: 'returns', component: ReturnsPolicyView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/anpc', name: 'anpc', component: AnpcView }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
