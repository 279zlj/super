import Vue from 'vue'
import Vuex from 'vuex'
import '../assets/js/base'

 Vue.use(Vuex)

const store =new Vuex.Store({
  state:{
    islogin:''
  },
  mutations:{
    islogin(state,msg){
      state.islogin=msg;
    }
  }
})
export default store
