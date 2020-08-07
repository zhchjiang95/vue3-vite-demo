<template>
  <h4>mouseX:{{ x }}</h4>
  <h4>mouseY:{{ y }}</h4>
  <div class="move" :style="{top: y - 50 + 'px', left: x - 50 + 'px'}"></div>
</template>


<script>
import Position from '../components/Position.js'

export default {
  setup(){
    const { x, y } = Position()
    return {
      x,
      y
    }
  }
}
</script>

<style scoped>
.move{
  width: 100px;
  height: 100px;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  background: rgba(115, 255, 0, 0.507);
}
</style>