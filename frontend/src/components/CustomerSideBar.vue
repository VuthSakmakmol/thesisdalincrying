<template>
  <v-navigation-drawer
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    app
    permanent
    width="250"
  >
    <v-list nav dense>
      <v-list-subheader>Customer Menu</v-list-subheader>
      <v-list-item title="Dashboard" prepend-icon="mdi-home" @click="goTo('/customer')" />
      <v-list-item title="My Orders" prepend-icon="mdi-basket" @click="goTo('/customer/orders')" />
      <v-list-item title="Profile" prepend-icon="mdi-account" @click="goTo('/customer/profile')" />
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
