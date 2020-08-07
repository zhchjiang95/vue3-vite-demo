import { toRefs, reactive, onMounted, onUnmounted } from 'vue'

export default () => {
  const positions = reactive({x: 0, y: 0})
  const update = (page) => {
    positions.x = page.pageX
    positions.y = page.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update, false)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update, false)
  })
  // 将 reactive 对象转未 ref 的值并返回
  return toRefs(positions)
}