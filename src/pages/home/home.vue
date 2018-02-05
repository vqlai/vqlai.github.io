<template>
  <div class="home">
  	<top>
  		<vue-particles
  		  color="#ffffff"
  		  :particleOpacity="0.7"
  		  linesColor="#ffffff"
  		  :particlesNumber="80"
  		  shapeType="circle"
  		  :particleSize="5"
  		  :linesWidth="2"
  		  :lineLinked="true"
  		  :lineOpacity="0.4"
  		  :linesDistance="2"
  		  :moveSpeed="3"
  		  :hoverEffect="true"
  		  hoverMode="grab"
  		  :clickEffect="true"
  		  clickMode="push"
  		>
  		</vue-particles>
  	</top>
  	<about/>
  	<experience/>
  	<skill/>
  	<project/>
  	<bottom/>
  </div>
</template>

<script>
import top from '@/components/top'
import bottom from '@/components/bottom'
import about from '@/components/about'
import experience from '@/components/experience'
import skill from '@/components/skill'
import project from '@/components/project'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components:{
  	top,
  	bottom,
  	about,
  	experience,
  	skill,
  	project
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.home{
		min-width: 1200px;
		height: auto;
	}
</style>

