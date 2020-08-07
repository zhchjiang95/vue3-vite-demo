<template>
  <div class="nav-box" v-for="(item, index) in menuList" :key="index">
    <router-link :to="item.path">{{item.title}}</router-link>
  </div>
</template>

<script>
import navList from './Menu.js'

export default {
  setup(){
    const menuList = navList()
    return {
      menuList
    }
  }
}
</script>

<style scoped>
.nav-box{
  margin-bottom: 16px;
}
</style>