<template>
  <div>
    <button @click="handleClick">我是一个Button</button>
  </div>
</template>

<script>
export default {
  name: 'events',
  data(){
   return {

   }
  },
  methods: {
    handleClick () {
      // 始终使用 kebab-case 的事件名
      // this.$emit('MyEvent')
      this.$emit('my-event')
    }
  }
}
</script>

<style scoped>

</style>
