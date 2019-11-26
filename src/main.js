import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
// import qs from 'qs';
import './plugins/element.js'
import './assets/css/global.css'
Vue.config.productionTip = false

// 配置请求根路径
// axios.defaults.baseURL = 'http://39.105.230.151/api/'
// Vue.prototype.$http = axios
// Vue.prototype.$qs = qs


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
