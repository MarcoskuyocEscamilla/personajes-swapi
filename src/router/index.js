import Vue from 'vue'
import Router from 'vue-router'
import Personajes from '@/components/Personajes/Personajes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Personajes',
      component: Personajes
    }
  ]
})
