<template>
  <h4 v-for="(item, index) in user" :key="index">{{ item.name }} - {{ item.age }}</h4>
  <button @click="userChange">click change age</button>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup(){
    const user = reactive([
      { name: 'jiang', age: 18 }
    ])
    const userChange = function(){
      user[0].age += 1
    }
    return {
      user,
      userChange
    }
  }
}
</script>