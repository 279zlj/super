<template>
  <div id="index" class="container bg">
    <div class="row ">
    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <div id="mycharts" class="chart"></div>
    </div>
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 font">
      <div id="mychart" class="chart" ></div>
    </div>
    </div>
    <div class="row">
      <div class="col-1g-12 out">
        <h4>日志记录：</h4>
        <div id="log" class="logprint">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'echarts/lib/echarts.js'
  import 'echarts/lib/chart/map';
  import 'echarts/map/js/china.js'

    export default {
        name: "index",

      mounted(){
        var mychart = this.$echarts.init(document.getElementById('mychart'));
        this.$axios.get('http://localhost:3000/api/data').then(function (data) {
          var option = {
            title: [{
              text: '系统ipos、mbps、时延监控',
              textStyle:{
                color:'white'
              }
            }],
            tooltip: {
              trigger: 'axis'
            },
            xAxis:[ {
              data: data.data.map(function (item) {
                return item[0];
              }),
              lineStyle:{
                color:'white'
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
              lineStyle:{
                color:'white'
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
                start:90,
                end:100,
              startValue: '00:00',

                  lineStyle:{color:'white'},
                  areaStyle:{color:'#ff9933'}

            },
              {
              type: 'inside',


            },

            ],
            visualMap: {
              top: 10,
              right: 25,
              outOfRange: {
                color: '#ff9933'
              }
            },
            series: [{
              name: 'ipos',
              type: 'line',
              data:data.data.map(function (item) {
                return item[1];
              }),
              labelLine: {
                normal: {
                  lineStyle: {
                    color: '#fff',
                    width:10
                  }
                }
              },
              markLine: {
                silent: true,
                data: [{
                  yAxis: 50
                }, {
                  yAxis: 100
                }, {
                  yAxis: 150
                }, {
                  yAxis: 200
                }, {
                  yAxis: 300
                }]
              }
            },
              {
                name: 'mbps',
                type: 'line',
                data:data.data.map(function (item) {
                  return item[2];
                }),
                labelLine: {
                  normal: {
                    lineStyle: {
                      color: 'red'
                    }
                  }
                },

              },
              {
                name: '时延',
                type: 'line',
                data:data.data.map(function (item) {
                  return item[3];
                }),
                labelLine: {
                  normal: {
                    lineStyle: {
                      color: 'blue'
                    }
                  }
                },

              }
            ]

          };
          mychart.setOption(option);
        })
          .catch(function (error) {
            console.log(error)
          });
        var mycharts = this.$echarts.init(document.getElementById('mycharts'));
        var options = {
          title: {
            text: '状态统计',
            subtext: 'x轴单位为百分比',
            textStyle:{
              color:'white'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },

          grid: {
            left: '3%',
            right: '4%',

            containLabel: true
          },
          xAxis: [{
            type: 'value',
            boundaryGap: [0, 0.01],
            lineStyle:{
              color:'white'
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
            data: ['存储空间','cpu利用率','内存容量','可用资源'],
            lineStyle:{
              color:'white'
            },
            "axisLine": {
              lineStyle: {
                color: 'white'
              }
            },
          },
          series: [
            {
              name: '百分比',
              type: 'bar',
              data: [18, 23, 29, 50]
            }
          ]
        };
        mycharts.setOption(options);
      },
      methods:{

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
  .chart{
    width: 100%;height: 25em;margin-top: 5em
  }
  .logprint{
    width: 100%;
    height: 8em;

    border: black;
    background-color:#36294D ;
    border-radius: 5px;
    overflow-y:scroll;
    opacity: .8;
    color: white;
  }
  .logprint::-webkit-scrollbar {
    display: none;
  }
  .out{
    margin: 3em 0 2em 0;
    color: white;
  }
  .bg{
    background-image: url("../../static/image/grid.png") ;
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>
