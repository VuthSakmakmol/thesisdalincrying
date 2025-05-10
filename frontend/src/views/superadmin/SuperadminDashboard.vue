<template>
  <SideBar/>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-6">👑 Superadmin Dashboard</h2>
      </v-col>

      <!-- Stats Cards -->
      <v-col cols="12" md="6" lg="3" v-for="card in stats" :key="card.label">
        <v-card elevation="2" class="pa-4 d-flex flex-column align-center text-center">
          <v-icon color="primary" size="36">{{ card.icon }}</v-icon>
          <h3 class="text-h6 font-weight-bold mt-3">{{ card.value }}</h3>
          <p class="text-caption text-grey-darken-1">{{ card.label }}</p>
        </v-card>
      </v-col>

      <!-- Welcome Message -->
      <v-col cols="12">
        <v-alert type="info" variant="outlined" border="start" class="mt-6">
          Welcome back, Superadmin! Manage users, track performance, and control your platform here.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const stats = [
  { label: 'Total Users', value: 1524, icon: 'mdi-account-group' },
  { label: 'Orders Today', value: 312, icon: 'mdi-cart-outline' },
  { label: 'Active Admins', value: 7, icon: 'mdi-shield-account' },
  { label: 'Revenue', value: '$21,480', icon: 'mdi-currency-usd' }
]
</script>

<style scoped>
h2 {
  color: #1e1e1e;
}
</style>
