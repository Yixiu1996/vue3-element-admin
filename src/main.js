/*
 * @Author: your name
 * @Date: 2021-05-20 21:06:48
 * @LastEditTime: 2021-05-24 22:52:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-element-admin\src\main.js
 */
import {
  createApp
} from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css';
import '~/theme/index.css'
import '@/assets/iconfont/iconfont.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
