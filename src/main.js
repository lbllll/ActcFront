// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import jQuery from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/css/comm.css'
import './assets/js/bootstrap.min'
Vue.prototype.$ = jQuery
/* 在main.js里面加载公用的的静态资源文件 */
Vue.prototype.$axios = axios
/* eslint-disable no-new */
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
