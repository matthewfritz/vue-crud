import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '@/components/TaskList'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
