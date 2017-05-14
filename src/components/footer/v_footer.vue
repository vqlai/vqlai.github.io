<template>
  <div class="v_footer" id="contract">
    <div class="footer_wrapper">
    <span class="tip">HOW To Find</span>
      <h1>{{title}}</h1>
      <span class="border one"></span>
      <div class="footer_content">
        <img src="./code.png">
        <dl>
          <dt>Contact By Email</dt>
          <dd>Mail1: <a href="mailto:info@example.com">info@example1.com</a></dd>
          <dd>Mail1: <a href="mailto:info@example.com">info@example1.com</a></dd>
        </dl>
      </div>
      <p v-text="desc"></p>
      <!-- <div class="bdsharebuttonbox" data-tag="share_1">
        <a class="bds_mshare" data-cmd="mshare"></a>
        <a class="bds_qzone" data-cmd="qzone" href="#"></a>
        <a class="bds_tsina" data-cmd="tsina"></a>
        <a class="bds_baidu" data-cmd="baidu"></a>
        <a class="bds_renren" data-cmd="renren"></a>
        <a class="bds_tqq" data-cmd="tqq"></a>
        <a class="bds_more" data-cmd="more">更多</a>
        <a class="bds_count" data-cmd="count"></a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'v_footer',
  data () {
    return {
      title: '联系我',
      desc: '© 2017 Preface . All rights reserved | Design by cisco lai.'

    }
  },
  mounted: function() {
    // console.log(123)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .v_footer{height: auto;width: 100%;margin: 0 auto;background-color: #333333;background: url('./contact.jpg') no-repeat center top;background-size: cover;padding: 1rem 0;}
  .footer_wrapper{max-width: 1200px;margin: 0 auto;}
  h1{padding: .2rem 0 .3rem;font-family: 'Overlock', cursive;color: #fff;font-size:.5rem;}
  .tip{display:block;position:relative;width:16%;height:.6rem;line-height:.6rem;margin:0 auto .2rem;font-size: .3rem;background:#03a9f4;color: #fff;}
  .tip:after{position:absolute;width: 0;height: 0;left:42%;bottom:-0.14rem;content: '';border-style: solid;border-width: 0.2rem 0.2rem 0 0.2rem;border-color: #03a9f4 transparent;}
  .border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 1rem;background: #8C8989;}
  .border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: .1rem;margin-top:-.05rem;background: #03a9f4;}

  .footer_content{width:45%;margin:0 auto;background: #f5f5f5;border-radius: .1rem; box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);} 
  .footer_content img{width: 40%;height: auto;margin: .8rem 0;}
  .footer_content dl{border-top: 1px solid rgb(214, 212, 212);position: relative;padding-bottom: .4rem;}
  .footer_content dl:after{position: absolute;top:8%;left: 48%;content:"";width:.6rem;height: .6rem;background: url('./email.png') no-repeat;background-size: 100% auto;}
  .footer_content dt{font-size:.4rem;margin:.8rem 0 .2rem;}
  .footer_content dd{font-size:.2rem;color: #999;margin-top:.2rem;}
  .footer_content dd a{font-size:.2rem;color: #00a78e;}
  .v_footer p{font-size: .2rem;color: #fff;margin-top: 1rem;}
</style>
