import Vue from 'vue'
import Router from 'vue-router'
import Store from './store/store'
import Profile from '../src/views/Profile'
import MainNavbar from '../src/layout/MainNavbar'
import MainFooter from '../src/layout/MainFooter'
import StockTrader from './views/AppStockTrader'
import TradeLanding from './views/Trade/LandingPage.vue'
import TrainingManagement from './views/TrainingManagement.vue'
import TrainingLogin from './views/Training/Login.vue'
import TrainingSignup from './views/Training/Signup.vue'
import TrainingDashboard from './views/Training/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/trade',
      name: 'trade',
      component: StockTrader
    },

    {
      path: '/stocktrader',
      name: 'stocktrader',
      components: {
        default: TradeLanding,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400,
          title: 'Stock Trader',
          items: [{
            icon: '',
            text: 'Try For Free',
            path: '/trade'
          }]
        }
      }
    },
    {
      path: '/',
      name: 'index',
      components: {
        default: Profile,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400,
          title: 'Emilio M. Rangel',
          items: [{
            icon: '',
            text: '',
            path: ''
          }]
        },
        default: {
          projects: [{
            title: 'Stock Trader',
            img: require('./assets/img/stocktrader.png'),
            path: '/stocktrader'
          }]
        }

      }
    },
    {
      path: '/trainingmanagement',
      name: 'trainingmanagement',
      components: {
        default: TrainingManagement,
        header: MainNavbar
      },
      props: {
        header: {
          colorOnScroll: 400,
          title: '101st Airborne Division Training Management',
          items: [
            {
              icon: '',
              text: 'Sign Up',
              path: '/signup'
            },
            {
              icon: '',
              text: 'Login',
              path: '/login'
            }
          ],
          toolbarColor: 'md-dark'
        }
      },
      children: [
            { path: '/login' , components: {default: TrainingLogin}, name: 'traininglogin' },
            { path: '/signup' , component: TrainingSignup }
      ]
    },
    {
        path: '/dashboard',
        component: TrainingDashboard,
        name: 'trainingdashboard',
        beforeEnter(to, from, next) {
            if(Store.state.Auth.idToken) {
                next()
            } else {
                next('/login')
            }
        }
    }

  ],
  mode: 'history',
  scrollBehavior: to => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
