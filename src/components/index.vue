<template>
  <div id="index" class="container">
    <div class="row " id="one">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 container-fluid">
        <div class="row blockone">
          <h4 style="margin: 1em 0 0.5em 1em">网络状态</h4>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 right">
            <div id="liquidFill" class="grid"></div>
            <p style="text-align: center;line-height:1em">健康状态</p>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
            <p class="fontone">问题网卡：<span style="font-size: 1.8em;padding: .5em">3</span>个</p>
            <div style="margin-top: 3em">
              <p class="fonttwo">当前带宽：</p>
              <p class="fonttwo">网卡模式是否匹配：是</p>
            </div>
          </div>
        </div>
        <div class="row blockthree">
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 blocktwo">
            <div class="blockbottom">
            <h4 style="line-height: 3em">磁盘IO汇总</h4>
            <div style="text-align: center;padding-bottom: 1em">
              <p>I：<span class="num">48</span>bps</p>
              <p>O：<span class="num">48</span>bps</p>
            </div>
            </div>
            <div>
              <h4 style="line-height: 3em">Swap IO</h4>
              <div style="text-align: center">
                <p>I：<span class="num">48</span>bps</p>
                <p>O：<span class="num">48</span>bps</p>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12 ">
            <div class="row blockfour">
              <h4 style="line-height: 1.5em">内存</h4>
              <div style="text-align: center">
                <p>已用：<span class="numtwo">62</span>%</p>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12 ">
            <div class="row blockfive">
            <div class="blockbottom">
              <h4 style="line-height: 1.5em">CPU</h4>
              <div style="text-align: center">
                <p>已用：<span class="numtwo">38</span>%</p>
              </div>
            </div>
            <div class="row">
              <h4 style="margin: 1em">CPU使用率/TOP3</h4>
              <div class="container-fluid" style="width: 90%">
              <table class="table-condensed table-responsive table">
                <tbody style="text-align: center">
                <tr v-for="i in cpu">
                  <td>{{i.ip}}</td>
                  <td>{{i.network}}</td>
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
            <h4>健康状态</h4>
            <p>Health Status</p>
          </div>
          <div class="col-lg-10 col-md-10 col-sm-6 col-xs-6 print">
            <p id="health" >{{$store.state.health.status}}</p>
            <p id="health_detail">{{$store.state.health.health_detail}}</p>
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
        n:'',
        u:'',
        s:'',
        pool_use:[0.32],
        cpu:[{ip:'cpu1',network:'38.7%'},{ip:'cpu2',network:'38.7%'},{ip:'cpu3',network:'38.7%'}],
      }
    },

    mounted() {
      this.linechartone(this.$store.state.ti,this.$store.state.iwrite,this.$store.state.iread)
      this.lindecharttwo(this.$store.state.ti,this.$store.state.mwrite,this.$store.state.mread)
      this.linechartthree(this.$store.state.ti,this.$store.state.delaytime)
      this.initWebSocket()
      this.getall();
    },


    computed:{            /*调用Vuex中的islogin值，有缓存左右*/
      lindraw(){
        return this.$store.state.iwrite,this.$store.state.iread,this.$store.state.ti,this.$store.state.mwrite,this.$store.state.mread,this.$store.state.delaytime
      }
    },
    methods: {
      initWebSocket(){
        // var _this=this
        const wsurl="ws://192.168.1.198:8000/ws/intime_data";
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

        const data=JSON.parse(e.data)
        this.$store.commit('lindraw',{iwrite:data.message.data.iops[0],iread:data.message.data.iops[1],mwrite:data.message.data.mbps[0],mread:data.message.data.mbps[1],delaytime:data.message.data.delay,ti:data.message.data.time,health:data.message.data.health})
        this.linechartone(this.$store.state.ti,this.$store.state.iwrite,this.$store.state.iread)
        this.lindecharttwo(this.$store.state.ti,this.$store.state.mwrite,this.$store.state.mread)
        this.linechartthree(this.$store.state.ti,this.$store.state.delaytime)
        // this.health=data.message.data.health
        // console.log(this.$store.state.ti,this.$store.state.iwrite,this.$store.state.iread,this.$store.state.mwrite,this.$store.state.mread,this.$store.state.delaytime)
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
        // console.log('start')
        this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        this.$axios.get(this.allurl).then(function (res) {

          _this.linpiechart=res.data
          _this.n=_this.linpiechart.net[0].nuse
          _this.u=_this.linpiechart.net[0].use
          _this.s=_this.linpiechart.status
          // _this.piechart();
          // _this.columnar();
          _this.liquidFill();
          // _this.ws()

        }).catch(function (error) {
          console.log(error)
        })
      },
      linechartone(time,write,read){
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
                  start: 50,
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
                start: 50,
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
                start: 50,
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
      liquidFill:function (){
        var liquid = this.$echarts.init(document.getElementById('liquidFill'));
        var option = {

          series: [{
            type: 'liquidFill',
            radius: '90%',
            itemStyle:{
              normal:{
                color:'#04b8da'
              }
            },
            data: this.pool_use,
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
    }
  }
</script>

<style scoped>
  .font,h4,table{
    color: white;
  }
  .grid{
    width: 100%;height:8em;
    margin: 0 auto;

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
    margin-top: 4em;
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
    padding-bottom: 2em;
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
    font-size: 1.9em;line-height: 2em;padding: .5em;
  }
  .numtwo{
    font-size: 2.5em;line-height: 1.5em;padding: .5em
  }
  .fontone{
    font-size: 1.1em;
  }
  .fonttwo{
    font-size: 1.1em;
    vertical-align: bottom;
    bottom: 0;
  }
  .blockbottom{
    border-bottom: 1px solid #55466E;
  }

  .right{
    border-right: 1px solid #55466E;
  }
  #health{
    width: 100%;word-wrap: break-word;font-size:1.6em
  }
  #health_detail{
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
