import Vue from 'vue'
import App from './pages/Home/App.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')