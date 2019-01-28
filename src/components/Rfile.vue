<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rfile">
    <div class="container-fluid ">
      <div class="row">
        <div class="container-fluid row" id="mdslist">
          <div class="row mdstitle" style="margin-bottom: .5em">
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">MDS</div>
            <div class="col-lg-1 col-lg-offset-9 col-md-1 col-md-offset-9 col-xs-1  col-sm-1">
              <i style="float: right;margin-top: .2em;cursor: pointer" title="设置" id="mds" data-toggle="tooltip" data-placement="bottom" class="glyphicon glyphicon-cog" @click="mdsset()"></i>
            </div>
          </div>

          <div class="container-fluid tcolor">
          <table class="table table-responsive text-nowrap" id="table_id"  data-height="150" data-toggle="table"  data-classes="table-no-bordered" >
            <div class="alert alert-danger " id="tipscontent" style="display: none;">{{tipscontent}}</div>
            <thead>
            <tr>
              <th data-field="rank">等级</th>
              <th data-field="state">状态</th>
              <th data-field="name">进程</th>
              <th data-field="req">速度</th>
              <th data-field="Dentries">缓存目录</th>
              <th data-field="inodes">索引节点</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <div class="row">
    <div class="container-fluid row" id="plist">
      <p class="mdstitle">资源池</p>
      <div class="container-fluid tcolor">
        <table class="table table-responsive table-condensed">
          <thead>
            <tr>
              <th>资源池</th>
              <th>类型</th>
              <th>已用</th>
              <th>总容量</th>
              <th>使用占比</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in $store.state.data_pool">
              <td>{{p.name}}</td>
              <td>{{p.pool_type}}</td>
              <td>{{p.used}}</td>
              <td>{{p.all}}</td>
              <td>{{p.percent_used}}%</td>
            </tr>
            <tr v-for="p in $store.state.metadate_pool">
              <td>{{p.name}}</td>
              <td>{{p.pool_type}}</td>
              <td>{{p.used}}</td>
              <td>{{p.all}}</td>
              <td>{{p.percent_used}}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      </div>
      <div class="row">
        <div class="container-fluid row" id="fslist">
          <div class="row mdstitle" style="margin-bottom: .5em">
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">共享文件系统</div>
            <div class="col-lg-1 col-lg-offset-5 col-md-1 col-md-offset-5 col-xs-1 col-sm-1"><img class="img-font" id="adduser" src="../../static/image/adduser.png" title="新增用户" @click="adduser()" data-toggle="tooltip" data-placement="bottom" /></div>
            <div class="col-lg-1 col-md-1 col-xs-1 col-sm-1"><img class="img-font" id="deleteuser" src="../../static/image/deleteuser.png" title="删除用户" @click="deleteuser()" data-toggle="tooltip" data-placement="bottom" /></div>
            <div class="col-lg-1 col-md-1 col-xs-1 col-sm-1"><img class="img-font" id="set" src="../../static/image/quota.png" title="配额设置" @click="quota()" data-toggle="tooltip" data-placement="bottom" /></div>
            <div class="col-lg-1 col-md-1 col-xs-1 col-sm-1"><img class="img-font" id="add" src="../../static/image/addfile.png" title="新增文件系统" @click="addfile()" data-toggle="tooltip" data-placement="bottom" /></div>
            <div class="col-lg-1 col-md-1 col-xs-1 col-sm-1"><img class="img-font" id="delete" src="../../static/image/deletefile.png" title="删除文件系统" @click="deletefile()" data-toggle="tooltip" data-placement="bottom" /></div>

          </div>
          <div class="container-fluid">
            <div class="col-lg-1 col-md-1 col-sm-2 col-xs-2 tab-left">
              <ul id="myTab" class="nav nav-tabs">
                <li class="active"><a href="#home" data-toggle="tab">CIFS</a></li>
                <li><a href="#ios" data-toggle="tab">NFS</a></li>
              </ul>
            </div>
            <div class="col-lg-11 col-md-11 col-sm-10 col-sm-10 tcolor tab-content" id="myTabContent" >
              <div class="tab-pane fade in active" id="home">
                <table class="table table-responsive text-nowrap" id="fstable"  data-height="200" data-click-to-select="true" data-toggle="table"  data-classes="table-no-bordered" >
                  <div class="alert alert-danger " id="tipsa" style="display: none;">{{tipsa}}</div>
                  <thead>
                  <tr>
                    <th data-field="state" data-checkbox="true" ></th>
                    <th data-field="username">用户</th>
                    <th data-field="quota">配额</th>
                    <th data-field="ip">IP</th>
                    <th data-field="stat">状态</th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
              <div class="tab-pane fade" id="ios">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="quotasetting" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">配额设置</h4>
          </div>
          <div class="modal-body">
            <p>容量大小：</p><input type="number" class="form-control" id="size" ref="size"/>
            <p>文件数量：</p><input type="number" class="form-control" id="number" ref="number" />
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="quotasend()" >{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="user" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" >新增用户</h4>
          </div>
          <div class="modal-body">
            <p>用户名：</p><input type="text" class="form-control" id="username" ref="username"/>
            <p>密码：</p><input type="password" class="form-control" id="passwd" ref="passwd" />
            <p>确认密码：</p><input type="password" class="form-control" id="apasswd" ref="apasswd" />
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="usersend()" >{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="mdsset" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" >MDS设置</h4>
          </div>
          <div class="modal-body">
            <p>最大活跃数：</p><input type="number" class="form-control" id="active" ref="active"/>
            <p>备用mds数量：</p><input type="number" class="form-control" id="spare" ref="spare" style="margin-bottom: .5em"/>
            <p>是否允许多个mds同时活跃：<input type="radio" value="yes" name="radio"/><span style="margin: 0 1em">是</span><input type="radio" value="no" name="radio"/><span style="margin: 0 .5em">否</span></p>
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="mdssend()" >{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="newfile" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" >创建文件系统</h4>
          </div>
          <div class="modal-body">
            <p>名称：</p><input type="text" class="form-control" id="name" ref="name"/>
            <p>元数据池：</p>
            <select class="form-control" id="metapool" v-on:change="metap($event)" v-model="metapool" @click="metaall()">
              <option v-for="m in metalist" :value="m">{{m}}</option>
            </select>
            <p>数据池：</p>
            <select class="form-control" id="datapool" v-on:change="datap($event)" v-model="datapool" @click="dataall()">
              <option v-for="d in datalist" :value="d">{{d}}</option>
            </select>
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="filesend()" >{{$t('message.Confirm')}}</button>
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
        name: "Rfile",
      components:{tips},
      data(){
          return{
            tipscontent:'',
            title:'',
            dosome:'',
            tipsc:'',
            cross:'',
            tipsa:'',
            transmiturl:'',
            transmittitle:'',
            metalist:[],
            datalist:[],
            metapool:'',
            datapool:'',
            who:'',
            respond:'',
            filewho:'',
            // pools:[]
          }
      },
      methods:{
        start(){
          $('#table_id').bootstrapTable({
            url:this.allurl+"fs/mds_dump"
          })
          // $('#table').bootstrapTable({
          //   url:this.allurl+"fs/fs_pools"
          // })
          $('#fstable').bootstrapTable({
            url:this.allurl+"fs/fs_users"
          })
          var _this=this
          this.$axios.get(this.allurl+'fs/fs_pools').then(function (res) {
            _this.$store.commit('filepool',{data_pool:res.data.data_pool,metadate_pool:res.data.metadate_pool})
          }).catch(function (error) {
            console.log(error)
          })
          // console.log(_this.$store.state.data_pool,)
        },
        quota(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsa='普通用户无操作权限！'
            $('#tipsa').show().delay (2000).fadeOut()
          }
          else {
            let ids = $.map($('#fstable').bootstrapTable('getSelections'), function (row) {
              return row.username;
            });
            this.filewho=ids
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个文件系统'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行快照')
            }
            else if (ids.length === 1) {
              this.cross = ''
              $('#quotasetting').modal('show')
            }
          }
        },
        quotasend(){
          var size=this.$refs.size.value
          var number=this.$refs.number.value
          if (size==''||number==''){
            this.cross='请填写完整'
          }
          else {
            this.$axios.post(this.allurl+'fs/fs_quotaset',{username:this.filewho,var:['max_file_num','max_file_size'],val:[number,size]}).then(function (res) {
              if (res.status==200){
                $('#quotasetting').modal('hide')
              }
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        addfile(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsa='普通用户无操作权限！'
            $('#tipsa').show().delay (2000).fadeOut()
          }
          else {
            this.cross=''
            $('#newfile').modal('show')
          }
        },
        adduser(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsa='普通用户无操作权限！'
            $('#tipsa').show().delay (2000).fadeOut()
          }
          else {
            this.cross=''
            $('#user').modal('show')
          }
        },
        usersend(){
          var user=this.$refs.username.value
          var passwd=this.$refs.passwd.value
          var apasswd=this.$refs.apasswd.value
          if (user==''||passwd==''||apasswd==''){
            this.cross='请填写完整！'
          }
          else if (passwd!=apasswd){
            this.cross='两次输入不匹配，请重新输入'
          }
          else {
            this.$axios.post(this.allurl+'fs/fs_useradd',{username:user,passwd:passwd}).then(function (res) {
              if (res.status==200){

              }
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        filesend(){
          var name=this.$refs.name.value
          if (name==''){
            this.cross='请填写完整!'
          }
          else {
            this.$axios.post(this.allurl+'fs/fs_add',{fs_name:name,metadata_pool:this.metapool,data_pool:this.datapool}).then(function (res) {
              if (res.status==200){
                $('#newfile').modal('hide')
              }
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        deletefile(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsa='普通用户无操作权限！'
            $('#tipsa').show().delay (2000).fadeOut()
          }
          else {
            let ids = $.map($('#fstable').bootstrapTable('getSelections'), function (row) {
              return row.username;
            });
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个文件系统'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行快照')
            }
            else if (ids.length === 1) {
              this.who='deletefile'
              this.title = '是否确认选择该文件系统'
              this.dosome = ids
              this.$refs.tips.dselect()

            }
          }
        },
        deleteuser(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsa='普通用户无操作权限！'
            $('#tipsa').show().delay (2000).fadeOut()
          }
          else {
            let ids = $.map($('#fstable').bootstrapTable('getSelections'), function (row) {
              return row.username;
            });
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个用户'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行快照')
            }
            else if (ids.length === 1) {
              this.who = 'deleteuser'
              this.title = '是否确认选择该用户'
              this.dosome = ids
              this.$refs.tips.dselect()
            }
          }
        },

        mdsset(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
            this.cross=''
            $('#mdsset').modal('show')
          }
        },
        mdssend(){
          var val = $('input[name="radio"]:checked').val();
          var active=this.$refs.active.value
          var spare=this.$refs.spare.value
          if (val == '' || active ==''||spare==''){
            this.cross='请填写完整'
          }
          else {
            this.$axios.post(this.allurl + 'fs/mds_set', {var:['max_mds','standby_count_wanted','allow_multimds'],val:[active,spare,val]}).then(function (res) {
              if (res.status == 200) {
                $('#mdsset').modal('hide')
              }
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        metaall(){
          var _this=this
          this.$axios.get(this.allurl+'').then(function (res) {

            if (res.data.length<1){
              _this.metalist.push('无可用存储池，请先创建存储池')
            }
            else{
              _this.metalist=res.data
            }
          }).catch(function (error) {
            console.log(error)
          })
        },
        dataall(){
          var _this=this
          this.$axios.get(this.allurl+'').then(function (res) {
            console.log(res)
            if (res.data.length<1){
              _this.metalist.push('无可用存储池，请先创建存储池')
            }
            else {
              _this.datalist = res.data
            }
          }).catch(function (error) {
            console.log(error)
          })
        },
        metap(){
          this.metapool=event.target.value
        },
        datap(){
          this.datapool=event.target.value
        },
        res(data) {
          if (this.who == 'deletefile') {
            let ids = $.map($('#fstable').bootstrapTable('getSelections'), function (row) {
              return row.username;
            });
            this.respond = data
            // console.log(data,this.respond)
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'fs/fs_remove', {fs_name: ids}).then(function (res) {
                // console.log(res,'post ok')

                if (res.data = 'ok') {
                  $('#fstable').bootstrapTable('remove', {
                    field: 'username',
                    values: ids
                  });
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }
          else if (this.who == 'deleteuser') {
            let ids = $.map($('#fstable').bootstrapTable('getSelections'), function (row) {
              return row.username;
            });
            this.respond = data
            // console.log(data,this.respond)
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'fs/fs_userrm', {fs_name: ids}).then(function (res) {
                // console.log(res,'post ok')

                if (res.data = 'ok') {
                  $('#fstable').bootstrapTable('remove', {
                    field: 'username',
                    values: ids
                  });
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }
        }
      },
      mounted(){
        $("[data-toggle='tooltip']").tooltip({html:true});
        this.start()
      }
    }
</script>

<style scoped>
    #Rfile{
      margin-top: 4em;
      color: white !important;
      /*margin-left: 1em;*/
    }
    #mdslist,#plist{
      margin-top: 1em;
      border: 1px solid gray;
      border-radius: .5em;
      height: 16em;
      overflow-y: scroll;
    }
    #myTab li{
      width: 100%;
    }
    .img-font{
      width: 1.3em;
      float: right;
      /*margin: 0 .5em;*/
      margin: 0 auto;
      cursor: pointer;
    }
   #fslist{
      margin-top: 1em;
      border: 1px solid gray;
      border-radius: .5em;
      height: 20em;
      overflow-y: scroll;
    }

  .mdstitle{
    color: #80B2CA;
    font-size: 1.5em;
    /*line-height: 2.5em;*/
    margin-top: .5em;
  }
    .tab-left{
      padding: 0px !important;
    }
    .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover{
      background-color: #23365C !important;
      color: white !important;
      border: 0px solid #23365C !important;
    }
    .nav>li>a:focus, .nav>li>a:hover{
      background-color: #23365C !important;
    }
    a{
      color: white !important;
    }

  i{
    color: white !important;
  }
  .tcolor{
    background-color: #22355C;
    border-radius: .5em;
  }
  table{
    color: white !important;
  }

</style>
