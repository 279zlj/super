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
    }
  }
})
export default store
