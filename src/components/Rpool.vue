<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rpool">
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >

        <p @click="" id="kr" ><img src="../../static/image/data.png" class="img-responsive kr" style="width: 45%;font-size: 1.5em ;margin-bottom: 1em" title="扩容"/></p>
        <p @click="editlist()" id="edit" data-toggle="editmodal"><span class="glyphicon glyphicon-edit" style="color: white;font-size: 1.5em ;margin-bottom: 1em" title="编辑"></span></p>
        <p @click="" id="adduser" ><img src="../../static/image/user.png" class="img-responsive adduser" style="width: 45%;font-size: 1.5em ;margin-bottom: 1em" title="新增用户"/></p>
        <p @click="deletelist()" id="deletelist"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></p>

      </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered" data-url="http://localhost:3000/api/tableDate">
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="snapid">存储池名称</th>
            <th data-field="snapname">存储策略</th>
            <th data-field="content">IOPS</th>
            <th data-field="date">吞吐量</th>
            <th data-field="tstatus">状态</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 b" >

        <p @click="" id="get" ><img src="../../static/image/get.png" class="img-responsive kr" style="width: 45%;font-size: 1.5em ;margin-bottom: 1em" title="授权"/></p>
        <p @click="" id="nget" ><img src="../../static/image/nget.png" class="img-responsive adduser" style="width: 45%;font-size: 1.5em ;margin-bottom: 1em" title="取消授权"/></p>
        <p @click="deletel()" id="deletel"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></p>

      </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive two">
        <table class="table table-responsive text-nowrap" id="table" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered" data-url="http://localhost:3000/api/tableDate">
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="snapid">发起程序名</th>
            <th data-field="snapname">IP</th>
            <th data-field="content">是否授权</th>
            <th data-field="date">是否连接</th>
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
            <h4 class="modal-title" id="myModalLabel">修改快照信息</h4>
          </div>
          <div class="modal-body">
            <p>快照名称：</p><input type="text" class="form-control" id="name"/>
            <p>描述：</p><input type="text" class="form-control" id="content"/>
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
        name: "Rpool",
      data(){
          return{
            ids:'',
            ips:''
          }
      },
      methods:{
        strat() {
          $('#table_id').bootstrapTable({

          })
          $('#table').bootstrapTable({

          })
        },
        editlist() {
          var ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (ids.length != 1) {
            alert('请选择其中一个设备进行修改')
          }
          else {
            this.edit = ids;
            $('#edit').click(function () {
              $('#editm').modal("show")
            })
          }
        },
        deletelist(){

          var ids = $.map( $('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (confirm('是否确认选择删除存储池：'+ids)){
            $('#table_id').bootstrapTable('remove', {
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
        deletel(){

          var ips = $.map( $('#table').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (confirm('是否确认选择删除该授权记录：'+ips)){
            $('#table').bootstrapTable('remove', {
              field: 'snapid',
              values: ips
            });
            this.$axios.post('http://localhost:5000',ips).then(function (res) {
              console.log('post ok')
            }).catch(function (error) {
              console.log(error)
            })
          }
          else {return}
          console.log('delete')
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
    background-color: white !important;
    color: black !important;
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
  @media screen and (max-width: 425px) {
    .kr,.adduser{
      width: 30em !important;
    }
  }
</style>
