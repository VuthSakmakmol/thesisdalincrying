import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import CustomerLayout from '@/layouts/CustomerLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import DeliveryLayout from '@/layouts/DeliveryLayout.vue'
import SuperadminLayout from '@/layouts/SuperadminLayout.vue'

// Views (Pages)
import Guest from '@/views/Guest.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

import CustomerDashboard from '@/views/shop/CustomerDashboard.vue'
import AdminDashboard from '@/views/admin/AdminDashboard.vue'
import DeliveryDashboard from '@/views/delivery/DeliveryDashboard.vue'
import SuperadminDashboard from '@/views/superadmin/SuperadminDashboard.vue'

// Main routes
const routes = [
  {
    path: '/',
    component: CustomerLayout,
    children: [
      { path: '', component: Guest },
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: 'customer/dashboard', component: CustomerDashboard }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: 'dashboard', component: AdminDashboard }
    ]
  },
  {
    path: '/delivery',
    component: DeliveryLayout,
    children: [
      { path: 'dashboard', component: DeliveryDashboard }
    ]
  },
  {
    path: '/superadmin',
    component: SuperadminLayout,
    children: [
      { path: 'dashboard', component: SuperadminDashboard }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

import { useUserStore } from '@/stores/userStore'

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  const role = store.user?.role

  // Redirect logged-in users from login/register to their dashboard
  if ((to.path === '/login' || to.path === '/register') && store.token) {
    return next(`/${role}/dashboard`)
  }

  // Protect role-specific routes
  const protectedRoutes = [
    '/customer/dashboard',
    '/admin/dashboard',
    '/delivery/dashboard',
    '/superadmin/dashboard'
  ]
  if (protectedRoutes.includes(to.path) && !store.token) {
    return next('/login')
  }

  next()
})


export default router
