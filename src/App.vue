<template>
  <Layout>
    <RouterView v-slot="{ Component, route }">
      <Transition name="slide" mode="out-in">
        <div :key="route.fullPath">
          <component :is="Component" />
        </div>
      </Transition>
    </RouterView>
  </Layout>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Layout from './components/Layout.vue'
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
