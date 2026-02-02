import { createRouter, createWebHistory } from 'vue-router'
import ContactView from './views/policy/ContactView.vue'
import CookiePolicyView from './views/policy/CookiePolicyView.vue'
import DeliveryPolicyView from './views/policy/DeliveryPolicyView.vue'
import PrivacyPolicyView from './views/policy/PrivacyPolicyView.vue'
import ReturnsPolicyView from './views/policy/ReturnsPolicyView.vue'
import TermsView from './views/policy/TermsView.vue'
import AnpcView from './views/policy/AnpcView.vue'
// import ExamplesView from './views/ExamplesView.vue'
// import PortfolioView from './views/PortfolioView.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ServicesView from './views/Services.vue'
import OnePageWebsiteView from './views/services/OnePageWebsiteView.vue'
import MultiPageWebsiteView from './views/services/MultiPageWebsiteView.vue'
import EcommerceWebsiteView from './views/services/EcommerceWebsiteView.vue'
import FacebookAdsView from './views/services/FacebookAdsView.vue'
import OnePageExamplesView from './views/OnePageExamplesView.vue'
import MultiPageExamplesView from './views/MultiPageExamplesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/despre-noi', name: 'about', component: AboutView },
    { path: '/servicii', name: 'services', component: ServicesView },
    { path: '/servicii/one-page-website', name: 'one-page-website', component: OnePageWebsiteView },
    { path: '/servicii/one-page-website/exemple', name: 'one-page-examples', component: OnePageExamplesView },
    { path: '/servicii/multi-page-website', name: 'multi-page-website', component: MultiPageWebsiteView },
    { path: '/servicii/multi-page-website/exemple', name: 'multi-page-examples', component: MultiPageExamplesView },
    { path: '/servicii/ecommerce-website', name: 'ecommerce-website', component: EcommerceWebsiteView },
    { path: '/servicii/facebook-ads', name: 'facebook-ads', component: FacebookAdsView },
    // { path: '/examples', name: 'examples', component: ExamplesView },
    // { path: '/portofoliu', name: 'portfolio', component: PortfolioView },
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
