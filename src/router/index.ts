import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/arm',
        name: 'Arm Workout',
        component: () => import('@/views/ArmWorkout.vue'),
    },
    {
        path: '/body',
        name: 'Body Workout',
        component: () => import('@/views/BodyWorkout.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutPage.vue'),
    },
    {
        path: '/workout/:id',
        name: 'Workout',
        component: () => import('@/views/WorkoutPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
