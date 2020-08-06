<template>
  <h4>count:{{count}}</h4>
  <h4>count x10:{{bigCount}}</h4>
  <h4>count x100:{{bigBigCount}}</h4>
  <h4>count x1000:{{bigBigBigCount}}</h4>
  <button @click="countAdd">count+1</button>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup(){
    const count = ref(0)
    const bigCount = computed(() => count.value * 10)
    const bigBigCount = computed(() => count.value * 100)
    const bigBigBigCount = computed(() => count.value * 1000)
    const countAdd = () => {
      count.value++
    }

    return {
      count,
      bigCount,
      bigBigCount,
      bigBigBigCount,
      countAdd
    }
  }
}
</script>