import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index.js'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

const app = createApp(App)
app.use(router).mount('#app')
app.use(Vueform, vueformConfig)