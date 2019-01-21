<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Aindex">
    <div class="row">


      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive">
        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-toggle="table" data-height="500"  data-click-to-select="true" data-classes="table-no-bordered" data-pagination="true" data-page-number="1"  data-page-size="10" data-search="true" data-show-refresh="true">
          <div class="alert alert-danger " id="tipscontent" style="display: none;">{{cross}}</div>
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="snapid">{{$t('message.Snap-ID')}}</th>
            <th data-field="snapname">{{$t('message.Snap-name')}}</th>
            <th data-field="content">{{$t('message.Description')}}</th>
            <th data-field="date">{{$t('message.Date-created')}}</th>
            <th data-field="size">{{$t('message.Size')}}</th>
            <th data-field="status">{{$t('message.Status')}}</th>
          </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
      <!-- context menu -->
      <ul id="context-menu" class="dropdown-menu">
        <li data-item="edit" data-toggle="editmodal" style="cursor: pointer"><a>编辑</a></li>
        <li data-item="back" style="cursor: pointer"><a>回滚</a></li>
        <li data-item="clone" data-toggle="clonesna" style="cursor: pointer"><a>克隆</a></li>
        <li data-item="delete" style="cursor: pointer"><a>删除</a></li>
      </ul>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
        <div id="y">
          <p @click="editlist()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-edit verticalimg"  title="编辑" data-toggle="tooltip" data-placement="right"></span></p>
          <p data-toggle="back" @click="goback()" style="cursor: pointer"><span class="glyphicon glyphicon-backward verticalimg" title="回滚" data-toggle="tooltip" data-placement="right"></span></p>
          <p data-toggle="snclone" @click="snclone()" style="cursor: pointer"><span class="glyphicon glyphicon-th-large verticalimg" title="克隆" data-toggle="tooltip" data-placement="right"></span></p>
          <p @click="deletelist()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle verticalimg-l" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
        </div>
        <div id="h">
          <span @click="editlist()" data-toggle="editmodal"><span class="glyphicon glyphicon-edit infeed" title="编辑" data-toggle="tooltip" data-placement="right"></span></span>
          <span data-toggle="back" @click="goback()"><span class="glyphicon glyphicon-backward infeed" title="回滚" data-toggle="tooltip" data-placement="right"></span></span>
          <span data-toggle="snclone" @click="snclone"><span class="glyphicon glyphicon-th-large infeed" title="克隆" data-toggle="tooltip" data-placement="right"></span></span>
          <span @click="deletelist()"><span class="glyphicon glyphicon-remove-circle infeed" title="删除" data-toggle="tooltip" data-placement="right"></span></span>
        </div>
      </div>
    </div>

    <div class="modal fade" id="editm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">{{$t('message.Modify-snapshot-information')}}</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Snap-name')}}：</p><input type="text" class="form-control" id="name" ref="saname" :placeholder=ids />
            <p>{{$t('message.Description')}}：</p><input type="text" class="form-control" id="content" ref="sacontent"/>
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="editsend()">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>


  <div class="modal fade" id="clonesna" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="clonename">{{$t('message.Snapclone')}}</h4>
        </div>
        <div class="modal-body">
          <p>{{$t('message.Snapclone-name')}}：</p><input type="text" class="form-control" id="aclone" ref="aclone"/>
          <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
          <button type="button" class="btn btn-primary" @click="sendclone()" >{{$t('message.Confirm')}}</button>
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
      name: "Aindex",
      components:{tips},
      data(){
        return {
          edit: {},
          sele:'',
          aback:'',
          ids:'',
          tipscontent:'',
          title:'',
          who:'',
          dosome:'',
          clone:'',
          timertip:null,
          cross:''
      }
      },
      // tableDate,
      mounted(){
        this.strat()

      },
      methods: {
        rightm(id){
          this.who='back'
          let ids = id
          this.title='此操作不可逆，确认进行回滚'
          this.dosome=ids
          this.$refs.tips.dselect()
          this.aback = ids;
        },
        strat() {            /*bootstrap-table初始化*/
          $('#table_id').bootstrapTable({
            url:this.allurl+'manager/client/block/list_snap',
            contextMenu: '#context-menu',
            onContextMenuItem: function(row, $el){
              if($el.data("item") == "edit"){
                this.edit=row.snapname
                // alert(this.ids)
                this.cross=''
                $('#editm').modal("show")
                return this.edit
              }
              if($el.data("item") == "back"){
                var _this=this
                let id = row.snapid
                _this.rightm(id)


              }
              if($el.data("item") == "clone"){
                var _this=this
                _this.clone=row.snapid
                this.cross=''
                $('#clonesna').modal("show")
                return _this.clone
            }
            if ($el.data('item')=='delete'){
              this.tipscontent='请选择删除项'
              this.$refs.tips.usetips()
            }

            }
          })
          $("[data-toggle='tooltip']").tooltip({html:true});
        },
        timer(){
          var _this=this
          _this.timertip=setInterval(function () {
            _this.strat()
          },30000)
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
            var _this=this
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'manager/client/block/roll_snap', {ids: ids}).then(function (res) {
                // console.log(res)
                if (res.data.status == 1) {
                  _this.tipscontent = '操作成功'
                  $('#tipscontent').show().delay(2000).fadeOut()
                  $('#table_id').bootstrapTable('refresh')
                }
                else {
                  _this.tipscontent = res.data.status
                  $('#tipscontent').show().delay(2000).fadeOut()
                  $('#table_id').bootstrapTable('refresh')
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }
        },
        deletelist(){               /*删除快照功能*/
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
            this.who = 'snap'
            let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.snapid;
            });
            if (ids.length < 1) {
              this.tipscontent = '请选择删除项'
              this.$refs.tips.usetips()
              // alert('请选择删除项')
            }
            else if (ids.length >= 1) {
              this.title = '是否确认选择删除快照'
              this.dosome = ids
              this.$refs.tips.dselect()
              // console.log('delete')
            }
          }
        },
        editlist() {              /*快照修改功能*/
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
            var ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.snapid;
            });
            var name = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.snapname;
            });
            if (ids.length != 1) {
              this.tipscontent = '请选择其中一个设备进行修改'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行修改')
            }
            else if (ids.length === 1) {
              this.edit = ids;
              this.cross=''
              $('#editm').modal("show")

            }
            this.ids = name
          }
        },
        editsend(){                             /*发送快照修改信息 */
          let name =this.$refs.saname.value
          let content=this.$refs.sacontent.value
          if (name==''||content==''){
            this.cross='请填写完整'
          }
          else {
            var _this=this
            this.$axios.post(this.allurl + 'manager/client/block/set_snap', {
              name: name,
              content: content,
              id: this.edit
            }).then(function (res) {
              // console.log(res)
              if (res.data.status == 1) {
                _this.tipscontent = '操作成功'
                $('#tipscontent').show().delay(2000).fadeOut()
                $('#table_id').bootstrapTable('refresh')
              }
              else {
                _this.tipscontent = res.data.status
                $('#tipscontent').show().delay(2000).fadeOut()
                $('#table_id').bootstrapTable('refresh')
              }
            }).catch(function (error) {
              console.log(error)
            })
            $('#editm').modal('hide')
          }
        },
        snclone(){                            /*块设备克隆*/
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
            let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.snapid;
            });
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个设备进行克隆'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行克隆')
            }
            else if (ids.length === 1) {
              this.clone = ids;
              this.cross=''
              $('#clonesna').modal("show")

            }
          }
        },
        sendclone(){                       /*发送快照克隆信息*/
          let name=this.$refs.aclone.value
          if (name==''){
            this.cross='请填写完整'
          }
          else {
            var _this=this
            this.$axios.post(this.allurl + 'manager/client/block/clone_snap', {
              name: name,
              cloneid: this.clone,
              pool: this.sele
            }).then(function (res) {
              // console.log(res)
              if (res.data.status == 1) {
                _this.tipscontent = '操作成功'
                $('#tipscontent').show().delay(2000).fadeOut()
                $('#table_id').bootstrapTable('refresh')
              }
              else {
                _this.tipscontent = res.data.status
                $('#tipscontent').show().delay(2000).fadeOut()
                $('#table_id').bootstrapTable('refresh')
              }
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        goback() {                      /*快照回滚*/
          if (sessionStorage.getItem('islogin') == 250) {
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay(2000).fadeOut()
          }
          else {
            this.who = 'back'
            let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.snapid;
            });
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个设备进行回滚'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行回滚')
            }
            else if (ids.length === 1) {
              this.title = '此操作不可逆，确认进行回滚'
              this.dosome = ids
              this.$refs.tips.dselect()
              this.aback = ids;


            }

          }
        }
      },
      destroyed(){
        var _this=this
        clearInterval(_this.timertip)
      }
    }
</script>

<style scoped>
  #Aindex{
    margin-top: 1.5em;

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
    font-size: 1em;
    background-color: #3F3456;
    border-radius: 5px;
  }
  td{
    font-size: 1.1em;
  }

</style>
