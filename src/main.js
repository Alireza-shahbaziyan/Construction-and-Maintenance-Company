import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
 // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
 // Import Swiper styles
import 'swiper/css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
