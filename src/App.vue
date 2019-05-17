<template>
  <div id="app">
    <v-nav />
    <router-view></router-view>
  </div>
</template>

<script>
import VNav from './components/nav/nav'

export default {
  name: 'app',
  components: {
    VNav
  },
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  a {
    text-decoration: none;
    color: #2c3e50;
  }
  .router-link-active {
    color: red
  }
}
</style>
