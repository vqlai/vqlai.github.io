<template>
  <div class="v_experience" id="experience">
    <div class="e_wrapper">
     <span class="tip">WHERE I DID</span>
      <h1>{{title}}</h1>
      <span class="border one"></span>
      <div class="v_content">
        <div class="content_left tx_right">
          <span class="s1"></span>
          <h4 class="">2014 - 2016 </h4>
        </div>
        <div class="content_right tx_left">
          <h4>Company Name</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="v_content">
        <div class="content_left tx_right">
          <span class="s2"></span>
          <h4 class="">2014 - 2016 </h4>
        </div>
        <div class="content_right tx_left">
          <h4>Company Name</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v_experience',
  data () {
    return {
      title: 'Experience And Education'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .v_experience{width: 100%;background-color: #fff;}
  .e_wrapper{max-width: 1200px;margin: 0 auto;padding:1rem 0;}
   h1{padding-bottom: .4rem;font-family: 'Overlock', cursive;color: #03a9f4;font-size:.6rem;}
  .tip{display:inline-block;position:relative;padding: .1rem .2rem;margin-bottom:.2rem;font-size: .3rem;background:#03a9f4;color: #fff;}
  .tip:after{position:absolute;width: 0;height: 0;left:0.24rem;bottom:-0.14rem;content: '';border-style: solid;border-width: 0.2rem 0.2rem 0 0.2rem;border-color: #03a9f4 transparent;}
  .border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 1rem;background: #8C8989;}
  .border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: .1rem;margin-top:-.05rem;background: #03a9f4;}

  .v_content{font-size: .3rem;color:#999;position: relative;}
  .content_left{width: 50%;float: left;padding: .6rem 1.6rem 0 0;}
  .content_left h4{display: inline-block;position:relative;padding: .2rem .4rem;font-size:.4rem;color: #fff;background-color: #1b242f;}
  /* 绝对定位居中，如果在没有固定高度宽度的盒子里，不要使用百分比定位，使用px，rem，居中用50%+margin负值 */
  .content_left h4:before{width: 0;height: 0;position:absolute;top: 50%;margin-top: -0.2rem;right:-0.28rem;content: '';border-style: solid;border-width: 0.2rem 0 0.2rem 0.3rem;border-color: transparent transparent transparent #1b242f;}
  .content_right{width: 50%;float: left;padding: .6rem 0 .5rem 1.4rem;}
  .content_right h4{display:inline-block;padding: .2rem .4rem;margin-bottom:.2rem;font-size: 0.4rem;border: 1px solid #d4d4d4;color: #1b242f;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);}
  .content_right p{line-height: .4rem;font-size: .2rem;}
  .v_content span{position: absolute;top: .6rem;right: -.4rem;z-index:10;width: .8rem;height: .8rem;border-radius: 4rem;}
  .v_content .s1{background-color: #44c7f4;}
  .v_content .s2{background-color: #eb5424;}
  .tx_left{position:relative;text-align: left;box-sizing: border-box;border-left: 1px solid #999;}
  .tx_right{position:relative;text-align: right;box-sizing: border-box;}
  /*清除浮动*/
  .clearfix:before{display: table;content: "";}
  .clearfix:after{clear: both;display: table;content: "";}
</style>
