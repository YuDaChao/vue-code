<template>
  <div class="nav">
    <div class="nav-item">
      <router-link to="/props">Prop</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/event">自定义事件</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/solt">插槽</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/async">动态组件&异步组件</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/error">处理边界情况</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vnav',
  data(){
   return {

   }
  }
}
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #2c3e50;
  .nav-item {
    flex: 1;
    height: 100%;
    line-height: 40px;
  }
}
</style>
