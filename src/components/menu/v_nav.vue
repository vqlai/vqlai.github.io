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
    <ul>
      <li><a href="#about" v-text="nav.n1"></a></li>
      <li><a href="#experience" v-text="nav.n2"></a></li>
      <li><a href="#skills" v-text="nav.n3"></a></li>
      <li><a href="#project" v-text="nav.n4"></a></li>
      <li><a href="#contract" v-text="nav.n5"></a></li>
    </ul> 
  </div>
</template>

<script>
  export default {
    name: 'v_nav',
    data () {
      return {
        nav: {'n1': 'About', 'n2': 'Experience', 'n3': 'Skills', 'n4': 'Projects', 'n5': 'Contact'}
      }
    }
  }
</script>

<style scoped>
  .v_nav ul{position: fixed;right: 4%;top:36%;font-size: .4rem;}
  .v_nav ul li{border: 1px solid #03a9f4;padding: .1rem 0;font-size: .3rem;}
</style>

