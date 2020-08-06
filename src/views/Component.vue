<template>
  <input type="text" v-model="count">
  <h4>{{ doubled }}</h4>
  <j-button @click="clickHandler" size="medium" type="primary">
    <template #txt>
      按钮
    </template>
    <template #num>
      1
    </template>
  </j-button>
</template>

<script>
import { ref, computed, getCurrentInstance } from 'vue'
import JButton from '../components/JButton.vue'

export default {
  name: 'home',
  components: {
    JButton
  },
  setup(){
    const { ctx } = getCurrentInstance()  // 获取当前组件实例
    console.log(ctx.$router.getRoutes())
    const count = ref('2')
    const doubled = computed(() => count.value * 2)
    const clickHandler = () => {
      console.log('点击了JBtton')
      count.value = '点击了JBtton'
    }
    return {
      count,
      doubled,
      clickHandler
    }
  }
}
</script>
