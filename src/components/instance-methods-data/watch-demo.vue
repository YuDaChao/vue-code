<template>
  <div>
    <div>name: {{name}}</div>
    <div>bookName: {{book.name}}</div>
    <div>bookPrice: {{book.price}}</div>
    <button @click="handleClickUpdateName">修改name</button>
    <button @click="handleClickUpdateBookName">修改bookName</button>
  </div>
</template>

<script>
export default {
  name:'watch-demo',
  data(){
   return {
     name: 'jack',
     book: {
       name: 'js高级',
       price: 99
     }
   }
  },
  watch: {
    // name (newVal, oldVal) {
    //   console.log('watch name: ', oldVal, newVal)
    // },
    // 'book.name' (newVal, oldVal) {
    //   console.log('watch bookName: ', oldVal, newVal)
    // }
    name: {
      handler (newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      // 初始化是就会调用 handler
      immediate: true
    },
    'book.name': {
      handler (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },
    book: {
      handler (newVal, oldVal) {
        console.log('book: ', newVal, oldVal, newVal === oldVal) // true
      },
      deep: true
    },
  },
  methods: {
    handleClickUpdateName () {
      this.name = 'Tom'
    },
    handleClickUpdateBookName () {
      this.book.name = 'vue源码解析'
    }
  }
}
</script>

<style scoped>

</style>
