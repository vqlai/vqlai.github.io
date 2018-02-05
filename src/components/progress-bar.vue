<template>
  <div class="progress-box">
    <p>{{skill.type}}</p>
    <div class="container">
    	<div class="progress-bar progress-bar-striped active" :style="{width:skill.percent}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'progress-bar',
  props: {
    skill: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress-box p{font-size: 24px;color:#2F2C06;text-align: left;}
.container{height: 12px;margin: 16px 0;background-color: #e8edf2/* #F8F4E3 */;overflow: hidden;border-radius: 4px;box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}
.progress-bar {height: 100%;background-color: #03a9f4;}
.progress-bar.active {animation: progress-bar-stripes 2s linear infinite;}
.progress-bar-striped {background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);background-size: 40px 40px;}
@keyframes progress-bar-stripes {
  from {background-position: 40px 0;}
  to {background-position: 0 0;}
}

</style>

