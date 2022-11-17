import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ArmWorkoutPage from '../views/ArmWorkout.vue'
import BodyWorkoutPage from '../views/BodyWorkout.vue'
import AboutPage from '../views/AboutPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/arm',
        name: 'Arm Workout',
        component: ArmWorkoutPage,
    },
    {
        path: '/body',
        name: 'Body Workout',
        component: BodyWorkoutPage,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
