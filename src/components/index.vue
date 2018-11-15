<template>
  <div id="index" class="container">
    <div class="row " id="one">
      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <div class="col-lg-12 col-md-12 col-sm-6 col-xs-12">
          <div id="mycharts" class="chartone"></div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-6 col-xs-12">
          <div id="mychartss" class="charttwo"></div>
        </div>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 font bg" >
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
  export default {
    name: "index",
    echarts,
    data(){
      return{
        linpiechart: [],
        n:'',
        u:'',
        s:'',


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
          _this.piechart();
          _this.columnar();
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
      columnar: function () {

        var mycharts = this.$echarts.init(document.getElementById('mycharts'));
        var options = {
          title: {
            text: '状态统计',
            textStyle: {
              color: 'white'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: "{a} <br/>{b} : {c} "
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: [{
            type: 'value',
            boundaryGap: [0, 0.01],
            lineStyle: {
              color: 'white'
            },
            "axisLine": {
              lineStyle: {
                color: 'white'
              }
            },
          },
          ],
          yAxis: {
            type: 'category',
            data: ['存储空间', 'CPU利用率', '内存容量', '可用资源'],
            lineStyle: {
              color: 'white'
            },
            "axisLine": {
              lineStyle: {
                color: 'white'
              }
            },
          },
          series: [
            {
              name: '状态',
              type: 'bar',
              barWidth: 20,
              data: this.s,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#0394bb'
                  },
                    {
                      offset: 1,
                      color: '#aafaff'
                    }]),//线条渐变色
                }
              },
            }
          ]
        };
        mycharts.setOption(options);
      },
      piechart: function () {
        var mychartss = this.$echarts.init(document.getElementById('mychartss'));
        var optionss = {
          title: {
            text: '网络状态',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} :{d}%"
          },
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [1, 0]
            }
          },
          series: [
            {
              name: '网络状态',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                {value: this.n, name: '可用'},
                {value: this.u, name: '已用'},
              ],
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: '#fff'
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#244ac4',
                  shadowBlur: 80,
                  shadowColor: '#584371',
                  textStyle: {
                    color: '#fff'
                  },
                }
              },
            }
          ]
        };
        mychartss.setOption(optionss);
      },


    },
    destroyed(){
      this.websocketclose()
    }
  }
</script>

<style scoped>
  .font{
    color: white;
  }
  #index{
    z-index: 999;
  }
  p{
    color: white;
  }
  #health{
    width: 100%;word-wrap: break-word;font-size:1.6em
  }
  #health_detail{
    width: 100%;word-wrap: break-word;font-size:1.2em
  }
  .chartfirst{
    width: 100%;height:14em;margin-top: 5em;
  }
  .chartsecond,.chartthird{
    width: 100%;height:14em;
  }
  .charttwo{
    width: 100%;height:15em;margin-top: 5em;
  }
  .chartone{
    width: 100%;height: 16em;margin-top: 7em
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
    margin: 2em 0 2em 0;
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
