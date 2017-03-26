<template>
  <div class="v_skill_wrapper" id="skill">
    <div class="v_skill">
      <span class="tip">WHAT CAN I</span>
      <h1>{{title}}</h1>
      <span class="border one"></span>
      <div class="s_wrapper">
      	<div class="progress">
          <v-progress :skills="skills[0]"></v-progress>
        </div>
      	<div class="progress">
          <v-progress :skills="skills[1]"></v-progress>
        </div>
        <div class="progress">
          <v-progress :skills="skills[2]"></v-progress>
        </div>
        <div class="progress">
          <v-progress :skills="skills[3]"></v-progress>
        </div>
        <div class="progress">
          <v-progress :skills="skills[4]"></v-progress>
        </div>
        <div class="progress">
          <v-progress :skills="skills[5]"></v-progress>
        </div>
        <div class="progress">
          <v-progress :skills="skills[6]"></v-progress>
        </div>
        <div class="progress">
          <v-progress :skills="skills[7]"></v-progress>
        </div>
         <div class="progress">
          <v-progress :skills="skills[8]"></v-progress>
        </div>
         <div class="progress">
          <v-progress :skills="skills[9]"></v-progress>
        </div>
      	<div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import about from 'components/content/v_about.vue'
import progress from './v_progress.vue'
import data from '../../data.json'

export default {
  name: 'v_skill',
  data () {
      return {
           title: '我的技能',
           skills: {}
      }
  },
  mounted () {
    this.skills = data.skills
    // console.log(this.skills)
  },
  components: {'v-progress': progress}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- json文件里不能使用//注释，webpack编译器编译不了 -->
<style scoped>
  .v_skill_wrapper{background-color: #f5f5f5;}
  .v_skill{height: auto;max-width: 1200px;margin: 0 auto;padding:1.2rem 0;}
  .v_skill p{font-size: .4rem;color:#2F2C06;text-align: left;}
  h1{padding: .2rem 0 .3rem;font-family: 'Overlock', cursive;color: #2F2C06;font-size:.5rem;}
  .tip{display:block;position:relative;width:16%;height:.6rem;line-height:.6rem;margin:0 auto .2rem;font-size: .3rem;background:#03a9f4;color: #fff;}
  .tip:after{position:absolute;width: 0;height: 0;left:42%;bottom:-0.14rem;content: '';border-style: solid;border-width: 0.2rem 0.2rem 0 0.2rem;border-color: #03a9f4 transparent;}
  .border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 1rem;background: #8C8989;}
  .border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: .1rem;margin-top:-.05rem;background: #03a9f4;}

  .progress{float: left;width: 50%;height: auto;padding:0 1rem;box-sizing: border-box;margin-top: .2rem;}
  /*清除浮动*/
  .clearfix:before{display: table;content: "";}
  .clearfix:after{clear: both;display: table;content: "";}
</style>
