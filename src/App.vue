<template>
  <div id="app">
    <router-view/>
    <span class="top-btn" @click="scrollToTop" v-show="topBtn"></span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      topBtn: false
    }
  },
  mounted(){
    setTimeout(()=>{
      this.scrollToTop()
      // 添加滚动事件
      window.addEventListener('scroll', this.scroll)
    },20)
  },
  methods:{
    scrollToTop(){
      document.documentElement.scrollTop = 0
    },
    scroll() {
      // 坑点：无法获取到滚动条滚动的间距
      // 页面指定了DTD，即指定了DOCTYPE时，使用document.documentElement
      // 页面没有DTD，即没指定DOCTYPE时，使用document.body
      // IE和Firefox都是如此
      // 因为index页面加了<!DOCTYPE html>，所以要使用document.documentElement来获取
      // console.log(document.documentElement.clientHeight) // 获取客户端可视区域高度
      // console.log(document.documentElement.offsetHeight ) // 获取客户端可视区域高度 (包括边线的高) 
      // console.log(document.documentElement.scrollTop) // 获取滚动条滚动的距离
      // console.log(document.documentElement.scrollHeight) // 获取网页总高度
      this.topBtn = document.documentElement.scrollTop > document.documentElement.clientHeight ? true : false 
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: auto;
}
#app .top-btn{
  width: 30px;
  height: 54px;
  position: fixed;
  bottom:15%;
  right:6%;
  content: '';
  background: url('./common/images/top.png') no-repeat;
  background-position: 0 0;
  background-size: 100%;
  cursor: pointer;
}
#app .top-btn:hover{
  background-position: 0 100%;
}
</style>
