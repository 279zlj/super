<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rosd">

  <div class="row" v-if="$store.state.osdlist!=null">

  <div class="col-lg-4 col-md-4 col-sm-5 col-xs-12 container allo" id="content">
    <button  class="btn btn-default b" @click="open()" id="open">{{$t('message.Unfold')}}</button>
    <button  class="btn btn-default b" @click="clos()" id="closed">{{$t('message.Minimalism')}}</button>
    <!--<input type="button" class="btn btn-default b" value="展开" id="open" @click="open()"/>-->
    <!--<input type="button" class="btn btn-default b" value="极简" id="closed" @click="clos()"/>-->

    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 container one" id="sample">
      <div class="row san" v-for="(i,index) in $store.state.osdlist"  @click="change(index,i.osdid)" >
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 container"></div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

          <div class="row aa" :class="{'chan':ind===index}" >

            <div class="row up " :class="{'chan':ind===index}" :id="i.osdid">

              <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 " :class="{'chan':ind===index}">
                <div class="row font " :class="{'chan':ind===index}">
                  <p style="font-size: 1.2em;line-height: 1em">{{i.osdid}}</p>
                  <p style="line-height: 1em;font-size: 1em;">{{i.osdip}}</p>
                  <p style="font-size:1em">{{$t('message.Status')}}：<span :class="{'o':i.status==='ok','wa':i.status==='warning','err':i.status==='error'}">{{i.status}}</span></p>
                </div>

              </div>
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 " :class="{'chan':ind===index}" >
                <!--<button  class="btn btn-sm b"  >{{$t('message.Console')}}</button>-->
                <!--<input type="button" class="btn btn-sm b" value="控制台" />-->
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 container one" id="detail" >
      <div class="row san" v-for="(i,index) in $store.state.osdlist"  @click="change(index)">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 container"></div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="row block aa" :class="{'chan':ind===index}">
            <div class="row up " :class="{'chan':ind===index}" >
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 " :class="{'chan':ind===index}">
                <div class="row font " :class="{'chan':ind===index}">
                  <p style="font-size: 1.2em;line-height: 1em">{{i.osdid}}</p>
                  <p style="line-height: 1em;font-size: 1em;">{{i.osdip}}</p>
                  <!--<button  class="btn btn-sm b"  >{{$t('message.Console')}}</button>-->
                  <!--<input type="button" class="btn btn-sm b" value="控制台" />-->
                </div>

              </div>
              <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 pie " :class="{'chan':ind===index}">
                <div :id=i.id class="grid container-fluid " :class="{'chan':ind===index}" style="width: 10em;height: 10em"></div>
              </div>
            </div>
            <div class="row down " :class="{'chan':ind===index}" >
              <span v-for="i in imgage"><img :src="i"/></span>
            </div>
          </div>
        </div>
        </div>
      </div>
  </div>
    <!--<button  class="btn btn-default all" @click="adddisk()" style="margin-bottom: 1em;float: right" >{{$t('message.Add-a-disk')}}</button>-->
    <!--<input type="button" class="btn btn-default all" value="添加磁盘" style="margin-bottom: 1em;float: right" @click="adddisk()"/>-->
    <div class="col-lg-8 col-md-8 col-sm-7 col-xs-12 bgdown " v-if="$store.state.content!=null">
      <div class="row">
        <div class="alert alert-danger " id="tipscontent" style="display: none;">{{tipscontent}}</div>
        <!--<div class="alert alert-danger " id="tipsc" style="display: none;">操作成功！</div>-->
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-6">
          <div class=" bor container-fluid">
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">{{$t('message.The-machine-information')}}</span></p>
            <p class="ff"><span class="titlecolor">{{$t('message.Model')}}：</span><span >{{$store.state.content&& $store.state.content.sname}}</span></p>
            <p class="ff"><span class="titlecolor">{{$t('message.Status')}}：</span><span :class="{'o':$store.state.content.status==='ok','wa':$store.state.content.status==='warning','err':$store.state.content.status==='error'}">{{$store.state.content&& $store.state.content.status}}</span></p>
            <p class="ff"><span class="titlecolor">{{$t('message.OS')}}：</span><span>{{$store.state.content.opsys}}</span></p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-6">
          <div class="bora container-fluid">
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">CPU</span></p>
            <span class="ff">{{$store.state.content.cpu}}</span>
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">{{$t('message.Memory')}}</span></p>
            <span class="ff">{{$store.state.content.nc}}</span>
          </div>
        </div>
      </div>
        <div class="row datamoreone">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-6">
          <div class="col-lg-11 container-fluid">
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">{{$t('message.Data-Set')}}</span></p>
            <div class="datapstyle" >
              <span v-for="q in $store.state.content.datap"><img src="../../static/image/three.png" class="img-responsive im" :id="q" @click="disk(q)"  :title="q" data-toggle="tooltip" data-placement="bottom"></span>
            </div>
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">{{$t('message.Cache-disk')}}</span></p>
            <div class="datapstyle" >
              <span v-for="w in $store.state.content.cachep"><img src="../../static/image/cachedata.png" class="img-responsive im" :id="w"  @click="disk(w)"  :title="w" data-toggle="tooltip" data-placement="bottom"></span>
            </div>
          </div>
        </div>


        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-6">
          <div class=" container-fluid">
          <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">iSCSI {{$t('message.Service')}}/{{$t('message.Interior')}} {{$t('message.Network')}}</span></p>
            <div class="datapstyle"><span v-for="w in $store.state.netcard"><img src="../../static/image/four.png" class="img-responsive im" :id="w.dname"  @click="net(w.dname)"  :title="w.dname" data-toggle="tooltip" data-placement="bottom"></span></div>
          <span class="ff">{{$store.state.content.iscsi}}</span><span class="glyphicon glyphicon-edit e" style="cursor: pointer"  data-toggle="editmodal" @click="edit()" id="edit"></span>
          <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">{{$t('message.Interior')}} {{$t('message.Network')}}</span></p>
          <span class="ff" id="net">{{$store.state.content.netw}}</span>
          </div>
        </div>
    </div>
      <div class="row datamore">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-6">
          <div class=" borb">
          <table class="table table-condensed table-responsive" >
            <thead>
              <tr>
                <th colspan="2">{{$t('message.DiskInfo')}}：</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{$t('message.Device-Name')}}：</td>
                <td>{{$store.state.diskdefalut.nname}}</td>
              </tr>
              <tr>
                <td>{{$t('message.Type')}}：</td>
                <td>{{$store.state.diskdefalut.type}}</td>
              </tr>
              <tr>
                <td>{{$t('message.Capacity')}}：</td>
                <td>{{$store.state.diskdefalut.size}}</td>
              </tr>
              <tr>
                <td>WWID：</td>
                  <td>{{$store.state.diskdefalut.wwid}}</td>
              </tr>
              <tr>
                <td>{{$t('message.Purpose')}}：</td>
                <td>{{$store.state.diskdefalut.used}}</td>
              </tr>
              <tr>
                <td>{{$t('message.Slow-disk')}}：</td>
                <td>{{$store.state.diskdefalut.small}}</td>
              </tr>
              <tr>
                <td>{{$t('message.Health-degree')}}：</td>
                <td>{{$store.state.diskdefalut.health}}</td>
              </tr>
              <!--<tr>-->
                <!--<td>{{$t('message.Operation')}}：</td>-->
                <!--<td><button  class="btn btn-danger btn-xs"  >{{$t('message.Lighting-position-lamp')}}</button></td>-->
              <!--</tr>-->
            </tbody>
          </table>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-6">
          <div class=" borc">
          <table class="table table-condensed table-responsive" >
            <thead>
            <tr>
              <th colspan="2">{{$t('message.Ifconfig')}}：</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{$t('message.Device-Name')}}：</td>
                <td>{{$store.state.netcarddefalut.dname}}</td>
              </tr>
              <tr>
                <td>MAC：</td>
                <td>{{$store.state.netcarddefalut.mac}}</td>
              </tr>
              <tr>
                <td>{{$t('message.Rate')}}：</td>
                <td>{{$store.state.netcarddefalut.speed}}</td>
              </tr>
              <tr>
                <td>{{$t('message.Loss')}}：</td>
                <td>{{$store.state.netcarddefalut.pack}}</td>
              </tr>
              <tr>
                <td>MTU：</td>
                <td>{{$store.state.netcarddefalut.mtu}}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="modal fade" id="editm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">修改iSCSI信息</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Modify')}} ip：</p><input type="text" class="form-control" id="ip" ref="modifyip" required="required" :placeholder="$store.state.content.iscsi" />
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="editsend()" >{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="disk" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="diskdata">添加io-agent</h4>
          </div>
          <div class="modal-body">
            <p>ip：</p><input type="text" class="form-control" id="addip" ref="addip" required="required"/>
            <p>{{$t('message.Dirctory')}}：</p><input type="text" class="form-control" id="diskpath" ref="diskpath" required="required"/>
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="addsend()">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'
  import echarts from 'echarts';
    export default {
        name: "Rosd",
      echarts,
      Vue,
      data(){
        return{
          osdlist:'',
          list:[],
          imgage:[
            '../../static/image/one.png',
            '../../static/image/two.png',
            '../../static/image/three.png',
            '../../static/image/four.png'
          ],
          num:'',
          ind:'',
          // diskall:[],
          // diskdefalut:'',
          // netcard:[],
          // netcarddefalut:'',
          // content:[],
          timertip:null,
          tipscontent:'',
          cross:''
        }

      },
      methods:{
        change(index,id) {
          var _this=this
          // console.log(_this.id)
          this.ind=index
          this.$axios.post(this.allurl+'manager/ioagent/ioagent_de',{id:id}).then(function (res) {
            // _this.content=res.data.all
            // _this.diskall=res.data.diskall
            // _this.diskdefalut= _this.diskall[0]
            // _this.netcard=res.data.netcard
            // _this.netcarddefalut=_this.netcard[0]
            // const datac=JSON.parse(res.data)
            _this.$store.commit('osdalone',{content:res.data.all,diskall:res.data.diskall,diskdefalut:res.data.diskall[0],netcard:res.data.netcard,netcarddefalut:res.data.netcard[0]})
            // console.log(_this.netcard)
          }).catch(function (error) {
            console.log(error)
          })

        },
        disk(n){
          for(let i=0;i<this.$store.state.diskall.length;i++){
            if (n==this.$store.state.diskall[i].nname){
              this.$store.state.diskdefalut=this.$store.state.diskall[i]
            }
          }

        },
        net(n){
          for(let i=0;i<this.$store.state.netcard.length;i++){
            if (n==this.$store.state.netcard[i].dname){
              this.$store.state.netcarddefalut=this.$store.state.netcard[i]
            }
          }
        },
        editsend(){                      /*发送修改后iSCSI的ip*/

            let ip=this.$refs.modifyip.value
          var reg=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
          if (ip==''){
            this.cross='请填写完整'
          }
          else if(!reg.test(ip)){
            this.cross='ip格式不对，请重新输入'
          }
          else {
            var _this=this
            this.$axios.post(this.allurl + 'manager/ioagent/iscsi_change', {ip: ip}).then(function (res) {
              // console.log(res.status)

                _this.tipscontent =  res.data.status
                $('#tipscontent').show().delay(2000).fadeOut()

            }).catch(function (error) {
              console.log(error)
            })
            $('#editm').modal('hide')
          }
        },
        clos(){                        /*列表显示为精简模式*/

            $('#sample').slideDown(1000)
            $('#detail').slideUp(800)


        },
        open(){                        /*列表显示详情*/

            $('#sample').slideUp(800)
            $('#detail').slideDown(1000)



        },
        edit(){                       /*编辑更改iscsi*/

            if (sessionStorage.getItem('islogin')==250){
              this.tipscontent='普通用户无操作权限！'
              $('#tipscontent').show().delay (2000).fadeOut()
            }
            else {
              this.cross=''
              $('#editm').modal("show")
            }
        },
        piechart() {                        /*cpu使用率饼状图*/
          var _this=this
          let i;
          for (i in this.osdlist) {
            // console.log(this.osdlist[i].id)

            var piec = _this.$echarts.init(document.getElementById(_this.osdlist[i].id))
            var option = {
              tooltip: {
                trigger: 'item',
                formatter: '{d}%'
              },
              series: [
                {
                  name: '使用率',
                  type: 'pie',
                  radius: ['50%', '80%'],
                  itemStyle: {
                    color: function (params) {
                      var colorlist = [
                        '#16B7E2', '#BBEBF6'
                      ];
                      return colorlist[params.dataIndex]
                    }
                  },
                  avoidLabelOverlap: false,
                  label: {
                    normal: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      show: true,
                      textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold'
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data: [
                    {value:_this.osdlist[i].usage, name: '已使用'},
                    {value: _this.osdlist[i].unusage, name: '未使用'}
                  ]
                }
              ]
            }
            piec.setOption(option)
          }
        },
        start(){
          var _this=this
          this.$axios.get(this.allurl+'manager/ioagent/list_ioagent').then(function (res) {
            _this.$store.commit('gosd',res.data)
            // console.log(_this.$store.state.osdlist[0].osdid)
            _this.change(0,_this.$store.state.osdlist[0].osdid)
          }).catch(function (error) {
            console.log(error)
          })

        },
        timer(){
          var _this=this
          _this.timertip=setInterval(function () {
            _this.start();
            // _this.start2();

          },30000)
        },
        adddisk(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else
           $('#disk').modal('show')
        },
        addsend(){
          var ip=this.$refs.addip.value
          var diskpath=this.$refs.diskpath.value
          this.$axios.post(this.allurl+'manager/ioagent/add_ioagent',{ip:ip,diskpath:diskpath}).then(function (res) {

          }).catch(function (error) {
            console.log(error)
          })
        }

      },
      mounted(){
        // this.change(0,this.$store.state.osdlist[0].osdid)
        this.piechart()
        this.ind=0
        $("[data-toggle='tooltip']").tooltip({html:true});
        // this.change(0,this.osdlist[0])
        // console.log(this.osdlist)
        // this.start();
        // console.log(this.$store.state.diskall,this.$store.state.diskdefalut,this.$store.state.netcard,this.$store.state.netcarddefalut,this.$store.state.content)
        this.timer();


      },
      activated(){
        this.piechart()
      },
      destroyed(){
          var _this=this
          clearInterval(_this.timertip)
      }
    }

</script>

<style scoped>
  #Rosd{
    color:white;
  }

  .block{
  border-radius: .3em;

}
.shaw{
  box-shadow: 0px 2px 5px white !important;
}
.im{
  display: inline-block;margin: 0 .5rem;cursor: pointer;
}
.e{
  margin-left: 10%;
  color: #B9B0C7;

}
.one{
  height: 50em;
  overflow-y: scroll;
}
.chan{
  background-color: #194B91 !important;
}
.ff{
  margin-left: 2em;
  line-height: 2em;
}
.bgdown{
  background-color: #11387B !important;
  border-radius: .5em;
  margin-bottom: 2em;
  margin-top: 5em;

}

.datamoreone{
  height: 17em;
}
.datamore{
  height:22em;
}
#editm{
  color: white;
}


.pie{
  height: 10em;
  margin: 0 auto;
}
.cricle{
  color: #25A2D6;
  font-size: 1.5em;
  margin: 1em .5em 0 0em;
}
.dfont{
  font-size: 1.2em;
  line-height: 1.3em;
}
.bor{
  border-bottom:1px solid #1b6d85;

}
  .borc{
    border-top:1px solid #1b6d85;


  }
  .bora{
    border-bottom:1px solid #1b6d85;
    border-left:1px solid #1b6d85;

  }
  #open{
    margin-bottom: 1em;margin-left:1em;float: right
  }
  #closed{
    margin-bottom: 1em;float: right
  }
  .titlecolor{
    /*color: #9584b2;*/
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    .font p{
      font-size: .8em;
    }
    img{
      width: 15%;
    }
  }
  @media screen and (max-width: 425px){
    .bgdown{
      margin-top: 3em;
      height: 60em;
    }
    .one{
      height: 30em;
    }
  }
  .borb{
    border-right:1px solid #1b6d85;
    border-top:1px solid #1b6d85;
  }
  .all{
    background-color: #6B6DAE;
    color: white;
    margin-top: 1.55em;

  }
  .allo{
    margin-top: 1em;
  }
  .san{
    margin-bottom: 1em;
    margin-left: 15px;
    background-color: #3E285A;
    width: 85%;
  }
  .aa{
    background-color: #3E285A;
    border-radius: 5px;
  }
  #detail{
    display: none;
  }

  .up{
    border-bottom: 1px solid #452F64;
    width: 95%;

    margin: 0 auto;
  }

  .down{
    margin: 1em 1em;
  }
  .down img{
    margin-right: 1em;
  }
  .all div div div div div {
    background-color: #3D295A;


  }
  table{
    width: 90%;
    height: 10em;
    margin: 0em auto;
  }
  .grid{
    width: 100%;
    height: 100%;
  }
  .font {
    margin:1em 0em;
    line-height: .8em;
    font-size: 1.15em;
  }
  .b{
    background-color: #6B6DAE;
    color: white;
    margin-top: .6em;
  }
  .o{
    color:#17FF1C;
    font-weight: 700;
  }
  .wa{
    color:orange;
    font-weight: 700;
  }
  .err{
    color: red;
    font-weight: 700;
  }
  .datapstyle{
    height: 3em !important;
    overflow-y: scroll;
  }
</style>
