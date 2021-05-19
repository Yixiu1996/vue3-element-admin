/*
 * @Author: your name
 * @Date: 2021-05-19 21:14:32
 * @LastEditTime: 2021-05-19 21:34:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, 'src')
    }
  },
  base: './', //设置打包路径
  server: {
    port: 3000, // 设置服务启动端口号
    open: true, //启动服务时默认打开浏览器
    cors: true // 允许跨域
  }
})
