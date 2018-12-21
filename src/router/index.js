import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import Resources from  '@/components/Resources'
import Allocation from '@/components/Allocation'
import Management from '@/components/Management'
import Rleft from '@/components/Rleft'
import Rindex from '@/components/Rindex'
import Aindex from '@/components/Aindex'
import Aright from '@/components/Aright'
import Mindex from '@/components/Mindex'
import Mright from '@/components/Mright'
import Rosd from '@/components/Rosd'
import Rpool from '@/components/Rpool'
import Rblock from '@/components/Rblock'
import Rpara from '@/components/Rpara'
import Aoperation from '@/components/Aoperation'
import Mwarn from '@/components/Mwarn'
import Msolve from '@/components/Msolve'
import Log from '@/components/Log'
import User from '@/components/User'
import Installone from '@/components/Installone'
import Installtwo from '@/components/Installtwo'
import Installthree from '@/components/Installthree'
import Login from '@/components/Login'
import Error from '@/components/Error'
import tips from '@/components/tips'
import object from '@/components/object'
import server3d from '@/components/server3d'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom:index

      },

      meta: { requiresAuth: true }
    },
    {
      path:'/index',
      name:'index',
      menuShow:true,
      component:index,
      meta: { requiresAuth: true }
    },
    {
      path:'/Log',
      name:'Log',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom:Log

      },
      meta: { requiresAuth: true }
    },
    {
      path:'/User',
      name:'User',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom:User

      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Resources',
      name:'Resources',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Rindex,
        right:Rleft,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Allocation',
      name:'Allocation',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Aindex,
        right:Aright,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Management',
      name:'Management',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Mwarn,
        right:Mright,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Rleft',
      name:'Rleft',
      menuShow:true,
      component:Rleft,
      meta: { requiresAuth: true }
    },
    {
      path:'/Rindex',
      name:'Rindex',
      menuShow:true,
      component:Rindex,
      meta: { requiresAuth: true }
    },
    {
      path:'/Aindex',
      name:'Aindex',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Aindex,
        right:Aright,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Aright',
      name:'Aright',
      menuShow:true,
      component:Aright,
      meta: { requiresAuth: true }
    },
    {
      path:'/Mindex',
      name:'Mindex',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Mindex,
        right:Mright,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Mwarn',
      name:'Mwarn',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Mwarn,
        right:Mright,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Msolve',
      name:'Msolve',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Msolve,
        right:Mright,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Mright',
      name:'Mright',
      menuShow:true,
      component:Mright,
      meta: { requiresAuth: true }
    },
    {
      path:'/Rosd',
      name:'Rosd',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Rosd,
        right:Rleft,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Rpool',
      name:'Rpool',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Rpool,
        right:Rleft,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Rblock',
      name:'Rblock',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Rblock,
        right:Rleft,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Rpara',
      name:'Rpara',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Rpara,
        right:Aright,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/object',
      name:'object',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: object,
        right:Rleft,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Aoperation',
      name:'Aoperation',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Aoperation,
        right:Aright,
      },
      meta: { requiresAuth: true }
    },
    {
      path:'/Installone',
      name:'Installone',
      menuShow:true,
      component: Installone,

    },
    {
      path:'/Installtwo',
      name:'Installtwo',
      menuShow:true,
      component: Installtwo,

    },
    {
      path:'/Installthree',
      name:'Installthree',
      menuShow:true,
      component: Installthree,

    },
    {
      path:'/Login',
      name:'Login',
      menuShow:true,
      component: Login,

    },
    {
      path:'*',
      name:'Error',
      menuShow:true,
      component: Error,

    },
    {
      path:'/tips',
      name:'tips',
      menuShow:true,
      component:tips
    },
    {
      path:'/server',
      name:'server',
      menuShow:true,
    }


  ]
})
