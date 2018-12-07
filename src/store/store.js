import Vue from 'vue'
import Vuex from 'vuex'
import '../assets/js/base'

 Vue.use(Vuex)

const store =new Vuex.Store({
  state:{
    islogin:'',
    jj:0,
    zy:0,
    cy:0,
    iwrite:[],
    iread:[],
    ti:[],
    mwrite:[],
    mread:[],
    delaytime:[],
    health:{},
    gosd_use:[],
    gcollect:{},
    gpool_use:[],
    mbps:[],
    log:[],
    warn:[],
    iops:[],
    cpu:[],
    osdlist:'',
    diskall:[],
    diskdefalut:'',
    netcard:[],
    netcarddefalut:'',
    content:[],
    // language:''
  },
  mutations:{
    islogin(state,msg){
      state.islogin=msg;
    },
    // selectlang(state,what){
    //   state.language=what
    // },
    countwarn(state,stau){
      state.jj=stau.one;
      state.zy=stau.two;
      state.cy=stau.three;
    },
    lindraw(state,linemessages){
      state.iwrite=linemessages.iwrite
      state.iread=linemessages.iread
      state.ti=linemessages.ti
      state.mwrite=linemessages.mwrite
      state.mread=linemessages.mread
      state.delaytime=linemessages.delaytime
      state.health=linemessages.health
    },
    gnode(state,msg){
      state.gosd_use=msg.osd_use
      state.gcollect=msg.collect
      state.gpool_use=msg.pool_use
      localStorage=msg
    },
    gcim(state,msg){
      state.mbps=msg.mbps
      state.log=msg.log
      state.warn=msg.warn
      state.iops=msg.iops
      state.cpu=msg.cpu
    },
    gosd(state,msg){
      state.osdlist=msg
    },
    osdalone(state,msg){
      state.diskall=msg.diskall
      state.diskdefalut=msg.diskdefalut
      state.netcard=msg.netcard
      state.netcarddefalut=msg.netcarddefalut
      state.content=msg.content
    }
  }
})
export default store
