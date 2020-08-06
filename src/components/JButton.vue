<template>
  <div
    class="j-button"
    :class="[size ? `j-button-size-${size}` : '', type ? `j-button-type-${type}` : '']"
    @click="handleClick"
    >
    <slot name="txt"/>
    <slot name="num"/>
  </div>
</template>

<script>
export default {
  name: 'j-Button',
  props: {
    size: {
      type: String,
      default: 'default'  // default primary
    },
    type: {
      type: String,
      default: 'default'  // default medium mini
    }
  },
  setup(props, ctx) {
    const handleClick = () => {
      ctx.emit('click')
    }
    return {
      handleClick
    }
  }
}
</script>

<style scoped>
.j-button{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f1f0f6;
  border-radius: 4px;
  box-sizing: border-box;
}
.j-button-type-default{
  background: #fff;
  color: cornflowerblue;
}
.j-button-type-primary{
  background: cornflowerblue;
  color: #fff;
}
.j-button-size-default{
  width: 80px;
  height: 36px;
  font-size: 15px;
}
.j-button-size-medium{
  width: 100px;
  height: 40px;
  font-size: 16px;
}
.j-button-size-mini{
  width: 60px;
  height: 30px;
  font-size: 14px;
}
</style>
