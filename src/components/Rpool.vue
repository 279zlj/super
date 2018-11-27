<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rpool">
    <div class="row">


      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-height="350" data-toggle="table" data-click-to-select="true" data-classes="table-no-bordered" >
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="poolname">{{$t('message.Pool-name')}}</th>
            <th data-field="strategy">{{$t('message.Strategy')}}</th>
            <th data-field="iops">IOPS</th>
            <th data-field="thtuput">{{$t('message.Throughput')}}</th>
            <th data-field="status">{{$t('message.Status')}}</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>

      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
        <div id="y">
          <p @click="addnew()" data-toggle="addnew" style="cursor: pointer"><img src="../../static/image/add.svg" class="img-responsive add" title="<h5>添加</h5>" data-toggle="tooltip" data-placement="right" /></p>
          <p @click="dilatation()" data-toggle="dilatation" style="cursor: pointer"><img src="../../static/image/data.png" class="img-responsive kr" title="<h5>扩容</h5>" data-toggle="tooltip" data-placement="right"/></p>
          <p @click="editlist()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-edit edit" title="<h5>编辑</h5>" data-toggle="tooltip" data-placement="right"></span></p>
          <p @click="addclient()"  data-toggle="clientmodal" style="cursor: pointer"><img src="../../static/image/user.png" class="img-responsive adduser" title="<h5>新增客户端</h5>" data-toggle="tooltip" data-placement="right"/></p>
          <p @click="deletelist()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="<h5>删除</h5>" data-toggle="tooltip" data-placement="right"></span></p>
        </div>
        <div style="width: 300px" id="h">
          <div @click="addnew()" data-toggle="addnew" style="float: left"><img src="../../static/image/add.svg" class="img-responsive addh" title="<h5>添加</h5>" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="dilatation()" style="float: left" data-toggle="dilatation"><img src="../../static/image/data.png" class="img-responsive krh" title="<h5>扩容</h5>" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="editlist()" data-toggle="editmodal" style="float: left"><span class="glyphicon glyphicon-edit edith" title="<h5>编辑</h5>" data-toggle="tooltip" data-placement="right"></span></div>
          <div @click="addclient()"   style="float: left" data-toggle="clientmodal"><img src="../../static/image/user.png" class="img-responsive adduserh" style="" title="<h5>新增用户</h5>" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="deletelist()" style="float: left"><span class="glyphicon glyphicon-remove-circle delete" title="<h5>删除</h5>" data-toggle="tooltip" data-placement="right"></span></div>
        </div>
      </div>
    </div>
    <div class="row">

      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive two">
        <table class="table table-responsive text-nowrap" id="table" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-click-to-select="true" data-classes="table-no-bordered">
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="pname">{{$t('message.Initiator-name')}}</th>
            <th data-field="ip">IP</th>
            <th data-field="isempower">{{$t('message.Authorized')}}</th>
            <th data-field="isconnect">{{$t('message.Connection')}}</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 b" >
        <div id="y">
          <p id="get" @click="empower()" style="cursor: pointer"><img src="../../static/image/get.png" class="img-responsive getpower" title="<h5>授权</h5>" data-toggle="tooltip" data-placement="right"/></p>
          <p  id="nget" @click="noempower()" style="cursor: pointer"><img src="../../static/image/nget.png" class="img-responsive getpower" title="<h5>取消授权</h5>" data-toggle="tooltip" data-placement="right"/></p>
          <p @click="deletel()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="<h5>删除</h5>" data-toggle="tooltip" data-placement="right"></span></p>
        </div>
        <div style="width: 300px" id="h">
          <div @click="empower()" id="gett" style="float: left" ><img src="../../static/image/get.png" class="img-responsive getpower" title="<h5>授权</h5>" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="noempower()" id="ngett" style="float: left" ><img src="../../static/image/nget.png" class="img-responsive getpower" title="<h5>取消授权</h5>" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="deletel()" style="float: left"><span class="glyphicon glyphicon-remove-circle delete" title="<h5>删除</h5>" data-toggle="tooltip" data-placement="right"></span></div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="editm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">{{$t('message.Modify-storage-pool-information')}}</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Pool-name')}}：</p><input type="text" class="form-control" id="name" ref="name" :placeholder=this.ids />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="editsend()" data-dismiss="modal">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="clientmodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="client">{{$t('message.Add-iSCSI-client')}}</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Add-iSCSI-client')}}：</p><input type="text" class="form-control" id="clientname" ref="addclient"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="clientsend()" data-dismiss="modal">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="dilatation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="dila">{{$t('message.Memory-pool-expansion')}}</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Memory-pool-size-modification')}}：</p><input type="number" class="form-control" id="poolsize" ref="poolsize"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="sizesend()" data-dismiss="modal">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="addnew" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="addpool">{{$t('message.Add-storage-pool')}}</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Pool-name')}}：</p><input type="text" class="form-control" id="addname" ref="addname" />
            <p>{{$t('message.Storage-pool-capacity')}}：</p><input type="number" class="form-control" id="addsize" ref="addsize"/>
            <p>pgs：</p><input type="number" class="form-control" id="addnum" ref="addnum"/>
            <p>{{$t('message.Storage-pool-type')}}：</p>
            <select class="form-control" v-on:change="sel($event)" v-model="unitsele">
              <option v-for="m in unit" :value="m.value">{{m.name}}</option>
            </select>
            <div v-if="unitsele=='erasure'">
              <p>k值：</p><input type="number" class="form-control" id="k" ref="kvalue"/>
              <p>m值：</p><input type="number" class="form-control" id="m" ref="mvalue"/>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="addsend()" data-dismiss="modal">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <tips ref="tips" :content=tipscontent :dotitle=title :docontent=dosome v-on:respond="res"></tips>
  </div>
</template>

<script>
  import tips from './tips'
    export default {
        name: "Rpool",
      components:{tips},
      data(){
          return{
            ids:'',
            ips:'',
            dilata:'',
            unitsele:'',
            unit:[
              {name:'副本策略',value:'fb'},
              {name:'纠删码',value:'erasure'},

            ],
            tipscontent:'',
            title:'',
            respond:'',
            who:'',
            dosome:'',

          }
      },
      methods:{
        strat() {                            /*bootstrap-table初始化*/
          $('#table_id').bootstrapTable({
            url:this.allurl+"manager/tank/list_tank"
          })
          $('#table').bootstrapTable({
            url:this.allurl+"manager/tank/list_auth"
          })
        },
        addnew(){
          $('#addnew').modal("show")
        },
        sel(event){                     /*选择自建启动延时单位*/
          this.unitsele=event.target.value
        },
        editlist() {                         /*pool设备的修改*/
          var ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.poolname;
            this.ids=ids
          });
          if (ids.length !== 1) {
            this.tipscontent='请选择其中一个设备进行修改'
            this.$refs.tips.usetips()
            // alert('请选择其中一个设备进行修改')
          }
          else if(ids.length === 1){
            this.edit = ids;

              $('#editm').modal("show")

          }
          this.ids=ids
          // console.log(this.ids)
        },
        dilatation(){                   /*存储池扩容大小修改*/
          let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.poolname;
          });
          if (ids.length !== 1) {
            this.tipscontent='请选择其中一个设备进行扩容'
            // console.log(this.tipscontent)
            this.$refs.tips.usetips()
            // alert('请选择其中一个设备进行扩容')
          }
          else if(ids.length === 1){
            this.dilata = ids;

            $('#dilatation').modal("show")

          }
        },
        sizesend(){                          /*发送扩容信息*/

          let poolsize=this.$refs.poolsize.value
          this.$axios.post(this.allurl+'manager/tank/tank_dilatate',{name:this.dilata,poolsize:poolsize}).then(function (res) {
            // console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
        },
        addsend(){
          let addname=this.$refs.addname.value
          let addsize=this.$refs.addsize.value
          let addnum=this.$refs.addnum.value
          if (this.unitsele=='fb') {
            this.$axios.post(this.allurl + 'manager/tank/create_tank', {
              name: addname,
              size: addsize,
              pgs: addnum,
              type: this.unitsele
            }).then(function (res) {
              console.log(res)
            }).catch(function (error) {
              console.log(error)
            })
          }
          else {
            this.$axios.post(this.allurl + 'manager/tank/create_tank', {
              name: addname,
              size: addsize,
              pgs: addnum,
              type: this.unitsele,
              k: this.$refs.kvalue.value,
              m: this.$refs.mvalue.value
            }).then(function (res) {
              console.log(res)
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        addclient(){              /*添加iscsi客户端*/
          $('#clientmodal').modal("show")
        },
        res(data){
          if (this.who=='pool') {
            let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.poolname;
            });
            this.respond = data
            // console.log(data,this.respond)
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'manager/tank/remove_tank', {ids: ids}).then(function (res) {
                // console.log(res,'post ok')
                if (res.data = 'ok') {
                  $('#table_id').bootstrapTable('remove', {
                    field: 'poolname',
                    values: ids
                  });
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }
          else if (this.who=='empower'){
            let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.pname;
            });
            this.respond = data
            // console.log(data,this.respond)
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'manager/client/authori_delete', {ids: ids}).then(function (res) {
                // console.log(res,'post ok')
                if (res.data = 'ok') {
                  $('#table').bootstrapTable('remove', {
                    field: 'pname',
                    values: ids
                  });
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }
          else if(this.who=='getpower'){
            let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.pname;
            });
            this.respond = data
            // console.log(data,this.respond)
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'manager/client/man_authori', {ids: ids}).then(function (res) {
                // console.log(res,'post ok')

              }).catch(function (error) {
                console.log(error)
              })
            }
          }
          else if (this.who='ngetpower'){
            let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.pname;
            });
            this.respond = data
            // console.log(data,this.respond)
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'manager/client/man_disauthori', {ids: ids}).then(function (res) {
                // console.log(res,'post ok')

              }).catch(function (error) {
                console.log(error)
              })
            }
          }
        },
        deletelist(){                         /*pool的删除*/
          this.who='pool'
          let ids = $.map( $('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.poolname;
          });
          if (ids.length < 1) {
            this.tipscontent='请选择删除项'
            this.$refs.tips.usetips()
            // alert('请选择删除项')
          }
          else if(ids.length >= 1) {
            this.title='是否确认选择删除存储池'
            this.dosome=ids
            this.$refs.tips.dselect()


            }
            else {
              return
            }


        },

        deletel(){                             /*授权的删除*/
          this.who='empower'
          let ids = $.map( $('#table').bootstrapTable('getSelections'), function (row) {
            return row.pname;
          });
          if (ids.length < 1) {
            this.tipscontent='请选择删除项'
            this.$refs.tips.usetips()
            // alert('请选择删除项')
          }
          else if(ids.length >= 1) {
              this.title='是否确认选择删除该授权记录'
              this.some=ids
              this.$refs.tips.dselect()


            }
            else {
              return
            }
            // console.log('delete')

        },
        editsend(){                 /*发送修改后的存储池信息*/
          let poolname=this.$refs.name.value
          this.$axios.post(this.allurl+'manager/tank/change_param',{name:poolname,ip:this.edit}).then(function (res) {
            // console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
        },
        clientsend(){                       /*发送添加的客户端信息*/
          let client=this.$refs.addclient.value
          this.$axios.post(this.allurl+'manager/tank/client_add',{client:client}).then(function (res) {
            // console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
        },
        empower(){                      /*确认授权*/
          this.who='getpower'
          var ips = $.map( $('#table').bootstrapTable('getSelections'), function (row) {
            return row.pname;
          });

            if (ips.length!=1){
              this.tipscontent='请选择其中一个进行授权'
              this.$refs.tips.usetips()
              // alert('请选择其中一个进行授权')
            }
            else {
              this.title='是否确认进行授权操作'
              this.dosome=ips
              this.$refs.tips.dselect()

            }
        },
        noempower(){                          /*取消授权*/
          this.who='ngetpower'
          var ips = $.map( $('#table').bootstrapTable('getSelections'), function (row) {
            return row.pname;
          });

          if (ips.length!=1){
            this.tipscontent='请选择其中一个取消授权'
            this.$refs.tips.usetips()
            // alert('请选择其中一个取消授权')
          }
          else {
            this.title='是否确认进行取消授权操作'
            this.dosome=ips
            this.$refs.tips.dselect()
          }
        },

      },
      mounted(){
          this.strat()
        $("[data-toggle='tooltip']").tooltip({html:true});
      }
    }
</script>

<style scoped>
  #Rpool{
    color:white;

  }
  .a{
    margin-top: 8em;
  }
  .b{
    margin-top: 10em;
  }
  .modal-content{
    background-color:#3E324E ;
    color: white;
  }
  thead{
    background-color: #372B51;
  }
  .one{
      margin-top: 3.5em;
    }
  .two{
    margin-top: 2em;
    margin-bottom: 2em;
  }
  tr .selected{
    background-color: #473D59 !important;
  }
  #editm input{
    background-color: #43355F !important;
    color: white !important;
  }
  #editm{
    color: black;
  }
  #table_id{
    overflow-y:scroll ;
  }
  #table_id::-webkit-scrollbar {
    display: none;
  }
  .add{
    width: 25px;font-size: 1.5em ;margin-bottom: 1em

  }
  .addh{
    width: 25px;font-size: 1.5em ;margin-bottom: 1em;margin-right: 1em
  }
  .kr{
    width: 45%;font-size: 1.5em ;margin-bottom: 1em
  }
  .krh{
    width: 45%;font-size: 1.5em ;
  }
  .edit{
    color: white;font-size: 1.5em ;margin-bottom: 1em

  }
  .edith{
    color: white;font-size: 1.5em ;margin-right: 1.2em
  }
  .adduser{
    width: 45%;font-size: 1.5em ;margin-bottom: 1em

  }
  .adduserh{
     width: 45%;font-size: 1.5em ;
   }
  .delete{
    color: white;font-size: 1.5em
  }
  .getpower{
    width: 45%;font-size: 1.5em ;margin-bottom: 1em
  }
  @media screen and (min-width: 769px) and (max-width: 1025px) {
    .kr,.adduser{
      width: 60% !important;
    }
    .add{
      width:65%
    }
    #get,#nget{
      width: 3em;
    }
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    .kr,.adduser{
      width: 100% !important;
    }
    .adduser{
      width: 4em;
    }
    #get,#nget{
      width: 3em;
    }
  }
  #y{
    display: block;
  }
  #h{
    display: none;
  }
  @media screen and (max-width: 425px) {
    .krh{
      width: 45% !important; margin-right: 1em;
    }
    .adduserh{
      width: 55% !important; margin-right: .5em;
    }
    #get,#nget,#gett,#ngett{
      width: 50px !important;
    }
    #y{
      display: none;
    }
    #h{
      display: block;
    }
    .a,.b{
      margin-top: 4em;
    }
    .one{
      margin-top: 2em;
    }
  }
  @media screen and (min-width:1600px ) {
    .kr{
      width: 30% !important;
    }
    .adduser{
      width: 30% !important;
    }
    #get,#nget,#gett,#ngett{
      width: 50px !important;
    }
  }
</style>
