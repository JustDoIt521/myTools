import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import '@/components/scss/default.scss'
import dloading from '@/components/loading/default/index.js'
import pianoLoading from '@/components/loading/piano/index.js'
Vue.use(dloading);
Vue.use(pianoLoading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
