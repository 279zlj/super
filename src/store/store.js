import Vue from 'vue'
import Vuex from 'vuex'

 Vue.use(Vuex)
  let guse=[]
  let gcoll={}
  let gpuse=[]
  let mbps=[]
  let log=[]
  let warn=[]
  let iops=[]
  let cpu=[]
  let osdlist=''
  let diskall=[]
  let diskdefalut=''
  let netcard=[]
  let netcarddefalut=''
  let content=[]
  let net=''
  let memory=''
  let icpu=[]
  let swap_io=''
  let mode=''
  let pool_use=[]
  let cpulist=[]
  let diskips=''
  let diskops=''
  let idisk=[]
  let rtime=''
  let wtime=''
  let btime=''
  let cputem=''
  let funspeed=''
  let cardtem=''
  let jqselect=[]
  let jkselect=[]
try {
  if (localStorage.gosd_use)
    guse=JSON.parse(localStorage.gosd_use)
  if (gcoll=localStorage.gcollect)
    gcoll=JSON.parse(localStorage.gcollect)
  if (localStorage.gpool_use)
    gpuse=JSON.parse(localStorage.gpool_use)
  if (localStorage.mbps)
    mbps=JSON.parse(localStorage.mbps)
  if (localStorage.log)
    log=JSON.parse(localStorage.log)
  if (localStorage.warn)
    warn=JSON.parse(localStorage.warn)
  if (localStorage.iops)
    iops=JSON.parse(localStorage.iops)
  if (localStorage.cpu)
    cpu=JSON.parse(localStorage.cpu)
  if (localStorage.osdlist)
    osdlist=JSON.parse(localStorage.osdlist)
  if (localStorage.diskall)
    diskall=JSON.parse(localStorage.diskall)
  if (localStorage.diskdefalut)
    diskdefalut=JSON.parse(localStorage.diskdefalut)
  if (localStorage.netcard)
    netcard=JSON.parse(localStorage.netcard)
  if (localStorage.netcarddefalut)
    netcarddefalut=JSON.parse(localStorage.netcarddefalut)
  if (localStorage.content)
    content=JSON.parse(localStorage.content)
  if (localStorage.net)
    net=JSON.parse(localStorage.net)
  if (localStorage.memory)
    memory=JSON.parse(localStorage.memory)
  if (localStorage.icpu)
    icpu=JSON.parse(localStorage.icpu)
  if (localStorage.swap_io)
    swap_io=JSON.parse(localStorage.swap_io)
  if (localStorage.mode)
    mode=JSON.parse(localStorage.mode)
  if (localStorage.pool_use)
    pool_use=JSON.parse(localStorage.pool_use)
  if (localStorage.cpulist)
    cpulist=JSON.parse(localStorage.cpulist)
  if (localStorage.diskips)
    diskips=JSON.parse(localStorage.diskips)
  if (localStorage.diskops)
    diskops=JSON.parse(localStorage.diskops)
  if (localStorage.idisk)
    idisk=JSON.parse(localStorage.idisk)
  if (localStorage.rtime)
    rtime=JSON.parse(localStorage.rtime)
  if (localStorage.wtime)
    wtime=JSON.parse(localStorage.wtime)
  if (localStorage.btime)
    btime=JSON.parse(localStorage.btime)
  if (localStorage.cputem)
    cputem=JSON.parse(localStorage.cputem)
  if (localStorage.funspeed)
    funspeed=JSON.parse(localStorage.funspeed)
  if (localStorage.cardtem)
    cardtem=JSON.parse(localStorage.cardtem)
  if (localStorage.jqselect)
    jqselect=JSON.parse(localStorage.jqselect)
  if (localStorage.jkselect)
    jkselect=JSON.parse(localStorage.jkselect)
}
catch (e) {
  
}
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
    ceph:{},
    rqlite_info:[],
    redis:{},

    gosd_use:guse,
    gcollect:gcoll,
    gpool_use:gpuse,
    mbps:mbps,
    log:log,
    warn:warn,
    iops:iops,
    cpu:cpu,
    osdlist:osdlist,
    diskall:diskall,
    diskdefalut:diskdefalut,
    netcard:netcard,
    netcarddefalut:netcarddefalut,
    content:content,
    net:net,
    memory:memory,
    icpu:icpu,
    swap_io:swap_io,
    mode:mode,
    pool_use:pool_use,
    cpulist:cpulist,
    diskips:diskips,
    diskops:diskops,
    idisk:idisk,
    rtime:rtime,
    wtime:wtime,
    btime:btime,
    cputem:cputem,
    funspeed:funspeed,
    cardtem:cardtem,
    jqselect:jqselect,
    jkselect:jkselect
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
      state.ceph=linemessages.ceph
      state.rqlite_info=linemessages.rqlite_info
      state.redis=linemessages.redis
    },
    gnode(state,msg){
      state.gosd_use=msg.osd_use
      state.gcollect=msg.collect
      state.gpool_use=msg.pool_use
      localStorage.gosd_use=JSON.stringify(msg.osd_use)
      localStorage.gcollect=JSON.stringify(msg.collect)
      localStorage.gpool_use=JSON.stringify(msg.pool_use)
    },
    gcim(state,msg){
      state.mbps=msg.mbps
      state.log=msg.log
      state.warn=msg.warn
      state.iops=msg.iops
      state.cpu=msg.cpu
      localStorage.mbps=JSON.stringify(msg.mbps)
      localStorage.log=JSON.stringify(msg.log)
      localStorage.warn=JSON.stringify(msg.warn)
      localStorage.iops=JSON.stringify(msg.iops)
      localStorage.cpu=JSON.stringify(msg.cpu)
    },
    gosd(state,msg){
      state.osdlist=msg
      localStorage.osdlist=JSON.stringify(msg)
    },
    sstatic(state,msg){
      state.cputem=msg.cputem
      state.funspeed=msg.funspeed
      state.cardtem=msg.cardtem
      localStorage.cputem=JSON.stringify(msg.cputem)
      localStorage.funspeed=JSON.stringify(msg.funspeed)
      localStorage.cardtem=JSON.stringify(msg.cardtem)
    },
    osdalone(state,msg){
      state.diskall=msg.diskall
      state.diskdefalut=msg.diskdefalut
      state.netcard=msg.netcard
      state.netcarddefalut=msg.netcarddefalut
      state.content=msg.content
      localStorage.diskall=JSON.stringify(msg.diskall)
      localStorage.diskdefalut=JSON.stringify(msg.diskdefalut)
      localStorage.netcard=JSON.stringify(msg.netcard)
      localStorage.netcarddefalut=JSON.stringify(msg.netcarddefalut)
      localStorage.content=JSON.stringify(msg.content)
    },
    indexmsg(state,msg){
      state.net=msg.net
      state.memory=msg.memory
      state.icpu=msg.icpu
      state.swap_io=msg.swap_io
      state.mode=msg.mode
      state.pool_use=msg.pool_use
      state.cpulist=msg.cpulist
      state.diskips=msg.diskips
      state.diskops=msg.diskops
      state.idisk=msg.idisk
      state.rtime=msg.rtime
      state.wtime=msg.wtime
      state.btime=msg.btime
      localStorage.net=JSON.stringify(msg.net)
      localStorage.memory=JSON.stringify(msg.memory)
      localStorage.icpu=JSON.stringify(msg.icpu)
      localStorage.swap_io=JSON.stringify(msg.memory)
      localStorage.mode=JSON.stringify(msg.mode)
      localStorage.pool_use=JSON.stringify(msg.pool_use)
      localStorage.cpulist=JSON.stringify(msg.cpulist)
      localStorage.diskips=JSON.stringify(msg.diskips)
      localStorage.diskops=JSON.stringify(msg.diskops)
      localStorage.idisk=JSON.stringify(msg.idisk)
    },
    jjselect(state,msg){
      state.jkselect=msg.jkselect
      state.jqselect=msg.jqselect
      localStorage.jqselect=JSON.stringify(msg.jqselect)
      localStorage.jkselect=JSON.stringify(msg.jkselect)
    }
  }
})
export default store
