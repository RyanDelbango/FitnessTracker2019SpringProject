import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import './assets/main.scss';

Vue.config.productionTip = false

Vue.component('v-select', vSelect)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
