<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card class="pa-6" elevation="6" width="400">
      <v-card-title class="text-h6 font-weight-bold">📝 Register</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="register">
          <v-text-field
            v-model="form.name"
            label="Full Name"
            required
            outlined
            dense
          />
          <v-text-field
            v-model="form.phone"
            label="Phone Number"
            required
            outlined
            dense
          />
          <v-text-field
            v-model="form.password"
            label="Password"
            type="password"
            required
            outlined
            dense
          />

          <v-btn
            color="primary"
            type="submit"
            :loading="loading"
            class="mt-4"
            block
          >
            Register
          </v-btn>

          <v-btn
            text
            class="mt-2"
            block
            to="/login"
          >
            Already have an account? Login
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const router = useRouter()
const store = useUserStore()
const loading = ref(false)

const form = ref({
  name: '',
  phone: '',
  password: ''
})

const register = async () => {
  try {
    loading.value = true

    const res = await axios.post('/auth/register', form.value)
    store.setUser(res.data)

    Swal.fire('Success', 'Account created!', 'success')

    router.push('/customer/dashboard')
  } catch (err) {
    Swal.fire('Error', err.response?.data?.message || 'Registration failed', 'error')
  } finally {
    loading.value = false
  }
}
</script>
