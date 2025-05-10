<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-6">🛒 Welcome to Your Dashboard</h2>
      </v-col>

      <!-- Overview Cards -->
      <v-col cols="12" md="6" lg="3" v-for="card in stats" :key="card.label">
        <v-card elevation="2" class="pa-4 d-flex flex-column align-center text-center">
          <v-icon color="teal" size="36">{{ card.icon }}</v-icon>
          <h3 class="text-h6 font-weight-bold mt-3">{{ card.value }}</h3>
          <p class="text-caption text-grey-darken-1">{{ card.label }}</p>
        </v-card>
      </v-col>

      <!-- Message -->
      <v-col cols="12">
        <v-alert type="info" variant="outlined" border="start" class="mt-6">
          Thank you for shopping with us. Track your orders, view your profile, and manage your preferences here.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const stats = [
  { label: 'Total Orders', value: 12, icon: 'mdi-cart' },
  { label: 'Pending Deliveries', value: 3, icon: 'mdi-truck-delivery' },
  { label: 'Wishlist Items', value: 8, icon: 'mdi-heart-outline' },
  { label: 'Saved Addresses', value: 2, icon: 'mdi-map-marker-outline' }
]
</script>

<style scoped>
h2 {
  color: #1e1e1e;
}
</style>
