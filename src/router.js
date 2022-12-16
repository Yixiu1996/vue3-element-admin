import {createRouter, createWebHashHistory} from 'vue-router';
// 定义路由组件

// 定义对应组件的路由
const routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
        path: '/login',
        // 这里也是一个坑 本来用的是@ 但是不是别 需要换成src才管用 跟vue2有区别
        component: import('/src/views/login/index.vue')
    },
    {
        path: '/404',
        component: import('/src/views/404/index.vue')
    },
    {
        // 这里遇到一个坑 就是vue3不能正确识别* 所以这边需要用正则来写这个* 进行匹配
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]

// 创建路由实例 并传递'routes'配置
const router = createRouter({
    //  可以选择history模式跟hash模式 此处选择hash模式
    history: createWebHashHistory(),
    routes
})

export default router;