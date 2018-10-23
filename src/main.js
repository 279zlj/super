// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueI18n from 'vue-i18n'
import store from '../src/store/store'
import router from './router'
import '@/assets/js/jquery-3.3.1.min.js'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.min.js'
import echarts from 'echarts'
import axios from 'axios'
import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'
import $ from 'jquery'
import '@/assets/dist/bootstrap-table.css'
import '@/assets/dist/bootstrap-table.js'
import '@/assets/dist/locale/bootstrap-table-zh-CN.min.js'
import '@/assets/dist/ga.js'
import '@/assets/js/base.js'
import './mock/mock'
import 'es6-promise/auto'
import  '../src/assets/js/base'


Vue.use(Vuex)
Vue.use(router)
Vue.use(VueI18n)
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.config.productionTip = false
Vue.prototype.$echarts=echarts
Vue.prototype.$axios = axios;
Vue.prototype.detailFormatter=function(index,row){
  var html=[];
  $.each(row,function (key,value) {
    html.push('<h3><b>'+key+':</b></h3><br>'+value);
  });
  return html.join('');
}

const messages={
  //英文
  en: {
    message: {
      hello: 'hello',
      about: 'about',
      welcome: "Welcome"
    }
  },
  //简体中文
  zhCHS: {
    message: {
      hello: '你好',
      about: '关于',
      welcome: "欢迎"
    }
  },
}
const i18n = new VueI18n({
  //定义默认语言
  locale: 'zhCHS',
  messages
})

router.beforeEach((to,from,next)=>{
    console.log(store.state.islogin)
    if (to.meta.requiresAuth) {
      if (store.state.islogin=='200'||sessionStorage.getItem('islogin')=='200'){

        next();
        window.document.body.style.backgroundColor = '#2E2245';
      }
      else {
        next({
          path:'Login',
          query:{
            redirect:'/Login'
          }
        })
      }
    }
    else {

      next();
      window.document.body.style.backgroundColor = '#2E2245';
    }


})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  echarts,
  axios,
  store,

  components: { App },
  template: '<App/>',


})
