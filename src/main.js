/* eslint-disable */
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store/store'
import MaterialKit from './plugins/material-kit'
import Vuetify from 'vuetify'
import axios from 'axios'

Vue.config.productionTip = false

window.headerBus = new Vue()
window.contactBus = new Vue()

Vue.use(VueResource)
Vue.use(MaterialKit)
Vue.use(Vuetify)

const NavbarStore = {
  showNavbar: false
}

axios.defaults.baseURL = 'https://airborne-43653.firebaseio.com/'
Vue.mixin({
  data () {
    return {
      NavbarStore
    }
  }
})

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})
const trade_url = 'https://trade-278f2.firebaseio.com/'
const httpcrud_url = 'https://vuejs-http-8df2f.firebaseio.com/data.json'

Vue.http.options.root = trade_url

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
