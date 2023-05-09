import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(Vue3Toastify, {
  autoClose: 1000,
  position: 'top-right',
  style: {
    opacity: '1',
    userSelect: 'initial'
  }
} as ToastContainerOptions)
app.mount('#app')
