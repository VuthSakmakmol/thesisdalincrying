<template>
  <v-app>
    <!-- Shared Top Navigation Bar -->
    <AppBar />

    <!-- Dynamic Sidebar for Admin -->
    <SideBar />

    <!-- Dashboard or page content -->
    <v-main class="pa-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import SideBar from '@/components/SideBar.vue'
</script>
