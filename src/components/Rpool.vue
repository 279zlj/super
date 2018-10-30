<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rpool">
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
      <div id="y">
        <p @click="dilatation()" id="kr" data-toggle="dilatation"><img src="../../static/image/data.png" class="img-responsive kr" style="width: 45%;font-size: 1.5em ;margin-bottom: 1em" title="扩容"/></p>
        <p @click="editlist()" id="edit" data-toggle="editmodal"><span class="glyphicon glyphicon-edit" style="color: white;font-size: 1.5em ;margin-bottom: 1em" title="编辑"></span></p>
        <p @click="addclient()"  id="adduser" data-toggle="clientmodal"><img src="../../static/image/user.png" class="img-responsive adduser" style="width: 45%;font-size: 1.5em ;margin-bottom: 1em" title="新增客户端"/></p>
        <p @click="deletelist()" id="deletelist"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></p>
      </div>
        <div style="width: 300px" id="h">
          <div @click="" id="kr" style="float: left" data-toggle="dilatation"><img src="../../static/image/data.png" class="img-responsive kr" style="width: 45%;font-size: 1.5em ;" title="扩容"/></div>
          <div @click="editlist()" id="edit" data-toggle="editmodal" style="float: left"><span class="glyphicon glyphicon-edit" style="color: white;font-size: 1.5em ;margin-right: 1.2em" title="编辑"></span></div>
          <div @click="" id="adduser"  style="float: left" data-toggle="clientmodal"><img src="../../static/image/user.png" class="img-responsive adduser" style="width: 45%;font-size: 1.5em ;" title="新增用户"/></div>
          <div @click="deletelist()" id="deletelist" style="float: left"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></div>
        </div>
      </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered" data-url="http://192.168.1.213:8000/manager/tank/list_tank">
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="poolname">存储池名称</th>
            <th data-field="strategy">存储策略</th>
            <th data-field="iops">IOPS</th>
            <th data-field="thtuput">吞吐量</th>
            <th data-field="status">状态</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 b" >
      <div id="y">
        <p @click="" id="get" @click="empower()"><img src="../../static/image/get.png" class="img-responsive kr" style="width: 45%;font-size: 1.5em ;margin-bottom: 1em" title="授权"/></p>
        <p @click="" id="nget" @click="noempower()"><img src="../../static/image/nget.png" class="img-responsive adduser" style="width: 45%;font-size: 1.5em ;margin-bottom: 1em" title="取消授权"/></p>
        <p @click="deletel()" id="deletel"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></p>
      </div>
        <div style="width: 300px" id="h">
          <div @click="" id="get" style="float: left" ><img src="../../static/image/get.png" class="img-responsive kr" style="width: 45%;font-size: 1.5em ;margin-bottom: 1em" title="授权"/></div>
          <div @click="" id="nget" style="float: left" ><img src="../../static/image/nget.png" class="img-responsive adduser" style="width: 45%;font-size: 1.5em ;margin-bottom: 1em" title="取消授权"/></div>
          <div @click="deletel()" id="deletel" style="float: left"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></div>
        </div>
      </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive two">
        <table class="table table-responsive text-nowrap" id="table" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered" data-url="http://192.168.1.213:8000/manager/tank/list_auth">
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="pname">发起程序名</th>
            <th data-field="ip">IP</th>
            <th data-field="isempower">是否授权</th>
            <th data-field="isconnect">是否连接</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
    <div class="modal fade" id="editm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">修改存储池信息</h4>
          </div>
          <div class="modal-body">
            <p>存储池名称：</p><input type="text" class="form-control" id="name" ref="name"/>
            <p>存储策略：</p><input type="text" class="form-control" id="content" ref="content"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" @click="editsend()" data-dismiss="modal">确认修改</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="clientmodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="client">添加iSCSI客户端</h4>
          </div>
          <div class="modal-body">
            <p>添加iSCSI客户端：</p><input type="text" class="form-control" id="clientname" ref="addclient"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" @click="clientsend()" data-dismiss="modal">确认添加</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="dilatation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="dila">存储池扩容</h4>
          </div>
          <div class="modal-body">
            <p>存储池大小修改：</p><input type="number" class="form-control" id="poolsize" ref="poolsize"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" @click="sizesend()" data-dismiss="modal">确认更改</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>

  </div>
</template>

<script>
    export default {
        name: "Rpool",
      data(){
          return{
            ids:'',
            ips:'',
            dilata:''
          }
      },
      methods:{
        strat() {                            /*bootstrap-table初始化*/
          $('#table_id').bootstrapTable({

          })
          $('#table').bootstrapTable({

          })
        },
        editlist() {                         /*pool设备的修改*/
          var ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.poolname;
            this.ids=ids
          });
          if (ids.length !== 1) {
            alert('请选择其中一个设备进行修改')
          }
          else if(ids.length === 1){
            this.edit = ids;

              $('#editm').modal("show")

          }
        },
        dilatation(){                   /*存储池扩容大小修改*/
          let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.poolname;
          });
          if (ids.length !== 1) {
            alert('请选择其中一个设备进行扩容')
          }
          else if(ids.length === 1){
            this.dilata = ids;

            $('#dilatation').modal("show")

          }
        },
        sizesend(){                          /*发送扩容信息*/

          let poolsize=this.$refs.poolsize.value
          this.$axios.post(this.allurl+'manager/tank/tank_dilatate',{name:this.dilata,poolsize:poolsize}).then(function (res) {
            console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
        },
        addclient(){              /*添加iscsi客户端*/
          $('#clientmodal').modal("show")
        },
        deletelist(){                         /*pool的删除*/

          var ids = $.map( $('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.poolname;
          });
          if (confirm('是否确认选择删除存储池：'+ids)){
            $('#table_id').bootstrapTable('remove', {
              field: 'poolname',
              values: ids
            });
            this.$axios.post(this.allurl+'manager/tank/remove_tank',{ids:ids}).then(function (res) {
              console.log(res,'post ok')
            }).catch(function (error) {
              console.log(error)
            })
          }
          else {return}
          console.log('delete')
        },
        deletel(){                             /*授权的删除*/

          var ips = $.map( $('#table').bootstrapTable('getSelections'), function (row) {
            return row.pname;
          });
          if (confirm('是否确认选择删除该授权记录：'+ips)){
            $('#table').bootstrapTable('remove', {
              field: 'pname',
              values: ips
            });
            this.$axios.post(this.allurl+'manager/client/authori_delete',{ips:ips}).then(function (res) {
              console.log(res,'post ok')
            }).catch(function (error) {
              console.log(error)
            })
          }
          else {return}
          console.log('delete')
        },
        editsend(){                 /*发送修改后的存储池信息*/
          let poolname=this.$refs.name.value
          let poolcontent=this.$refs.content.value
          this.$axios.post(this.allurl+'manager/tank/change_param',{name:poolname,content:poolcontent,ip:this.edit}).then(function (res) {
            console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
        },
        clientsend(){                       /*发送添加的客户端信息*/
          let client=this.$refs.addclient.value
          this.$axios.post(this.allurl+'manager/tank/client_add',{client:client}).then(function (res) {
            console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
        },
        empower(){                      /*确认授权*/
          var ips = $.map( $('#table').bootstrapTable('getSelections'), function (row) {
            return row.pname;
          });

            if (ips.length!=1){
              alert('请选择其中一个进行授权')
            }
            else {
              if (confirm('是否确认进行授权操作：' + ips)) {
                this.$axios.post(this.allurl+'manager/client/man_authori', {ips:ips}).then(function (res) {
                  console.log(res, 'post ok')
                }).catch(function (error) {
                  console.log(error)
                })
              }

            }
        },
        noempower(){                          /*取消授权*/
          var ips = $.map( $('#table').bootstrapTable('getSelections'), function (row) {
            return row.pname;
          });

          $('#table').bootstrapTable('remove', {
            field: 'name',
            values: ips
          });
          if (ips.length!=1){
            alert('请选择其中一个取消授权')
          }
          else {
            if (confirm('是否确认进行取消授权操作：' + ips)) {
              this.$axios.post(this.allurl+'manager/client/man_disauthori', {ips:ips}).then(function (res) {
                console.log(res, 'post ok')
              }).catch(function (error) {
                console.log(error)
              })
            }

          }
        }
      },
      mounted(){
          this.strat()
      }
    }
</script>

<style scoped>
  #Rpool{
    color:white;

  }
  .a{
    margin-top: 10em;
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
      margin-top: 4em;
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
  @media screen and (min-width: 769px) and (max-width: 1025px) {
    .kr,.adduser{
      width: 60% !important;
    }
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    .kr,.adduser{
      width: 100% !important;
    }
  }
  #y{
    display: block;
  }
  #h{
    display: none;
  }
  @media screen and (max-width: 425px) {
    #kr{
      width: 50px !important;
    }
    #adduser{
      width: 50px !important;
    }
    #get,#nget{
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
    #kr{
      width: 50px !important;
    }
    #adduser{
      width: 50px !important;
    }
    #get,#nget{
      width: 50px !important;
    }
  }
</style>
