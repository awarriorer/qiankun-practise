/*
 * @Name: 名称
 * @Description: 描述
 * @Author: yangyu awarriorer@163.com
 * @Date: 2023-10-08 16:23:35
 */
/** @format */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/es/helper'

//个人菜单 type1 //企业菜单type2
export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/view/pageA/index.vue'),
    },
    {
        path: '/page-a',
        name: 'pageA',
        component: () => import('@/view/pageA/index.vue'),
    },
    {
        path: '/page-b',
        name: 'pageB',
        component: () => import('@/view/pageB/index.vue'),
    }
];



let baseUrl = '/project-b'

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    baseUrl = `/sub-project${baseUrl}`
}

const router = createRouter({
    history: createWebHistory(baseUrl),
    routes: routes,
});

// router.beforeEach((to, from) => {
//     console.log('sub-a beforeEach 1', to)
//     console.log('sub-a beforeEach 2', from)
// });

// router.afterEach((to, from) => {
//     console.log('sub-a afterEach 1', to)
//     console.log('sub-a afterEach 2', from)
// });

export default router;
