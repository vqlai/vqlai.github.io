<template>
  <div class="bottom">
  	<div class="container">
  	<span class="tip">HOW TO FIND</span>
  	  <h1 class="title">{{title}}</h1>
  	  <span class="border"></span>
  	  <div class="content">
  	    <img src="../common/images/code.png">
  	    <dl>
  	      <dt>Contact By Email</dt>
  	      <dd>Mail1: <a href="mailto:info@example.com">info@example1.com</a></dd>
  	      <dd>Mail1: <a href="mailto:info@example.com">info@example1.com</a></dd>
  	    </dl>
  	  </div>
  	  <p v-text="desc"></p>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {
    	title: '联系我',
    	desc: '© 2017 Preface . All rights reserved | Design by cisco lai.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bottom{height: auto;width: 100%;margin: 0 auto;background-color: #333333;background: url('../common/images/contact.jpg') no-repeat center top;background-size: cover;padding: 6% 0;}
	.container{max-width: 1200px;margin: 0 auto;text-align: center;}
	.tip{display:inline-block;position:relative;padding:6px 20px;margin:0 auto 10px;font-size: 20px;background:#03a9f4;color: #fff;}
	.tip:after{position:absolute;width: 0;height: 0;left:42%;bottom:-10px;content: '';border-style: solid;border-width: 10px 10px 0 10px;border-color: #03a9f4 transparent;}
	.title{padding: 6px 0 10px;font-family: 'Overlock', cursive;color: #fff;font-size: 36px;}
	.border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 30px;background: #8C8989;}
	.border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: 5px;margin-top:-2px;background: #03a9f4;}

	.content{width:45%;margin:0 auto;background: #f5f5f5;border-radius: .1rem; box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);} 
	.content img{width: 40%;height: auto;margin: 30px 0;}
	.content dl{border-top: 1px solid rgb(214, 212, 212);position: relative;padding-bottom: 20px;}
	.content dl:after{position: absolute;top:8%;left: 48%;content:"";width:16px;height: 16px;background: url('../common/images/email.png') no-repeat;background-size: 100% auto;}
	.content dt{font-size:16px;margin:30px 0 10px;}
	.content dd{font-size:14px;color: #999;margin-top:10px;}
	.content dd a{font-size:14px;color: #00a78e;}
	.bottom p{font-size: 14px;color: #fff;margin-top: 6%;}
</style>
