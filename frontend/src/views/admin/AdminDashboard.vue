<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-6">🛠️ Admin Dashboard</h2>
      </v-col>

      <!-- Dashboard Stats -->
      <v-col cols="12" md="6" lg="3" v-for="card in stats" :key="card.label">
        <v-card elevation="2" class="pa-4 d-flex flex-column align-center text-center">
          <v-icon color="indigo" size="36">{{ card.icon }}</v-icon>
          <h3 class="text-h6 font-weight-bold mt-3">{{ card.value }}</h3>
          <p class="text-caption text-grey-darken-1">{{ card.label }}</p>
        </v-card>
      </v-col>

      <!-- System Message -->
      <v-col cols="12">
        <v-alert type="info" variant="outlined" border="start" class="mt-6">
          Welcome, Admin! You can manage inventory, review customer activity, and process orders here.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const stats = [
  { label: 'Pending Orders', value: 38, icon: 'mdi-timer-sand' },
  { label: 'Shipped Orders', value: 104, icon: 'mdi-truck-check' },
  { label: 'Product Stock', value: 678, icon: 'mdi-cube-outline' },
  { label: 'Low Stock Items', value: 12, icon: 'mdi-alert-decagram' }
]
</script>

<style scoped>
h2 {
  color: #1e1e1e;
}
</style>
