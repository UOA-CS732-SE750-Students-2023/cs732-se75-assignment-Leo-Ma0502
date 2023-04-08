import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'
import { WelcomeView } from '../welcome'
import FrameWork from "../framework/FrameWork.vue"
import { ChartView1, ChartView2 } from '../charts/index.js'
import LoginPage from '../login/LoginPage.vue'
import RegisterPage from '../register/RegisterPage.vue'
import ProfilePage from '../profile/ProfilePage.vue'
import logoutPage from '../logout/logoutPage.vue'

import { default as user } from '../stores'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/welcome', component: WelcomeView },

    { path: "/chart1", component: ChartView1 },
    { path: "/chart2", component: ChartView2 },

    { path: '', redirect: { path: "/welcome" }, component: FrameWork },
    { path: '/profile', component: ProfilePage },
    { path: '/logout', component: logoutPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },


  ]
});

router.beforeEach((to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const loggedIn = user.state.loggedin;
  console.log("LOGGED IN? ", loggedIn)
  const publicPages = ['/login', '/register', '/#', '/welcome'];
  const authRequired = !publicPages.includes(to.path);
  if (authRequired && !loggedIn) {
    return router.push('/login')
  }


  //next();
})

export default router
