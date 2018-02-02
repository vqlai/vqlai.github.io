import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/pages/home/home')
export default new Router({
	// mode: 'history',
  routes: [
  	{
  	  path:"/",
  	  redirect: '/index'
  	},
    {
      path: '/index',
      name: 'Home',
      component: Home
    }
  ]
})
