<template>
  <v-navigation-drawer
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    app
    permanent
    width="250"
  >
    <v-list nav dense>
      <v-list-subheader>Delivery Menu</v-list-subheader>
      <v-list-item title="Dashboard" prepend-icon="mdi-view-dashboard" @click="goTo('/delivery')" />
      <v-list-item title="Assigned Orders" prepend-icon="mdi-truck-delivery" @click="goTo('/delivery/assigned')" />
      <v-list-item title="Map" prepend-icon="mdi-map-marker-radius" @click="goTo('/delivery/map')" />
      <v-divider class="my-4" />
      <v-list-item title="Logout" prepend-icon="mdi-logout" @click="logout" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const router = useRouter()
const store = useUserStore()
const goTo = (path) => router.push(path)
const logout = () => {
  store.logout()
  router.push('/login')
}
</script>
