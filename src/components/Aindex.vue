<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Aindex">
    <div class="row">
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
      <div id="y">
      <p @click="editlist()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-edit verticalimg"  title="编辑"></span></p>
      <p data-toggle="back" @click="goback()" style="cursor: pointer"><span class="glyphicon glyphicon-backward verticalimg" title="回滚"></span></p>
      <p data-toggle="snclone" @click="snclone()" style="cursor: pointer"><span class="glyphicon glyphicon-th-large verticalimg" title="克隆"></span></p>
      <p @click="deletelist()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle verticalimg-l" title="删除"></span></p>
      </div>
      <div id="h">
        <span @click="editlist()" data-toggle="editmodal"><span class="glyphicon glyphicon-edit infeed" title="编辑"></span></span>
        <span data-toggle="back" @click="goback()"><span class="glyphicon glyphicon-backward infeed" title="回滚"></span></span>
        <span data-toggle="snclone" @click="snclone"><span class="glyphicon glyphicon-th-large infeed" title="克隆"></span></span>
        <span @click="deletelist()"><span class="glyphicon glyphicon-remove-circle infeed" title="删除"></span></span>
      </div>
    </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive">
        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-toggle="table"  data-classes="table-no-bordered" data-pagination="true" data-page-number="1"  data-page-size="10" data-search="true" data-show-refresh="true">
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
            <p>快照名称：</p><input type="text" class="form-control" id="name" ref="saname" :placeholder=ids />
            <p>描述：</p><input type="text" class="form-control" id="content" ref="sacontent"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="editsend()" data-dismiss="modal">确认修改</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>


  <div class="modal fade" id="clonesna" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="clonename">快照克隆</h4>
        </div>
        <div class="modal-body">
          <p>克隆快照名称：</p><input type="text" class="form-control" id="aclone" ref="aclone"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="sendclone()" data-dismiss="modal">确定</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal -->
  </div>
    <tips ref="tips" :content=tipscontent :title=title v-on:respond="res"></tips>
  </div>
</template>

<script>
    import tips from './tips'
    export default {
      name: "Aindex",
      components:{tips},
      data(){
        return {
          edit: {},
          asele:'',
          aback:'',
          ids:'',
          tipscontent:'',
          title:'',
          who:''
      }
      },
      // tableDate,
      mounted(){
        this.strat()
      },
      methods: {
        strat() {            /*bootstrap-table初始化*/
          $('#table_id').bootstrapTable({
            url:this.allurl+'manager/client/block/list_snap'
          })
        },
        res(data){
          if(this.data=='snap'){
            let ids = $.map( $('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.snapid;
            });
            this.respond = data
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'manager/client/block/del_snap', {ids: ids}).then(function (res) {
                // console.log(res,'post ok')
                if (res.data = 'ok') {
                  $('#table_id').bootstrapTable('remove', {
                    field: 'snapid',
                    values: ids
                  });
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }
          else if (this.who=='back'){
            let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.snapid;
            });
            this.respond = data
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'manager/client/block/roll_snap', {ids: ids}).then(function (res) {
                // console.log(res)
              }).catch(function (error) {
                console.log(error)
              })
            }
          }
        },
        deletelist(){               /*删除快照功能*/
          this.who='snap'
          let ids = $.map( $('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (ids.length < 1) {
            this.tipscontent='请选择删除项'
            this.$refs.tips.usetips()
            // alert('请选择删除项')
          }
          else if(ids.length >= 1) {
            this.tipscontent='是否确认选择删除快照'
            this.title=ids
            this.$refs.tips.dselect()
            // console.log('delete')
          }
        },
        editlist() {              /*快照修改功能*/
          var ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          var name = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.snapname;
          });
          if (ids.length != 1) {
            this.tipscontent='请选择其中一个设备进行修改'
            this.$refs.tips.usetips()
            // alert('请选择其中一个设备进行修改')
          }
          else if(ids.length === 1){
            this.edit = ids;

              $('#editm').modal("show")

          }
          this.ids=name
        },
        editsend(){                             /*发送快照修改信息 */
          let name =this.$refs.saname.value
          let content=this.$refs.sacontent.value
          this.$axios.post(this.allurl+'manager/client/block/set_snap',{name:name,content:content,id:this.edit}).then(function (res) {
            // console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
        },
        snclone(){                            /*块设备克隆*/
          let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (ids.length !== 1) {
            this.tipscontent='请选择其中一个设备进行克隆'
            this.$refs.tips.usetips()
            // alert('请选择其中一个设备进行克隆')
          }
          else if(ids.length === 1){
            this.clone = ids;

            $('#clonesna').modal("show")

          }
        },
        sendclone(){                       /*发送快照克隆信息*/
          let name=this.$refs.aclone.value
          this.$axios.post(this.allurl+'manager/client/block/clone_snap',{name:name,cloneid:this.clone,pool:this.sele}).then(function (res) {
            // console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
        },
        goback(){                      /*快照回滚*/
          this.who='back'
          let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (ids.length !== 1) {
            this.tipscontent='请选择其中一个设备进行回滚'
            this.$refs.tips.usetips()
            // alert('请选择其中一个设备进行回滚')
          }
          else if(ids.length === 1){
            this.tipscontent='此操作不可逆，确认进行回滚'
            this.title=ids
            this.$refs.tips.dselect()
            this.aback = ids;


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
    background-color: #43355F !important;
  }
  #editm{
    color: black;
  }
  #editm input{
    background-color: #43355F !important;
    color: white !important;
  }
  .modal-content{
    background-color:#3E324E ;
    color: white;
  }
  td{
    word-break:keep-all;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    -icab-text-overflow: ellipsis;
    -khtml-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
  }
  .a{
    margin-top: 10em;
  }
  #h{
    display: none;
    width: 300px
  }
  .verticalimg{
    color: white;font-size: 1.5em ;margin-bottom: 1em
  }
  .verticalimg-l{
     color: white;font-size: 1.5em
  }
  .infeed {
    color: white;
    font-size: 1.5em;
    margin-right: 1em;
    display: inline-block
  }
  @media screen and (max-width: 425px) {
    .a{
      margin-top: 0em;
      margin-bottom: 2em;
      width: 100px;

    }
    #h{
      display: block;
    }
    #y{
      display: none;
    }
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
