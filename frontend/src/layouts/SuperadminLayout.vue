<template>
  <v-app>
    <AppBar @toggle-drawer="drawer = !drawer" />

    <SuperadminSideBar v-model="drawer" />

    <!-- v-main MUST come after both app-bar and sidebar -->
    <v-main>
      <v-container fluid class="pa-6">
        <SuperadminDashboard />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import AppBar from '@/components/AppBar.vue'
import SuperadminSideBar from '@/components/SuperadminSideBar.vue'
import SuperadminDashboard from '@/views/superadmin/SuperadminDashboard.vue'

const drawer = ref(true)
</script>
