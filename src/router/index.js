import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import UsersList from '../components/users/UsersList'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [{
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/userslist',
        component: UsersList
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 重写路由的push方法
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/login') return next();
  let sessionToken = window.sessionStorage.getItem('token');
  if (!sessionToken) return next('/login')
  next();
})

export default router
