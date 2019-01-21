<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rfile">
    <div class="container-fluid ">
      <div class="row">

        <div class="row">
          <button type="button"  class="btn btn-info mdsbtn"  @click="addmds()" ><img src="../../static/image/addmds.png" style="width: 1.5em;margin-right: .5em"/>新建MDS</button>
        </div>

        <div class="container-fluid row" id="mdslist">

          <p class="mdstitle">MDS列表</p>
          <div class="alert alert-danger" id="tipscontent" style="display: none;width: 97%">{{tipscontent}}</div>
          <div class="mdsitem col-lg-4 col-md-4 col-sm-6 col-xs-12" v-for="a in mdslist">
            <div class="row mdscontent">
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">进程数：</div>
              <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{a.porocess.length}}</div>
              <div style="width:100%;height:8em;margin:1.5em 0;text-align: center;overflow-y: scroll">
              <table class="table table-condensed table-responsive" style="width: 85%;margin: 0 auto">
                <thead>
                  <tr><th>ID</th>
                  <th>Name</th>
                    <th>等级</th></tr>
                </thead>
                <tbody v-for="b in a.porocess">
                  <tr>
                    <td>{{b.id}}</td>
                    <td>{{b.name}}</td>
                    <td>{{b.rank}}</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">主机名：</div>
              <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{a.name}}</div>
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">最大文件大小：</div>
              <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{a.filemax}}</div>
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">最大进程数：</div>
              <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{a.max_mds}}</div>
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">状态：</div>
              <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{a.status}}</div>
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">操作：</div>
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 numicon"><i class="glyphicon glyphicon-off" data-toggle="tooltip" data-placement="bottom" title="开启" @click="mdsstart(a.name)"></i></div>
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 numicon"><i class="glyphicon glyphicon-remove" data-toggle="tooltip" data-placement="bottom" title="删除" @click="mdsdelete(a.name)"></i></div>
          </div>
          </div>
        </div>

      </div>
      <div class="row">
    <div class="row">
      <button type="button"  class="btn btn-info fsbtn" @click="addfs()" ><img src="../../static/image/file.png" style="width: 1.5em;margin-right: .5em"/>新建FS</button>
    </div>
    <div class="container-fluid row" id="fslist">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
          <p class="mdstitle">FS列表
          <button type="button"  class="btn-xs btn-danger fsbtn" style="margin: 0em 0 0 1em" @click="mountdetail()">查看挂载情况</button></p>

        </div>

      </div>
      <div class="alert alert-danger" id="tipsc" style="display: none;width: 97%">{{tipsc}}</div>
      <div class="mdsitem col-lg-4 col-md-4 col-sm-6 col-xs-12" v-for="c in fslist">
        <div class="row mdscontent">
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">名称：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.name}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">元数据存储池：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.metapool}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">数据存储池：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.datapool}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">挂载位置：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.guazai}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">文件位置：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.fileposition}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">文件最大数量：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.filenum}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">文件最大大小：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.filemax}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">状态：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.status}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">操作：</div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 "><img src="../../static/image/guazai.png" style="width: 1.5em;cursor: pointer" data-toggle="tooltip" data-placement="top" title="挂载" @click="mountedfs(c.name)"/></div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 "><img src="../../static/image/peie.png" style="width: 1.5em;cursor: pointer" data-toggle="tooltip" data-placement="top" title="配额设置" @click="fsquota()" /></div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 "><img src="../../static/image/unmount.png" style="width: 1.5em;cursor: pointer" data-toggle="tooltip" data-placement="top" title="卸载" @click="unmounted(c.guazai,c.name)" /></div>
        </div>
      </div>
    </div>
      </div>
    </div>
    <div class="modal fade" id="addmds" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">新建MDS</h4>
          </div>
          <div class="modal-body">
            <p>HostName：</p><input type="text" class="form-control" id="name" ref="name"  required="required" />
            <p>DaemonName：</p><input type="text" class="form-control" id="daemon" ref="daemon" required="required" />
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="addsend()" >{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="addfs" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">新建FS</h4>
          </div>
          <div class="modal-body">
            <p>Name：</p><input type="text" class="form-control" id="fsname" ref="name"  required="required" />
            <p>数据存储池：</p><input type="text" class="form-control" id="datapool" ref="daemon" required="required" />
            <p>元数据存储池：</p><input type="text" class="form-control" id="metapool" ref="daemon" required="required" />
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="fssend()" >{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="fsmounted" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">挂载文件系统</h4>
          </div>
          <div class="modal-body">
            <p>MonIP：</p><input type="text" class="form-control" id="monip" ref="name"  required="required" />
            <p>文件路径：</p><input type="text" class="form-control" id="path" ref="daemon" required="required" />
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="mountsend()" >{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="quotaset" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">配额设置项</h4>
          </div>
          <div class="modal-body">
            <p>最大文件大小：</p><input type="text" class="form-control" id="filemax" ref="filemax"  required="required" />
            <p>最大文件数量：</p><input type="text" class="form-control" id="filenum" ref="filenum" required="required" />
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="quotasend()" >{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <tips ref="tips" :title=transmittitle  :content=transmiturl :dotitle=title :docontent=dosome v-on:respond="res"></tips>
  </div>
</template>

<script>
  import tips from './tips'
    export default {
        name: "Rfile",
      components:{tips},
      data(){
          return{
            mdslist:[
              {name:'mds1',porocess:[{id:'1',name:'one',rank:'0'},{id:'2',name:'two',rank:"0"},{id:'3',name:'three',rank:'1'},{id:'3',name:'three',rank:'1'},{id:'3',name:'three',rank:'1'}],filemax:'3214',max_mds :'3',status:'ok'},
              {name:'mds2',porocess:[{id:'1',name:'one',rank:'0'},{id:'2',name:'two',rank:"0"},{id:'3',name:'three',rank:'1'}],filemax:'645',max_mds :'5',status:'ok'},
              {name:'mds3',porocess:[{id:'1',name:'one',rank:'0'},{id:'2',name:'two',rank:"0"},{id:'3',name:'three',rank:'1'}],filemax:'645',max_mds :'5',status:'ok'}
            ],
            fslist:[
              {name:'one',metapool:'pool1',datapool:'pool2',guazai:'192.168.1.1',fileposition:'/mnt/myceph',filemax:'3121',filenum:'232',status:'ok'},
              {name:'one',metapool:'pool1',datapool:'pool2',guazai:'192.168.1.1',fileposition:'/mnt/myceph',filemax:'3121',filenum:'232',status:'ok'},
              {name:'one',metapool:'pool1',datapool:'pool2',guazai:'192.168.1.1',fileposition:'/mnt/myceph',filemax:'3121',filenum:'232',status:'ok'}
            ],
            tipscontent:'',
            title:'',
            dosome:'',
            tipsc:'',
            cross:'',
            transmiturl:'',
            transmittitle:''
          }
      },
      methods:{
        addmds(){
          // console.log(this.$store.state.islogin)
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $("#tipscontent").show().delay (2000).fadeOut ();
          }
          else {
            this.cross=''
            $('#addmds').modal("show")

          }
        },
        res(){},
        addsend(){
          let addname=this.$refs.name.value
          let daemonname=this.$refs.daemon.value
          var _this=this
          if (addname==''){
            _this.cross='请填写HostName'
          }
          else {
            // if (this.unitsele=='fb') {
            this.$axios.post(this.allurl + '', {
              name: addname,
              // size: addsize,
              daemon: daemonname
            }).then(function (res) {
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
            $('#addmds').modal('hide')
          }
        },
        mdsstart(n){
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay(2000).fadeOut()
          }
          else {
            this.title = '是否确认启动MDS服务器'
            this.dosome = n
            this.$refs.tips.dselect()
          }
        },
        mdsdelete(n){
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay(2000).fadeOut()
          }
          else {
            this.title = '是否确认删除MDS服务器'
            this.dosome = n
            this.$refs.tips.dselect()
          }
        },
        addfs(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();
          }
          else {
            this.cross=''
            $('#addfs').modal("show")

          }
        },
        fssend(){
          let name=this.$refs.fsname.value
          let datapool=this.$refs.datapool.value
          let metapool=this.$refs.metapool.value
          var _this=this
          if (name==''||datapool==''||metapool==''){
            _this.cross='请填写完整'
          }
          else {
            // if (this.unitsele=='fb') {
            this.$axios.post(this.allurl + '', {
              name: addname,
              datapool: datapool,
              metapool:metapool
            }).then(function (res) {
              if (res.data.status == 1) {
                _this.tipsc = '操作成功'
                $('#tipsc').show().delay(2000).fadeOut()
              }
              else {
                _this.tipsc = res.data.status
                $('#tipsc').show().delay(2000).fadeOut()
              }
            }).catch(function (error) {
              console.log(error)
            })
            $('#addfs').modal('hide')
          }
        },
        mountdetail(){
          this.transmiturl=this.allurl+''
          this.transmittitle='挂载详情'
          this.$refs.tips.fsmount()
        },
        mountedfs(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();
          }
          else {
            this.cross=''
            $('#fsmounted').modal("show")

          }
        },
        mountsend(){
          let monip=this.$refs.monip.value
          let path=this.$refs.path.value
          var _this=this
          if (monip==''||path==''){
            _this.cross='请填写完整'
          }
          else {
            // if (this.unitsele=='fb') {
            this.$axios.post(this.allurl + '', {
              monip: monip,
              path: path,
            }).then(function (res) {
              if (res.data.status == 1) {
                _this.tipsc = '操作成功'
                $('#tipsc').show().delay(2000).fadeOut()
              }
              else {
                _this.tipsc = res.data.status
                $('#tipsc').show().delay(2000).fadeOut()
              }
            }).catch(function (error) {
              console.log(error)
            })
            $('#fsmounted').modal('hide')
          }
        },
        fsquota(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();
          }
          else {
            this.cross=''
            $('#quotaset').modal("show")

          }
        },
        quotasend(){
          let filemax=this.$refs.filemax.value
          let filenum=this.$refs.filenum.value
          var _this=this
          if (filemax==''||filenum==''){
            _this.cross='请填写完整'
          }
          else {
            // if (this.unitsele=='fb') {
            this.$axios.post(this.allurl + '', {
              filemax: filemax,
              filenum: filenum,
            }).then(function (res) {
              if (res.data.status == 1) {
                _this.tipsc = '操作成功'
                $('#tipsc').show().delay(2000).fadeOut()
              }
              else {
                _this.tipsc = res.data.status
                $('#tipsc').show().delay(2000).fadeOut()
              }
            }).catch(function (error) {
              console.log(error)
            })
            $('#quotaset').modal('hide')
          }
        },
        unmounted(pos,n){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $('#tipsc').show().delay(2000).fadeOut()
          }
          else {
            this.title = '是否确认卸载该文件系统'
            this.dosome = n
            this.$refs.tips.dselect()
          }
        }
      },
      mounted(){
        $("[data-toggle='tooltip']").tooltip();
      }
    }
</script>

<style scoped>
    #Rfile{
      margin-top: 2em;
      /*margin-left: 1em;*/
    }
    .fsbtn{
      margin-top: 1em;
    }
    th{
      text-align: center;
    }
    #mdslist{
      margin-top: 1em;
      border: 1px solid gray;
      border-radius: .5em;
      height: 27em;
      overflow-y: scroll;
    }
    #fslist{
      margin-top: 1em;
      border: 1px solid gray;
      border-radius: .5em;
      height: 23em;
      overflow-y: scroll;
    }
  .mdsitem{

    margin:0 0 1em 0;
  }
  .mdscontent{
    margin: 0em 0em;
    border-radius: .5em;
    background-color: #293F68;
    padding: 1em;
  }
  .mdstitle{
    color: #80B2CA;
    font-size: 1.5em;
    /*line-height: 2.5em;*/
    margin-top: .5em;
  }
  .numfont{
    font-size: 1.3em;
    color:#93BFDF;
  }
  td{
    color: #93BFDF;
  }

  .marktitle,th{
    color: #56b4dc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
  .numicon{
    font-size: 1.2em;
    cursor: pointer;
  }
  #clienttable{
    margin-top: 3em;
  }
</style>
