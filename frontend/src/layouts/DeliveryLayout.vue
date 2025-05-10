<template>
  <v-app>
    <AppBar />
    <DeliverySideBar />
    <v-main class="pa-6">
      <DeliveryDashboard />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import DeliverySideBar from '@/components/DeliverySideBar.vue'
import DeliveryDashboard from '@/views/delivery/DeliveryDashboard.vue'
</script>
