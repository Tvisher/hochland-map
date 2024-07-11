import { createApp } from 'vue'
import router from "@/router/router";
import { createPinia } from 'pinia'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import './assets/scss/main.scss'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import App from './App.vue'
createApp(App)
    .use(router)
    .use(createPinia())
    .use(VuePlyr, {
        plyr: {}
    })
    .mount('#app')
