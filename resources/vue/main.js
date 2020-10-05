import Vue from 'vue'
import axios from 'axios'
import router from './router'
import vuetify from '@/plugins/vuetify'
import App from '@/App.vue'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  el: '#q-app',
  vuetify,
  router,
  components: { App },
  template: '<App/>',
})
