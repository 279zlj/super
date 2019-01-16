<template>
  <div id="index" class="container">
    <div class="row " id="one">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 container-fluid">
        <div class="row blockone">
          <p style="margin: 1em 0 0.5em 1em;">{{$t('message.Netstat')}}</p>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 right">
            <!--<div id="liquidFill" class="grid"></div>-->
            <!--<p style="margin-top: 1em">网速：<span class="numtwo">{{pool_use}}</span>mb/s</p>-->
            <!--<p style="text-align: center;line-height:1em">健康状态</p>-->
            <div>
              <p class="size titlecolor" >{{$t('message.Net-segment')}}：</p>
              <ol class="size"  style="height: 2.5em;overflow-y: scroll">
                <li v-for="i in $store.state.net.lan">{{i}}</li>
              </ol>
            </div>
            <p  class="size titlecolor" >{{$t('message.NetCard')}}：</p>
            <div style="overflow-y: scroll;height: 5em;overflow-x: hidden;" class="size" >
              <div class="row titlecolor" >
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5" >{{$t('message.NetCard')}}</div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" >{{$t('message.Mode')}}</div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" >{{$t('message.Mainframe')}}</div>
              </div>
              <div class="row" v-for="p in $store.state.net.nics">
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5" >
                  {{p.name}}
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" >
                  {{p.mode}}
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" >
                  {{p.hostname}}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 ">
            <div class="fontone "><span class="titlecolor">{{$t('message.Question-card')}}：</span><a style="font-size: 2em;padding: .5em;color: white;cursor: pointer"  class="dropdown-toggle" data-toggle="dropdown">{{$store.state.net.error}}</a>个
              <ul class="dropdown-menu">
                <li><router-link :to="{name:''}"></router-link></li>
              </ul>
            </div>
            <div style="margin-left: -1px">
              <p class="fonttwo "><span class="titlecolor">{{$t('message.link-number')}}：</span>{{$store.state.net.net_socket_link_nall}}</p>
              <p class="fonttwo "><span class="titlecolor">{{$t('message.Receive-Discard-Packets')}}：</span>{{$store.state.net.net_drop_in_all}}</p>
              <p class="fonttwo "><span class="titlecolor">{{$t('message.Send-Discard-Packets')}}：</span>{{$store.state.net.net_drop_out_all}}</p>
              <p class="fonttwo "><span class="titlecolor">{{$t('message.Bandwidth')}}：</span>{{$store.state.net.bandwidth}}Mbps/s</p>
              <p class="fonttwo "><span class="titlecolor">{{$t('message.Best-Match')}}：</span>{{$store.state.mode}}</p>
            </div>
          </div>
        </div>
        <div class="row blockthree">
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 blocktwo">
            <div class="blockbottom">
              <p style="line-height: 2em;margin-top: .8em">{{$t('message.Disk-summary')}}</p>
              <div class="row" >
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 diskfont" >{{$t('message.Writing-rate')}}：</div>
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 num" title="写速度">{{$store.state.diskips}}</div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 diskfont">{{$t('message.Total-of-read')}}：</div>
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 numa" title="总读量">{{$store.state.idisk.read_all}}</div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 diskfont">{{$t('message.Total-of-write')}}：</div>
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 numa" title="总写量">{{$store.state.idisk.write_all}}</div>
              </div>
              <div class="row" >
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 diskfont">{{$t('message.Total-read-time')}}：</div>
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 numa" title="总读耗时">{{read_time}}</div>
              </div>
              <div class="row" >
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 diskfont">{{$t('message.Total-write-time')}}：</div>
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 numa" title="总写耗时">{{$store.state.wtime}}</div>
              </div>
              <div class="row" >
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 diskfont">{{$t('message.Busy-time')}}：</div>
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 numa" title="等待时间">{{$store.state.btime}}</div>
              </div>
              <div class="row" >
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 diskfont">{{$t('message.Reading-rate')}}：</div>
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 num" title="读速度">{{$store.state.diskops}}</div>
              </div>
            </div>
            <div>
              <h5 style="line-height: 2.5em;font-size: 1.1em;color: #FFFFFF;margin-top: .8em">Swap IO</h5>
              <div class="row" style="text-align: center">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 diskfont" ><p class="titlecolor">{{$t('message.Writing-rate')}}：</p></div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 num" title="写速度">{{$store.state.swap_io.ips}}</div>
              </div>
              <div class="row" style="text-align: center">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 diskfont" ><p class="titlecolor">{{$t('message.Reading-rate')}}：</p></div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 num" title="读速度">{{$store.state.swap_io.ops}}</div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12 ">
            <div class="row blockfour">
              <p style="line-height: 2em;">{{$t('message.Memory')}}<span style="margin-left: 1em;"><span class="titlecolor">{{$t('message.Total-memory')}}：</span>{{$store.state.memory.total}}</span></p>
              <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 memory">
                  <div><p class="titlecolor">{{$t('message.Shared-memory')}}：</p><p>{{$store.state.memory.share}}</p></div>
                  <div><p class="titlecolor">cache：</p><p>{{$store.state.memory.cache}}</p></div>

                </div>
                <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 ">
                  <div id="liquidFill" class="grid"></div>
                  <p style="text-align: center;">{{$t('message.Usage-state')}}</p>
                </div>
                <!--<p>已用：<span class="numtwo">{{memory}}</span>%</p>-->
              </div>
              <div class="row memory">
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6" ><p class="titlecolor">{{$t('message.Swap-memory')}}：</p><p>{{$store.state.memory.totalSwap}}</p></div>
                <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6" ><p class="titlecolor">{{$t('message.Swap-used')}}：</p><p>{{$store.state.memory.usedSwap}}</p></div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12 ">
            <div class="row blockfive">
              <div class="blockbottom">
                <p style="line-height: 2em;">CPU</p>
                <div class="row size">
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 titlecolor" style="text-align: right;line-height: 2em;">{{$t('message.Used')}}：</div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 numtwo">{{$store.state.icpu.total}}%</div>
                </div>
              </div>
              <div class="row">
                <p style="margin-left: 1em;margin-top: .5em;">CPU {{$t('message.Utilization')}}/TOP3</p>
                <div class="container-fluid" style="width: 90%">
                  <table class="table-condensed table-responsive table size">
                    <tbody style="text-align: center;">
                    <tr style="font-size: smaller" class="titlecolor"><td>HOST</td>
                      <td>%CPU</td></tr>
                    <tr style="font-size: smaller" v-for="i in $store.state.cpulist">
                      <td>{{i.name}}</td>
                      <td>{{i.value}}%</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div id="myCarousel" class="col-lg-8 col-md-8 col-sm-12 col-xs-12 carousel slide" data-ride="carousel" data-interval="15000">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>

      <div class="font bg carousel-inner">
        <div class="item active" >
          <div class="row">
            <div id="mychart" class="chartfirst" ></div>
          </div>
          <div class="row">
            <div id="mchart" class="chartsecond" ></div>
          </div>
          <div class="row">
            <div id="ychart" class="chartthird" ></div>
          </div>
        </div>
        <div class="item" id="gl" style="width: 100%;height: 100%;">
          <!--<canvas id="webgl"></canvas>-->
          <server></server>
        </div>
        <div style="text-align: right">
        <input type="button" class="btn-xs btn-info pause-slide" @click="startcar()" value="Start" >
        <input type="button" class="btn-xs btn-danger pause-slide" @click="pausecar()" value="Pause" >
        </div>
      </div>


      </div>
    </div>
    <div class="row">
      <div class="col-1g-12 out">

        <div id="log" class="logprint">
          <!--<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 print">-->
            <!--<p style="font-size: medium">健康状态(Health Status)</p>-->
            <!--<p id="health" :class="{'wanning':$store.state.health.status=='HEALTH_WARN','ok':$store.state.health.status=='HEALTH_OK','error':$store.state.health.status=='HEALTH_ERROR'}">{{$store.state.health.status}}</p>-->
            <!--<p class="health_detail" v-for="i in $store.state.health.health_detail">{{i}}</p>-->
          <!--</div>-->
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 print">
            <p style="font-size: medium">{{$t('message.Cluster')}}</p>
            <div class="row">
              <p style="margin: 0em 0 0 1em" class="titlecolor">{{$t('message.Resource-pool-state')}}</p>
              <div v-for="p in $store.state.ceph.pools">

                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><span class="titlecolor">{{$t('message.Name')}}：</span>{{p.name}}</div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><span class="titlecolor">{{$t('message.Status')}}：</span><span :class="{'wanning':p.stats=='warn','ok':p.stats=='ok','error':p.stats=='error'}">{{p.stats}}</span></div>
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"><span class="titlecolor">{{$t('message.Percent-used')}}：</span>{{p.percent_used}}%</div>
                <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis"><span class="titlecolor">{{$t('message.Max-available')}}：</span>{{p.max_avail}}</div>
              </div>
            </div>

            <div class="row">
              <p style="margin: .5em 0 0 1em" class="titlecolor">{{$t('message.Manager')}}</p>
              <div class="col-lg-12"><span class="titlecolor">{{$t('message.Activate-node')}}：</span><span >{{ activate_node}}</span></div>
              <p class="col-lg-12"><span class="titlecolor">{{$t('message.Standby-node')}}：</span><span v-for="r in standby_node">{{r}}   </span></p>
            </div>
            <div class="row">
              <p style="margin: 0em 0 0 1em" class="titlecolor">{{$t('message.Clock-consistency')}}：</p>
              <p class="col-lg-12"><span v-for="s in $store.state.ceph.clock">{{s}} </span>
              <span v-if="$store.state.ceph.clock!=0">{{$t('message.Clock-inconsistency')}}</span></p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 print">
            <p  style="font-size: medium" class="titlecolor">{{$t('message.Memory-disk-state')}}</p>
            <div v-for="q in $store.state.ceph.osds" >
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" style="border-bottom: 1px solid #392C48"><span class="titlecolor">{{$t('message.Name')}}：</span>{{q.name}}</div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="border-bottom: 1px solid #392C48"><span class="titlecolor">{{$t('message.Status')}}：</span><span :class="{'wanning':q.stats=='warn','ok':q.stats=='ok','error':q.stats=='error'}">{{q.stats}}</span></div>
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5" style="border-bottom: 1px solid #392C48"><span class="titlecolor">{{$t('message.Max-available')}}：</span>{{q.kb_avail}}</div>
              <!--<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5" style="border-bottom: 1px solid black">PGS：{{q.pgs}}</div>-->

            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 print">
            <p style="font-size: medium">{{$t('message.iData-Set')}}</p>
            <p><span class="titlecolor">{{$t('message.Used-capacity')}}：</span>{{$store.state.rqlite_info.volume}}</p>
            <p><span class="titlecolor">{{$t('message.Status')}}：</span><span :class="{'wanning':$store.state.rqlite_info.stats=='warn','ok':$store.state.rqlite_info.stats=='ok','error':$store.state.rqlite_info.stats=='error'}">{{$store.state.rqlite_info.stats}}</span></p>
            <p style="font-size: medium">{{$t('message.Message-Process')}}</p>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><span class="titlecolor">{{$t('message.Nodes')}}：</span>{{$store.state.redis.nodes}}</div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><span class="titlecolor">{{$t('message.Used')}}：</span>{{$store.state.redis.used}}</div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><span class="titlecolor">{{$t('message.Status')}}：</span><span :class="{'wanning':$store.state.redis.stats=='warn','ok':$store.state.redis.stats=='ok','error':$store.state.redis.stats=='error'}">{{$store.state.redis.stats}}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import echarts from 'echarts';
  import 'echarts/lib/echarts.js';
  import 'echarts/lib/chart/map';
  import 'echarts/map/js/china.js';
  // import server from './server3d'
  // import * as THREE from 'three'
  // import {darw} from "../assets/js/draw";
  import liquidfill from 'echarts-liquidfill';
  const later = Vue.component('server', function (resolve) {
    setTimeout(function () {
      require(['./server3d.vue'], resolve)
    }, 3000);
  });
  export default {
    name: "index",
    components: {later},
    echarts,
    liquidfill,
    data(){
      return{
        linpiechart: [],
        diski:[0,0],
        disko:[0,0],
        diskips:0,
        diskops:0,
        num:0,
        iwrite:[],
        iread:[],
        mwrite:[],
        mread:[],
        delaytime:[],
        health_d:[],
        timertip:null,
        read_time:'',
        write_time:'',
        busy_time:'',
        activate_node:'',
        standby_node:{},
        staticall:'',
        ssfan:'',
        sscard:''
      }
    },

    mounted() {
      $('#myCarousel').carousel({
        interval: 10000
      })
      this.linechartone(this.$store.state.ti,this.$store.state.iwrite,this.$store.state.iread)
      this.lindecharttwo(this.$store.state.ti,this.$store.state.mwrite,this.$store.state.mread)
      this.linechartthree(this.$store.state.ti,this.$store.state.delaytime)
      this.initWebSocket()
      this.getall()
      this.timer()
      this.staticall='CPU温度：30°C，风扇转速：300转'
      this.ssfan='显卡温度：25°C，阵列卡温度：28°C'
      this.sscard=''
      this.$store.commit('sstatic',{cputem:this.staticall,funspeed:this.ssfan,cardtem:this.sscard})
      // alert(this.fan)
      // darw()
      // $('.carousel').carousel('cycle')

    },


    computed:{
      lindraw(){
        return this.$store.state.iwrite,this.$store.state.iread,this.$store.state.ti,this.$store.state.mwrite,this.$store.state.mread,this.$store.state.delaytime
      },
      gnode(){
        return this.$store.state.osd_use,this.$store.state.collect,this.$store.state.pool_use
      },
      indexmsg(){
        return this.$store.state.net,this.$store.state.memory,this.$store.state.icpu,this.$store.state.swap_io,this.$store.state.mode,this.$store.state.pool_use,this.$store.state.cpulist,this.$store.state.diskips,this.$store.state.diskops
      }
    },
    methods: {
      initWebSocket(){
        // var _this=this
        const wsurl="ws://192.168.2.64:8000/ws/intime_data";
        // const wsurl='';
        this.websock=new WebSocket(wsurl);
        this.websock.onmessage=this.websocketonmessage;
        // this.websock.onopen=this.websocketonopen;
        // this.websock.websocket =this.websocket;
        this.websock.onclose=this.websocketclose;
      },
      websocketonopen(){
        console.log('ok')
        //console.log(JSON.parse(obj))
      },
      websocket(){
        this.initWebSocket()
      },
      websocketonmessage(e){
        // var a=e.data
        // console.log(JSON.parse(a))
        // var now=new Date()
        // var h=now.getHours()
        // var m=now.getMinutes()
        // var s=now.getSeconds()
        // var ntime=h.toString()+':'+m.toString()+':'+s.toString()
        const data=JSON.parse(e.data)
        // console.log(data.message.data.iops.ips)
        this.$store.commit('lindraw',{iwrite:data.message.data.iops[0],iread:data.message.data.iops[1],mwrite:data.message.data.mbps[0],mread:data.message.data.mbps[1],delaytime:data.message.data.delay,ti:data.message.data.time,health:data.message.data.health,ceph:data.message.data.ceph,rqlite_info:data.message.data.rqlite_info,redis:data.message.data.redis})
        // console.log(this.$store.state.delaytime)
        this.activate_node=data.message.data.ceph.mgr.activate_node
        this.standby_node=data.message.data.ceph.mgr.standby_node
        this.linechartone(this.$store.state.ti,this.$store.state.iwrite,this.$store.state.iread)
        this.lindecharttwo(this.$store.state.ti,this.$store.state.mwrite,this.$store.state.mread)
        this.linechartthree(this.$store.state.ti,this.$store.state.delaytime)
      },
      websocketsend(Data){
        console.log(Data)
      },
      websocketclose(e){
        console.log('断开连接',e);
        this.websock.close()
      },

      getall(){                         /*获取首页信息*/
        var _this=this
        let dips,dops;
        _this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        _this.$axios.get(this.allurl).then(function (res) {
          if (_this.num<2) {
            _this.diski[1]=res.data.disk_io.ips
            _this.disko[1]=res.data.disk_io.ops
          }
          if (res.data.net.is_mode==1){
            _this.mode='是'
          }
          dips=(_this.diski[1]-_this.diski[0])/3
          dops=(_this.disko[1]-_this.disko[0])/3
          _this.diskips=_this.bytesToSize(dips)
          _this.diskops=_this.bytesToSize(dops)
          _this.num++
          if (_this.num>2){
            _this.diski[0]=_this.diski[1]
            _this.diski[1]=0
            _this.disko[0]=_this.disko[1]
            _this.disko[1]=0
            _this.num=0
          }
          // alert(JSON.stringify(res.data.disk_io.read_time))
          let rt=res.data.disk_io
          // alert(typeof (rt.read_time))
          _this.read_time=_this.timeTosize(rt.read_time)
          _this.write_time=_this.timeTosize(res.data.disk_io.write_time)
          _this.busy_time=_this.timeTosize(res.data.disk_io.busy_time)
          _this.$store.commit('indexmsg',{net:res.data.net,memory:res.data.memory,icpu:res.data.cpu,swap_io:res.data.swap_io,mode:_this.mode,pool_use:res.data.net.speed,cpulist:res.data.cpu.detail,diskips:_this.diskips,diskops:_this.diskops,idisk:res.data.disk_io,rtime:_this.read_time,wtime:_this.write_time,btime:_this.busy_time})
          _this.liquidFill(_this.$store.state.memory.usage);
          // console.log(res.data)
        }).catch(function (error) {
          console.log(error)
        }).catch(function (error) {
          console.log(error)
        })
      },
      bytesToSize(limit) {
        // if (bytes === 0) return '0 B';
        // var k = 1024, // or 1024
        //   sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        //   i = Math.floor(Math.log(bytes) / Math.log(k));
        //
        // return (bytes / Math.pow(k, i)).toPrecision(2) + ' ' + sizes[i];

        var size = "";
        if( limit < 0.1 * 1024 ){ //如果小于0.1KB转化成B
          size = limit.toFixed(1) + " B";
        }else if(limit < 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB
          size = (limit / 1024).toFixed(1) + " KB";
        }else if(limit < 0.1 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB
          size = (limit / (1024 * 1024)).toFixed(1) + " MB";
        }else{ //其他转化成GB
          size = (limit / (1024 * 1024 * 1024)).toFixed(1) + " GB";
        }

        var sizestr = size + "";
        var len = sizestr.indexOf("\.");
        var dec = sizestr.substr(len + 1, 2);
        if(dec == "00"){//当小数点后为00时 去掉小数部分
          return sizestr.substring(0,len) + sizestr.substr(len + 3,2);
        }
        return sizestr;

      },
      timeTosize(time){

        if (time<(1000*60)) {
          return time / (1000).toFixed(0) + ' s'
        }
        else if (time>=(1000*60)&&time<(60*1000*60)) {
          return (time / (1000 * 60).toFixed(0)) + ' Min'
        }
        else if (time>=(1000*60*60)&&time<(60*1000*60*24)) {
          return (time / (1000 * 60 * 60)).toFixed(0) + ' H'
        }
        else if (time>=(1000*60*60*24)&&time<(60*1000*60*24*365)) {
          return (time / (1000 * 60 * 60 * 24)).toFixed(0) + ' Day'

        }
        else if (time>=(1000*60*60*24*365)) {
          return (time / (1000 * 60 * 60 * 24 * 265)).toFixed(0) + ' Year'
        }
        else {
          return time + 'ms'
        }
      },
      pausecar(){
        $("#myCarousel").carousel('pause');
      },
      startcar(){
        $("#myCarousel").carousel('cycle');
      },
      timer(){
        var _this=this
        _this.timertip=setInterval(function () {
          _this.getall()

        },5000)
      },
      linechartone(time,write,read){
        // console.log(time)
        var mychart = this.$echarts.init(document.getElementById('mychart'));

        var option = {
          color: ['#1a58cc','#DEED00'],
          legend:{
            data:['IOPS-Write','IOPS-Read'],
            x:'85%',
            textStyle:{
              color:'#FFF'
            },
          },
          axisLabel: {
            interval: 0,
            formatter:function(value)
            {
              debugger
              var ret = "";//拼接加\n返回的类目项  
              var maxLength = 10;//每项显示文字个数  
              var valLength = value.length;//X轴类目项的文字个数  
              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
              if (rowN > 1)//如果类目项的文字大于3,  
              {
                for (var i = 0; i < rowN; i++) {
                  var temp = "";//每次截取的字符串  
                  var start = i * maxLength;//开始截取的位置  
                  var end = start + maxLength;//结束截取的位置  
                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                  temp = value.substring(start, end) + "\n";
                  ret += temp; //凭借最终的字符串  
                }
                return ret;
              }
              else {
                return value;
              }
            }
          },
          title: [{
            left:'10%',
            text: '系统IOPS',
            textStyle: {
              color: 'white',
              fontSize:14
            }
          }],
          tooltip: {
            trigger: 'axis',
            position: ['35%', 0],
            show: true
          },
          xAxis: [{
            name: 'Time',
            data:time,
            lineStyle: {
              color: 'white'
            },
            "axisLine": {
              lineStyle: {
                color: 'white'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'white'
              }
            }
          },
          ],
          yAxis: {
            name: '',
            lineStyle: {
              color: 'white'
            },
            max: 500,
            "axisLine": {
              lineStyle: {
                color: 'white'
              }
            },
            splitLine: {
              show: false
            }
          },
          toolbox: {
            left: 'center',
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: [
            {
              start: 0,
              end: 100,
              // startValue: '',
              // endValue: '',
              lineStyle: {color: 'white'},
              areaStyle: {color: '#ff9933'},
              show:false
            },
            {
              type: 'inside',
            },
          ],
          series: [{
            name: 'IOPS-Write',
            smooth: true,
            type: 'line',
            symbol: 'none',
            itemStyle: {
              normal: {
                lineStyle: {
                  type: 'solid',
                  width: 2,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fff'
                  },
                    {
                      offset: 0.02,
                      color: '#83DEFC'
                    },
                    {
                      offset: 0.10,
                      color: '#1a58cc'
                    },
                    {
                      offset: 1,
                      color: '#5cd2fd'
                    }]),//线条渐变色
                }
              }
            },
            data:write,
            labelLine: {
              normal: {
                lineStyle: {
                  color: '#fff',
                  width: 10
                }
              }
            },

          },
            {
              name: 'IOPS-Read',
              smooth: true,
              type: 'line',
              symbol: 'none',
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: 'solid',
                    width: 2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#fff'
                    },
                      {
                        offset: 0.02,
                        color: '#FCFFA7'
                      },
                      {
                        offset: 0.10,
                        color: '#DEED00'
                      },
                      {
                        offset: 1,
                        color: '#FCFFA7'
                      }]),//线条渐变色
                  }
                }
              },
              data:read,
              labelLine: {
                normal: {
                  lineStyle: {
                    color: '#fff',
                    width: 10
                  }
                }
              },

            },
          ]
        }
        mychart.setOption(option)


      },
      lindecharttwo(time,write,read){
        var mchart = this.$echarts.init(document.getElementById('mchart'));

        var option = {
          color: ['#fe6300','#0DA700' ],
          title: [{
            left:'10%',
            text: '系统MBPS',
            textStyle: {
              color: 'white',
              fontSize:14
            }
          }],
          legend:{
            data:['MBPS-Write','MBPS-Read'],
            x:'85%',
            textStyle:{
              color:'#FFF'
            },

          },
          axisLabel: {
            interval: 0,
            formatter:function(value)
            {
              debugger
              var ret = "";//拼接加\n返回的类目项  
              var maxLength = 10;//每项显示文字个数  
              var valLength = value.length;//X轴类目项的文字个数  
              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
              if (rowN > 1)//如果类目项的文字大于3,  
              {
                for (var i = 0; i < rowN; i++) {
                  var temp = "";//每次截取的字符串  
                  var start = i * maxLength;//开始截取的位置  
                  var end = start + maxLength;//结束截取的位置  
                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                  temp = value.substring(start, end) + "\n";
                  ret += temp; //凭借最终的字符串  
                }
                return ret;
              }
              else {
                return value;
              }
            }
          },
          tooltip: {
            trigger: 'axis',
            position: ['35%', 0],
            show: true
          },
          xAxis: [{
            name: 'Time',
            data: time,
            lineStyle: {
              color: 'white'
            },

            "axisLine": {
              lineStyle: {
                color: 'white'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'white'
              }
            }
          },
          ],
          yAxis: {
            name: '',
            lineStyle: {
              color: 'white'
            },
            max:100,
            "axisLine": {
              lineStyle: {
                color: 'white'
              }
            },
            splitLine: {
              show: false
            }
          },
          toolbox: {
            left: 'center',
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: [
            {
              start: 0,
              end: 100,
              show:false,
              startValue: '00:00',
              endValue: '24:00',
              lineStyle: {color: 'white'},
              areaStyle: {color: '#ff9933'}
            },
            {
              type: 'inside',
            },
          ],
          series: [ {
            name: 'MBPS-Read',
            smooth: true,
            type: 'line',
            symbol: 'none',
            itemStyle: {
              normal: {
                lineStyle: {
                  type: 'solid',
                  width: 2,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fff'
                  },
                    {
                      offset: 0.02,
                      color: '#FFD37C'
                    },
                    {
                      offset: 0.1,
                      color: '#fe6300'
                    },
                    {
                      offset: 1,
                      color: '#fecb5c'
                    }]),//线条渐变色
                }
              }
            },

            data: write,
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'red'
                }
              }
            },
          },
            {
              name: 'MBPS-Write',
              smooth: true,
              type: 'line',
              symbol: 'none',
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: 'solid',
                    width: 2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#fff'
                    },
                      {
                        offset: 0.02,
                        color: '#AFFFA7'
                      },
                      {
                        offset: 0.1,
                        color: '#0DA700'
                      },
                      {
                        offset: 1,
                        color: '#AFFFA7'
                      }]),//线条渐变色
                  }
                }
              },

              data: read,
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'red'
                  }
                }
              },
            },
          ]
        }
        mchart.setOption(option)

      },
      linechartthree(time,delay){
        var ychart = this.$echarts.init(document.getElementById('ychart'));

        var option = {
          color: ['#d20579', ],
          title: [{
            left:'10%',
            text: '系统时延（DELAY）',
            textStyle: {
              color: 'white',
              fontSize:14
            }
          }],
          tooltip: {
            trigger: 'axis',
            position: ['35%', 0],
            show: true
          },
          axisLabel: {
            interval: 0,
            formatter:function(value)
            {
              debugger
              var ret = "";//拼接加\n返回的类目项  
              var maxLength = 10;//每项显示文字个数  
              var valLength = value.length;//X轴类目项的文字个数  
              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
              if (rowN > 1)//如果类目项的文字大于3,  
              {
                for (var i = 0; i < rowN; i++) {
                  var temp = "";//每次截取的字符串  
                  var start = i * maxLength;//开始截取的位置  
                  var end = start + maxLength;//结束截取的位置  
                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                  temp = value.substring(start, end) + "\n";
                  ret += temp; //凭借最终的字符串  
                }
                return ret;
              }
              else {
                return value;
              }
            }
          },
          xAxis: [{
            name: 'Time',
            data: time,
            lineStyle: {
              color: 'white'
            },
            "axisLine": {
              lineStyle: {
                color: 'white'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'white'
              }
            }
          },
          ],
          yAxis: {
            name: 'ms',
            lineStyle: {
              color: 'white'
            },
            max:100,
            "axisLine": {
              lineStyle: {
                color: 'white'
              }
            },
            splitLine: {
              show: false
            }
          },
          toolbox: {
            left: 'center',
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: [
            {
              start:0,
              end: 100,
              show:false,
              lineStyle: {color: 'white'},
              areaStyle: {color: '#ff9933'}
            },
            {
              type: 'inside',
              startValue: '00:00',
              endValue: '24:00',
            },

          ],
          series: [ {
            name: '时延',
            smooth: true,
            type: 'line',
            symbol: 'none',
            itemStyle: {
              normal: {
                lineStyle: {
                  type: 'solid',
                  width: 2,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fff'
                  },
                    {
                      offset: 0.02,
                      color: '#FF8BE8'
                    },
                    {
                      offset: 0.1,
                      color: '#d20579'
                    }, {
                      offset: 1,
                      color: '#fd3cd9'
                    }]),//线条渐变色
                }
              }
            },
            data:delay,
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'red'
                }
              }
            },
          },]
        }
        ychart.setOption(option)

      },
      liquidFill (num){
        var liquid = this.$echarts.init(document.getElementById('liquidFill'));
        var option = {

          series: [{
            type: 'liquidFill',
            radius: '100%',
            itemStyle:{
              normal:{
                color:'#04b8da'
              }
            },
            data: num,
            backgroundStyle:{
              color:'#45355E',
              borderColor:'#73668D'
            },
            outline: {
              show: false
            },
            label: {
              normal: {
                textStyle: {
                  color: 'white',
                  insideColor: 'yellow',
                  fontSize: 25
                }
              }
            }
          }]
        };
        liquid.setOption(option);
      },



    },
    destroyed(){
      this.websocketclose()
      var _this=this
      clearInterval(_this.timertip)
    }
  }
</script>

<style scoped>
  .font,h4,table{
    color: white;
  }

  table{
    margin-bottom: .1em;
  }
  .dropdown-menu{
    top:10% !important;
    left: 70% !important;
  }
  ul{color: black}
  .grid{
    width: 100%;height:6em;
    margin: 0 auto;
    right: 0;
  }
  #index{
    z-index: 999;
  }
  p{
    color: white;

  }
  .blockone{
    background-color: #45355E;
    width: 100%;
    height: 100%;
    border-radius: 1em;
    margin-top: 2.8em;
    padding: 0 0 .5em 0;

  }
  .blockthree{
    width: 100%;
    height: 100%;
    margin-top: 1em;

  }
  .blocktwo{
    background-color: #45355E;
    /*width: 100%;*/
    height: 100%;
    border-radius: 1em;
    padding-left: .5em;
    padding-right: .1em;
    /*margin-right: 2em;*/
    padding-bottom: 1.5em;
    margin-bottom: 1em;
  }
  .blockfour{
    background-color: #45355E;
    height: 100%;
    border-radius: 1em;
    padding-left:.5em ;
    margin-left:.2em ;
    padding-bottom: .5em;
    margin-bottom: 1em;
  }
  .blockfive{
    background-color: #45355E;
    height: 100%;
    border-radius: 1em;
    padding-left:.5em ;
    margin-left:.2em ;

  }
  .num{
    font-size: medium;line-height:2em;text-align: center;color:white;white-space: nowrap;text-overflow: ellipsis;margin-left: -15px;
  }
  .numa{
    font-size: medium;line-height:2em;text-align: center;padding-right: -25px;white-space: nowrap;text-overflow: ellipsis;color:white;margin-left: -10px;
  }
  .numtwo{
    font-size: 1.6em;line-height: .1em;padding: .5em;color: white;
  }
  .size{
    font-size: small;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width: 100%;
  }
  .titlecolor{
    color: #9584b2;
  }
  .fontone{
    color: #FFFFFF;
    font-size: small;
  }
  .diskfont{
    line-height: 2.5em;font-size: small;white-space: nowrap;text-overflow: ellipsis;color:#9584b2 !important;
  }
  .memory{
    font-size: small;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
  }
  .fonttwo{
    line-height: 1.2em;
    font-size: small;
    vertical-align: bottom;
    bottom: 0;
  }
  .blockbottom{
    border-bottom: 1px solid #55466E;
  }

  .right{
    border-right: 1px solid #55466E;
    color: #FFFFFF;
    margin-left: -5px;

  }
  #health{
    width: 100%;word-wrap: break-word;font-size: medium;
  }
  .health_detail{
    width: 100%;word-wrap: break-word;
  }
  .chartfirst{
    width: 100%;height:15.5em;margin-top: 3.5em;
  }
  .chartsecond,.chartthird{
    width: 100%;height:15.5em;
  }

  .logprint{
    width: 100%;
    height: 13em;
    border-radius: 5px;
    background-color: #45375D;
    color: white;

  }
  .print{
    overflow-y: scroll;
    margin-top: .5em ;
    height: 12em;
    border-right: 1px solid #291E3C ;
  }
  .print::-webkit-scrollbar {
    display: none;
  }
  .out{
    margin: .5em 0 1.5em 0;
    color: white;
  }
  .bg{
    background-image: url("../../static/image/grid.png") ;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 auto;
  }
  .text{
    text-align: center;
    margin-top:3.5%;
    line-height: 5px;
    border-right: 1px solid #534769;
  }
  .wanning{
    color: orangered;
  }
  .ok{
    color: green;
  }
  .error{
    color:red;
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    .charttwo{
      width: 100%;height:15em;margin-top: 7em;
    }
  }
  @media screen and (min-width:1600px ) {
    #index{
      width: 100%;
    }
    #one{
      width: 100%;

    }
    #mycharts{
      width: 120%;

    }
    .text{
      margin-top:2.5%;
    }
  }
  #mycharts div canvas{
    height:5em;
  }
</style>
