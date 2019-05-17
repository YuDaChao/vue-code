<template>
  <div>
    <h3>自定义事件</h3>
    <v-events @my-event="handleEvent" ></v-events>
    <hr />
    <h3>自定义组件v-model</h3>
    <!--
      一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，
      可以使用model来自定义
    -->
    <v-hello v-model="hello" />
  </div>
</template>

<script>
import VEvents from './events'
import VHello from './hello'
export default {
  name: 'index',
  components: {
    'v-events': VEvents,
    'v-hello': VHello
  },
  data(){
   return {
     name: 'jack',
     hello: 'hello'
   }
  },
  methods: {
    handleEvent () {
      console.log('我是父组件中的event')
    }
  }
}
</script>

<style scoped>

</style>
