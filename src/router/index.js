import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '@/components/TaskList'
import AxiosComponent from '@/components/AxiosComponent'
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
      path: '/axios',
      name: 'AxiosComponent',
      component: AxiosComponent
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
