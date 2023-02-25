import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutPage.vue'),
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: () => import('@/views/PrivacyPage.vue'),
    },
    {
        path: '/workout',
        redirect: '/',
    },
    {
        path: '/workout/:id',
        name: 'Workout',
        component: () => import('@/views/WorkoutPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
