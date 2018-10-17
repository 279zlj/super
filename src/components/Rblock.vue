<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rblock">
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
      <div id="y">
        <p @click="" id="kr" ><img src="../../static/image/data.png" class="img-responsive kr" style="width: 45%;font-size: 1.5em ;margin-bottom: 1em" title="扩容"/></p>
        <p @click="" id="snap"><span class="glyphicon glyphicon-camera" style="color: white;font-size: 1.5em ;margin-bottom: 1em" title="创建快照"></span></p>
        <p @click="deletelist()" id="deletelist"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></p>
      </div>
        <div style="width: 300px" id="h">
          <div @click="" id="kr" style="float: left" ><img src="../../static/image/data.png" class="img-responsive kr" style="width: 45%;font-size: 1.5em ;margin-bottom: 1em" title="扩容"/></div>
          <div @click="" id="snap" style="float: left"><span class="glyphicon glyphicon-camera" style="color: white;font-size: 1.5em ;margin-right: 1em" title="创建快照"></span></div>
          <div @click="deletelist()" id="deletelist" style="float: left"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></div>
        </div>
      </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered" data-url="http://localhost:3000/api/tableDate">
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="snapid">块设备名称</th>
            <th data-field="snapname">存储池</th>
            <th data-field="content">容量</th>
            <th data-field="date">源自</th>
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
        <p @click="editlist()" id="edit" data-toggle="editmodal"><span class="glyphicon glyphicon-edit" style="color: white;font-size: 1.5em ;margin-bottom: 1em" title="编辑"></span></p>
        <p @click="" id="time" ><span class="glyphicon glyphicon-time" style="color: white;font-size: 1.5em ;margin-bottom: 1em" title="更改时间"></span></p>
        <p @click="" id="clone" ><span class="glyphicon glyphicon glyphicon-th-list" style="color: white;font-size: 1.5em ;margin-bottom: 1em" title="克隆快照"></span></p>
        <p @click="deletel()" id="deletel"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></p>
        </div>
        <div id="h" style="width: 300px">
          <span @click="editlist()" id="edit" data-toggle="editmodal" ><span class="glyphicon glyphicon-edit" style="color: white;font-size: 1.5em ;margin-right: 1em" title="编辑"></span></span>
          <span @click="" id="time" ><span class="glyphicon glyphicon-time" style="color: white;font-size: 1.5em ;margin-right: 1em" title="更改时间"></span></span>
          <span @click="" id="clone" ><span class="glyphicon glyphicon glyphicon-th-list" style="color: white;font-size: 1.5em ;margin-right: 1em" title="克隆快照"></span></span>
          <span @click="deletel()" id="deletel" ><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></span>
        </div>
      </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive two">
        <table class="table table-responsive text-nowrap" id="table" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered" data-url="http://localhost:3000/api/tableDate">
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="snapid">快照ID</th>
            <th data-field="snapname">快照名称</th>
            <th data-field="content">描述</th>
            <th data-field="date">创建时间</th>
            <th data-field="status">状态</th>
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
        name: "Rblock",
      data(){
        return{
          ids:'',
          ips:''
        }
      },
      methods:{
          start(){
            $('#table_id').bootstrapTable({

            })
            $('#table').bootstrapTable({

            })
          },
        editlist() {
          var ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (ids.length !== 1) {
            alert('请选择其中一个设备进行修改')
          }
          else if(ids.length === 1){
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
          if (confirm('是否确认选择删除块设备：'+ids)){
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
          if (confirm('是否确认选择删除快照：'+ips)){
            $('#table_id').bootstrapTable('remove', {
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
        },
      },
      mounted(){
          this.start()
      }
    }
</script>

<style scoped>
  #Rblock{
    color:white;

  }
  thead{
    background-color: #372B51;
  }
  .a{
    margin-top: 10em;
  }
  .b{
    margin-top: 10em;
  }
  .one{
    margin-top: 4em;
  }
  .two{
    margin-top: 2em;
    margin-bottom: 2em;
  }
  #editm input{
    background-color: white !important;
    color: black !important;
  }
  #editm{
    color: black;
  }
  @media screen and (min-width: 769px) and (max-width: 1025px) {
    .kr{
      width: 60% !important;
    }
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    .kr{
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
      margin-top: 1em;
    }
  }
</style>
