<!-- 使用v-if指令是因为父组件在传递数据过来时默认是空的，加入指令可以使代码在没数据时不执行，也不会控制台报错 -->
<template>
  <div class="v_progress">
    <p v-if="skills">{{skills.type}}</p>
    <div v-if="skills" class="progress"><div class="progress-bar progress-bar-striped active" :style="{width:skills.percent}"></div></div>
  </div>
</template>
<!-- 文本或者在html里拿数据要使用{{}},但在vue某些指令里可以直接使用不用{{}} -->
<script>
export default {
  name: 'v_progress',
  data: function() {
    return {
      myskills: this.skills
    }
  },
  props: {
    skills: {
      type: Object
      // default: function () {
        // return "success"
      // }
    }
  }
  // props: {
  //   skills: ['skills']
  // }
  // watch: {
  //   result(val) {
  //   this.myResult = val;//②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
  //   },
  //   myResult(val){
  //   //xxcanghai 小小沧海 博客园
  //   this.$emit("on-result-change",val);//③组件内对myResult变更后向外部发送事件通知
  //   }
  // }
  // mounted (){}
  // updated () {
  //   this.percent = this.skills.percent
  //   console.log(this.percent)
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v_progress p{font-size: .4rem;color:#2F2C06;text-align: left;}
.progress{height: 10px;margin: .2em 0;background-color: #F8F4E3;overflow: hidden;border-radius: 4px;box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}
.progress-bar {height: 100%;background-color: #03a9f4;}
.progress-bar.active {animation: progress-bar-stripes 2s linear infinite;}
.progress-bar-striped {background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);background-size: 40px 40px;}
@keyframes progress-bar-stripes {
  from {background-position: 40px 0;}
  to {background-position: 0 0;}
}

</style>
