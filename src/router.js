import { createRouter, createWebHistory } from 'vue-router'
import FaqsView from './views/FaqsView.vue'
import FeaturesView from './views/FeaturesView.vue'
import HomeView from './views/HomeView.vue'
import PricingView from './views/PricingView.vue'
import ReviewsView from './views/ReviewsView.vue'

const router = createRouter({
  history: createWebHistory('/opa-agency/'),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/features', name: 'features', component: FeaturesView },
    { path: '/reviews', name: 'reviews', component: ReviewsView },
    { path: '/pricing', name: 'pricing', component: PricingView },
    { path: '/faqs', name: 'faqs', component: FaqsView }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
