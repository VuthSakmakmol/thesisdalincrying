<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card class="pa-5" width="400" elevation="4">
      <v-card-title class="text-h6 font-weight-bold">
        <v-icon class="mr-2" color="primary">mdi-lock</v-icon>
        Login
      </v-card-title>

      <v-form @submit.prevent="submit" class="mt-4">
        <v-text-field
          v-model="phone"
          label="Phone Number"
          placeholder="e.g. 123456"
          dense
          outlined
          hide-details
          required
        />

        <v-text-field
          v-model="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          dense
          outlined
          hide-details
          required
        />

        <v-btn block class="mt-4" color="primary" type="submit">Login</v-btn>
      </v-form>

      <v-btn
        variant="outlined"
        block
        class="mt-3 text-caption font-weight-bold"
        @click="goToRegister"
      >
        Don’t have an account? Register
      </v-btn>
    </v-card>
  </v-container>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import axios from '@/plugins/axios';

const router = useRouter();
const userStore = useUserStore();

const phone = ref('');
const password = ref('');

async function submit() {
  try {
    const { data } = await axios.post('/auth/login', {
      phone: phone.value,
      password: password.value,
    });

    userStore.login(data.user);
    localStorage.setItem('token', data.token);

    router.push(`/${data.user.role}/dashboard`);
  } catch (err) {
    const msg = err.response?.data?.message || 'Login failed';
    alert(msg);
  }
}


function goToRegister() {
  router.push('/register');
}

</script>


<style scoped>
.v-card-title {
  display: flex;
  align-items: center;
}
</style>
