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
      component: TaskList,
      props: {navItem: 'tasks'}
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      props: {navItem: 'about'}
    }
  ]
})
