/*
 * @Author: your name
 * @Date: 2021-05-19 21:14:32
 * @LastEditTime: 2021-05-19 22:58:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import { ElButton } from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css'
import '~/theme/index.css';
const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElButton);
app.mount('#app');
//# sourceMappingURL=main.js.map