import Vue from 'vue'
import index from '../pages/index.vue'
import('./css/style.css')

Vue.config.productionTip = false

new Vue({
  render: h => h(index),
}).$mount('#app')
