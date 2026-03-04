import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from '../views/HomeScreen.vue'
import ExamView from '../views/ExamView.vue'
import DashboardView from '../views/DashboardView.vue'
import CategoryView from '../views/CategoryView.vue'
import GlossaireView from '../views/GlossaireView.vue'
import WeakPointsView from '../views/WeakPointsView.vue'
import EntretienView from '../views/EntretienView.vue'
import CourseListView from '../views/CourseListView.vue'
import CourseChapterView from '../views/CourseChapterView.vue'

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
    },
    {
        path: '/glossaire',
        name: 'glossaire',
        component: GlossaireView
    },
    {
        path: '/revision',
        name: 'revision',
        component: WeakPointsView
    },
    {
        path: '/entretien',
        name: 'entretien',
        component: EntretienView
    },
    {
        path: '/cours',
        name: 'CourseList',
        component: CourseListView
    },
    {
        path: '/cours/:themeId',
        name: 'CourseChapter',
        component: CourseChapterView
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
