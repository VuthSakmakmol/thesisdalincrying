<template>
  <v-container>
    <h1 class="text-h5 font-weight-bold mb-4">📊 Superadmin Dashboard</h1>
    <v-card elevation="2" class="pa-4">
      <p>Welcome, Superadmin!</p>
      <p>Here you can manage admins, deliveries, and view system analytics.</p>
    </v-card>
  </v-container>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
const store = useUserStore()
</script>
