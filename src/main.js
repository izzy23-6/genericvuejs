// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DatatableFactory from 'vuejs-datatable'
import Bootstrap from 'bootstrap'
import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

global.jQuery = jQuery

// Bootstrap
Vue.use(BootstrapVue)
Vue.use(DatatableFactory)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
