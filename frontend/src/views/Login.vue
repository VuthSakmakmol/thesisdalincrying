<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card class="pa-5" elevation="5" width="400">
      <v-card-title class="text-h6 font-weight-bold">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submit">
          <v-text-field v-model="email" label="Email" required />
          <v-text-field v-model="password" label="Password" type="password" required />
          <v-select
            v-model="role"
            :items="['superadmin', 'customer', 'delivery']"
            label="Role"
            required
          />

          <v-btn class="mt-4" color="primary" type="submit" block>Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const role = ref('');

function submit() {
  // Simulate successful login
  authStore.login({ email: email.value, role: role.value });
  router.push(`/${role.value}/dashboard`);
}
</script>
