<template>
  <h4>see console</h4>
  <button @click="changeCount">count - {{ count }}</button>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

export default {
  setup(){
    const count = ref(0)
    console.log('setup', count)
    onBeforeMount(() => {
      console.log('onBeforeMount', count.value)
    })
    onMounted(() => {
      console.log('onMounted', count.value)
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate', count.value)
    })
    onUpdated(() => {
      console.log('onUpdated', count.value)
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount', count.value)
    })
    onUnmounted(() => {
      console.log('onUnmounted', count.value)
    })
    const changeCount = () => {
      count.value++
    }

    return {
      count,
      changeCount
    }
  }
}
</script>