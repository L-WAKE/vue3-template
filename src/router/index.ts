import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { clearPending } from "@/utils/request"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/views/home/index.vue")
    },
    {
        path: "/404",
        component: () => import("@/views/404.vue")
    },
    {
        path: "/:catchAll(.*)", // 不识别的path自动匹配404
        redirect: '/404',
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

//在跳转路由之前，先清除所有的请求
router.beforeEach((to, from, next) => {
    clearPending()
    next()
})

export default router