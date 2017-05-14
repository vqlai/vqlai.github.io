<template>
  <div class="v_header" id="header">
    <div class="v_container">
    <!-- 分发组件内容 -->
      <slot></slot>
      <div class="v_banner">
        <div class="v_headpic"><img src="./headpic.jpg" alt=""></div>
        <div class="v_baseinfo">
          <h5 @click="sayHello">Hello</h5>
          <h1>{{baseInfo.name}}</h1>
          <h6 class="text_hidden">{{baseInfo.job}}</h6>
          <ul>
            <li  class="text_hidden"><b>出生年月</b> <span>{{baseInfo.birth}}</span></li>
            <li  class="text_hidden"><b>电子邮箱</b> <span>{{baseInfo.email}}</span></li>
            <li  class="text_hidden"><b>手机号码</b> <span>{{baseInfo.phone}}</span></li>
            <li  class="text_hidden"><b>联系地址</b> <span>{{baseInfo.address}}</span></li>
            <li  class="text_hidden"><b>个人网站</b> <span>{{baseInfo.website}}</span></li>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v_header',
  // 接收父组件传来的数据，并且要指定数据类型
  props: {
    baseInfo: {
      type: Object
    }
  },
  methods: {
    // 点击时间调用的方法
    sayHello: function () {
      console.log('hello')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .v_header{width:100%;height:auto;background: url('./v_banner.jpg') no-repeat center 0px;background-size: cover;color:#fff;}
  .v_container{width:100%;height:auto;background: url('./v_dott.png') repeat;position: relative;}
  .v_banner{max-width: 1200px;padding: 2rem 0;margin: 0 auto;}
  .v_headpic{float:left;width: 40%;text-align: center;position: relative;z-index: 10;}
  .v_headpic img{width: 74%;border: 5px solid rgba(255, 255, 255, 0.68);}
  .v_baseinfo{float:right;width: 60%;text-align: left;}
  .v_baseinfo h5{position:relative;display:inline-block;padding:0.1rem 0.5rem;font-size: 0.4rem;color:#fff;background-color: #03a9f4;font-family: 'Overlock', cursive;vertical-align: top;
                box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}
  /*小三角*/
  .v_baseinfo h5:after{position: absolute;width: 0;height: 0;left:0.24rem;bottom:-0.14rem;content: '';border-style: solid;border-width: 0.2rem 0.2rem 0 0.2rem;border-color: #03a9f4 transparent;}
  h1{font-size:.6rem;font-family: 'Overlock', cursive;}
  h6{margin-top: .2rem;font-size:.3rem;font-family: 'Overlock', cursive;color: #C7C7C7;letter-spacing: .1rem;}
  .v_baseinfo ul {margin-top: .3rem;border-top: 1px solid #fff;}
  .v_baseinfo ul li{font-size:.3rem;margin-top: .5rem;}
  .v_baseinfo b{display:inline-block;font-family: 'Overlock', cursive;margin-right:.5rem;}
  .v_baseinfo ul li span:hover{color: #03a9f4;}
    #particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10.5rem;
    z-index: 1; 
  }
  /*清除浮动*/
  .clearfix:before{display: table;content: "";box-sizing: border-box;}
  .clearfix:after{clear: both;display: table;content: "";box-sizing: border-box;}

</style>
