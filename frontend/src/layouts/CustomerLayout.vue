<template>
  <v-app>
    <AppBar />
    <CustomerSideBar />
    <v-main class="pa-6">
      <CustomerDashboard />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import CustomerSideBar from '@/components/CustomerSideBar.vue'
import CustomerDashboard from '@/views/shop/CustomerDashboard.vue'
</script>
