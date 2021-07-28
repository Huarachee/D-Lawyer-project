import Vue from 'vue'
import VeeValidate from 'vee-validate'

import router from './router/index'
import store from './store'

import App from './App.vue'

// Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


