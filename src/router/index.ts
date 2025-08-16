import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const Login = () => import('@/views/Login/Login.vue')
const Home = () => import('@/views/Home/Home.vue')
const Sign = () => import('@/views/Sign/Sign.vue')
const Exception = () => import('@/views/Exception/Exception.vue')
const Check = () => import('@/views/Check/Check.vue')
const Apply = () => import('@/views/Apply/Apply.vue')

declare module 'vue-router' {
    interface RouteMeta {
        menu?: boolean
        title?: string
        icon?: string
        auth?: boolean
    }
}

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/Sign',
        meta: {
            menu: true,
            title: "考勤管理",
            icon: "document-copy",
            auth: true,
        },
        children: [
            {
                path: '/Sign',
                name: 'Sign',
                component: Sign,
                meta: {
                    menu: true,
                    title: "在线打卡签到",
                    icon: "document-copy",
                    auth: true,
                },
            },
            {
                path: '/Exception',
                name: 'Exception',
                component: Exception
            },
            {
                path: '/Check',
                name: 'Check',
                component: Check
            },
            {
                path: '/Apply',
                name: 'Apply',
                component: Apply
            }
        ]
    }, {
        path: '/Login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
