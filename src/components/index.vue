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
            <p id="health" >{{health}}</p>
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
        sta:[18, 23, 29, 40],
        net:[
          {use:'143',nuse:'324'}
        ],
        health:'dfhkudshkdhskjdshgkjhfkjghkjdfhgkjdfhgjkfnv,cnkjbvdfhkgihrkhasdsadasdasdsakjstjehjsbfkjdsbfjdsfhdsjkhfkjdshfkdsnxcnjvbmcbvdjhfkjsdfhkjdshfkjdsfhdjsfhskj',
        line:{},
        pie:{}
      }
    },
    mounted() {
      this.linechartone();                 /*描绘iops折线图，接受Json数据*/
      this.lindecharttwo();                 /*描绘mbps折线图，接受Json数据*/
      this.linechartthree();                /*描绘时延折线图，接受Json数据*/
      this.columnar();                      /*状态统计条形图，接受Json数据*/
      this.piechart();                        /*网络状态饼状图，接受Json数据*/
      this.getall();
    },
    methods: {
      linechartone(){
        var mychart = this.$echarts.init(document.getElementById('mychart'));
          this.$axios.get('http://localhost:3000/api/data').then(function (data) {
            var option = {
              color: ['#1a58cc'],

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
                data: data.data.map(function (item) {
                  return item[0];
                }),
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
                  startValue: '00:00',
                  endValue: '24:00',
                  lineStyle: {color: 'white'},
                  areaStyle: {color: '#ff9933'}
                },
                {
                  type: 'inside',
                },
              ],
              series: [{
                name: 'IOPS',
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
                data: data.data.map(function (item) {
                  return item[1];
                }),
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
          })
          .catch(function (error) {
                      console.log(error)
                    })
      },
      lindecharttwo(){
        var mchart = this.$echarts.init(document.getElementById('mchart'));
        this.$axios.get('http://localhost:3000/api/data').then(function (data) {
          var option = {
            color: ['#fe6300', ],
            title: [{
              left:'10%',
              text: '系统MBPS',
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
              data: data.data.map(function (item) {
                return item[0];
              }),
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
                        name: 'MBPS',
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

                        data: data.data.map(function (item) {
                          return item[1];
                        }),
                        labelLine: {
                          normal: {
                            lineStyle: {
                              color: 'red'
                            }
                          }
                        },
                      },]
          }
          mchart.setOption(option)
        })
          .catch(function (error) {
            console.log(error)
          })
      },
      linechartthree(){
        var ychart = this.$echarts.init(document.getElementById('ychart'));
        this.$axios.get('http://localhost:3000/api/data').then(function (data) {
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
            xAxis: [{
              name: '时间',
              data: data.data.map(function (item) {
                return item[0];
              }),
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
              data: data.data.map(function (item) {
                return item[2];
              }),
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
        })
          .catch(function (error) {
            console.log(error)
          })
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
            formatter: "{a} <br/>{b} : {c} %"
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
            data: ['存储空间', 'cpu利用率', '内存容量', '可用资源'],
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
              data: this.sta,
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
                {value: this.net[0].nuse, name: '可用'},
                {value: this.net[0].use, name: '已用'},
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
      getall(){                         /*获取健康信息*/
        this.$axios.get('http://localhost:5000').then(function (res) {
          this.health=res.health
          this.line=res.status
          this.pie=res.net
        }).catch(function (error) {
          console.log(error)
        })
      },

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
    width: 100%;word-wrap: break-word;font-size:1.2em
  }
  .chartfirst{
    width: 100%;height:13em;margin-top: 5em;
  }
  .chartsecond{
    width: 100%;height:13em;margin-top: 1em;
  }
  .chartthird{
    width: 100%;height:13em;margin-top: 1em;
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
