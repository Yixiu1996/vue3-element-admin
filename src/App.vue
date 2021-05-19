<template>
  <div>
    <div ref="changeRef">hello world</div>
    <Test :count="count" @add="add"></Test>
  </div>
</template>

<script lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Test from './components/Test.vue'

export default {
  name: 'App',
  components: {
    Test
  },
  setup() {
    const count = ref(0)
    const changeRef = ref(null)
    const object = reactive({ foo: 'bar' })
    const add = (num: number) => {
      count.value += num
      return count.value
    }
    onMounted(() => {
      console.log(changeRef.value)
    })
    return {
      count,
      object,
      add
    }
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
