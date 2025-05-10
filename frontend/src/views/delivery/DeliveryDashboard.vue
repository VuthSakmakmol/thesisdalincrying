<template>
  <v-container>
    <h1 class="text-h5 font-weight-bold mb-4">🚚 Delivery Dashboard</h1>
    <v-card elevation="2" class="pa-4">
      <p>Welcome, Delivery Staff!</p>
      <p>You can track, update, and complete assigned deliveries here.</p>
    </v-card>
  </v-container>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'

const store = useUserStore()
// You can use store.user.role if needed
</script>
