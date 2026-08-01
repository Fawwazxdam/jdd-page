import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const saved = localStorage.getItem('jdd-theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const theme = saved || (prefersDark ? 'dark' : 'light')
document.documentElement.classList.toggle('dark', theme === 'dark')
document.documentElement.classList.toggle('light', theme === 'light')

const app = createApp(App)
app.use(router)
app.mount('#app')
