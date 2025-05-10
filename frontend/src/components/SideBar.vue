<template>
  <v-navigation-drawer app permanent>
    <v-list nav>
      <!-- Guest Sidebar -->
      <template v-if="role === 'guest'">
        <v-list-item title="Home" @click="goTo('/home')"></v-list-item>
        <v-list-item title="Login" @click="goTo('/login')"></v-list-item>
        <v-list-item title="Register" @click="goTo('/register')"></v-list-item>
      </template>

      <!-- Superadmin Sidebar -->
      <template v-else-if="role === 'superadmin'">
        <v-list-item title="Dashboard" @click="safeGoTo('dashboard')"></v-list-item>
        <v-list-item title="Users" @click="safeGoTo('users')"></v-list-item>
        <v-list-item title="Orders" @click="safeGoTo('orders')"></v-list-item>
        <v-list-item title="Products" @click="safeGoTo('products')"></v-list-item>
        <v-list-item title="Settings" @click="safeGoTo('settings')"></v-list-item>
      </template>

      <!-- Customer Sidebar -->
      <template v-else-if="role === 'customer'">
        <v-list-item title="Home" @click="goTo('/home')"></v-list-item>
        <v-list-item title="Shop" @click="goTo('/shop')"></v-list-item>
        <v-list-item title="My Orders" @click="goTo('/my-orders')"></v-list-item>
        <v-list-item title="Profile" @click="goTo('/profile')"></v-list-item>
      </template>

      <!-- Delivery Sidebar -->
      <template v-else-if="role === 'delivery'">
        <v-list-item title="Dashboard" @click="safeGoTo('dashboard')"></v-list-item>
        <v-list-item title="Assigned Orders" @click="safeGoTo('orders')"></v-list-item>
        <v-list-item title="Account" @click="safeGoTo('account')"></v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

// ✅ Load user from localStorage on mount
onMounted(() => {
  authStore.loadUserFromStorage();
});

// ✅ Computed role with fallback
const role = computed(() => authStore.user?.role || 'guest');

// ✅ Navigation logic
function goTo(path) {
  router.push(path);
}

function safeGoTo(target) {
  if (role.value === 'guest') {
    router.push('/login');
  } else {
    router.push(`/${role.value}/${target}`);
  }
}
</script>
