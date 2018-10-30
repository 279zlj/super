<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rosd">

  <div class="row" v-if="osdlist!=null">
  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 container allo">
    <input type="button" class="btn btn-default b" value="展开" style="margin-bottom: 1em;margin-left:1em;float: right" @click="open()"/>
    <input type="button" class="btn btn-default b" value="极简" style="margin-bottom: 1em;float: right" @click="clos()"/>
    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-12 container one" id="sample">
      <div class="row san" v-for="(i,index) in osdlist"  @click="change(index,i.osdid)" >
        <div class="row">
          <div class="row aa" :class="{'chan':ind===index}" >
            <div class="row up " :class="{'chan':ind===index}" :id="i.osdid">
              <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 " :class="{'chan':ind===index}">
                <div class="row font " :class="{'chan':ind===index}">
                  <p>{{i.osdid}}</p>
                  <p>{{i.osdip}}</p>
                  <p>状态：<span :class="{'o':i.status==='ok','wa':i.status==='warning','err':i.status==='error'}">{{i.status}}</span></p>
                </div>

              </div>
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 " :class="{'chan':ind===index}" >
                <input type="button" class="btn btn-sm b" value="控制台" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-12 container one" id="detail" >
      <div class="row san" v-for="(i,index) in osdlist"  @click="change(index)">
        <div class="row">
          <div class="row block aa" :class="{'chan':ind===index}">
            <div class="row up " :class="{'chan':ind===index}" >
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 " :class="{'chan':ind===index}">
                <div class="row font " :class="{'chan':ind===index}">
                  <p>{{i.osdid}}</p>
                  <p>{{i.osdip}}</p>

                  <input type="button" class="btn btn-sm b" value="控制台" />
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

    <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12 bgdown all" v-if="content.all!=null && content.netcard!=null && content.diskall!=null">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class=" bor container-fluid">
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">机器信息</span></p>
            <p class="ff">型号：<span >{{content.all && content.all.sname}}</span></p>
            <p class="ff">状态：<span :class="{'o':content.all.status==='ok','wa':content.all.status==='warning','err':content.all.status==='error'}">{{content.all && content.all.status}}</span></p>
            <p class="ff">操作系统：<span>{{content.all.opsys}}</span></p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class="bora container-fluid">
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">CPU</span></p>
            <p class="ff">CPU：<span>{{content.all.cpu}}</span></p>
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">内存</span></p>
            <span class="ff">{{content.all.nc}}</span>
          </div>
        </div>
      </div>
        <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class="col-lg-11 container-fluid">
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">数据盘</span></p>
            <span v-for="q in content.all.datap"><img src="../../static/image/three.png" class="img-responsive im" :id="q" @click="disk(q)"  :title="q"></span>
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">缓存盘</span></p>
            <span v-for="w in content.all.cachep"><img src="../../static/image/cachedata.png" class="img-responsive im" :id="w"  @click="disk(w)"  :title="w"></span>
          </div>
        </div>


        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class=" container-fluid">
          <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">iSCSI服务网络/内部网络</span></p>
          <span class="ff">{{content.all.iscsi}}</span><span class="glyphicon glyphicon-edit e" title="修改" data-toggle="editmodal" @click="edit()" id="edit"></span>
          <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">内部网络</span></p>
          <span class="ff">{{content.all.netw}}</span>
          </div>
        </div>
    </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class=" borb">
          <table class="table table-condensed table-responsive" >
            <tbody>
              <tr>
                <td>设备名：</td>
                <td>{{content.netcard.nname}}</td>
              </tr>
              <tr>
                <td>类型：</td>
                <td>{{content.netcard.type}}</td>
              </tr>
              <tr>
                <td>容量：</td>
                <td>{{content.netcard.size}}</td>
              </tr>
              <tr>
                <td>WWID：</td>
                  <td>{{content.netcard.wwid}}</td>
              </tr>
              <tr>
                <td>用途：</td>
                <td>{{content.netcard.used}}</td>
              </tr>
              <tr>
                <td>慢盘：</td>
                <td>{{content.netcard.small}}</td>
              </tr>
              <tr>
                <td>健康度：</td>
                <td>{{content.netcard.health}}</td>
              </tr>

            </tbody>
          </table>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class=" borc">
          <table class="table table-condensed table-responsive" >
            <tbody>
              <tr>
                <td>设备名：</td>
                <td>{{content.diskall.dname}}</td>
              </tr>
              <tr>
                <td>MAC：</td>
                <td>{{content.diskall.mac}}</td>
              </tr>
              <tr>
                <td>速率：</td>
                <td>{{content.diskall.speed}}</td>
              </tr>
              <tr>
                <td>丢包：</td>
                <td>{{content.diskall.pack}}</td>
              </tr>
              <tr>
                <td>连接状态：</td>
                <td>{{content.diskall.status}}</td>
              </tr>
              <tr>
                <td>MTU：</td>
                <td>{{content.diskall.mtu}}</td>
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
            <p>修改ip：</p><input type="text" class="form-control" id="ip" ref="modifyip"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" @click="editsend()" data-dismiss="modal">确认修改</button>
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
          content:[],
          xz:''

        }

      },
      methods:{
        change(index,id) {
          var _this=this
          this.ind=index
          this.$axios.post(this.allurl+'manager/ioagent/ioagent_de',{id:id}).then(function (res) {

            _this.content.disk=res.content
          }).catch(function (error) {
            console.log(error)
          })

        },
        disk(n){
          var _this=this
          this.xs=n;
          // $('#'+n).animate({left:'1000px'},1000)
          this.$axios.post(this.allurl+'manager/disk/detail',{id:n}).then(function (res) {
            console.log(res.data)
            _this.content.netcard=res.data
            // console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
        },
        editsend(){                      /*发送修改后iSCSI的ip*/
          var _this=this
          let ip=_this.$refs.modifyip.value
          this.$axios.post(this.allurl+'manager/ioagent/iscsi_change',{ip:ip}).then(function (res) {
            console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
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
          $('#edit').click(function () {
            $('#editm').modal("show")
          })
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
              _this.osdlist=res.data
              _this.piechart()
            }).catch(function (error) {
              console.log(error)
            })

            // console.log(_this.osdlist)
        },

        start2(){
          var _this=this
          this.$axios.get(this.allurl+'manager/ioagent/list_ioagent').then(function (res) {
            _this.osdlist=res.data
          }).catch(function (error) {
            console.log(error)
          })

          // console.log(_this.osdlist)
        },

      },
      beforeCreate(){
        var _this=this
        this.$axios.get(this.allurl+'manager/ioagent/ioagent_one').then(function (res) {
          // console.log(res.data)
          _this.content=res.data
        }).catch(function (error) {
          console.log(error)
        })
      },
      created(){
        this.start2()
        this.start()
      },
      mounted(){
        this.change(0,this.osdlist[0])
      },
      activated(){
        this.piechart()
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

}
.bgdown div div{
  height:17.5em;
}
#editm{
  color: black;
}
#editm input{
  background-color: white;
  color: black;
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
    margin-top: 5em;

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
    margin: 2em auto;
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
    margin-top: 1em;
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

</style>
