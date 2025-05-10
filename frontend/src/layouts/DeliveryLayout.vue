<template>
  <v-app>
    <!-- Shared Top App Bar -->
    <AppBar />

    <!-- Sidebar customized by role -->
    <SideBar />

    <!-- Content area for Delivery pages -->
    <v-main class="pa-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import SideBar from '@/components/SideBar.vue'
</script>
