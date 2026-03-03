import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from '../views/HomeScreen.vue'
import ExamView from '../views/ExamView.vue'
import DashboardView from '../views/DashboardView.vue'
import CategoryView from '../views/CategoryView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeScreen
    },
    {
        path: '/exam',
        name: 'exam',
        component: ExamView
    },
    {
        path: '/exam/:category',
        name: 'exam-category',
        component: ExamView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView
    },
    {
        path: '/categories',
        name: 'categories',
        component: CategoryView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
