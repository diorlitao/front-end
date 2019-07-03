import Vue from 'vue'
import Router from 'vue-router'
// 懒加载路由
const login = () => import('@/components/Login')
const index = () => import('@/components/Index')
Vue.use(Router)

export default new Router({
  // 配置路由
  routes: [{
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '*',
    redirect: '/login'
  }
  ]
})
