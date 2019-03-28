// const list = r => require.ensure([], () => r(require('../components/list/list')), 'list');
// 第二种懒加载的方式

// const hyh = resolve => {import('@components/index/hyh').then(module => {resolve(module)})}
// 第三种懒加载的方式

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
    // component:  resolve => require([URL], resolve), // 第一种懒加载的方式
  }
]