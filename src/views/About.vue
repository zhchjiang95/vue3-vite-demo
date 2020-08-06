<template>
  <h4>{{ msg }}</h4>
  <ul>
    <li v-for="(item, index) in phone" :key="index">{{ item.name }}</li>
  </ul>
  <button @click="change">点击修改</button>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup(){
    const msg = 'jiang'
    const phone = reactive([
      {name: 'iPhone 7'},
      {name: 'iPhone 8'},
      {name: 'iPhone X'},
      {name: 'iPhone 11'},
    ])
    console.log(this)
    const change = function(){
      console.log(this)
      phone[phone.length - 1].name = 'iPhone XR'
    }
    return {
      msg,
      phone,
      change
    }
  }
}
</script>

<style scoped>

</style>