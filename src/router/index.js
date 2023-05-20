import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
import ClassroomifyPage from '../views/ClassroomifyPage.vue'
import KaziPage from '../views/KaziPage.vue'
import Paperclip from '../views/PaperclipPage.vue'
import DarylPage from '../views/DarylPage.vue'
import ContactPage from '../views/ContactPage.vue'
import MyCV from '../views/MyCV.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: IndexPage,
    },
    {
        path: '/Classroomify',
        name: 'Classroomify',
        component: ClassroomifyPage,
    },
    {
        path: '/KAZI',
        name: 'Kazi',
        component: KaziPage,
    },
    {
        path: '/PaperClip',
        name: 'Paperclip',
        component: Paperclip,
    },
    {
        path: '/Daryl-Cafe',
        name: 'Daryl',
        component: DarylPage,
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: ContactPage,
    },
    {
        path: '/CV-Berdin',
        name: 'CV',
        component: MyCV,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router