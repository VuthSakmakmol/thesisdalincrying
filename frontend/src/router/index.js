import { createRouter, createWebHistory } from 'vue-router'

// Layouts (each renders its own content directly)
import CustomerLayout from '@/layouts/CustomerLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import DeliveryLayout from '@/layouts/DeliveryLayout.vue'
import SuperadminLayout from '@/layouts/SuperadminLayout.vue'

// Guest views
import Guest from '@/views/Guest.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

const routes = [
  // Public routes
  {
    path: '/',
    component: Guest
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },

  // Role-based layouts
  {
    path: '/customer',
    component: CustomerLayout
  },
  {
    path: '/admin',
    component: AdminLayout
  },
  {
    path: '/delivery',
    component: DeliveryLayout
  },
  {
    path: '/superadmin',
    component: SuperadminLayout
  },

  // Catch-all (404)
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔐 Navigation Guard
import { useUserStore } from '@/stores/userStore'

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  const role = store.user?.role
  const isLoggedIn = !!store.user

  // Redirect logged-in users from login/register
  if ((to.path === '/login' || to.path === '/register') && isLoggedIn) {
    return next(`/${role}`)
  }

  // Protect role-based pages
  const protectedPaths = ['/customer', '/admin', '/delivery', '/superadmin']
  if (protectedPaths.includes(to.path) && !isLoggedIn) {
    return next('/login')
  }

  next()
})

export default router
