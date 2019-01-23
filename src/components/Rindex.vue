<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Rindex">
    <div class="row " v-if="$store.state.gcollect.osd_detail!=null && $store.state.gcollect.pool!=null && $store.state.gcollect.block_detail!=null">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="row container-fluid">
        <div class="col-lg-11 col-md-11 col-sm-12 col-xs-12 bgone" >
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="margin-left: -15px">
            <h4 class="h">{{$t('message.io-agent')}} 容量使用占比</h4>
            <div id="iocontent" class="content">
              <p><span class="titlecolor">{{$t('message.Total-Size')}}：</span><span v-if="$store.state.gcollect.osd_detail.osize" class="keynote">{{$store.state.gcollect.osd_detail.osize}}</span></p>
              <p><span class="titlecolor">{{$t('message.Used')}}：</span><span class="keynote">{{$store.state.gcollect.osd_detail.ouse}}</span></p>
              <p><span class="titlecolor">{{$t('message.Percent-used')}}：</span><span class="keynote">{{$store.state.gcollect.osd_detail.usepct}}%</span></p>
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
                <h4 class="h">{{$t('message.Tank')}} 存储使用占比</h4>
                <div id="tankcontent" class="content">

                  <p><span class="titlecolor">{{$t('message.Used')}}：</span><span class="keynote">{{$store.state.gcollect.pool.puse}}</span></p>
                  <p><span class="titlecolor">{{$t('message.Percent-used')}}：</span><span class="keynote">{{$store.state.gcollect.pool.usepct}}%</span></p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div id="RliquidFill" class="grid"></div>
              </div>
            </div>
          </div>
        </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="row container-fluid">
          <div class="col-lg-11 col-md-11 col-sm-12 col-sm-offset-0 col-xs-12 bgone">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="margin-left: -15px">
              <h4 class="ho"><span style="font-size: 2.2em">{{$store.state.gcollect.block_detail.block}}</span>个{{$t('message.Block')}}</h4>
              <div id="rbdcontent" class="content">
                <p><span class="titlecolor">{{$t('message.Total-Size')}}：</span><span class="keynote">{{$store.state.gcollect.block_detail.bsize}}</span></p>
                <p><span class="titlecolor">{{$t('message.Client-Connections')}}：</span><span class="keynote">{{$store.state.gcollect.block_detail.server_num}}</span></p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
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
            <div class="col-lg-5 col-md-6 col-md-6 col-xs-6">
              <p style="font-size: 1.15em">
                {{$t('message.Node')}} CPU {{$t('message.Usage')}}/TOP3
              </p>
            </div>
            <div class="col-lg-3 col-lg-offset-4 col-md-6 col-md-6 col-xs-6">
              <button  class="btn btn-default btn-sm bi" @click="cputop()" id="cpuview">{{$t('message.View-All')}}</button>
              <!--<input type="button" class="btn btn-default btn-sm bi" value="查看全部" @click="cputop()"/>-->
            </div>
          </div>

          <div class="row" style="margin-bottom: 1em">
            <table class="table-condensed table-responsive table">
              <tbody>
              <tr v-for="i in $store.state.cpu">
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
            <div class="col-lg-5 col-md-6 col-md-6 col-xs-6">
              <p style="font-size: 1.15em">
                {{$t('message.Node')}} IOPS/TOP3
              </p>
            </div>
            <div class="col-lg-3 col-lg-offset-4 col-md-6 col-md-6 col-xs-6">
              <button  class="btn btn-default btn-sm bi" @click="iopstop()" id="iopsview">{{$t('message.View-All')}}</button>
              <!--<input type="button" class="btn btn-default btn-sm bi" value="查看全部" @click="iopstop()"/>-->
            </div>
          </div>
          <div class="row">
            <table class="table-condensed table-responsive table">
              <tbody>
              <tr v-for="i in $store.state.iops">
                <td>{{i.ip}}</td>
                <td>{{i.network[0]}}/{{i.network[1]}}</td>
                <td :class="{'successa':i.status==='正常','fail':i.status==='不健康'}">{{i.status}}</td>
                <td>{{i.time}}</td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>
        <div class="row container-fluid" style="margin-bottom: 1em">
          <div class="row">
            <div class="col-lg-5 col-md-6 col-md-6 col-xs-6">
              <p style="font-size: 1.15em">
                {{$t('message.Node')}} MBPS/TOP3
              </p>
            </div>
            <div class="col-lg-3 col-lg-offset-4      col-md-6 col-md-6 col-xs-6">
      <button  class="btn btn-default btn-sm bi" @click="mbpstop()" id="mbpsview">{{$t('message.View-All')}}</button>
      <!--<input type="button" class="btn btn-default btn-sm bi" value="查看全部" @click="mbpstop()"/>-->
    </div>
  </div>

  <div class="row">
    <table class="table-condensed table-responsive table">
      <tbody>
      <tr v-for="i in $store.state.mbps">
        <td>{{i.ip}}</td>
        <td>{{i.network[0]}}/{{i.network[1]}}</td>
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
                <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10" style="font-size: 17px;height: 2em">
                  {{$t('message.Warning-Event')}}
                  <span class=" label label-danger" style="vertical-align: super" title="紧急"  data-toggle="tooltip" data-placement="top">{{$store.state.jj}}</span>
                  <span class=" label label-warning" style="vertical-align: super" title="重要" data-toggle="tooltip" data-placement="top">{{$store.state.zy}}</span>
                  <span class=" label label-info" style="vertical-align: super" title="次要" data-toggle="tooltip" data-placement="top">{{$store.state.cy}}</span>
                </div>
              </div>
              <div style="overflow-y: scroll;height: 12em">
              <table class="table-responsive table table-condensed">
                <tbody>
                  <tr v-for="p in $store.state.warn">
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
              <h4 style="margin: 1em">{{$t('message.Operational-Events')}}</h4>
              <div style="overflow-y: scroll;height: 12em">
              <table class="table-condensed table-responsive table">
                <colgroup>
                  <col width="15%"/>
                  <col width="40%"/>
                  <col width="10%"/>
                  <col width="35%"/>
                </colgroup>
                <tbody>
                <tr v-for="m in $store.state.log">
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
    <tips ref="tips" :content="transmiturl" :title="transmittitle"></tips>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import liquidfill from 'echarts-liquidfill'
  import tips from './tips'
    export default {
        name: "Rindex",
      echarts,
      liquidfill,
      components:{tips},
      data(){
          return{
            transmiturl:'',
            transmittitle:'',
            timertip:null

          }
      },
      mounted(){
        // this.pictorialBar();              /*块设备的状态*/

        var _this=this
        // _this.allstatus()
        // console.log(_this.$store.state.gpool_use,_this.$store.state.gosd_use,'what')
        _this.pictorialBar();
        _this.liquidFill(_this.$store.state.gpool_use);
        _this.pie(_this.$store.state.gosd_use);
        $("[data-toggle='tooltip']").tooltip({html:true});

        _this.timer()
        // console.log(this.$store.state.gcollect)
      },
      computed:{            /*调用Vuex中的islogin值，有缓存左右*/
        countwarn(){
          return this.$store.state.jj,this.$store.state.zy,this.$store.state.cy
        },
        gnode(){
          return this.$store.state.gosd_use,this.$store.state.gcollect,this.$store.state.gpool_use
        },
        gcim(){
          return this.$store.state.mbps,this.$store.state.log,this.$store.state.warn,this.$store.state.iops,this.$store.state.cpu
        }
      },
      // updated(){
      //   this.liquidFill(this.$store.state.gpool_use);
      //   this.pie(this.$store.state.gosd_use);
      //   this.pictorialBar();
      //
      // },
      methods:{
        liquidFill(use){
          var Rliquid = this.$echarts.init(document.getElementById('RliquidFill'));
          var option = {

            series: [{
              type: 'liquidFill',
              radius: '90%',
              itemStyle:{
                normal:{
                  color:'#04b8da'
                }
              },
              data: use,
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
          Rliquid.setOption(option);
        },
        pie(use) {
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
                data:use,
              }
            ]
          };
          pie.setOption(options);
        },
        pictorialBar() {
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

        allstatus(){
          var _this=this
          // this.$axios.get(this.allurl+'overview').then(function (res) {
          //   _this.osd_use=res.data.osd_use
          //   _this.collect=res.data.collect
          //   _this.pool_use=res.data.pool_user
          //   // console.log(res.data)
          //   _this.pictorialBar();              /*块设备的状态*/
          //   _this.liquidFill();                 /*osd使用率占比状态饼状图*/
          //   _this.pie();                       /*pool水球描绘*/
          //   // console.log(_this.collect.osd_detail.osize)
          // }).catch(function (error) {
          //   console.log(error)
          // })
          // this.$axios.get(this.allurl+'list_data').then(function (res) {
          //   _this.mbps=res.data.mbps
          //   _this.log=res.data.log
          //   _this.warn=res.data.warn
          //   _this.iops=res.data.iops
          //   _this.cpu=res.data.cpu
          //   // _this.count()                    /*警告事件的分类统计*/
          //
          // }).catch(function (error) {
          //   console.log(error)
          // })
          this.$axios.get(this.allurl+'overview').then(function (res) {
            // const data=JSON.parse(res.data)
            _this.$store.commit('gnode',{osd_use:res.data.osd_use,collect:res.data.collect,pool_use:res.data.pool_user})
            // console.log(this.$store.state.gosd_use,this.$store.state.gcollect,this.$store.state.gpool_use)
            _this.liquidFill(_this.$store.state.gpool_use);
            _this.pie(_this.$store.state.gosd_use);
            _this.pictorialBar();

            // console.log(_this.collect.osd_detail.osize)
          }).catch(function (error) {
            console.log(error)
          })
          this.$axios.get(this.allurl+'list_data').then(function (res) {
            // const data=JSON.parse(res.data)
            _this.$store.commit('gcim',{mbps:res.data.mbps,log:res.data.log,warn:res.data.warn,iops:res.data.iops,cpu:res.data.cpu})
            // _this.count()                    /*警告事件的分类统计*/
          }).catch(function (error) {
            console.log(error)
          })
        },

        cputop(){
          this.transmiturl=this.allurl+''
          this.$refs.tips.cpuall()
        },
        iopstop(){
          this.transmiturl=this.allurl+''
          this.transmittitle='节点IOPS信息'
          this.$refs.tips.iopsmbpsall()
        },
        mbpstop(){
          this.transmiturl=this.allurl+''
          this.transmittitle='节点MBPS信息'
          this.$refs.tips.iopsmbpsall()
        },
        timer(){
          var _this=this
          _this.timertip=setInterval(function () {
            _this.allstatus();
          },30000)
        }
      },
      destroyed(){
          var _this=this
        clearInterval(_this.timertip)
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

  .keynote{
    font-size: 1.2em;
    font-weight: 700;
  }
  .bb {
    background-color: #362655;
    border-radius: 5px;
    margin-top: 1em;
    height: 38em;
  }
  .titlecolor{
    color: #9584b2;
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
    margin-right:-20px ;
  }
  h4{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 11em;
  }
.bi{
  margin-bottom: 0.5em;background-color: #6B6DAE;color: white
}
</style>
