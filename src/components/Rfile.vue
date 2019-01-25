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
              <th data-field="status">状态</th>
              <th data-field="process">进程</th>
              <th data-field="speed">速度</th>
              <th data-field="cache">缓存目录</th>
              <th data-field="index">索引节点</th>
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
      <table class="table table-responsive text-nowrap" id="table"  data-height="150" data-toggle="table"  data-classes="table-no-bordered" >
        <div class="alert alert-danger " id="tipsc" style="display: none;">{{tipsc}}</div>
        <thead>
        <tr>
          <th data-field="pool">资源池</th>
          <th data-field="type">类型</th>
          <th data-field="usage">已用</th>
          <th data-field="aviliable">总容量</th>
          <th data-field="percetage">使用占比</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      </div>
    </div>
      </div>
      <div class="row">
        <div class="container-fluid row" id="fslist">
          <div class="row mdstitle" style="margin-bottom: .5em">
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">共享文件系统</div>
            <div class="col-lg-1 col-lg-offset-7 col-md-1 col-md-offset-7 col-xs-1 col-sm-1"><img class="img-font" id="set" src="../../static/image/quota.png" title="配额设置" @click="quota()" data-toggle="tooltip" data-placement="bottom" /></div>
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
                    <th data-field="fileuser">用户</th>
                    <th data-field="quota">配额</th>
                    <th data-field="IP">IP</th>
                    <th data-field="status">状态</th>
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
            respond:''
          }
      },
      methods:{
        start(){
          $('#table_id').bootstrapTable({
            url:this.allurl+"manager/tank/list_tank"
          })
          $('#table').bootstrapTable({
            url:this.allurl+"manctl/client_list"
          })
          $('#fstable').bootstrapTable({
            url:this.allurl+"manctl/client_list"
          })
        },
        quota(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsa='普通用户无操作权限！'
            $('#tipsa').show().delay (2000).fadeOut()
          }
          else {
            let ids = $.map($('#fstable').bootstrapTable('getSelections'), function (row) {
              return row.fileuser;
            });
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
            this.$axios.post(this.allurl+'',{size:size,number:number}).then(function (res) {
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
        filesend(){
          var name=this.$refs.name.value
          if (name==''){
            this.cross='请填写完整!'
          }
          else {
            this.$axios.post(this.allurl+'',{name:name,meta:this.metapool,data:this.datapool}).then(function (res) {
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
              return row.fileuser;
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
            this.$axios.post(this.allurl + '', {active: active, or: val, spare: spare}).then(function (res) {
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
              return row.fileuser;
            });
            this.respond = data
            // console.log(data,this.respond)
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + '', {ids: ids}).then(function (res) {
                // console.log(res,'post ok')

                if (res.data = 'ok') {
                  $('#fstable').bootstrapTable('remove', {
                    field: 'fileuser',
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

    th{
      text-align: center;
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
  td{
    color: #93BFDF;
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
