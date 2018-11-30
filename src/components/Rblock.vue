<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rblock">
    <div class="row">
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-height="350" data-click-to-select="true" data-toggle="table"  data-classes="table-no-bordered" >
          <div class="alert alert-danger " id="tipscontent" style="display: none;">普通用户无操作权限！</div>
          <div class="alert alert-danger " id="fromtips" style="display: none;">块设备没有依赖！</div>
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="blockname">{{$t('message.Block-name')}}</th>
            <th data-field="bpool">{{$t('message.Pool')}}</th>
            <th data-field="bsize">{{$t('message.Capacity')}}</th>
            <th data-field="bfrom">{{$t('message.From')}}</th>
            <th data-field="status">{{$t('message.Status')}}</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
        <div id="y">
          <p @click="addnew()" data-toggle="addnew" style="cursor: pointer"><img src="../../static/image/add.svg" class="img-responsive add" title="添加" data-toggle="tooltip" data-placement="right"/></p>
          <p @click="bdilata()" data-toggle="dilatation" style="cursor: pointer"><img src="../../static/image/data.png" class="img-responsive kr" title="扩容" data-toggle="tooltip" data-placement="right"/></p>
          <p @click="addsn()" data-toggle="addsnap" style="cursor: pointer"><span class="glyphicon glyphicon-camera create" title="创建快照" data-toggle="tooltip" data-placement="right"></span></p>
          <p @click="independent()" data-toggle="dilatation" style="cursor: pointer"><img src="../../static/image/combine.png" class="img-responsive kr" title="块设备独立" data-toggle="tooltip" data-placement="right"/></p>
          <p @click="deletelist()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
        </div>
        <div style="width: 300px" id="h">
          <div @click="addnew()" data-toggle="addnew" style="float: left"><img src="../../static/image/add.svg" class="img-responsive addh" title="添加" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="bdilata()" style="float: left" data-toggle="dilatation"><img src="../../static/image/data.png" class="img-responsive kr" title="扩容" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="addsn()" style="float: left" data-toggle="addsnap"><span class="glyphicon glyphicon-camera createh" title="创建快照" data-toggle="tooltip" data-placement="right"></span></div>
          <div @click="bdilata()" style="float: left" data-toggle="dilatation"><img src="../../static/image/combine.png" class="img-responsive kr" title="块设备独立" data-toggle="tooltip" data-placement="right"/></div>
          <div @click="deletelist()" style="float: left"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></div>
        </div>
      </div>
    </div>
    <div class="row">

      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive two">
        <table class="table table-responsive text-nowrap" id="table" data-toolbar="#toolbar" data-click-to-select="true" data-height="350" data-toggle="table"  data-classes="table-no-bordered">
          <div class="alert alert-danger " id="tipsc" style="display: none;">普通用户无操作权限！</div>
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="snapid">{{$t('message.Snap-ID')}}</th>
            <th data-field="snapname">{{$t('message.Snap-name')}}</th>
            <th data-field="content">{{$t('message.Description')}}</th>
            <th data-field="date">{{$t('message.Creation-time')}}</th>
            <th data-field="status">{{$t('message.Status')}}</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 b" >
        <div id="y">
          <p @click="editlist()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-edit edit" title="编辑" data-toggle="tooltip" data-placement="right"></span></p>
          <p @click="changetime()"  style="cursor: pointer"><span class="glyphicon glyphicon-backward verticalimg edit" title="回滚" data-toggle="tooltip" data-placement="right"></span></p>
          <p @click="clonesnap()" data-toggle="clonesn" style="cursor: pointer" ><span class="glyphicon glyphicon glyphicon-th-list clone" title="克隆快照" data-toggle="tooltip" data-placement="right"></span></p>
          <p @click="deletel()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
        </div>
        <div id="h" style="width: 300px">
          <span @click="editlist()" data-toggle="editmodal" ><span class="glyphicon glyphicon-edit edith" title="编辑" data-toggle="tooltip" data-placement="right"></span></span>
          <span @click="changetime()"><span class="glyphicon glyphicon-backward verticalimg edith" title="回滚" data-toggle="tooltip" data-placement="right"></span></span>
          <span @click="clonesnap()" data-toggle="clonesn" ><span class="glyphicon glyphicon glyphicon-th-list edith" title="克隆快照" data-toggle="tooltip" data-placement="right"></span></span>
          <span @click="deletel()" ><span class="glyphicon glyphicon-remove-circle edith" title="删除" data-toggle="tooltip" data-placement="right"></span></span>
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
            <p>{{$t('message.Snap-name')}}：</p><input type="text" class="form-control" id="name" ref="name" :placeholder=name />
            <p>{{$t('message.Description')}}：</p><input type="text" class="form-control" id="content" ref="content"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="editsend()" data-dismiss="modal">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="dilatation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="bdilata">{{$t('message.Block-capacity-expansion')}}</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Block-device-size-modification')}}：</p><input type="number" class="form-control" id="poolsize" ref="blocksize"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="sizesend()" data-dismiss="modal">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="addsnap" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="bsnap">{{$t('message.Create-Snapshot')}}</h4>
          </div>
          <div class="modal-body">
            <!--<p>{{$t('message.Subordinate-storage-pool')}}：</p>-->
            <!--<select @click="selec()" v-on:change="indexsel($event)" v-model="sele" class="form-control">-->

              <!--<option v-for="i in poollist" :value="i.name" >{{i.name}}</option>-->
            <!--</select>-->
            <p>{{$t('message.Snap-name')}}：</p><input type="text" class="form-control" id="snapname" ref="snapname"/>
            <p>{{$t('message.Description')}}：</p><input type="text" class="form-control" id="snapcontent" ref="snapcontent"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="snapsend()" data-dismiss="modal">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>

    <div class="modal fade" id="clonesn" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="clonename">{{$t('message.Snapclone')}}</h4>
          </div>
          <div class="modal-body">

            <p>{{$t('message.Snapclone-name')}}：</p><input type="text" class="form-control" id="bclone" ref="bclone"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="sendclone()" data-dismiss="modal">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="addnew" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="addpool">{{$t('message.Add-block-device')}}</h4>
          </div>
          <div class="modal-body">
            <p>{{$t('message.Block-name')}}：</p><input type="text" class="form-control" id="addname" ref="addname"/>
            <p>{{$t('message.Block-capacity')}}：</p><input type="number" class="form-control" id="addsize" ref="addsize"/>
            <p>{{$t('message.Pool')}}：</p>
            <select @click="selec()" v-on:change="bindexsel($event)" v-model="bsele" class="form-control">
              <option v-for="i in poollist" :value="i.val" >{{i.name}}</option>
            </select>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="addsend()" data-dismiss="modal">{{$t('message.Confirm')}}</button>
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
        name: "Rblock",
      components:{tips},
      data(){
        return{
          ids:'',
          ips:'',
          name:'',
          snapi:'',
          spool:'',
          clone:'',
          poolsele:'',
          sele:'',
          bsele:'',
          edit:'',
          snapt:'',
          poollist:[],
          tipscontent:'',
          title:'',
          who:'',
          dosome:''
        }
      },
      methods:{
          start(){              /*bootstrap-table初始化*/
            $('#table_id').bootstrapTable({
              url:this.allurl+"manager/tank/block/get_blocks"
            })
            $('#table').bootstrapTable({
              url:this.allurl+"manager/client/block/list_snap"
            })
          },
        editlist() {                         /*修改功能*/
          if (sessionStorage.getItem('islogin')==250){
            $('#tipsc').show().delay (2000).fadeOut()
          }
          else {
            var ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.snapid;
            });
            var name = $.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.snapname;
            });
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个设备进行修改'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行修改')
            }
            else if (ids.length === 1) {
              this.edit = ids;

              $('#editm').modal("show")

            }
            this.name = name
          }
        },
        editsend(){                                /*发送修改功能*/
            let name =this.$refs.name.value
            let content=this.$refs.content.value
            this.$axios.post(this.allurl+'manager/client/block/set_snap',{name:name,content:content,id:this.edit}).then(function (res) {
              // console.log(res)
            }).catch(function (error) {
              console.log(error)
            })
        },
        res(data){
          if (this.who=='block') {
            let ids = $.map( $('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.blockname;
            });
            this.respond = data
            // console.log(data,this.respond)
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'manager/client/block/del_block', {ids: ids}).then(function (res) {
                // console.log(res,'post ok')
                if (res.data = 'ok') {
                  $('#table_id').bootstrapTable('remove', {
                    field: 'blockname',
                    values: ids
                  });
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }
          else if (this.who=='snap') {
            let ips = $.map( $('#table').bootstrapTable('getSelections'), function (row) {
              return row.snapid;
            });
            this.respond = data
            // console.log(data,this.respond)
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'manager/client/block/del_snap', {id: ips}).then(function (res) {
                // console.log(res,'post ok')
                if (res.data = 'ok') {
                  $('#table').bootstrapTable('remove', {
                    field: 'snapid',
                    values: ips
                  });
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }
          else if (this.who=='comb') {
            this.respond = data
            // console.log('comb',this.respond)
            if (this.respond == 'ok') {
              this.$axios.post(this.allurl + 'block/snap/flatten', {name: this.snapi, pool: this.spool}).then(function (res) {

              }).catch(function (error) {
                console.log(error)
              })
            }
          }
        },
        deletelist(){                       /*块设备删除功能*/
          if (sessionStorage.getItem('islogin')==250){
            $('#tipsc').show().delay (2000).fadeOut()
          }
          else {
            this.who = 'block'
            let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.blockname;
            });
            if (ids.length < 1) {
              this.tipscontent = '请选择删除项'
              this.$refs.tips.usetips()
              // alert('请选择删除项')
            }
            else if (ids.length >= 1) {
              this.title = '是否确认选择删除块设备'
              this.dosome = ids
              this.$refs.tips.dselect()

            }
          }
        },
        deletel(){                    /*快照删除功能*/
          if (sessionStorage.getItem('islogin')==250){
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
            this.who = 'snap'
            let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.snapid;
            });
            if (ids.length < 1) {
              this.tipscontent = '请选择删除项'
              this.$refs.tips.usetips()
              // alert('请选择删除项')
            }
            else if (ids.length >= 1) {
              this.title = '是否确认选择删除块设备'
              this.dosome = ids
              this.$refs.tips.dselect()

              // console.log('delete')
            }
          }
        },
        bdilata(){                        /*块设备扩容*/
          if (sessionStorage.getItem('islogin')==250){
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
            var ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.blockname;
              this.ids = ids
            });
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个设备进行修改'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行修改')
            }
            else if (ids.length === 1) {
              this.edit = ids;

              $('#dilatation').modal("show")

            }
          }
        },
        sizesend(){                    /*发送块设备扩容信息*/

            let size=this.$refs.blocksize.value
            this.$axios.post(this.allurl+'manager/client/block/block_dilatate',{name:this.edit,size:size}).then(function (res) {
              // console.log(res)
            }).catch(function (error) {
              console.log(error)
            })
        },
        addsn(){                         /*块设备创建快照*/
          if (sessionStorage.getItem('islogin')==250){
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
            let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.blockname;
            });
            let ipool = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.bpool;
            });
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个设备进行快照'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行快照')
            }
            else if (ids.length === 1) {
              this.snapi = ids;
              this.spool=ipool
              $('#addsnap').modal("show")

            }
          }
        },
        snapsend(){                            /*发送创建快照信息*/
            // console.log(this.sele)
            let name=this.$refs.snapname.value
            let content=this.$refs.snapcontent.value
            this.$axios.post(this.allurl+'manager/client/block/cre_snap',{name:name,content:content,id:this.snapi,pool:this.spool}).then(function (res) {
              // console.log(res)
            }).catch(function (error) {
              console.log(error)
            })
        },
        changetime(){                           /*更改时间*/
          if (sessionStorage.getItem('islogin')==250){
            $('#tipsc').show().delay (2000).fadeOut()
          }
          else {
            this.who = 'back'
            let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
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
        },
        changet(){                                 /*发送更改时间*/
            let t=this.$refs.ti.value
            this.$axios.post(this.allurl+'manager/client/block/time_snap',{time:t,id:this.snapt}).then(function (res) {
              // console.log(res)
            }).catch(function (error) {
              console.log(error)
            })
        },
        clonesnap(){                            /*快照克隆*/
          if (sessionStorage.getItem('islogin')==250){
            $('#tipsc').show().delay (2000).fadeOut()
          }
          else {
            let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
              return row.snapid;
            });
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个设备进行克隆'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行克隆')
            }
            else if (ids.length === 1) {
              this.clone = ids;

              $('#clonesn').modal("show")

            }
          }
        },
        addnew(){
          if (sessionStorage.getItem('islogin')==250){
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else
            $('#addnew').modal("show")
        },
        addsend(){
          let addname=this.$refs.addname.value
          let addsize=this.$refs.addsize.value
            this.$axios.post(this.allurl + 'manager/client/block/create_block', {
              name: addname,
              size: addsize,
              pool: this.bsele
            }).then(function (res) {
              console.log(res)
            }).catch(function (error) {
              console.log(error)
            })
        },
        sendclone(){                       /*发送快照克隆信息*/
            let name=this.$refs.bclone.value
            this.$axios.post(this.allurl+'manager/client/block/clone_snap',{name:name,cloneid:this.clone}).then(function (res) {
              // console.log(res)
            }).catch(function (error) {
              console.log(error)
            })
        },
        indexsel(event){//下拉框选择
          this.sele=event.target.value

        },
        bindexsel(event){//下拉框选择
          this.bsele=event.target.value

        },
        selec(){                            /*获得存储池列表*/
          var _this=this
          this.$axios.get(this.allurl+'manager/tank/list').then(function (res) {
            _this.poollist=res.data
            console.log(_this.poollist)
          }).catch(function (error) {
            console.log(error)
          })
        },
        independent(){
          if (sessionStorage.getItem('islogin')==250){
            $('#tipscontent').show().delay (2000).fadeOut()
          }
          else {
            this.who = 'comb'
            let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.blockname;
            });
            let ipool = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.bpool;
            });
            let ifrom = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
              return row.bfrom;
            });
            this.snapi = ids;
            this.spool=ipool
            if (ids.length !== 1) {
              this.tipscontent = '请选择其中一个设备进行快照分离'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行回滚')
            }
            else if (ids.length === 1) {

              if (ifrom=='用户创建'){
                $('#fromtips').show().delay(2000).fadeOut()
              }
              else {
                this.title = '此操作不可逆，确认进行分离'
                this.dosome = ids
                this.$refs.tips.dselect()
                this.aback = ids;
              }

            }

          }
        }
      },
      mounted(){
        $("[data-toggle='tooltip']").tooltip({html:true});
          this.start()

      },

    }
</script>

<style scoped>
  #Rblock{
    color:white;

  }

  thead{
    background-color: #372B51;
  }
  .a{
    margin-top: 10em;
  }
  .b{
    margin-top: 10em;
  }
  .one{
    margin-top: 3.5em;
  }
  .two{
    margin-top: 2em;
    margin-bottom: 2em;
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
  .create{
    color: white;font-size: 1.5em ;margin-bottom: .5em

  }
  .createh{
    color: white;font-size: 1.5em ;margin-right: 1em
  }
  .delete{
    color: white;font-size: 1.5em

  }
  .edit{
    color: white;font-size: 1.5em ;margin-bottom: 1em

  }
  .edith{
    color: white;font-size: 1.5em ;margin-right: 1em

  }
  .time{
    color: white;font-size: 1.5em ;margin-bottom: 1em
  }
  .clone{
    color: white;font-size: 1.5em ;margin-bottom: 1em
  }
  #editm input{
    background-color: #43355F !important;
    color: white !important;
  }
  .modal-content{
    background-color:#3E324E ;
    color: white;
  }
  #editm{
    color: black;
  }
  @media screen and (min-width: 769px) and (max-width: 1025px) {
    .kr{
      width: 60% !important;
    }
    .add{
      width:65%
    }
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    .kr{
      width: 100% !important;
    }
    .add{
      width:100%
    }
  }
  #y{
    display: block;
  }
  #h{
    display: none;
  }
  @media screen and (max-width: 425px) {
    .kr{
      width: 45% !important;margin-right: 1em;
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
      margin-top: 1em;
    }
  }
  @media screen and (min-width:1600px ) {
    .kr{
      width: 30% !important;
    }

  }
</style>
