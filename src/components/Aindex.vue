<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Aindex">
    <div class="row">
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >

      <p @click="editlist()" id="edit" data-toggle="editmodal"><span class="glyphicon glyphicon-edit" style="color: white;font-size: 1.5em ;margin-bottom: 1em" title="编辑"></span></p>
      <p><span class="glyphicon glyphicon-backward" style="color: white;font-size: 1.5em;margin-bottom: 1em" title="回滚"></span></p>
      <p><span class="glyphicon glyphicon-th-large" style="color: white;font-size: 1.5em;margin-bottom: 1em" title="克隆"></span></p>
      <p @click="deletelist()" id="deletelist"><span class="glyphicon glyphicon-remove-circle" style="color: white;font-size: 1.5em" title="删除"></span></p>

    </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive">
        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-toggle="table"  data-classes="table-no-bordered" data-pagination="true" data-page-number="1" data-url="http://localhost:3000/api/tableDate" data-page-size="10" data-search="true" data-show-refresh="true">
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="snapid">快照ID</th>
            <th data-field="snapname">快照名称</th>
            <th data-field="content">描述</th>
            <th data-field="date">创建日期</th>
            <th data-field="size">大小</th>
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
      name: "Aindex",
      data(){
        return {
          edit: {}
      }
      },
      // tableDate,
      mounted(){
        this.strat()
      },
      methods: {
        strat() {
          $('#table_id').bootstrapTable({})
        },
        deletelist(){

            var ids = $.map( $('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.snapid;
            });
            if (confirm('是否确认选择删除快照：'+ids)){
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
        }

      }
    }
</script>

<style scoped>
  #Aindex{
    margin-top: 4em;

    margin-bottom: 2em;
    color: white;
  }
  input{
    background-color: black !important;
  }
  #editm{
    color: black;
  }
  td{
    word-break:keep-all;/* 不换行 */
    white-space:nowrap;/* 不换行 */
    overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用*/
    -o-text-overflow:ellipsis;
    -icab-text-overflow: ellipsis;
    -khtml-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
  }
  .a{
    margin-top: 10em;
  }
  #table_id{

    border-radius: 5px;
  }
  thead{
    font-size: 1.2em;
    background-color: #3F3456;
    border-radius: 5px;
  }
  td{
    font-size: 1.1em;
  }

</style>
