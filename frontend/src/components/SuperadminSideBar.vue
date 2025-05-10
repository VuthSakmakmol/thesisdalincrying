<template>
  <v-navigation-drawer
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    app
    permanent
    width="250"
  >
    <v-list nav dense>
      <v-list-subheader>Superadmin Menu</v-list-subheader>

      <v-list-item title="Dashboard" prepend-icon="mdi-view-dashboard" :active="isActive('/superadmin')" @click="goTo('/superadmin')" />
      <v-list-item title="Users" prepend-icon="mdi-account-multiple" :active="isActive('/superadmin/users')" @click="goTo('/superadmin/users')" />
      <v-list-item title="Orders" prepend-icon="mdi-cart-outline" :active="isActive('/superadmin/orders')" @click="goTo('/superadmin/orders')" />
      <v-list-item title="Settings" prepend-icon="mdi-cog" :active="isActive('/superadmin/settings')" @click="goTo('/superadmin/settings')" />

      <v-divider class="my-4" />
      <v-list-item title="Logout" prepend-icon="mdi-logout" @click="logout" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const router = useRouter()
const route = useRoute()
const store = useUserStore()

const goTo = (path) => router.push(path)
const isActive = (path) => route.path === path
const logout = () => {
  store.logout()
  localStorage.removeItem('token')
  router.push('/login')
}
</script>
