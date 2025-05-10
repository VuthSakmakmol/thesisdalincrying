<template>
  <v-container>
    <h1 class="text-h5 font-weight-bold mb-4">📦 Admin Dashboard</h1>
    <v-card elevation="2" class="pa-4">
      <p>Welcome, Admin!</p>
      <p>Use this panel to manage delivery users and monitor rice orders.</p>
    </v-card>
  </v-container>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'

const store = useUserStore()
// Access user data if needed
</script>
