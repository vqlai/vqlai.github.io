<template>
  <div class="project">
    <div class="container">
      <span class="tip">WHAT I DO</span>
      <h1 class="title">{{title}}</h1>
      <span class="border"></span>
      <ul>
        <li><img src="../common/images/web1.jpg" alt="项目1"></li>
        <li><img src="../common/images/web1.jpg" alt="项目2"></li>
        <li><img src="../common/images/web1.jpg" alt="项目3"></li>
        <li><img src="../common/images/web1.jpg" alt="项目4"></li>
        <div class="clearfix"></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      title: '我的项目'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .project{height: auto;width: 100%;margin: 0 auto;background-color: #fff;text-align: center;}
  .container{height: auto;max-width: 1200px;margin: 0 auto;padding: 6% 0;}
  .tip{display:inline-block;position:relative;padding:6px 20px;margin:0 auto 10px;font-size: 20px;background:#03a9f4;color: #fff;}
  .tip:after{position:absolute;width: 0;height: 0;left:42%;bottom:-10px;content: '';border-style: solid;border-width: 10px 10px 0 10px;border-color: #03a9f4 transparent;}
  .title{padding: 6px 0 10px;font-family: 'Overlock', cursive;color: #2F2C06;font-size: 36px;}
  .border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 30px;background: #8C8989;}
  .border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: 5px;margin-top:-2px;background: #03a9f4;}

  ul{width: 100%;padding-top: 30px;}
  ul li{float: left;width: 20%;margin-right: 5%;height: 80%;box-sizing: border-box;transition: transform .25s ease;}
  ul li img{width: 100%;display: block;}
  ul li:hover{z-index: 100; -webkit-transform: scale(1.1); transform: scale(1.2); box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);} 
</style>
