<template>
  <div class="v_about_wrapper">
    <div class="v_about">
      <span class="tip">WHAT I DO</span>
      <h1>{{title}}</h1>
      <span class="border one"></span>
      <div class="a_info">
      	<div class="a_left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet sem sit amet dolor luctus pellentesque Nam egestas molestie elit. Vivamus sed accumsan quam, a mollis magna. Nam aliquet eros eget sapien consequat</div>
      	<div class="a_right">
      		<ul>
      			<h3>Awards</h3>
      			<li> Lorem ipsum dolor sit amet cingelit </li>
      			<li> Lorem ipsum dolor sit amet cingelit </li>
      			<li> Lorem ipsum dolor sit amet cingelit </li>
      			<li> Lorem ipsum dolor sit amet cingelit </li>
      			<li> Lorem ipsum dolor sit amet cingelit </li>
      		</ul>
      	</div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v_about',
  data () {
    return {
      title: 'About Me'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .v_about_wrapper{background-color: #f2f2f5;}
  .v_about{height: auto;max-width: 1200px;margin: 0 auto;padding:1rem 0;}
  h1{padding-bottom: .4rem;font-family: 'Overlock', cursive;color: #03a9f4;font-size:.6rem;/* border-bottom: 4px double #03a9f4; */}
  .tip{display:inline-block;position:relative;padding: .1rem .2rem;margin-bottom:.2rem;font-size: .3rem;background:#03a9f4;color: #fff;}
  .tip:after{position:absolute;width: 0;height: 0;left:0.24rem;bottom:-0.14rem;content: '';border-style: solid;border-width: 0.2rem 0.2rem 0 0.2rem;border-color: #03a9f4 transparent;}
  .border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 1rem;background: #8C8989;}
  .border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: .1rem;margin-top:-.05rem;background: #03a9f4;}
  .a_info{font-size: .3rem;text-align: left;}
  .a_info .a_left{float: left;width: 60%;}
  .a_info .a_right{float: right;width: 40%;}
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
