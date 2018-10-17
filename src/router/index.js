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

      }
    },
    {
      path:'/index',
      name:'index',
      menuShow:true,
      component:index
    },
    {
      path:'/Log',
      name:'Log',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom:Log

      }
    },
    {
      path:'/User',
      name:'User',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom:User

      }
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
    },
    {
      path:'/Allocation',
      name:'Allocation',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Aindex,
        right:Aright,
      }
    },
    {
      path:'/Management',
      name:'Management',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Mindex,
        right:Mright,
      }
    },
    {
      path:'/Rleft',
      name:'Rleft',
      menuShow:true,
      component:Rleft
    },
    {
      path:'/Rindex',
      name:'Rindex',
      menuShow:true,
      component:Rindex
    },
    {
      path:'/Aindex',
      name:'Aindex',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Aindex,
        right:Aright,
      }
    },
    {
      path:'/Aright',
      name:'Aright',
      menuShow:true,
      component:Aright
    },
    {
      path:'/Mindex',
      name:'Mindex',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Mindex,
        right:Mright,
      }
    },
    {
      path:'/Mwarn',
      name:'Mwarn',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Mwarn,
        right:Mright,
      }
    },
    {
      path:'/Msolve',
      name:'Msolve',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Msolve,
        right:Mright,
      }
    },
    {
      path:'/Mright',
      name:'Mright',
      menuShow:true,
      component:Mright
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
    },
    {
      path:'/Rpool',
      name:'Rpool',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Rpool,
        right:Rleft,
      }
    },
    {
      path:'/Rblock',
      name:'Rblock',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Rblock,
        right:Rleft,
      }
    },
    {
      path:'/Rpara',
      name:'Rpara',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Rpara,
        right:Rleft,
      }
    },
    {
      path:'/Aoperation',
      name:'Aoperation',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Aoperation,
        right:Aright,
      }
    }

  ]
})
