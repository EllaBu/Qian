import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import about from './about'

Vue.use(Router)


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...home,
    ...about
  ]
})


// 定义一个路由的数组 类似于白名单黑名单
const defaultRouterArr = ['/list/share']
router.beforeEach((to, from, next) => {
  // 如果匹配到这个数组
  if (defaultRouterArr.indexOf(to.path) >= 0) {
  // 执行各种操作 比如让他去登录 不让她进去等等 通过next方法来控制 详细参考vue路由
    next()
  } else {
    next()
  }
})

export default router;

