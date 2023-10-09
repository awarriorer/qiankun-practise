/*
 * @Name: 名称
 * @Description: 描述
 * @Author: yangyu awarriorer@163.com
 * @Date: 2023-10-08 15:10:40
 */
/*
 * @Name: 名称
 * @Description: 描述
 * @Author: yangyu awarriorer@163.com
 * @Date: 2023-10-08 15:10:40
 */
/** @format */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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
    },
    {
        path: '/sub-project',
        name: 'subProject',
        component: () => import('@/view/subProject/index.vue'),
        children: [
            {
                path: '', // 通配符路由匹配 /a/* 的所有子路径
                component: () => import('@/view/subProject/index.vue'),
            },
            {
                path: ':subpath*', // 通配符路由匹配 /a/* 的所有子路径
                component: () => import('@/view/subProject/index.vue'),
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

// router.beforeEach((to, from) => {
//     console.log('main beforeEach 1', to)
//     console.log('main beforeEach 2', from)
// });

// router.afterEach((to, from) => {
//     console.log('main afterEach 1', to)
//     console.log('main afterEach 2', from)
// });

export default router;
