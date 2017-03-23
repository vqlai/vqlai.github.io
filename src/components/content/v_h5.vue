<template>
  <div class="v_h5">
    	<h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'v_h5',
  data () {
      return {
           title: 'h5'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.v_h5{height: auto;max-width: 1200px;margin: 0 auto;padding:1rem 0;}
	h1{margin-bottom:1rem;padding-bottom:.4rem;font-family: 'Overlock', cursive;color: #03a9f4;}
	ul{padding: 0 20%;background: #F7E612;height: .8rem;line-height: .8rem;margin-bottom: 1rem;color: #000;}
	ul li{float: left;font-size: .4rem;width: 25%;}
</style>
