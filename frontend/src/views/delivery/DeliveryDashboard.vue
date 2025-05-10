<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-6">🚚 Delivery Dashboard</h2>
      </v-col>

      <!-- Delivery Stats Cards -->
      <v-col cols="12" md="6" lg="3" v-for="card in stats" :key="card.label">
        <v-card elevation="2" class="pa-4 d-flex flex-column align-center text-center">
          <v-icon color="deep-purple" size="36">{{ card.icon }}</v-icon>
          <h3 class="text-h6 font-weight-bold mt-3">{{ card.value }}</h3>
          <p class="text-caption text-grey-darken-1">{{ card.label }}</p>
        </v-card>
      </v-col>

      <!-- Notification / Instruction -->
      <v-col cols="12">
        <v-alert type="success" variant="outlined" border="start" class="mt-6">
          You're logged in as a Delivery Staff. Track assigned orders, update delivery statuses, and view route maps here.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const stats = [
  { label: 'Assigned Orders', value: 24, icon: 'mdi-clipboard-list-outline' },
  { label: 'In Transit', value: 9, icon: 'mdi-truck-fast-outline' },
  { label: 'Delivered Today', value: 15, icon: 'mdi-package-variant-closed' },
  { label: 'Pending Updates', value: 3, icon: 'mdi-alert-circle-outline' }
]
</script>

<style scoped>
h2 {
  color: #1e1e1e;
}
</style>
