import Vue from 'vue'
import Router from 'vue-router'
import Manage from '../view/manage/index'
import Components from '../view/components/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Manage
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/components',
      name: 'Components',
      component: Components
    }
  ]
})
