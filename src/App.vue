<template>
  <div id="app">
    <transition name="fade">
      <div v-show="!hidden">
        <!-- <img src="./assets/logo.png"> -->
        <!-- 标签不能用下划线，只能用- -->
        <v-header :baseInfo="baseInfo"></v-header>
        <!-- <v-nav></v-nav> -->
        <v-about v-if="!hidden"></v-about>
        <v-experience></v-experience>
        <v-skill></v-skill>
        <v-project></v-project>
       <!--  <router-view></router-view> -->
        <v-footer></v-footer>
        <transition name="fade">
          <span class="topBtn" @click="scroll()" v-show="topshow"></span>
        </transition>
      </div>
  </transition>
  <loader :loading="loading" :color="color" :size="size" v-if="hidden" :style="{marginTop: loadTop + 'px'}"></loader>
  <p class="loadText" v-if="hidden">loading</p>
  </div>
</template>

<script>
// vue相对路径不能省略，必须是以./ ../开头 ，绝对路径以/开头
import header from './components/header/v_header.vue'
import footer from './components/footer/v_footer.vue'
import nav from './components/menu/v_nav.vue'
import about from './components/content/v_about.vue'
import experience from './components/content/v_experience.vue'
import skill from './components/content/v_skill.vue'
import project from './components/content/v_project.vue'
import RingLoader from 'vue-spinner/src/RingLoader.vue'

import data from '@/data.json'

// const ERR_OK = 0
export default {
  name: 'app',
  data: function() {
    return {
      baseInfo: {},
      topshow: false,
      hidden: true,
      color: '#03a9f4',
      size: '3rem',
      loading: true,
      loadTop: 100
    }
  },
  created: function() {
    // 在axios里找不到this，先拿到this解决作用域问题
    // const _this = this
    // 异步调用mock数据
    // this.$axios.get('/api/baseInfo')
    // .then(function (response) {
    //   if (response.data.errno === ERR_OK) {
    //     _this.baseInfo = response.data.data
    //     console.log(that.baseInfo)
    //   }
    // })
    // .catch(function (error) {
    //   console.log(error)
    // })
    this.baseInfo = data.baseInfo
  },
  mounted: function() {
    this.showTop()
    // 添加滚动事件
    window.addEventListener('scroll', this.showTop)
    // 利用js给元素添加vue没有的事件
    document.getElementById('app').addEventListener('click', this.showMsg)
    let _this = this
    // vue在定时器函数里this上下文指向不一样
    setTimeout(function() {
      _this.hidden = false
    }, 3000)
    this.loadTop = window.screen.height * 0.28
  },
  // 监听数据模型变化
  watch: {
    topshow: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    }
  },
  methods: {
    scroll: function() {
      document.body.scrollTop = 0
    },
    showTop: function() {
      if (document.body.scrollTop > document.body.scrollTop * 0.8) {
        this.topshow = true
      } else {
        this.topshow = false
      }
    },
    showMsg: function() {
      console.log('add new event')
    }
  },
  // 组件命名不要与html标签冲突
  components: {'v-header': header, 'v-nav': nav, 'v-footer': footer, 'v-about': about, 'v-experience': experience, 'v-skill': skill, 'v-project': project, 'loader': RingLoader}
}
</script>

<style>
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-align: center; color: #2c3e50; width: 100%; position: relative;}
#app .topBtn{width: 1rem;height: 1rem;position: fixed;bottom:15%;right:6%;content: '';background: url('./assets/image/top.png') no-repeat 50% -10%;cursor: pointer;} 
#app .topBtn:hover{}
/* loading样式 */
.v-spinner{display:inline-block;margin: 16% auto 0;}
.loadText{font-size: .3rem;text-align: center;margin-top: 2%;color: #03a9f4;}
/* 过渡样式 fade为组件name值*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
