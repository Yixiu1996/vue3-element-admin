<!--
 * @Author: your name
 * @Date: 2021-05-19 21:27:35
 * @LastEditTime: 2021-05-19 22:54:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\views\Index.vue
-->
<template>
  <div>
    <el-button type="primary">anniu</el-button>
  </div>
</template>
<script>
const ENV = import.meta.env
export default {
  name: 'Index',
  setup() {
    console.log('22222')
    console.log(ENV)
  }
}
</script>
