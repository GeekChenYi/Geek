import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'homes', // 如果直接使用时不起作用的，这是还需要配置router-link，如果不配置，它根本就不知道是通过path还是name访问的路径,命名路由也是我们点击的时候才会起作用的
    alias: '/home_page', // 定义路由别名的方式实现
    component: Home
    // this.$router访问的是路由器，而this.$route访问的是当前路由
  },
  {
    path: '/about',
    name: 'abouts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 动态路由参数
  {
    path: '/argu/:user', // 这个参数值是可被传入到相应的$route.params中去的,如果我们需要打开不同用户的界面我们可以通过这是这个值实现
    name: 'argu',
    component: () => import('../views/argu.vue')
    // 注意点：如果要从'/argu/:user' 切换到'/argu/:name'下面，组件是会复用的，因为他们调用的是同一个组件，但是这也造成一个问题，就是组件的声明周期钩子是不会被调用的，解决办法：watch：{},或者路由导航守卫beforeRouteUpdate
    // 如果使用通配符参加路由时，必须确保通配符路由放在最后，如果在history模式下面的话，还要对服务器进行正确的配置
    // 匹配优先级：谁先定义的，谁就在前面

  },
  // 嵌套路由
  {
    path: '/parent', // 可以尝试加动态路由参数的配置
    component: () => import('../views/parent.vue'),
    children: [
      {
        path: 'profile', // 注意是没有/
        component: () => import('../views/profile.vue')
      },
      {
        path: 'child',
        component: () => import('../views/child.vue')
      }
    ]
    // 注意点：以'/'开头的嵌套路径为根路径
  },
  // 编程式路由，也就是js控制的路由
  // 命名路由只有在我们点击的时候才会起作用
  // 命名视图，如果我们需要同时展示多个视图而不是嵌套路由的时候，这时我们就需要命名视图，切换页面的过程中只切换对应的部分，而整体的切换
  {
    path: '/named_view',
    components: {// 注意是components
      default: () => import('../views/child.vue'),
      email: () => import('../views/email.vue'),
      tel: () => import('../views/tel.vue')
    }
  },
  // 路由重定向
  {
    path: '/main',
    // redirect: '/'
    /*
    redirect: {
      name: 'abouts'
    }
    */

    redirect: to => 'about'
  },

  // 别名的方式实现
  // 路由组件传参,解决了$route.params.id高度耦合的情况
  {
    path: '/geek/:id',
    component: () => import('../views/geek.vue'),
    props: true // 如果设置为false，是不会传递参数过去的
    // 如果是包含命名视图的，必须分开写，例如下面的形式
    // props: {default: true, email: false}  // 如果是一个对象，传递过去的时候也是一个对象
  }
]
