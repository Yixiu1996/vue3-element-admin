/*
 * @Author: your name
 * @Date: 2021-05-20 21:11:01
 * @LastEditTime: 2021-05-20 21:22:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-element-admin\src\router\index.js
 */
import {createRouter, createWebHashHistory} from 'vue-router'
import Index from '@/views/Index.vue'
const router = createRouter({
    history: createWebHashHistory(),// hash模式
    routes:[
        {
            path: '/',
            name: 'Index',
            component: Index
        }
    ]
})
export default router