import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import MapPage from '@/pages/MapPage.vue';
import StepPage from '@/pages/StepPage.vue';

const routes = [
    {
        path: '/',
        name: 'MapPage',
        component: MapPage,
    },
    {
        path: '/steps/:id',
        name: 'StepPage',
        component: StepPage,
    },

]

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
})

export default router;
