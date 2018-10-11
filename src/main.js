// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/js/jquery-3.3.1.min.js'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.min.js'
import echarts from 'echarts'
import axios from 'axios'
import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'
import $ from 'jquery'
import '@/assets/dist/bootstrap-table.min.css'
import '@/assets/dist/bootstrap-table.min.js'
import '@/assets/dist/locale/bootstrap-table-zh-CN.min.js'
import '@/assets/dist/ga.js'
require('./mock/mock')

Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.config.productionTip = false
Vue.prototype.$echarts=echarts
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  echarts,
  axios,
  components: { App },
  template: '<App/>'
})
