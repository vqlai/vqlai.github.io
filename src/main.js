// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
// 开启debug模式
Vue.config.debug = true
// 添加全局插件/函数
Vue.prototype.$axios = axios

// Vue.use(echart);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
