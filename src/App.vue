<!--
 * @Author: your name
 * @Date: 2021-05-19 21:51:40
 * @LastEditTime: 2021-05-19 22:19:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-app\src\App.vue
-->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { ref, reactive, onMounted } from 'vue'

export default {
  name: 'App',
  components: {

  },
  setup() {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
