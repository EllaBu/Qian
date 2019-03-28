export default [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // webpackChunkName: "about"((Chunk名称用于分割代码，值一样时会打包到通过文件中)
    //Vue-cli 3新增加的懒加载方式
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]
