import { createRouter, createWebHistory, useRoute } from "vue-router";
import * as VueRouter from 'vue-router';

export function setupRouter() {
    const routes: VueRouter.RouteRecordRaw[] = [
        { path: '/', name: 'home', component: () => import('@/components/Home/Home.vue') },
        { path: '/settings', name: 'settings', component: () => import('@/components/Settings/Settings.vue') },
        // Вывод 404 страницы
        { path: `/:catchAll(.*)`, name: 'error404', component: () => import('@/components/Error404/Error404.vue') },

    ]

    const router = createRouter({
        history: createWebHistory('/stickers-table-main/'),
        routes,
    });

    return router;
}