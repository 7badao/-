// 以js的方式封装组件 注意并不是所有的组件都是可以以js的方式封装,只有那些不依赖dom的 例如模态框
//  导入封装好的组件
import myModel from '../components/myModel.vue'
// 导出
export default {
  // 以插件的形式导出
  install: function (Vue) {
    // extend返回一个构造器
    let myModelCon = Vue.extend(myModel)
    // 通过vue的原型导出 调用的时候就通过this.$myModel调用
    Vue.prototype.$myModel = () => {
      // 创建一个实例
      // eslint-disable-next-line new-cap
      let newMyModel = new myModelCon()
      // 设置showModel为true
      newMyModel.showModel = true
      // 设置为虚拟dom
      let modelEl = newMyModel.$mount().$el
      // 渲染到页面
      document.body.appendChild(modelEl)
    }
  }
}
