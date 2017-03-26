<!-- <template>
  <div class="v_nav">
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#experience">Education</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#project">My Projects</a></li>
      <li><a href="#contract">Contact</a></li>
    </ul> 
  </div>
</template> -->

<!-- <script>
export default {
  name: 'v_nav',
  data () {
    return {
      msg: ''
    }
  }
}
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
  .v_nav{height: 1.2rem;width: 100%;background-color: #03a9f4;}
  .v_nav ul{max-width: 1200px;height:100%;margin:0 auto;}
  .v_nav ul li{float: left;width: 16%;height:100%;}
  .v_nav ul li a{font-size: .4rem;color: #fff;vertical-align: middle;font-family: 'Overlock', cursive;}
</style> -->

<template>
  <div class="v_nav">
    <ul ref="ul">
      <li><a href="#about" v-text="nav.n1" @click.stop.prevent="scoll(0)"></a></li>
      <li><a href="#experience" v-text="nav.n2" @click.stop.prevent="scoll(1)"></a></li>
      <li><a href="#skill" v-text="nav.n3" @click.stop.prevent="scoll(2)"></a></li>
      <li><a href="#project" v-text="nav.n4" @click.stop.prevent="scoll(3)"></a></li>
      <li><a href="#contract" v-text="nav.n5" @click.stop.prevent="scoll(4)"></a></li>
    </ul> 
  </div>
</template>

<script>
  export default {
    name: 'v_nav',
    data () {
      return {
        nav: {'n1': 'about', 'n2': 'experience', 'n3': 'skills', 'n4': 'projects', 'n5': 'contact'}
      }
    },
    methods: {
      scoll: function (type) {
        // this.$nextTick(() => {
          switch (type) {
            case 0:
              document.getElementById('app').scrollTop = document.getElementById('header').offsetHeight
              console.log(document.getElementById('app').offsetHeight - document.getElementById('header').offsetHeight)
              break
            case 1:
              break
            case 2:
              break
            case 3:
              break
            case 4:
              break
          }
        // })
      }
    }
  }
</script>

<style scoped>
  .v_nav ul{position: fixed;right: 4%;top:36%;z-index:10;font-size: .4rem;}
  .v_nav ul li{width:2rem;height:.5rem;line-height:.5rem;border: 1px solid #03a9f4;font-size: .3rem;}
  .v_nav ul li a{display: block;}
</style>

