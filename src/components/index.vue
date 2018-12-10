<template>
  <div id="index" class="container">
    <div class="row " id="one">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 container-fluid">
        <div class="row blockone">
          <p style="margin: 1em 0 0.5em 1em;font-size: 1.1em">网络状态</p>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 right">
            <!--<div id="liquidFill" class="grid"></div>-->
            <!--<p style="margin-top: 1em">网速：<span class="numtwo">{{pool_use}}</span>mb/s</p>-->
            <!--<p style="text-align: center;line-height:1em">健康状态</p>-->
            <div>
              <p>网段：</p>
              <ol style="height: 2.5em;overflow-y: scroll">
                <li v-for="i in $store.state.net.lan">{{i}}</li>
              </ol>
            </div>
            <p>网卡：</p>
            <div style="overflow-y: scroll;height: 5em;overflow-x: hidden">
              <div class="col-lg-4" >网卡</div>
              <div class="col-lg-4" >模式</div>
              <div class="col-lg-4" >主机</div>
              <div class="row" v-for="p in $store.state.net.nics">
                <div class="col-lg-4" >
                  {{p.name}}
                </div>
                <div class="col-lg-4" >
                  {{p.mode}}
                </div>
                <div class="col-lg-4" >
                  {{p.hostname}}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
            <div class="fontone">问题网卡：<a style="font-size: 2em;padding: .5em;color: white;cursor: pointer"  class="dropdown-toggle" data-toggle="dropdown">{{$store.state.net.error}}</a>个
              <ul class="dropdown-menu">
                <li><router-link :to="{name:''}">error:eno1</router-link></li>
              </ul>
            </div>
            <div >
              <p class="fonttwo">连接数：{{$store.state.net.net_socket_link_nall}}</p>
              <p class="fonttwo">收总丢包：{{$store.state.net.net_drop_in_all}}</p>
              <p class="fonttwo">发总丢包：{{$store.state.net.net_drop_out_all}}</p>
              <p class="fonttwo">当前带宽：{{$store.state.net.bandwidth}}Mbps/s</p>
              <p class="fonttwo">网卡最佳匹配：{{$store.state.mode}}</p>
            </div>
          </div>
        </div>
        <div class="row blockthree">
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 blocktwo">
            <div class="blockbottom">
            <p style="line-height: 2.5em;font-size: 1.1em;margin-top: .8em">磁盘IO汇总</p>
            <div class="row" >
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="line-height: 3em;color: white">Input：</div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 num">{{$store.state.diskips}}</div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="line-height: 3em;color: white">总读量：</div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 numa">{{$store.state.idisk.read_all}}</div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="line-height: 3em;color: white">总写量：</div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 numa">{{$store.state.idisk.write_all}}</div>
            </div>
            <div class="row" >
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="line-height: 3em;color: white">读耗时：</div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 numa">{{$store.state.idisk.write_all}}</div>
            </div>
              <div class="row" >
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="line-height: 3em;color: white">写耗时：</div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 numa">{{$store.state.idisk.write_all}}</div>
              </div>
            <div class="row" >
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="line-height:3em;color: white">Output：</div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 num">{{$store.state.diskops}}</div>
            </div>
            </div>
            <div>
              <h5 style="line-height: 2.5em;font-size: 1.1em;color: #FFFFFF;margin-top: .8em">Swap IO</h5>
              <div class="row" style="text-align: center">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="line-height: 3em"><p class="white">Input：</p></div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 num">{{$store.state.swap_io.ips}}</div>
              </div>
              <div class="row" style="text-align: center">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="line-height: 3em"><p class="white">Output：</p></div>
                  <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 num">{{$store.state.swap_io.ops}}</div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12 ">
            <div class="row blockfour">
              <p style="line-height: 2.5em;font-size: 1.1em">内存<span style="margin-left: 1em;">总内存：{{$store.state.memory.total}}</span></p>
              <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                  <div><p class="white">共享内存：</p><p>{{$store.state.memory.share}}</p></div>
                  <div><p class="white">cache：</p><p>{{$store.state.memory.cache}}</p></div>

                </div>
                <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 ">
                <div id="liquidFill" class="grid"></div>
                <p style="text-align: center;">使用状态</p>
                </div>
                <!--<p>已用：<span class="numtwo">{{memory}}</span>%</p>-->
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" ><p class="white">交换内存：</p><p>{{$store.state.memory.totalSwap}}</p></div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" ><p class="white">已用交换：</p><p>{{$store.state.memory.usedSwap}}</p></div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12 ">
            <div class="row blockfive">
            <div class="blockbottom">
              <p style="line-height: 2.5em;font-size: 1.1em">CPU</p>
              <div style="text-align: center">
                <p>已用：<span class="numtwo">{{$store.state.icpu.total}}</span>%</p>
              </div>
            </div>
            <div class="row">
              <p style="margin-left: 1em;margin-top: .5em;font-size: 1.1em">CPU使用率/TOP3</p>
              <div class="container-fluid" style="width: 90%">
              <table class="table-condensed table-responsive table">
                <tbody style="text-align: center">
                  <tr><td>HOST</td>
                  <td>%CPU</td></tr>
                <tr v-for="i in $store.state.cpulist">
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
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 font bg" >
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
    </div>
    <div class="row">
      <div class="col-1g-12 out">

        <div id="log" class="logprint">
          <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 text">
            <h5>健康状态</h5>
            <p>Health Status</p>
          </div>
          <div class="col-lg-10 col-md-10 col-sm-6 col-xs-6 print">
            <p id="health" :class="{'wanning':$store.state.health.status=='HEALTH_WARN','ok':$store.state.health.status=='HEALTH_OK','error':$store.state.health.status=='HEALTH_ERROR'}">{{$store.state.health.status}}</p>
            <p class="health_detail" v-for="i in $store.state.health.health_detail">{{i}}</p>
            <!--<p class="health_detail" >{{$store.state.health.health_detail.length}}</p>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import 'echarts/lib/echarts.js';
  import 'echarts/lib/chart/map';
  import 'echarts/map/js/china.js'
  import liquidfill from 'echarts-liquidfill'
  export default {
    name: "index",
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
        timertip:null
      }
    },

    mounted() {
      this.linechartone(this.$store.state.ti,this.$store.state.iwrite,this.$store.state.iread)
      this.lindecharttwo(this.$store.state.ti,this.$store.state.mwrite,this.$store.state.mread)
      this.linechartthree(this.$store.state.ti,this.$store.state.delaytime)
      this.initWebSocket()
      this.getall()
      this.timer()
    },


    computed:{            /*调用Vuex中的islogin值，有缓存左右*/
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
        const wsurl="ws://192.168.9.43:8000/ws/intime_data";
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
        this.$store.commit('lindraw',{iwrite:data.message.data.iops[0],iread:data.message.data.iops[1],mwrite:data.message.data.mbps[0],mread:data.message.data.mbps[1],delaytime:data.message.data.delay,ti:data.message.data.time,health:data.message.data.health})
        // console.log(this.$store.state.delaytime)
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
          _this.$store.commit('indexmsg',{net:res.data.net,memory:res.data.memory,icpu:res.data.cpu,swap_io:res.data.swap_io,mode:_this.mode,pool_use:res.data.net.speed,cpulist:res.data.cpu.detail,diskips:_this.diskips,diskops:_this.diskops,idisk:res.data.disk_io})
          _this.liquidFill(_this.$store.state.memory.usage);
          console.log(res.data)
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
            size = limit.toFixed(2) + "B";
          }else if(limit < 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB
            size = (limit / 1024).toFixed(2) + "KB";
          }else if(limit < 0.1 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB
            size = (limit / (1024 * 1024)).toFixed(2) + "MB";
          }else{ //其他转化成GB
            size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
          }

          var sizestr = size + "";
          var len = sizestr.indexOf("\.");
          var dec = sizestr.substr(len + 1, 2);
          if(dec == "00"){//当小数点后为00时 去掉小数部分
            return sizestr.substring(0,len) + sizestr.substr(len + 3,2);
          }
          return sizestr;

      },
      timer(){
        var _this=this
        _this.timertip=setInterval(function () {
          _this.getall()

        },3000)
      },
      linechartone(time,write,read){
        // console.log(time)
        var mychart = this.$echarts.init(document.getElementById('mychart'));

            var option = {
              color: ['#1a58cc','#DEED00'],
              legend:{
                data:['IOPS-Write','IOPS-Read'],
                x:'right',
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
                name: '时间',
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
                max: 100,
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
              x:'right',
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
              name: '时间',
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
              name: 'b/s',
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
              text: '系统时延',
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
              name: '时间',
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
  .white{
    color: #FFFFFF;
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
    /*margin-right: 2em;*/
    padding-bottom: 1.5em;
  }
  .blockfour{
    background-color: #45355E;
    height: 100%;
    border-radius: 1em;
    padding-left:1em ;
    margin-left:.2em ;
    padding-bottom: .5em;
    margin-bottom: 1em;
  }
  .blockfive{
    background-color: #45355E;
    height: 100%;
    border-radius: 1em;
    padding-left:1em ;
    margin-left:.2em ;

  }
  .num{
    font-size: 1.6em;line-height:2em;text-align: center;color:white;
  }
  .numa{
    font-size: 1.6em;line-height:2em;text-align: center;margin-left: -25px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width: 60%;color:white
  }
  .numtwo{
    font-size: 2.2em;line-height: 1em;padding: .5em
  }
  .fontone{
    color: #FFFFFF;
    font-size: 1em;
  }
  .fonttwo{
    line-height: 1.2em;
    vertical-align: bottom;
    bottom: 0;
  }
  .blockbottom{
    border-bottom: 1px solid #55466E;
  }

  .right{
    border-right: 1px solid #55466E;
    color: #FFFFFF;
  }
  #health{
    width: 100%;word-wrap: break-word;font-size:1.6em
  }
  .health_detail{
    width: 100%;word-wrap: break-word;font-size:1.2em
  }
  .chartfirst{
    width: 100%;height:15.5em;margin-top: 5em;
  }
  .chartsecond,.chartthird{
    width: 100%;height:15.5em;
  }

  .logprint{
    width: 100%;
    height: 10em;
    border-radius: 5px;
    background-color: #45375D;
    color: white;
  }
  .print{
    overflow-y: scroll;
    margin-top: 1em ;
    height: 8em;
  }
  .print::-webkit-scrollbar {
    display: none;
  }
  .out{
    margin: 1em 0 1.5em 0;
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
