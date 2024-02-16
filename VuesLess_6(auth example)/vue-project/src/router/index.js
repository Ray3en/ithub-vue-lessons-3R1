import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PublicView from '../views/PublicView.vue'
import PrivateView from '../views/PrivateView.vue'

function checkAuth(){
  let password = localStorage.getItem('password')
  if (password === 'admin'){
    return true
  } else {
    return false
  }

}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/public',
      component: PublicView
    },
    {
      path: '/private',
      component: PrivateView
    },
    {
      path: '/login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.path === '/private' && !checkAuth()){
    next('/login')
  } else {
    next()
  }
})


export default router
