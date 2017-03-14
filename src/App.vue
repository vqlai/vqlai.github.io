<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 标签不能用下划线，只能用- -->
    <v-header :baseInfo="baseInfo"></v-header>
    <v-nav></v-nav>
    <v-about></v-about>
    <v-experience></v-experience>
    <v-skill></v-skill>
    <v-project></v-project>
   <!--  <router-view></router-view> -->
    <v-footer></v-footer>
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

import data from './data.json'

// const ERR_OK = 0
export default {
  name: 'app',
  data() {
    return {
      baseInfo: {}
    }
  },
  created () {
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
  // 组件命名不要与html标签冲突
  components: {'v-header': header, 'v-nav': nav, 'v-footer': footer, 'v-about': about, 'v-experience': experience, 'v-skill': skill, 'v-project': project}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
