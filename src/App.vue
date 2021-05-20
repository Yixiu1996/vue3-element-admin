<!--
 * @Author: your name
 * @Date: 2021-05-20 21:06:48
 * @LastEditTime: 2021-05-20 22:27:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-element-admin\src\App.vue
-->
<template>
  <div class="layout">
    <el-container class="container">
      <el-aside class="aside">
        <!--系统名称+logo-->
        <div class="head">
          <div>
            <img src="@/assets/img2.jpg" alt="logo">
            <span>vue3 admin</span>
          </div>
        </div>
        <div class="line" />
        <el-menu
          background-color="#392473"
          text-color="#fff"
        >
          <!--一级栏目-->
          <el-submenu index="1">
            <template #title>
              <span>学习</span>
            </template>
            <!--二级栏目-->
            <el-menu-item-group>
              <el-menu-item><i class="el-icon-data-line" />vue3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template #title>
              <span>娱乐</span>
            </template>
            <!--二级栏目-->
            <el-menu-item-group>
              <el-menu-item><i class="el-icon-data-line" />音乐</el-menu-item>
              <el-menu-item><i class="el-icon-data-line" />游戏</el-menu-item>
              <el-menu-item><i class="el-icon-data-line" />小说</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="content">
        <Header />
        <div class="main">
          <router-view />
        </div>
        <Footer />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
}
.container {
  height: 100vh;
}
.aside {
  width: 200px!important;
  background-color: #222832;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.head > div {
  display: flex;
  align-items: center;
}

.head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.head span {
  font-size: 20px;
  color: #ffffff;
}
.line {
  border-top: 1px solid hsla(0,0%,100%,.05);
  border-bottom: 1px solid rgba(0,0,0,.2);
}
.content{
  display: flex;
  flex-direction: column;
}
</style>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.el-menu {
  border-right: none!important;
}
.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, .05);
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}
.el-submenu:first-child {
  border-top: none;
}
.el-submenu [class^="el-icon-"] {
  vertical-align: -1px!important;
}
a {
  color: #409eff;
  text-decoration: none;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
.el-popper__arrow {
  display: none;
}
.main {
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px;
}
</style>
