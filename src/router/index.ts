/*
 * @Author: your name
 * @Date: 2021-05-19 21:26:34
 * @LastEditTime: 2021-05-19 21:31:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
