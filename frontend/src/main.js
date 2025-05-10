// frontend/src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(vuetify)

// ✅ Import and load user after app is configured
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()
userStore.loadFromStorage()

app.mount('#app')
