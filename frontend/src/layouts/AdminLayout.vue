<template>
  <v-app>
    <AppBar />
    <AdminSideBar />
    <v-main class="pa-6">
      <AdminDashboard />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import AdminSideBar from '@/components/AdminSideBar.vue'
import AdminDashboard from '@/views/admin/AdminDashboard.vue'
</script>
