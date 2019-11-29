// 以js的方法导入自己封装的组价 注意不是所有的组件都可以使用js来导入 只有那些不依靠dom的结构的才可以 例如弹出框
// 导入封装号的组件
import myModel from '../components/myModel.vue'
// 以插件的形式添加到Vue中
export default {
  install: function (Vue) {
    // 使用extend返回一个构造器
    let myModelCon = Vue.extend(myModel)
    // 使用的时候通过this.myModel来使用
    Vue.prototype.$myModel = () => {
      // 创建一个新的myModelCon
      // eslint-disable-next-line new-cap
      let newModel = new myModelCon()
      // 将模态框的showmodel设置为true
      newModel.showmodel = true
      // 将newModel渲染为虚拟dom
      let myModelEl = newModel.$mount().$el
      // 渲染到页面
      document.body.appendChild(myModelEl)
    }
  }
}
