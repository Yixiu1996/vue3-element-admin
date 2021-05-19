<template>
  <div>
    <div>{{ count }}</div>
    <button @click="add">+++</button>
  </div>
</template>
<script>
import { watchEffect } from 'vue'

export default {
  name: 'Test',
  props: {
    count: Number
  },
  emits: ['add', 'alert'],
  setup(props, ctx) {
    const add = () => {
      ctx.emit('add', 50)
    }

    watchEffect(() => {
      console.log(`props.count = ${props.count}`)
    })
    return {
      add
    }
  }
}
</script>
