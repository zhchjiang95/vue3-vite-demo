<template>
  <h4 @click="reverse">{{ msg }}</h4>
  <h4>{{ msgPlus }}</h4>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  setup(){
    const msg = ref('Hello')
    const msgPlus = ref('')
    watchEffect(() => {
      msgPlus.value = msg.value + ', jiang'
    })
    const reverse = () => {
      msg.value = msg.value.split('').reverse().join('')
    }

    return {
      msg,
      msgPlus,
      reverse
    }
  }
}
</script>