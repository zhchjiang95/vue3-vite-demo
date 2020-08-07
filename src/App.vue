<template>
  <link-nav />
  <router-view />
</template>

<script>
import LinkNav from './components/LinkNav.vue'
export default {
  components: {
    LinkNav
  }
}
</script>
