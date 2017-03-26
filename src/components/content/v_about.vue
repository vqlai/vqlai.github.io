<template>
  <div class="v_about_wrapper" id="about">
    <div class="v_about">
      <span class="tip">WHO AM I</span>
      <h1>{{title}}</h1>
      <span class="border one"></span>
      <div class="a_info">
      	<swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <!-- <h2>Hi! I'm <span>Rob Lee</span></h2> -->
            <p>您在找前端工程师？？</p>
          </swiper-slide>
          <swiper-slide>
            <p>您真的来对了！！</p>
          </swiper-slide>
          <swiper-slide>
            <p>我就是一名热爱前端开发，为前端痴狂的coder。</p>
            <p>I am The One!!</p>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
      	<!-- <div class="a_right">
      		<ul>
      			<h3>Awards</h3>
      			<li> Lorem ipsum dolor sit amet cingelit </li>
      			<li> Lorem ipsum dolor sit amet cingelit </li>
      			<li> Lorem ipsum dolor sit amet cingelit </li>
      			<li> Lorem ipsum dolor sit amet cingelit </li>
      			<li> Lorem ipsum dolor sit amet cingelit </li>
      		</ul>
      	</div>
        <div class="clearfix"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'v_about',
  data () {
    return {
      title: '自我简述',
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        // notNextTick: true,
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
  .v_about_wrapper{background-color: #f5f5f5;}
  .v_about{height: auto;max-width: 1200px;margin: 0 auto;padding:1rem 0;}
  h1{padding: .2rem 0 .3rem;font-family: 'Overlock', cursive;color: #2F2C06;font-size:.5rem;}
  .tip{display:block;position:relative;width:16%;height:.6rem;line-height:.6rem;margin:0 auto .2rem;font-size: .3rem;background:#03a9f4;color: #fff;}
  .tip:after{position:absolute;width: 0;height: 0;left:42%;bottom:-0.14rem;content: '';border-style: solid;border-width: 0.2rem 0.2rem 0 0.2rem;border-color: #03a9f4 transparent;}
  .border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 1rem;background: #8C8989;}
  .border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: .1rem;margin-top:-.05rem;background: #03a9f4;}
  .a_info{font-size: .3rem;text-align: left;}
  .a_info .a_left{float: left;width: 60%;}
  .a_info .a_right{float: right;width: 40%;}
  .swiper-container{width: 100%;height: 5rem;overflow: hidden;text-align: center;overflow: hidden;}
  .swiper-slide{width:100%;height:100%;text-align: center;line-height: 5rem;}
  .swiper-container-horizontal > .swiper-pagination-bullets{bottom: 0;}
  /*双边框*/
  .a_info ul{width:66%;margin:0 auto;padding:.5rem 0;border: 4px double #03a9f4;}
  .a_info ul li{margin: .5rem .4rem 0 .4rem;}
  .a_info h3{text-align: center;}
  /*清楚浮动*/
  .clearfix:before{display: table;content: "";}
  .clearfix:after{clear: both;display: table;content: "";}
  /*1像素边框*/
  .border_1px{position: relative;}
  .border_1px:after{display: block;position: absolute;left: 0;bottom: 0;width: 100%;border: 1px solid rgba(51, 51, 255, 0.6);content: ' '}
  @media(-webkit-min-device-device-pixel-ratio: 1.5),(min-device-device-pixel-ratio: 1.5){
    .border_1px::after{
      -webkit-transform: scaleY(0.7);
      transform:scaleY(0.7);
    }
  }
  @media(-webkit-min-device-device-pixel-ratio: 2),(min-device-device-pixel-ratio: 2){
    .border_1px::after{
      -webkit-transform: scaleY(0.5);
      transform:scaleY(0.5);
    }
  }
 
</style>
