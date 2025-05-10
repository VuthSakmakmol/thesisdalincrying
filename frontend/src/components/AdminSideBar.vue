<template>
  <v-navigation-drawer
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    app
    permanent
    width="250"
  >
    <v-list nav dense>
      <v-list-subheader>Admin Menu</v-list-subheader>
      <v-list-item title="Dashboard" prepend-icon="mdi-view-dashboard" @click="goTo('/admin')" />
      <v-list-item title="Orders" prepend-icon="mdi-cart" @click="goTo('/admin/orders')" />
      <v-list-item title="Inventory" prepend-icon="mdi-package-variant" @click="goTo('/admin/inventory')" />
      <v-list-item title="Support" prepend-icon="mdi-lifebuoy" @click="goTo('/admin/support')" />
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
