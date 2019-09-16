import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../home/index'
import Wellcome from '../home/Wellcome'
import About from '../views/about/index'
import FunFamily from '../views/funFamily/index'
import Index from '../views/index/index'
import Login from '../views/login/index'
import Person from '../views/person/index'
import PracticalRecommend from '../views/practicalRecommend/index'
import Register from '../views/register/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'wellcome', component: Wellcome},
    {
      path: '/toIndex', name: 'home', redirect: '/toIndex', component: Home, children: [
        {path: '/toIndex', name: 'index', component: Index},
        {path: '/about', name: 'about', component: About},
        {path: '/funFamily', name: 'funFamily', component: FunFamily},
        {path: '/person', name: 'person', component: Person},
        {path: '/practicalRecommend', name: 'pracicalRecommend', component: PracticalRecommend}
      ]
    },
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name: 'register', component: Register}
  ]
})
