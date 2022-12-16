import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './styles/element/index.scss'
import './styles/index.scss'
// 想要正常引入.js文件 需要到env.d.ts里面添加 declare module '*.js'
import router from './router.js'

import './assets/main.css'


createApp(App).use(router).use(ElementPlus, { zIndex: 3000 }).mount('#app')
