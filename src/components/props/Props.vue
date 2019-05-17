<template>
  <div class="props">
    <div>接收到父组件的值</div>
    <ul>
      <li>使用字符串数组形式列出的 prop</li>
      <li>title: {{ title }}</li>
      <li>name: {{ name }}</li>
      <li>isActive: {{ isActive }}</li>
      <li>组件没有声明的props: {{ $attrs }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Props',
  inheritAttrs: false, // 禁用特性继承
  // props: ['title', 'name', 'isActive'] // 一般不推荐
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'happyu',
      isRequired: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    click: {
      type: Function
    }
  },
  mounted () {
    console.log(this.$props)
  }
}
</script>


