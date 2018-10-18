<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Aoperation">
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
      <div id="y">
        <p @click="editlist()" id="edit" data-toggle="editmodal"><span class="glyphicon glyphicon-edit" style="color: white;font-size: 1.5em ;margin-bottom: 1em" title="编辑"></span></p>
        <p @click="deletelist()" id="deletelist"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></p>
      </div>
      <div style="width: 300px" id="h">
        <span @click="editlist()" id="edit" data-toggle="editmodal"><span class="glyphicon glyphicon-edit" style="color: white;font-size: 1.5em ;margin-right: 1em" title="编辑"></span></span>
        <span @click="deletelist()" id="deletelist"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></span>
      </div>
      </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
        <div class="row">
          <div class="col-lg-3 col-lg-offset-8 col-md-3 col-md-offset-7 col-sm-4 col-sm-offset-6 col-xs-5 col-xs-offset-5">
            <input type="search" class="form-control" id="key" placeholder="请输入ip地址" ref="inp"/>
          </div>
          <div class="col-lg-1 col-md-2 col-sm-2 col-xs-2">
            <input type="submit" class="btn btn-success" id="search" @click="sentip()" />
          </div>
        </div>
        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered" >
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="snapid">ID</th>
            <th data-field="snapname">描述</th>
            <th data-field="content">容量</th>
            <th data-field="date">更新时间</th>
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
            <h4 class="modal-title" id="myModalLabel">修改运维信息</h4>
          </div>
          <div class="modal-body">
            <p>容量：</p><input type="text" class="form-control" id="name"/>
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
        name: "Aoperation",
      data(){
          return{
            urla:''
          }
      },
      methods:{
          start(){
            $('#table_id').bootstrapTable({
              url:this.urla
            })
          },
        editlist() {
          var ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (ids.length !== 1) {
            alert('请选择其中一个设备进行修改');
            return;
          }
          else if(ids.length === 1){
            this.edit = ids;

              $('#editm').modal("show")

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
        sentip(){
          this.$axios.post('http://localhost:5000/api',this.$refs.inp.value).then(function (res) {
            this.urla="http://localhost/"+res
          }).catch(function (error) {
            console.log(error)
          })
        }
      },
      mounted(){
          this.start()
      }
    }
</script>

<style scoped>
  #table_id{
    color: white;
  }
  #h{
    display: none;
  }
  @media screen and (max-width: 425px) {
    .a{
      margin-top: 3em !important;
      margin-bottom: 1em !important;
      width: 100px;

    }
    .one{
      margin-top: 2em !important;
    }
    #h{
      display: block;
    }
    #y{
      display: none;
    }
    .one{
      margin-top: 0em;
    }
  }
  thead{
    background-color: #372B51;
    color: white;
  }
  #editm input{
    background-color: #43355F !important;
    color: white !important;
  }
  .modal-content{
    background-color:#3E324E ;
    color: white;
  }
  .a{
    margin-top: 15em;
  }
  .one{
    margin-top: 4em;
  }
</style>
