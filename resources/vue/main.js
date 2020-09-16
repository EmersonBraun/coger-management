import Vue from 'vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import App from '@/App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#q-app',
  vuetify,
  router,
  components: { App },
  template: '<App/>',
})
