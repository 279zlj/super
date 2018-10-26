<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Rindex">
    <div class="row ">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="row container-fluid">
        <div class="col-lg-11 col-md-11 col-sm-12 col-xs-12 bgone" >
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="margin-left: -15px">
            <h4 class="h">io agent 容量使用占比</h4>
            <div id="iocontent" class="content">
              <p>总大小：<span v-if="collect.osd_detail.osize">{{collect.osd_detail.osize}}</span></p>
              <p>已使用：{{collect.osd_detail.ouse}}</p>
              <p>已用百分比：{{collect.osd_detail.usepct}}%</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 container-fluid">
            <div id="piechart" class="grid"></div>
          </div>
        </div>
      </div>
      </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="row container-fluid">
            <div class="col-lg-11 col-md-11 col-sm-12 col-sm-offset-0 col-xs-12 bgone">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="margin-left: -15px">
                <h4 class="h">tank 存储使用占比</h4>
                <div id="tankcontent" class="content">

                  <p>已使用：{{collect.pool.puse}}</p>
                  <p>已用百分比：{{collect.pool.usepct}}%</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div id="liquidFill" class="grid"></div>
              </div>
            </div>
          </div>
        </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="row container-fluid">
          <div class="col-lg-11 col-md-11 col-sm-12 col-sm-offset-0 col-xs-12 bgone">
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5" style="margin-left: -15px">
              <h4 class="ho"><span style="font-size: 2.2em">{{collect.block_detail.block}}</span>个块设备</h4>
              <div id="rbdcontent" class="content">
                <p>总大小：{{collect.block_detail.bsize}}</p>
                <p>客户端连接数：{{collect.block_detail.server_num}}</p>
              </div>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
              <div id="pictorialBar" class="grid"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  bb">
        <div class="row two container-fluid">
        <div class="row container-fluid" >
          <div class="row">
            <div class="col-lg-3 col-md-3 col-md-6 col-xs-6">
              <h4>
                节点CPU使用率/TOP3
              </h4>
            </div>
            <div class="col-lg-3 col-lg-offset-6 col-md-3 col-md-6 col-xs-6">
              <input type="button" class="btn btn-default btn-sm bi" value="查看全部" @click="cputop()"/>
            </div>
          </div>

          <div class="row" style="margin-bottom: 1em">
            <table class="table-condensed table-responsive table">
              <tbody>
              <tr v-for="i in cpu">
                <td>{{i.ip}}</td>
                <td>{{i.network}}</td>
                <td :class="{'successa':i.status==='正常','fail':i.status==='不健康'}">{{i.status}}</td>
                <td>{{i.time}}</td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>
        <div class="row container-fluid" style="margin-bottom: 2em">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-md-6 col-xs-6">
              <h4>
                节点IOPS/TOP3
              </h4>
            </div>
            <div class="col-lg-3 col-lg-offset-6 col-md-3 col-md-6 col-xs-6">
              <input type="button" class="btn btn-default btn-sm bi" value="查看全部" @click="iopstop()"/>
            </div>
          </div>
          <div class="row">
            <table class="table-condensed table-responsive table">
              <tbody>
              <tr v-for="i in iops">
                <td>{{i.ip}}</td>
                <td>{{i.network}}</td>
                <td :class="{'successa':i.status==='正常','fail':i.status==='不健康'}">{{i.status}}</td>
                <td>{{i.time}}</td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>
        <div class="row container-fluid" style="margin-bottom: 1em">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-md-6 col-xs-6">
              <h4>
                节点MBPS/TOP3
              </h4>
            </div>
            <div class="col-lg-3 col-lg-offset-6 col-md-3 col-md-6 col-xs-6">
              <input type="button" class="btn btn-default btn-sm bi" value="查看全部" @click="mbpstop()"/>
            </div>
          </div>

          <div class="row">
            <table class="table-condensed table-responsive table">
              <tbody>
              <tr v-for="i in mbps">
                <td>{{i.ip}}</td>
                <td>{{i.network}}</td>
                <td :class="{'successa':i.status==='正常','fail':i.status==='不健康'}">{{i.status}}</td>
                <td>{{i.time}}</td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>
        </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="row container-fluid">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bbone">
            <div class="warn">
              <div class="row container-fluid">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6" style="font-size: 18px">
                  警告事件
                </div>

                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                  <p><span>{{jj}}</span><img src="../../static/image/jj.png" class="img-responsive" title="紧急"/></p>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <span>{{zy}}<img src="../../static/image/zy.png" class="img-responsive" title="重要"/></span>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <span>{{cy}}<img src="../../static/image/cy.png" class="img-responsive" title="次要"></span>
                </div>
              </div>
              <div style="overflow-y: scroll;height: 12em">
              <table class="table-responsive table table-condensed">
                <tbody>
                  <tr v-for="p in warn">
                    <td>{{p.ip}}</td>
                    <td>{{p.network}}</td>
                    <td :class="{'red':p.status==='紧急','or':p.status==='重要','yellow':p.status==='次要'}">{{p.status}}</td>
                    <td>{{p.time}}</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row container-fluid">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bbone">
            <div class="warn">
              <h4>操作事件</h4>
              <div style="overflow-y: scroll;height: 12em">
              <table class="table-condensed table-responsive table">
                <tbody>
                <tr v-for="m in log">
                  <td>{{m.ip}}</td>
                  <td>{{m.network}}</td>
                  <td :class="{'successa':m.status==='成功','fail':m.status==='失败'}">{{m.status}}</td>
                  <td>{{m.time}}</td>
                </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
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
      data(){
          return{
            cpu:[],
            iops:[],
            mbps:[],
            warn:[],
            log:[],
            osd_use:[],
            collect: {},
            pool_use:[],
            jj:0,
            zy:0,
            cy:0,

          }
      },
      mounted(){
        this.allstatus()



      },
      updated(){
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
              radius: '90%',
              itemStyle:{
                normal:{
                  color:'#04b8da'
                }
              },
              data: this.pool_use,
              label: {
                normal: {
                  textStyle: {
                    color: 'red',
                    insideColor: 'yellow',
                    fontSize: 25
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
                radius : '85%',
                roseType : 'radius',
                itemStyle:{
                  normal:{
                    color:function (params) {
                      var colorlist=[
                        '#2a9ae1','#ffc523','#ff5b23','#44AB47','#FF40F5','#FF2424'
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
                data:this.osd_use,
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
              radius : '10%',
              type: 'pictorialBar',
              symbolRepeat: true,
              color:'#ffc523',
              symbolSize: ['550%', '200%'],
              data: [{
                value: 3,
                symbol: pathSymbols.reindeer
              }]
            }

            ]

          };
          pictorial.setOption(optionss);
        },
        count(){
          let i;
          for(i in this.warn){
            console.log(this.warn)
              if(this.warn[i].status=='紧急'){
                this.jj+=1;
              }
              if (this.warn[i].status=='重要'){
                this.zy+=1;
              }
              if (this.warn[i].status=='次要'){
                this.cy+=1;
              }
          }
          return this.jj,this.zy,this.cy
          console.log(this.jj,this.zy,this.cy)
        },

        allstatus(){
          var _this=this
          this.$axios.get(this.allurl+'overview',{headers:{'Access-Control-Allow-Origin':'*'}}).then(function (res) {
            _this.osd_use=res.data.osd_use
            _this.collect=res.data.collect
            _this.pool_use=res.data.pool_user
            // console.log(_this.collect.osd_detail.osize)
          }).catch(function (error) {
            console.log(error)
          })
          this.$axios.get(this.allurl+'list_data',{headers:{'Access-Control-Allow-Origin':'*'}}).then(function (res) {
            _this.mbps=res.data.mbps
            _this.log=res.data.log
            _this.warn=res.data.warn
            _this.iops=res.data.iops
            _this.cpu=res.data.cpu

          }).catch(function (error) {
            console.log(error)
          })
          _this.count()                    /*警告事件的分类统计*/
          _this.liquidFill();                 /*osd使用率占比状态饼状图*/
          _this.pie();                       /*pool水球描绘*/
          _this.pictorialBar();              /*块设备的状态*/
        }
      }
    }
</script>

<style scoped>
  #Rindex{
    color: white;
  }
  .two{
    margin: 2em 0 3em 0;

  }
  table{
    margin-bottom: 1em;
  }
  .bg{
    border-radius: 5px;
    background-color: #362655;
    width: 100%;
    margin-bottom: 1em;
  }
  .bb{
    background-color: #362655;
    border-radius: 5px;
    margin-top: 1em;
    height: 38em;
  }
  .red{
    color:#AD1501 ;
  }
  .or{
    color: #EC4701;
  }
  .yellow{
    color: #FF9500;
  }
  .successa{
    color: #28CF21;
  }
  .fail{
    color: #AD1501;
  }
  .bbone{
    background-color: #362655;
    border-radius: 5px;
    margin-top: 1em;
    height: 18.5em;
  }

  .bgone{
    margin-top: 5em;
    background-color: #362655;
    width: 100%;
    margin-bottom: 1em;

    border-radius: 5px;
  }
  .grid{
    width: 100%;height:10em;
    margin: 1em 0 1em 2em;
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    .bgone{
      margin-top: 2em;
      margin-bottom: 0em;
    }
  }
  @media screen and (max-width: 425px) {
    .bgone{
      margin-top: 1.5em;
      margin-bottom: 0em;
    }
  }
  .h{
    border-bottom:1px solid #534769;
    color: white;
    text-align: center;
    line-height: 2.5em;
    font-size: 1.1em;
    width: 10em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ho{
    border-bottom:1px solid #534769;
    color: white;
    width: 10em;
    font-size: 1.1em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 2.5em;
  }
  .warn{
    margin-top: 2em;
  }
  .content p{
    font-size: 1em;
  }
  h4{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 10em;
  }
.bi{
  margin-top: .3em;background-color: #6B6DAE;color: white
}
</style>
