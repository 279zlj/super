<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rpool">
    <div class="row">


      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">

        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-height="350" data-toggle="table" data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]" data-click-to-select="true" data-classes="table-no-bordered" >
          <div class="alert alert-danger " id="tipscontent" style="display: none;">{{tipscontent}}</div>
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="poolname">{{$t('message.Pool-name')}}</th>
            <th data-field="strategy">{{$t('message.Strategy')}}</th>
            <th data-field="iops">IOPS</th>
            <th data-field="thtuput">{{$t('message.Throughput')}}</th>
            <th data-field="status">{{$t('message.Status')}}</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>

      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
        <div id="y" disabled="disabled">
          <p @click="addnew()" data-toggle="addnew" style="cursor: pointer"><img src="../../static/image/add.svg" class="img-responsive add" title="添加" data-toggle="tooltip" data-placement="right" /></p>
          <p @click="dilatation()" data-toggle="dilatation" style="cursor: pointer"><img src="../../static/image/data.png" class="img-responsive kr" title="扩容" data-toggle="tooltip" data-placement="right"/></p>
          <p @click="editlist()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-edit edit" title="编辑" data-toggle="tooltip" data-placement="right"></span></p>

          <p @click="deletelist()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
        </div>
        <div style="width: 300px" id="h">
          <div @click="addnew()" data-toggle="addnew" style="float: left"><img src="../../static/image/add.svg" class="img-responsive addh" title="添加" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="dilatation()" style="float: left" data-toggle="dilatation"><img src="../../static/image/data.png" class="img-responsive krh" title="扩容" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="editlist()" data-toggle="editmodal" style="float: left"><span class="glyphicon glyphicon-edit edith" title="编辑" data-toggle="tooltip" data-placement="right"></span></div>

          <div @click="deletelist()" style="float: left"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></div>
        </div>
      </div>
    </div>
    <div class="row">

      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive two">
        <table class="table table-responsive text-nowrap" id="table" data-toolbar="#toolbar" data-height="350" data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]" data-toggle="table"  data-click-to-select="true" data-classes="table-no-bordered">
          <div class="alert alert-danger " id="tipsc" style="display: none;">{{tipsc}}</div>
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="name">{{$t('message.Initiator-name')}}</th>
            <th data-field="created">{{$t('message.Authorized')}}</th>
            <th data-field="luns">Luns</th>
            <th data-field="link">{{$t('message.Connection')}}</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 b" >
        <div id="y">
          <p @click="addclient()"  data-toggle="clientmodal" style="cursor: pointer"><img src="../../static/image/user.png" class="img-responsive adduser" title="新增客户端" data-toggle="tooltip" data-placement="right"/></p>
          <p id="get" @click="empower()" style="cursor: pointer"><img src="../../static/image/get.png" class="img-responsive getpower" title="分配lun" data-toggle="tooltip" data-placement="right"/></p>
          <p  id="nget" @click="noempower()" style="cursor: pointer"><img src="../../static/image/nget.png" class="img-responsive getpower" title="删除lun" data-toggle="tooltip" data-placement="right"/></p>
          <p @click="deletel()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
        </div>
        <div style="width: 300px" id="h">
          <div @click="addclient()"   style="float: left" data-toggle="clientmodal"><img src="../../static/image/user.png" class="img-responsive adduserh" style="" title="新增客户端" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="empower()" id="gett" style="float: left" ><img src="../../static/image/get.png" class="img-responsive getpower" title="分配lun" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="noempower()" id="ngett" style="float: left" ><img src="../../static/image/nget.png" class="img-responsive getpower" title="删除lun" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="deletel()" style="float: left"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="editm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">{{$t('message.Modify-storage-pool-information')}}</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Pool-name')}}：</p><input type="text" class="form-control" id="name" ref="name" :placeholder=this.ids required="required" />
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="editsend()" >{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="clientmodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="client">{{$t('message.Add-iSCSI-client')}}</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Add-iSCSI-client')}}：</p>
            <div class="input-group input-group-sm">
              <span class="input-group-addon">iqn.2018-12.com.wz:</span>
              <input type="text" class="form-control" id="clientname" ref="addclient" required="required"/>
            </div>

            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="clientsend()" >{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="dilatation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="dila">{{$t('message.Memory-pool-expansion')}}</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Memory-pool-size-modification')}}：</p><input type="number" class="form-control" id="poolsize" ref="poolsize" required="required"/>
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="sizesend()">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="addnew" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="addpool">{{$t('message.Add-storage-pool')}}</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Pool-name')}}：</p><input type="text" class="form-control" id="addname" ref="addname" />
            <!--<p>{{$t('message.Storage-pool-capacity')}}：</p><input type="number" class="form-control" id="addsize" ref="addsize"/>-->
            <p>{{$t('message.Storage-pool-type')}}：</p>

            <select class="form-control" v-on:change="sel($event)" v-model="unitsele">
              <option v-for="m in unit" :value="m.name">{{m.name}}</option>
            </select>
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
            <!--<div v-if="unitsele=='erasure'">-->
              <!--<p>k值：</p><input type="number" class="form-control" id="k" ref="kvalue"/>-->
              <!--<p>m值：</p><input type="number" class="form-control" id="m" ref="mvalue"/>-->
            <!--</div>-->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="addsend()">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="getlun" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="lunname">分配lun</h4>
          </div>
          <div class="modal-body">
            <p>块设备列表：</p>
            <select class="form-control" v-on:change="bsel($event)" v-model="bsele">
              <option v-for="m in blocklist" :value="m">{{m}}</option>
            </select>
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="addlun()">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="nolun" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" >删除lun</h4>
          </div>
          <div class="modal-body">
            <p>Lun列表：</p>
            <select class="form-control" v-on:change="lsel($event)" v-model="lsele">
              <option v-for="l in luns" :value="l">{{l}}</option>
            </select>
            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="cancellun()">{{$t('message.Confirm')}}</button>
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
        name: "Rpool",
      components:{tips},
      data(){
          return{
            ids:'',
            ips:'',
            dilata:'',
            unitsele:'',
            unit:[
              {name:'副本策略',value:'replicated'},
              {name:'纠删码',value:'erasure'},

            ],
            tipscontent:'',
            title:'',
            respond:'',
            who:'',
            dosome:'',
            timertip:null,
            cross:'',
            tipsc:'',
            blocklist:[],
            blockall:[],
            bsele:'',
            bselenum:'',
            clientsele:'',
            luns:[],
            lsele:'',
            lunsele:'',
            lselenum:''
          }
      },
      methods:{
        strat() {                            /*bootstrap-table初始化*/
          $('#table_id').bootstrapTable({
            url:this.allurl+"manager/tank/list_tank"
          })
          $('#table').bootstrapTable({
            url:this.allurl+"manctl/client_list"
          })

        },
        timer(){
          var _this=this
          _this.timertip=setInterval(function () {
            _this.strat()
          },30000)
        },
        bsel(event){//下拉框选择
          this.bsele=event.target.value
          for(let i=0;i<this.blocklist.length;i++){
            if (this.bsele==this.blocklist[i])
              this.bselenum=i
          }

        },
        lsel(event){//下拉框选择
          this.lsele=event.target.value
        },
        addnew(){
          // console.log(this.$store.state.islogin)
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
              $("#tipscontent").show().delay (2000).fadeOut ();
          }
          else {
            this.cross=''
            $('#addnew').modal("show")

          }
        },
        sel(event){                     /*选择自建启动延时单位*/
          this.unitsele=event.target.value
        },
        editlist() {                         /*pool设备的修改*/
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay(2000).fadeOut()
          }
          else {
            var ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.poolname;
              this.ids = ids
            });
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个设备进行修改'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行修改')
            }
            else if (ids.length === 1) {
              this.edit = ids;
              this.cross=''
              $('#editm').modal("show")

            }
            this.ids = ids
            // console.log(this.ids)
          }
        },
        dilatation(){                   /*存储池扩容大小修改*/
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay(2000).fadeOut()
          }
          else {
            let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.poolname;
            });
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个设备进行扩容'
              // console.log(this.tipscontent)
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行扩容')
            }
            else if (ids.length === 1) {
              this.dilata = ids;
              this.cross=''
              $('#dilatation').modal("show")

            }
          }
        },
        sizesend(){                          /*发送扩容信息*/

          let poolsize=this.$refs.poolsize.value
          var _this=this
          if(poolsize==''){
            _this.cross='请填写完整'
          }
          else {
            this.$axios.post(this.allurl + 'manager/tank/tank_dilatate', {
              name: this.dilata,
              poolsize: poolsize
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
            $('#dilatation').modal('hide')
          }
        },
        addlun(){
          var _this=this
          if(_this.bsele==''){
            _this.cross='请填写完整'
          }
          else {
            this.$axios.post(this.allurl + 'manctl/lun_add', {
              pool:this.blockall[this.bselenum].bpool,
              image:this.bsele,
              iqn:this.clientsele,
              size:this.blockall[this.bselenum].bsize
            }).then(function (res) {
              // console.log(res)
              if (res.data.status == 1) {
                _this.tipscontent = '操作成功'
                $('#tipsc').show().delay(2000).fadeOut()
                $('#table_id').bootstrapTable('refresh')
              }
              else {
                _this.tipscontent = res.data.status
                $('#tipsc').show().delay(2000).fadeOut()
                $('#table_id').bootstrapTable('refresh')
              }
            }).catch(function (error) {
              console.log(error)
            })
            $('#getlun').modal('hide')
          }
        },
        cancellun(){
          var _this=this
          if(_this.lsele==''){
            _this.cross='请填写完整'
          }
          else {
            this.$axios.post(this.allurl + 'manctl/lun_del', {
              iqn:this.lunsele,
              lun:this.lsele
            }).then(function (res) {
              // console.log(res)
              if (res.data.status == 1) {
                _this.tipscontent = '操作成功'
                $('#tipsc').show().delay(2000).fadeOut()
                $('#table_id').bootstrapTable('refresh')
              }
              else {
                _this.tipscontent = res.data.status
                $('#tipsc').show().delay(2000).fadeOut()
                $('#table_id').bootstrapTable('refresh')
              }
            }).catch(function (error) {
              console.log(error)
            })
            $('#nolun').modal('hide')
          }
        },
        addsend(){
          let addname=this.$refs.addname.value
          // let addsize=this.$refs.addsize.value
          var _this=this
          if (addname==''||_this.unitsele==''){
            _this.cross='请填写完整'
          }
          else {
            // if (this.unitsele=='fb') {
            this.$axios.post(this.allurl + 'manager/tank/create_tank', {
              name: addname,
              // size: addsize,
              type: this.unitsele
            }).then(function (res) {
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
            $('#addnew').modal('hide')
          }
          // }
          // else {
          //   this.$axios.post(this.allurl + 'manager/tank/create_tank', {
          //     name: addname,
          //     size: addsize,
          //     type: this.unitsele,
          //     k: this.$refs.kvalue.value,
          //     m: this.$refs.mvalue.value
          //   }).then(function (res) {
          //     console.log(res)
          //   }).catch(function (error) {
          //     console.log(error)
          //   })
          // }
        },
        addclient(){              /*添加iscsi客户端*/
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $('#tipsc').show().delay(2000).fadeOut()
          }
          else {
            this.cross=''
            $('#clientmodal').modal("show")

          }},
        res(data){
          if (this.who=='pool') {
            let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.name;
            });
            this.respond = data
            // console.log(data,this.respond)
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'manctl/client_rm', {iqn: ids}).then(function (res) {
                // console.log(res,'post ok')
                if (res.data = 'ok') {
                  $('#table').bootstrapTable('remove', {
                    field: 'name',
                    values: ids
                  });
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }
          else if (this.who=='empower'){
            let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.name;
            });
            this.respond = data
            // console.log(data,this.respond)
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'manager/client/authori_delete', {ids: ids}).then(function (res) {
                // console.log(res,'post ok')
                if (res.data = 'ok') {
                  $('#table').bootstrapTable('remove', {
                    field: 'pname',
                    values: ids
                  });
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }
        },
        deletelist(){                         /*pool的删除*/
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay(2000).fadeOut()
          }
          else {
            this.who = 'pool'
            let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.poolname;
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


            }
            else {
              return
            }

          }
        },

        deletel(){                             /*授权的删除*/
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
          else {
            this.who = 'empower'
            let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.name;
            });
            if (ids.length < 1) {
              this.tipscontent = '请选择删除项'
              this.$refs.tips.usetips()
              // alert('请选择删除项')
            }
            else if (ids.length >= 1) {
              this.title = '是否确认选择删除客户端'
              this.dosome = ids
              this.$refs.tips.dselect()


            }
            else {
              return
            }
            // console.log('delete')
          }
        },
        editsend(){                 /*发送修改后的存储池信息*/
          let poolname=this.$refs.name.value
          var _this=this
          if (poolname==''){
            _this.cross='请填写完整'
          }
          else {
            // this.axios.defaults.headers.post['Content-Type']='application/json;charse=UTF-8'
            this.$axios.post(this.allurl + 'manager/tank/rename_tank', {
              newname: poolname,
              tank_id: this.edit,}
            ).then(function (res) {
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
        clientsend(){                       /*发送添加的iscsi信息*/
          let client=this.$refs.addclient.value
          var reg=/^[0-9a-zA-Z]{1,7}$/
          var _this=this
          if(client==''){
            _this.cross='请填写完整'
          }
          else if(!reg.test(client)){
            _this.cross='请输入只有数字和字母且长度不超过7'
          }
          else {
            this.$axios.post(this.allurl + 'manctl/client_add', {iqn: "iqn.2018-12.com.wz:"+client}).then(function (res) {
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
            $('#clientmodal').modal('hide')
            _this.cross=''
          }

        },
        empower(){                      /*确认授权*/
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
          else {
            this.who = 'getpower'
            var ips = $.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.name;
            });
            this.clientsele=ips
            if (ips.length != 1) {
              this.tipscontent = '请选择其中一个分配lun'
              this.$refs.tips.usetips()
              // alert('请选择其中一个进行授权')
            }
            else {
              $('#getlun').modal('show')

            }
          }
        },
        noempower(){                          /*取消*/
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
          else {
            this.who = 'ngetpower'
            var ips = $.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.name;
            });
            this.lunsele=ips
            this.luns=$.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.luns;
            });
            if (ips.length != 1) {
              this.tipscontent = '请选择其中一个删除其中的lun'
              this.$refs.tips.usetips()
              // alert('请选择其中一个取消授权')
            }
            else {
              $('#nolun').modal('show')
            }
          }
        },


      },
      mounted(){
          this.strat()
        $("[data-toggle='tooltip']").tooltip({html:true});
          var _this=this
        this.$axios.get(this.allurl+"manager/tank/block/get_blocks").then(function (res) {


            _this.blockall=res.data
            for (let i=0;i<_this.blockall.length;i++)
              _this.blocklist.push(_this.blockall[i].blockname)

          // console.log(_this.blocklist)

        }).catch(function (error) {
          return error
        })
      },
      destroyed(){
          var _this=this
        clearInterval(_this.timertip)
      }

    }
</script>

<style scoped>
  #Rpool{
    color:white;

  }
  .a{
    margin-top: 8em;
  }
  .b{
    margin-top: 10em;
  }
  .modal-content{
    background-color:#3E324E ;
    color: white;
  }
  thead{
    background-color: #372B51;
  }
  .one{
      margin-top: 3.5em;
    }
  .two{
    margin-top: 2em;
    margin-bottom: 2em;
  }
  tr .selected{
    background-color: #473D59 !important;
  }
  #editm input{
    background-color: #43355F !important;
    color: white !important;
  }
  #editm{
    color: black;
  }
  #table_id{
    overflow-y:scroll ;
  }
  #table_id::-webkit-scrollbar {
    display: none;
  }
  .add{
    width: 25px;font-size: 1.5em ;margin-bottom: 1em

  }
  .addh{
    width: 25px;font-size: 1.5em ;margin-bottom: 1em;margin-right: 1em
  }
  .kr{
    width: 45%;font-size: 1.5em ;margin-bottom: 1em
  }
  .krh{
    width: 45%;font-size: 1.5em ;
  }
  .edit{
    color: white;font-size: 1.5em ;margin-bottom: 1em

  }
  .edith{
    color: white;font-size: 1.5em ;margin-right: 1.2em
  }
  .adduser{
    width: 45%;font-size: 1.5em ;margin-bottom: 1em

  }
  .adduserh{
     width: 45%;font-size: 1.5em ;
   }
  .delete{
    color: white;font-size: 1.5em
  }
  .getpower{
    width: 45%;font-size: 1.5em ;margin-bottom: 1em
  }

  @media screen and (min-width: 769px) and (max-width: 1025px) {
    .kr,.adduser{
      width: 60% !important;
    }
    .add{
      width:65%
    }
    #get,#nget{
      width: 3em;
    }
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    .kr,.adduser{
      width: 100% !important;
    }
    .adduser{
      width: 4em;
    }
    #get,#nget{
      width: 3em;
    }
  }
  #y{
    display: block;
  }
  #h{
    display: none;
  }
  @media screen and (max-width: 425px) {
    .krh{
      width: 45% !important; margin-right: 1em;
    }
    .adduserh{
      width: 55% !important; margin-right: .5em;
    }
    #get,#nget,#gett,#ngett{
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
      margin-top: 2em;
    }
  }
  @media screen and (min-width:1600px ) {
    .kr{
      width: 30% !important;
    }
    .adduser{
      width: 30% !important;
    }
    #get,#nget,#gett,#ngett{
      width: 50px !important;
    }
  }
</style>
