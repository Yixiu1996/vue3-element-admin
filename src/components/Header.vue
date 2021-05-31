<!--
 * @Author: your name
 * @Date: 2021-05-20 22:12:59
 * @LastEditTime: 2021-05-31 21:17:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-element-admin\src\components\Header.vue
-->
<template>
  <div class="header">
    <div class="left">
      <span style="font-size: 20px">{{ name }}</span>
    </div>
    <div class="right">
      <div class="right-icon">
        <i :class="iconfont"></i>
      </div>
      <div class="right-time">{{ timeValue }}</div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'

export default {
  name: 'Header',
  setup() {
    const router = useRouter()
    const pathMap = {
      index: '首页',
      add: '添加商品'
    }
    const state = reactive({
      name: '首页',
      timeValue: '',
      timer: null,
      iconfont: '&#xe690;'
    })
    router.afterEach((to) => {
      // const { id } = to.query
      state.name = pathMap[to.name]
      console.log(to)
    })
    if (state.timer) clearInterval()
    state.timer = setInterval(() => {
      state.timeValue = dayjs().format('YYYY/DD/MM HH:MM:ss')
      // console.log(dayjs().format('HH'))
    }, 1000)
    watch(
      state,
      () => {
        if (dayjs().format('HH') >= 0 && dayjs().format('HH') < 6) {
          state.iconfont = 'iconfont icon-lingchen'
        } else if (dayjs().format('HH') >= 6 && dayjs().format('HH') < 12) {
          state.iconfont = 'iconfont icon-shangwu'
        } else if (dayjs().format('HH') >= 12 && dayjs().format('HH') < 18) {
          state.iconfont = 'iconfont icon-xiawu'
        } else {
          state.iconfont = 'iconfont icon-wanshang'
        }
      },
      {
        // 页面加载会先执行一次
        immediate: true
      }
    )
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .right {
    display: flex;
  }
  .iconfont {
    color: #ff8000;
  }
  .right-time {
    margin-left: 15px;
  }
}
</style>
