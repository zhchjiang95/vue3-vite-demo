<template>
  <h4>{{ count }}</h4>
  <button @click="countAdd">click +1</button>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(){
    const count = ref(0)
    const countAdd = function(){
      count.value++
    }
    return {
      count,
      countAdd
    }
  }
}
</script>