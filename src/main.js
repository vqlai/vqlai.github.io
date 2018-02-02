// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/common/css/reset.css'
import '@/common/css/base.css'

import VueParticles from 'vue-particles'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'

Vue.use(VueParticles)
// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false // 线上改为true
Vue.config.debug = true // 开启debug模式

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
