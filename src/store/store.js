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
  },
  mutations:{
    islogin(state,msg){
      state.islogin=msg;
    },
    countwarn(state,stau){
      state.jj=stau.one;
      state.zy=stau.two;
      state.cy=stau.three;
    }
  }
})
export default store
