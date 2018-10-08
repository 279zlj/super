<template>
  <div id="index" class="container-fluid">
    <div class="row ">
    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <div id=""></div>
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
</style>
