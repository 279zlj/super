// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import 'store'
import qs from 'qs'
import VueI18n from 'vue-i18n'
import VueResource from 'vue-resource'
import store from '../src/store/store'
import router from './router'
import '@/assets/js/jquery-3.3.1.min.js'
import '@/assets/css/bootstrap.min.css'
import '@/assets/bootdatetime/css/bootstrap-datetimepicker.css'
import '@/assets/js/bootstrap.min.js'
import '@/assets/bootdatetime/js/bootstrap-datetimepicker.js'
import '@/assets/bootdatetime/js/locales/bootstrap-datetimepicker.zh-CN.js'
import echarts from 'echarts'
import axios from 'axios'
import '@/assets/dist/bootstrap-table.css'
import '@/assets/dist/extensions/filter-control/bootstrap-table-filter-control.css'
import '@/assets/dist/bootstrap-table.js'
import '@/assets/dist/extensions/filter-control/bootstrap-table-filter-control.js'
import '@/assets/dist/locale/bootstrap-table-zh-CN.min.js'
import '@/assets/js/bootstrap-table-contextmenu.js'
import '@/assets/dist/ga.js'
import './mock/mock'
import 'es6-promise/auto'

import langzh from './language/zh'
import langen from './language/en'

Vue.use(Vuex)
Vue.use(router)
Vue.use(VueResource)
Vue.use(VueI18n)

Vue.prototype.$qs=qs
Vue.config.productionTip = false
Vue.prototype.$echarts=echarts
Vue.prototype.$axios = axios;
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'

// Vue.prototype.detailFormatter=function(index,row){
//   var html=[];
//   $.each(row,function (key,value) {
//     html.push('<h3><b>'+key+':</b></h3><br>'+value);
//   });
//   return html.join('');
// }

Vue.prototype.allurl='http://192.168.2.64:8000/'
// Vue.prototype.allurl=''


const i18n = new VueI18n({
  locale:'zh',
  messages: {
    'zh': langzh, // 简体中文
    'en': langen, // 英文
  }
})




router.beforeEach((to,from,next)=>{                          /*路由守卫，禁止直接通过url访问页面内容*/
    if (to.meta.requiresAuth) {
      if (store.state.islogin=='200'||store.state.islogin=='250'||sessionStorage.getItem('islogin')=='200'||sessionStorage.getItem('islogin')=='250'){
        next();
        window.document.body.style.backgroundColor = '#2E2245';
      }
      else {
        next({
          path:'Login',

        })
        window.document.body.style.backgroundColor = '#242424'
      }
    }
    else {
      next();
      window.document.body.style.backgroundColor = '#2E2245';
    }
    if (to.name==='Installone'&& from.name=='Installthree'){
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
  i18n,
  store,
  components: { App },
  template: '<App/>',
  data(){
    return{
      time:30*60*1000,
      handler:-1
    }
  },
  methods:{
    longout(){

      var already=sessionStorage.getItem('issele');
      if (already){
        sessionStorage.setItem('lastTime',new Date().getTime());
        // this.handler=setInterval(this.checklogin(),10*1000)
      }


    },
    // checklogin(){
    //   // console.log("10秒检查一次是否过期"+window.location.href+"::"+new Date());
    //   var getlastTime=sessionStorage.getItem('lastTime')?sessionStorage.getItem('lastTime'):-1;
    //   if (getlastTime==-1){
    //     clearInterval(this.handler);
    //   }
    //   else {
    //     if ((new Date().getTime()-getlastTime)>this.time){
    //       alert('由于您长时间未进行操作，系统已为您自动退出登录');
    //       sessionStorage.removeItem('islogin');
    //       sessionStorage.removeItem('issele')
    //       localStorage.removeItem('islogin')
    //       this.$router.push({path:'/Login'})
    //     }
    //   }
    // }
  },
  mounted(){
    this.$nextTick(function () {
      setInterval(this.longout,10*1000);
    })
  },
    // this.checklogin()


})


