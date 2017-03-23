<template>
  <div class="v_content">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'v_content',
  data () {
    return {
      msg: '这里是内容区'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .v_content{min-height: 400px;width: 100%;margin: 0 auto;background-color: green;}
  h1{color:white;text-align: center;padding-top: 16%;}
</style>
