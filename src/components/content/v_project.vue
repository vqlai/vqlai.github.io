<template>
  <div class="v_project" id="project">
  	<div class="p_wrapper">
    	<span class="tip">WHAT I DO</span>
      <h1>{{title}}</h1>
      <span class="border one"></span>
    	<ul>
    		<li><router-link to="/web">web</router-link></li>
    		<li><router-link to="/h5">h5</router-link></li>
    		<li><router-link to="/tools">tools</router-link></li>
    		<li><router-link to="/links">links</router-link></li>
    	</ul>
    	<router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v_project',
  data () {
      return {
           title: 'Projects'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.v_project{background-color: #fff;}
	.p_wrapper{height: auto;max-width: 1200px;margin: 0 auto;padding:1rem 0;}
	h1{padding-bottom: .4rem;font-family: 'Overlock', cursive;color: #03a9f4;font-size:.6rem;/* border-bottom: 4px double #03a9f4; */}
  .tip{display:inline-block;position:relative;padding: .1rem .2rem;margin-bottom:.2rem;font-size: .3rem;background:#03a9f4;color: #fff;}
  .tip:after{position:absolute;width: 0;height: 0;left:0.24rem;bottom:-0.14rem;content: '';border-style: solid;border-width: 0.2rem 0.2rem 0 0.2rem;border-color: #03a9f4 transparent;}
  .border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 1rem;background: #8C8989;}
  .border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: .1rem;margin-top:-.05rem;background: #03a9f4;}
	ul{padding: 0 20%;background: #03a9f4;height: .8rem;line-height: .8rem;margin-bottom: 1rem;color: #000;}
	ul li{float: left;font-size: .4rem;width: 25%;}
	ul li a{color: #fff;}
</style>
