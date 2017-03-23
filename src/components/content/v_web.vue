<template>
  <div class="v_web">
    	<!-- <h1>{{title}}</h1> -->
    	<ol>
    		<li><img src="./web1.jpg" alt=""></li>
    		<li><img src="./web1.jpg" alt=""></li>
    		<li><img src="./web1.jpg" alt=""></li>
    		<li><img src="./web1.jpg" alt=""></li>
    		<div class="clearfix"></div>
    	</ol>
  </div>
</template>

<script>
export default {
  name: 'v_web',
  data () {
      return {
           title: 'web'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.v_web{height: auto;max-width: 1200px;margin: 0 auto;padding:1rem 0;}
	h1{margin-bottom:1rem;padding-bottom:.4rem;font-family: 'Overlock', cursive;color: #03a9f4;}
	ol{width: 100%;}
	ol li{float: left;font-size: .4rem;width: 22%;margin-right:3%;height: 80%;box-sizing: border-box;transition: transform .25s ease;}
	ol li img{width: 100%;display: block;}
	ol li:hover{z-index: 100; -webkit-transform: scale(1.1); transform: scale(1.5); box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);} 
	.clearfix:before{display: table;content: "";box-sizing: border-box;}
  .clearfix:after{clear: both;display: table;content: "";box-sizing: border-box;}
</style>
