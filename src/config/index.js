/*
 * @Author: your name
 * @Date: 2021-05-20 21:49:25
 * @LastEditTime: 2021-05-20 21:49:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-element-admin\src\config\index.js
 */
// config/index.js
export default {
    development: {
      baseUrl: '/api' // 开发代理地址
    },
    beta: {
      baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 测试接口域名
    },
    release: {
      baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 正式接口域名
    }
  }