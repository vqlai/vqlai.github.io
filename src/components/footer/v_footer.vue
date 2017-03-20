<template>
  <div class="v_footer" id="contract">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'v_footer',
  data () {
    return {
      msg: 'Personal Resume Design by cisco lai'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .v_footer{height: 2rem;width: 100%;margin: 0 auto;background-color: #333333;}
  h1{font-size:0.3rem;color: #fff;text-align: center;line-height: 2rem;}
</style>
