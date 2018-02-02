<template>
  <div class="about">
  	<div class="container">
  	  <span class="tip">WHO AM I</span>
  	  <h1 class="title">{{title}}</h1>
  	  <span class="border one"></span>
  	  <div class="a_info">
  	  	<swiper :options="swiperOption" ref="mySwiper">
  	      <!-- slides -->
  	      <swiper-slide>
  	        <p>您在找前端工程师？？</p>
  	      </swiper-slide>
  	      <swiper-slide>
  	        <p>您真的来对了！！</p>
  	      </swiper-slide>
  	      <swiper-slide>
  	        <p>我就是一名热爱前端开发，为前端痴狂的coder。</p>
  	      </swiper-slide>
  	      <swiper-slide>
  	        <p>I Am The One!!</p>
  	      </swiper-slide>
  	      <!-- Optional controls -->
  	      <div class="swiper-pagination"  slot="pagination"></div>
  	      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
  	      <div class="swiper-button-next" slot="button-next"></div>
  	      <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  	    </swiper>
  	  </div>
  	</div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'about',
  data () {
    return {
      title: '自我简述',
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 2000,
        direction: 'horizontal',
        grabCursor: true,
        loop: true,
        // setWrapperSize: true,
        // autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // prevButton: '.swiper-button-prev',
        // nextButton: '.swiper-button-next',
        // scrollbar: '.swiper-scrollbar',
        // mousewheelControl: true,
        // observeParents: true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        // debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart(swiper) {
          // console.log(swiper)
        }
        // more Swiper configs and callbacks...
        // ...
      }
    }
  },
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted: function() {
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.about{height: auto;width: 100%;margin: 0 auto;background-color: #f5f5f5;text-align: center;}
  .container{height: auto;max-width: 1200px;margin: 0 auto;padding:4% 0;}
  .tip{display:inline-block;position:relative;padding:6px 20px;margin:0 auto 10px;font-size: 20px;background:#03a9f4;color: #fff;}
  .tip:after{position:absolute;width: 0;height: 0;left:42%;bottom:-10px;content: '';border-style: solid;border-width: 10px 10px 0 10px;border-color: #03a9f4 transparent;}
  .title{padding: 6px 0 10px;font-family: 'Overlock', cursive;color: #2F2C06;font-size: 36px;}
  .border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 30px;background: #8C8989;}
  .border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: 5px;margin-top:-2px;background: #03a9f4;}
  .a_info{font-size: 20px;}
  .swiper-container{width: 100%;height: 300px;line-height: 300px;overflow: hidden;text-align: center;overflow: hidden;}
  .swiper-slide{width:100%;height:100%;text-align: center;}
  .swiper-container-horizontal > .swiper-pagination-bullets{bottom: 0;}
</style>
