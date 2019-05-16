<template>
  <div id="app">
    <!-- 
      text: 一个非 prop 特性是指传向一个组件，但是该组件并没有相应 prop 定义的特性,
            这些特性会被添加到这个组件的根元素上
      禁用特性继承: 如果你不希望组件的根元素继承特性，你可以在组件的选项中设置 inheritAttrs: false

     -->
    <v-props
      name="happyu"
      title="study vue"
      :isActive="true"
      text="这是一个text"
      other="this props is not defined"
      @click="handleClick"
      @test="handleTest"
    />
  </div>
</template>

<script>
import VProps from './components/props/Props.vue'

export default {
  name: 'app',
  components: {
    VProps
  },
  methods: {
    handleClick () {},
    handleTest () {}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
