<template>
  <div class="skill">
  	<div class="container">
  	  <span class="tip">WHAT CAN I</span>
  	  <h1 class="title">{{title}}</h1>
  	  <span class="border"></span>
  	  <div class="s_wrapper">
  	  	<div class="progress-bar" v-for="item in skill">
  	      <progressBar :skill="item"></progressBar>
  	    </div>
  	  	<div class="clearfix"></div>
  	  </div>
  	</div>
  </div>
</template>

<script>
import progressBar from '@/components/progress-bar'
export default {
  name: 'skill',
  data () {
    return {
    	title: '我的技能',
    	skill: [
    		{"type": "html/html5","percent": "90%"},
    		{"type": "js/jquery","percent": "80%"},
    		{"type": "css/css3","percent": "80%"},
    		{"type": "sass/less","percent": "60%"},
    		{"type": "photoshop","percent": "90%"},
    		{"type": "bootstrap","percent": "80%"},
    		{"type": "swiper","percent": "80%"},
    		{"type": "seajs","percent": "80%"},
    		{"type": "vuejs","percent": "60%"},
    		{"type": "java/jsp","percent": "50%"}
    	]
    }
  },
  components: {
  	progressBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.skill{height: auto;width: 100%;margin: 0 auto;background-color: #f5f5f5;text-align: center;}
  .container{height: auto;max-width: 1200px;margin: 0 auto;padding:4% 0;}
  .tip{display:inline-block;position:relative;padding:6px 20px;margin:0 auto 10px;font-size: 20px;background:#03a9f4;color: #fff;}
  .tip:after{position:absolute;width: 0;height: 0;left:42%;bottom:-10px;content: '';border-style: solid;border-width: 10px 10px 0 10px;border-color: #03a9f4 transparent;}
  .title{padding: 6px 0 10px;font-family: 'Overlock', cursive;color: #2F2C06;font-size: 36px;}
  .border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 30px;background: #8C8989;}
  .border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: 5px;margin-top:-2px;background: #03a9f4;}

	.progress-bar{float: left;width: 50%;height: auto;padding:0 40px;box-sizing: border-box;margin-top: 10px;}
</style>
