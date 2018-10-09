import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import Resources from  '@/components/Resources'
import Allocation from '@/components/Allocation'
import Management from '@/components/Management'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        bottom:index

      }
    },
    {
      path:'/index',
      name:'index',
      component:index
    },
    {
      path:'/Resources',
      name:'Resources',
      components: {
        default:HelloWorld,
        bottom: Resources,
      }
    },
    {
      path:'/Allocation',
      name:'Allocation',
      components: {
        default:HelloWorld,
        bottom: Allocation,
      }
    },
    {
      path:'/Management',
      name:'Management',
      components: {
        default:HelloWorld,
        bottom: Management,
      }
    }
  ]
})
