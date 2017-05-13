// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入App这个组件
import App from './App'
// 引入路由配置
import router from './router'
import VueParticles from 'vue-particles'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 引人公共样式
// import './assets/css/reset.css'

// 关闭生产模式下给出的提示
Vue.config.productionTip = true
// 追踪组件一些操作(初始化、编译、渲染)，并且可以修正(浏览器)开发者工具的timeline选项卡所显示的时间，不过该配置只有在dev模式下有效
// Vue.config.performance = true

import axios from 'axios'
// 开启debug模式
Vue.config.debug = true
// 添加全局插件/函数
Vue.prototype.$axios = axios

// Vue.prototype.VueAwesomeSwiper = VueAwesomeSwiper == Vue.use(VueAwesomeSwiper) 都是将插件注册到vue里
Vue.use(VueParticles)
Vue.use(VueAwesomeSwiper)

// Vue.use(echart)

/* eslint-disable no-new */
new Vue({
  // 最后效果将会替换页面中id为app的div元素
  el: '#app',
  // 使用路由,挂载到App这个虚拟DOM组件上
  router,
  // 告知页面这个组件用这样的标签来包裹着,并且使用它
  template: '<App/>',
  // 告知当前页面想使用App这个组件
  components: { App }
})
