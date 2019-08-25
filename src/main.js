import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import From from 'ant-design-vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import G2 from '@antv/g2'

import store from './store'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(From)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')