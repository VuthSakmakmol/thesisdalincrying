<template>
  <v-app>
    <!-- Top bar -->
    <AppBar />

    <!-- Sidebar -->
    <SideBar />

    <!-- Main content -->
    <v-main class="pa-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import SideBar from '@/components/SideBar.vue'
</script>
