import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import web from '@/components/content/v_web'
import h5 from '@/components/content/v_h5'
import tools from '@/components/content/v_tools'
import links from '@/components/content/v_links'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'Hello',
      component: Hello
    } */
    {
      path: '/',
      name: 'web',
      component: web
    },
    {
      path: '/web',
      name: 'web',
      component: web
    },
    {
      path: '/h5',
      name: 'h5',
      component: h5
    },
    {
      path: '/tools',
      name: 'tools',
      component: tools
    },
    {
      path: '/links',
      name: 'links',
      component: links
    }
  ]
})
