// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import 'store'
import qs from 'qs'
import VueI18n from 'vue-i18n'
import store from '../src/store/store'
import router from './router'
import '@/assets/js/jquery-3.3.1.min.js'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.min.js'
import echarts from 'echarts'
import axios from 'axios'
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
Vue.prototype.$qs=qs
Vue.config.productionTip = false
Vue.prototype.$echarts=echarts
Vue.prototype.$axios = axios;

// Vue.prototype.detailFormatter=function(index,row){
//   var html=[];
//   $.each(row,function (key,value) {
//     html.push('<h3><b>'+key+':</b></h3><br>'+value);
//   });
//   return html.join('');
// }

Vue.prototype.allurl='http://192.168.1.213:8000/'

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
const i18n = new VueI18n({                    /*页面中英文切换*/
  //定义默认语言
  locale: 'zhCHS',
  messages
})

router.beforeEach((to,from,next)=>{                          /*路由守卫，禁止直接通过url访问页面内容*/
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
    if (to.name==='Installthree'&&from.name==='Installone'){
      router.push({name:'Installtwo'})
    }
    if (to.name==='Login' || to.name==='Installone' || to.name==='Installtwo' || to.name==='Installthree'){
      router.app.$store.state.islogin='0'
      sessionStorage.removeItem('islogin');
      localStorage.removeItem('islogin')
    }
    if (to.name==='Resources') {
      sessionStorage.setItem('isse','概况')
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


