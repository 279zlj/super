<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Aoperation">
    <div class="row">
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
        <!--<div class="row">-->
          <!--<div class="col-lg-3 col-lg-offset-8 col-md-3 col-md-offset-7 col-sm-4 col-sm-offset-6 col-xs-5 col-xs-offset-5">-->
            <!--<input type="search" class="form-control" id="key" placeholder="请输入ip地址" ref="inp"/>-->
          <!--</div>-->
          <!--<div class="col-lg-1 col-md-2 col-sm-2 col-xs-2">-->
            <!--<input type="submit" class="btn btn-success" id="search" @click="sentip()" />-->
          <!--</div>-->
        <!--</div>-->
        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-height="350" data-toggle="table" data-click-to-select="true" data-classes="table-no-bordered" >
          <div class="alert alert-danger " id="tipscontent" style="display: none;">普通用户无操作权限！</div>
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="id">规则名称</th>
            <th data-field="content">内容</th>
            <!--<th data-field="size">{{$t('message.Capacity')}}</th>-->
            <!--<th data-field="date">{{$t('message.Turnover-time')}}</th>-->
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 contenttop" >
        <div id="y">
          <p @click="addrule()" id="addrule" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-list-alt verticalimg" title="新建规则" data-toggle="tooltip" data-placement="right"></span></p>
          <p @click="editlist()" id="editlist" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-edit verticalimg" title="编辑" data-toggle="tooltip" data-placement="right"></span></p>
          <p @click="deletelist()" id="deletelist" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle verticalimg" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
        </div>
        <div style="width: 300px" id="h">
          <p @click="addrule()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-list-alt verticalimg" title="新建规则" data-toggle="tooltip" data-placement="right"></span></p>
          <span @click="editlist()" data-toggle="editmodal"><span class="glyphicon glyphicon-edit infeed" title="编辑" data-toggle="tooltip" data-placement="right"></span></span>
          <span @click="deletelist()" ><span class="glyphicon glyphicon-remove-circle infeed" title="删除" data-toggle="tooltip" data-placement="right"></span></span>
        </div>
      </div>
    </div>
    <div class="modal fade" id="editm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">{{$t('message.Modify-operational-information')}}</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Capacity')}}：</p><input type="text" class="form-control" id="name" ref="size"/>
            <p>{{$t('message.Description')}}：</p><input type="text" class="form-control" id="content" ref="content"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="editsend()" data-dismiss="modal">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="newrule" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" >添加新规则</h4>
          </div>
          <div class="modal-body">
            <p>规则名称：</p><input type="text" class="form-control" id="rulename" ref="rulename"/>
            <p>添加磁盘：</p>
            <div class="checkbox">
            <label v-for="p in pdisck">
              <input type="checkbox" class="checkbox" :value=p.name name="checkbox"/><span style="margin-right: 1em">{{p.name}}</span>
            </label>
            </div>
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="rulesend()">{{$t('message.Confirm')}}</button>
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
        name: "Aoperation",
      components:{tips},
      data(){
          return{
            urla:'',
            edit:'',
            tipscontent:'',
            title:'',
            respond:'',
            dosome:'',
            pdisck:[{name:'disk1',value:'disk1'},{name:'disk2',value:'disk2'},{name:'disk3',value:'disk3'}],
            diskbox:[],
            cross: ''
          }
      },
      methods:{
          start(){                         /*bootstrap-table初始化*/
            $('#table_id').bootstrapTable({
              url:this.allurl+'manctl/client_list'

            })
            // console.log(this.urla)
          },
        addrule(){
          if (sessionStorage.getItem('islogin')==250){
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
            $('#newrule').modal('show')
            var _this=this
            this.$axios.get(this.allurl+'').then(function (res) {
              _this.disc=res.data
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        rulesend(){
            var rulename=this.$refs.rulename.value
            var _this=this
            _this.diskbox.splice(0)
           _this.cross=''
            var check=document.getElementsByName('checkbox');
            for (let i=0;i<check.length;i++){
              if (check[i].checked){
                _this.diskbox.push(check[i].value)
              }
            }
            if (_this.diskbox.length==0||rulename=='')
              _this.cross='请完善全部内容'
          else {
              this.$axios.post(this.allurl + 'aaa', {rulename: rulename, disks: _this.diskbox}).then(function (res) {
                if (res.data.status == 1) {
                  _this.tipscontent = '操作成功'
                  $('#tipscontent').show().delay(2000).fadeOut()
                }
                else {
                  _this.tipscontent = res.data.status
                  $('#tipscontent').show().delay(2000).fadeOut()
                }
              }).catch(function (error) {
                console.log(error)
              })
              $('#newrule').modal('hide')
            }
        },
        editlist() {                       /*运维信息修改*/
          if (sessionStorage.getItem('islogin')==250){
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
            var ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.id;
            });
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个设备进行修改'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行修改');
              return;
            }
            else if (ids.length === 1) {
              this.edit = ids;

              $('#editm').modal("show")

            }
          }
        },
        editsend(){                      /*发送修改运维设置*/
            let size=this.$refs.size.value
            let content=this.$refs.content.value
           this.$axios.post('http://localhost:5000',{size:size,content:content,id:this.edit}).then(function (res) {
             // console.log(res)
           }).catch(function (error) {
             console.log(error)
           })
        },
        res(data){
          let ids = $.map( $('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.id;
          });
          this.respond = data
          if (this.respond == 'ok') {
            this.$axios.post(this.allurl + 'manager/tank/remove_tank', ids).then(function (res) {
              // console.log('post ok')
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        deletelist(){                 /*删除设置  */
          if (sessionStorage.getItem('islogin')==250){
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
            let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.id;
            });
            if (ids.length < 1) {
              this.tipscontent = '请选择删除项'
              this.$refs.tips.usetips()
              // alert('请选择删除项')
            }
            else if (ids.length >= 1) {
              this.title = '是否确认选择删除存储池'
              this.dosome = ids
              this.$refs.tips.dselect()
              // console.log('delete')
            }
          }
        },
        sentip(){                                  /*发送查找的ip*/
            var _this=this
          this.$axios.post(_this.allurl+'manctl/ip_search',{ip:this.$refs.inp.value}).then(function (res) {
            // console.log(res.data.status)
            _this.urla=_this.allurl+res.data.status
            _this.start(_this.urla)
            // console.log(_this.urla)
          }).catch(function (error) {
            console.log(error)
          })
        }
      },
      mounted(){
          this.start()
        $("[data-toggle='tooltip']").tooltip({html:true});
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
  .verticalimg{
    color: white;font-size: 1.5em ;margin-bottom: 1em
  }
  .infeed {
    color: white;
    font-size: 1.5em;
    margin-right: 1em
  }
  @media screen and (max-width: 425px) {
    .contenttop{
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

  .contenttop{
    margin-top: 10em;
  }
  .one{
    margin-top: 3.7em;
  }
</style>
