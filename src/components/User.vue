<template>
    <div id="User" class="container">
      <div class="row container-fluid">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
          <div id="y">
          <p @click="editlist()" id="editlist" ><span class="glyphicon glyphicon-edit" style="color: white;font-size: 1.5em" title="编辑" ></span></p>
          <p @click="deletelist()" id="deletelist"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em;margin-top: 1em" title="删除"></span></p>
          </div>
          <div id="h" style="width: 300px">
            <span @click="editl()" id="editl"><span class="glyphicon glyphicon-edit" style="color: white;font-size: 1.5em;margin-right: 1em" title="编辑" ></span></span>
            <span @click="deletelist()" id="deletelist"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em;margin-top: 1em" title="删除"></span></span>
          </div>
        </div>
        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
          <table class="table table-responsive table-condensed" id="usert" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered" data-url="http://localhost:3000/api/tableDate">
            <thead>
            <tr>
              <th data-field="state" data-checkbox="true" ></th>
              <th data-field="snapid">ID</th>
              <th data-field="snapname">登录名</th>
              <th data-field="content">角色</th>
              <th data-field="date">登陆时间</th>
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
              <h4 class="modal-title" id="myModalLabel">修改用户信息信息</h4>
            </div>
            <div class="modal-body">
              <p>用户密码：</p><input type="text" class="form-control" id="name"/>
              <p>用户角色：</p><input type="text" class="form-control" id="content"/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="button" class="btn btn-primary" @click="editsend()">确认修改</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>
    </div>
</template>

<script>
    export default {
        name: "User",
      data(){
        return{
          ids:'',
          ips:'',
          its:''
        }
      },
      methods:{
        start(){
          $('#usert').bootstrapTable({})
        },
        editlist() {


          var ids = $.map($('#usert').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          console.log(ids.length)
          if (ids.length !== 1) {
            alert('请选择其中一个设备进行修改')

            return ('ok');
          }
          if(ids.length === 1){
            this.edit = ids;
            console.log(ids)
            $('#editlist').click(function () {
              $('#editm').modal("show")
            })
          }
        },
        editl() {
          console.log(this.its)
          var its = $.map($('#usert').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });

          if (its.length !== 1) {
            alert('请选择其中一个设备进行修改')
            return ('ok');

          }
          else if(its.length === 1){
            this.edit = its;
            console.log(its)
            $('#editl').click(function () {
              $('#editm').modal("show")
            })
          }
        },
        deletelist(){

          var ids = $.map( $('#usert').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (confirm('是否确认选择删除用户：'+ids)){
            $('#usert').bootstrapTable('remove', {
              field: 'snapid',
              values: ids
            });
            this.$axios.post('http://localhost:5000',ids).then(function (res) {
              console.log('post ok')
            }).catch(function (error) {
              console.log(error)
            })
          }
          else {return}
          console.log('delete')
        },
      },
      mounted(){
        this.start()
      }
    }
</script>

<style scoped>
  #User{
    color: white;
  }
  .a{
    margin-top: 10em;
  }
  .one{
    margin-top: 5em;
  }
  thead{
    background-color: #372B51;
  }
  #editm{
    color: black;
  }
  #editm input{
    background-color: white;
    color: black;
  }
  #y{
    display: block;
  }
  #h{
    display: none;
  }
  @media screen and (max-width: 425px){
    #y{
      display: none;
    }
    #h{
      display: block;
    }
    .a{
      margin-top: 2em;
    }
    .one{
      margin-top: 2em;
    }
  }
</style>
