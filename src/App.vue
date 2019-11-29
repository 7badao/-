<template>
  <div>
    <!-- 给按钮添加点击事件 点击模态框显示 -->
    <button @click="showModel=true">showModel</button>
    <!-- 通过js的方式控制组件 -->
    <button @click="showModelJs">showModelJs</button>
    <!-- 双向绑定给组件 -->
    <my-model v-model="showModel" />
  </div>
</template>

<script>
// 导入自己封装的组件
import myModel from './components/myModel.vue'
export default {
  data () {
    return {
      // 控制模态框的显示与隐藏 不由组件自己控制
      showModel: false
    }
  },
  methods: {
    showModelJs () {
      // 以js的方式控制显示
      this.$myModel()
    }
  },
  components: {
    // 定义子组件
    myModel
  }
}
</script>

<style>
</style>
