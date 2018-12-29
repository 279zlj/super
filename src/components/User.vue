<template>
    <div id="User" class="container">
      <div class="row container-fluid">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
          <div id="y">
          <p @click="editlist()"  style="cursor: pointer" ><span class="glyphicon glyphicon-edit edit" title="编辑"  data-toggle="tooltip" data-placement="right"></span></p>
          <p @click="deletelist()"  style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
          </div>
          <div id="h" style="width: 300px">
            <span @click="editlist()" ><span class="glyphicon glyphicon-edit edith"  title="编辑" data-toggle="tooltip" data-placement="right" ></span></span>
            <span @click="deletelist()" ><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></span>
          </div>
        </div>

        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
          <table class="table table-responsive table-condensed" id="usert" data-toolbar="#toolbar" data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]" data-height="500" data-toggle="table"  data-classes="table-no-bordered"  data-click-to-select="true">
            <div class="alert alert-danger " id="tipscontent" style="display: none;">{{tipscontent}}</div>
            <thead>
            <tr>
              <th data-field="state" data-checkbox="true" ></th>
              <th data-field="userid">ID</th>
              <th data-field="username">{{$t('message.Login-name')}}</th>
              <th data-field="role">{{$t('message.Role')}}</th>
              <th data-field="date">{{$t('message.Log-in-time')}}</th>
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
              <h4 class="modal-title" id="myModalLabel">{{$t('message.Modify-user-information')}}</h4>
            </div>
            <div class="modal-body">
              <p>{{$t('message.Password')}}：</p><input type="text" class="form-control" id="name" ref="user"/>
              <p>{{$t('message.User-role')}}：</p><input type="text" class="form-control" id="content" ref="role" :placeholder=rolerank />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
              <button type="button" class="btn btn-primary" @click="editsend()" >{{$t('message.Confirm')}}</button>
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
        name: "User",
      components:{tips},
      data(){
        return{
          ids:'',
          ips:'',
          its:'',
          edit:'',
          rolerank:'',
          tipscontent:'',
          title:'',
          respond:'',
          dosome:''
        }
      },
      methods:{
        start(){                       /*bootstrap-table的初始化*/
          $('#usert').bootstrapTable({
            url:this.allurl+"manctl/users"
          })
        },
        editlist() {                   /*设备信息的修改*/
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
            var ids = $.map($('#usert').bootstrapTable('getSelections'), function (row) {
              return row.userid;
            });
            var rank = $.map($('#usert').bootstrapTable('getSelections'), function (row) {
              return row.role;
            });
            // console.log(ids)
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个设备进行修改'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行修改')

              return ('ok');
            }

            if (ids.length === 1) {
              this.edit = ids;
              // console.log(ids)
              this.cross=''
              $('#editm').modal("show")

            }
            this.rolerank = rank
          }
        },
        editsend(){                      /*发送用户修改信息*/
          let userpwd=this.$refs.user.value
          let role=this.$refs.role.value
          if (userpwd==''||role==''){
            this.cross='请填写完整'
          }
          else {
            var _this=this
            this.$axios.post(this.allurl + 'manctl/user_edit', {
              user: userpwd,
              role: role,
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
              $('#table_id').bootstrapTable('refresh')
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        res(data){
          let ids = $.map( $('#usert').bootstrapTable('getSelections'), function (row) {
            return row.userid;
          });
          this.respond=data
          if(this.respond=='ok'){
            this.$axios.post(this.allurl + 'manctl/user_delete', {ids: ids}).then(function (res) {
              // console.log('post ok')
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        deletelist(){                       /*用户的删除*/
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
          let ids = $.map( $('#usert').bootstrapTable('getSelections'), function (row) {
            return row.userid;
          });
          if (ids.length < 1) {
            this.tipscontent='请选择删除项'
            this.$refs.tips.usetips()
            // alert('请选择删除项')
          }
          else if(ids.length >= 1) {
            this.title='是否确认选择删除用户'
            this.dosome=ids
            this.$refs.tips.dselect()

            // console.log('delete')
          }

        }
          }
      },
      mounted(){
        this.start()
        $("[data-toggle='tooltip']").tooltip({html:true});
      }
    }
</script>

<style scoped>
  #User{
    color: white;
    width: 100%;
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
  .edit{
    color: white;font-size: 1.5em
  }
  .edith{
    color: white;font-size: 1.5em;margin-right: 1em
  }
  .delete{
    color: white;font-size: 1.5em;margin-top: 1em

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
