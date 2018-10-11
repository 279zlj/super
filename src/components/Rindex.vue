<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Rindex">
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div class="row container-fluid">
        <div class="col-lg-11 col-md-11 col-sm-12 col-xs-12 bg" >
          <div id="piechart" class="grid"></div>
          <h4 class="h">io agent 容量使用占比</h4>
          <div id="iocontent" class="content">fdjshfkjsdf<br>dsjgfsdhjf</div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div class="row container-fluid">
        <div class="col-lg-11 col-md-11 col-sm-12 col-sm-offset-0 col-xs-12 bg">
          <div id="liquidFill" class="grid"></div>
          <h4 class="h">tank 存储使用占比</h4>
          <div id="tankcontent" class="content">sdfdsf</div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div class="row container-fluid">
        <div class="col-lg-11 col-md-11 col-sm-12 col-sm-offset-0 col-xs-12 bg">
          <div id="pictorialBar" class="grid">
            <!--<p id="small"></p>-->
          </div>

          <h4 class="ho"><span style="font-size: 2.2em">3</span>个块设备</h4>
          <div id="rbdcontent" class="content">sdfdsfsf</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import liquidfill from 'echarts-liquidfill'
    export default {
        name: "Rindex",
      echarts,
      liquidfill,
      mounted(){
        this.liquidFill();
        this.pie();
        this.pictorialBar();
      },
      methods:{
        liquidFill:function (){
          var liquid = this.$echarts.init(document.getElementById('liquidFill'));
          var option = {

            series: [{
              type: 'liquidFill',
              radius: '80%',
              itemStyle:{
                normal:{
                  color:'#04b8da'
                }
              },
              data: [0.5],
              label: {
                normal: {
                  textStyle: {
                    color: 'red',
                    insideColor: 'yellow',
                    fontSize: 30
                  }
                }
              }
            }]
          };
          liquid.setOption(option);
        },
        pie:function () {
          var pie = this.$echarts.init(document.getElementById('piechart'));
          var options = {
            tooltip : {
              trigger: 'item',
              formatter: "{b}: {d}%"
            },


            calculable : true,
            series : [

              {
                name:'节点状况',
                type:'pie',
                radius : '80%',
                roseType : 'radius',
                itemStyle:{
                  normal:{
                    color:function (params) {
                      var colorlist=[
                        '#2a9ae1','#ffc523','#ff5b23'
                      ];
                      return colorlist[params.dataIndex]
                    }
                  }
                },
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: false
                  }
                },
                lableLine: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: false
                  }
                },
                data:[
                  {value:20, name:'node1'},
                  {value:10, name:'node2'},
                  {value:15, name:'node3'}
                ]
              }
            ]
          };
          pie.setOption(options);
        },
        pictorialBar:function () {
          var pictorial = this.$echarts.init(document.getElementById('pictorialBar'));
          var pathSymbols = {
            reindeer: 'path://M6.000,50.000 L6.000,6.000 L274.000,6.000 L274.000,50.000 L6.000,50.000 ZM40.000,18.000 L20.000,18.000 L20.000,38.000 L40.000,38.000 L40.000,18.000 Z'
          }
          var optionss = {
            yAxis: {
              data: [],
              axisLine: {show: false},
              axisTick: {show: false},

            },
            xAxis: {
              splitLine: {show: false},
              axisLabel: {show: false},
              axisTick: {show: false},
              axisLine: {show: false}
            },
            series: [{
              name: 'rbd',
              radius : '80%',
              type: 'pictorialBar',
              symbolRepeat: true,
              color:'#ffc523',
              symbolSize: ['400%', '100%'],
              data: [{
                value: 3,
                symbol: pathSymbols.reindeer
              }]
            },{
              name: 'rbdtwo',

              barGap:'30%',
              color:'#ffc523',
              type: 'pictorialBar',
              symbolRepeat: true,
              symbolSize: ['400%', '100%'],

              data: [{
                value: 3,
                symbol: pathSymbols.reindeer
              }]
            },

            ]

          };
          pictorial.setOption(optionss);
        }

      }
    }
</script>

<style scoped>
  #Rindex{
    color: white;
  }
  .bg{
    margin-top: 5em;
    background-color: #2F224A;
    height: 43em;
    width: 100%;
    margin-bottom: 2em;
  }
  .grid{
    width: 100%;height:38%;
    margin-top: 1em;
  }
  .h{
    border-bottom:1px solid #534769;
    color: white;
    text-align: center;
    line-height: 2em;
  }
  .ho{
    border-bottom:1px solid #534769;
    color: white;
    text-align: center;
    line-height: 1.6em;
  }
  .content{
    margin:1em 1.8em;
  }
</style>
