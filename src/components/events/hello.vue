<template>
  <div class="hello">
    <div>value: {{value}}</div>
    <button @click="handleClick">点击试试</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  model: {
    prop: 'value',
    // event: 'click'
  },
  props: {
    value: String
  },
  data(){
   return {

   }
  },
  methods: {
    handleClick () {
      this.$emit('input', '值变了')
    }
  }
}
</script>

<style scoped>

</style>
