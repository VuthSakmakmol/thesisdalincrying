<template>
  <v-app>
    <v-app-bar flat color="white" elevation="1">
      <v-app-bar-title>
        🍚 RiceShop
      </v-app-bar-title>

      <v-spacer />

      <v-btn
        v-if="!store.token"
        text
        to="/login"
        color="primary"
      >
        Login
      </v-btn>

      <v-btn
        v-else
        icon
        @click="logout"
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="pa-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

const logout = () => {
  store.logout()
  router.push('/')
}
</script>
