import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/info',
        name: 'Info',
        component: () => import('@/views/Info.vue')
    },
    {
        path: '/battleinfo',
        name: 'BattleInfo',
        component: () => import('@/views/BattleInfo.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/dev',
        name: 'Dev',
        component: () => import('@/views/Dev.vue')
    },
    {
        path: '/database/:shipID',
        name: 'Database',
        component: () => import('@/views/Database.vue')
    },
    {
        path: '/info/:playerName',
        name: 'Info',
        component: () => import('@/views/Info.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
