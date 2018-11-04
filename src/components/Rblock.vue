<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rblock">
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
      <div id="y">
        <p @click="addnew()" data-toggle="addnew" style="cursor: pointer"><img src="../../static/image/add.svg" class="img-responsive add" title="添加"/></p>
        <p @click="bdilata()" data-toggle="dilatation" style="cursor: pointer"><img src="../../static/image/data.png" class="img-responsive kr" title="扩容"/></p>
        <p @click="addsn()" data-toggle="addsnap" style="cursor: pointer"><span class="glyphicon glyphicon-camera create" title="创建快照"></span></p>
        <p @click="deletelist()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除"></span></p>
      </div>
        <div style="width: 300px" id="h">
          <div @click="addnew()" data-toggle="addnew" style="float: left"><img src="../../static/image/add.svg" class="img-responsive addh" title="添加"/></div>
          <div @click="bdilata()" style="float: left" data-toggle="dilatation"><img src="../../static/image/data.png" class="img-responsive kr" title="扩容"/></div>
          <div @click="addsn()" style="float: left" data-toggle="addsnap"><span class="glyphicon glyphicon-camera createh" title="创建快照"></span></div>
          <div @click="deletelist()" style="float: left"><span class="glyphicon glyphicon-remove-circle delete" title="删除"></span></div>
        </div>
      </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered" >
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="blockname">块设备名称</th>
            <th data-field="bpool">存储池</th>
            <th data-field="bsize">容量</th>
            <th data-field="bfrom">源自</th>
            <th data-field="status">状态</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 b" >
        <div id="y">
        <p @click="editlist()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-edit edit" title="编辑"></span></p>
        <p @click="changetime()" data-toggle="changeti"  style="cursor: pointer"><span class="glyphicon glyphicon-time time" title="更改时间"></span></p>
        <p @click="clonesnap()" data-toggle="clonesn" style="cursor: pointer" ><span class="glyphicon glyphicon glyphicon-th-list clone" title="克隆快照"></span></p>
        <p @click="deletel()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除"></span></p>
        </div>
        <div id="h" style="width: 300px">
          <span @click="editlist()" data-toggle="editmodal" ><span class="glyphicon glyphicon-edit edith" title="编辑"></span></span>
          <span @click="changetime()" data-toggle="changeti"><span class="glyphicon glyphicon-time edith" title="更改时间"></span></span>
          <span @click="clonesnap()" data-toggle="clonesn" ><span class="glyphicon glyphicon glyphicon-th-list edith" title="克隆快照"></span></span>
          <span @click="deletel()" ><span class="glyphicon glyphicon-remove-circle edith" title="删除"></span></span>
        </div>
      </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive two">
        <table class="table table-responsive text-nowrap" id="table" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered">
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="snapid">快照ID</th>
            <th data-field="snapname">快照名称</th>
            <th data-field="content">描述</th>
            <th data-field="date">创建时间</th>
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
            <p>快照名称：</p><input type="text" class="form-control" id="name" ref="name" :placeholder=name />
            <p>描述：</p><input type="text" class="form-control" id="content" ref="content"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="editsend()" data-dismiss="modal">确认修改</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="dilatation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="bdilata">块设备扩容</h4>
          </div>
          <div class="modal-body">
            <p>块设备大小修改：</p><input type="number" class="form-control" id="poolsize" ref="blocksize"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="sizesend()" data-dismiss="modal">确认更改</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="addsnap" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="bsnap">创建快照</h4>
          </div>
          <div class="modal-body">
            <p>所属存储池：</p>
            <select @click="selec()" v-on:change="indexsel($event)" v-model="sele" class="form-control">

              <option v-for="i in poollist" :value="i.val" >{{i.name}}</option>
            </select>
            <p>快照名称：</p><input type="text" class="form-control" id="snapname" ref="snapname"/>
            <p>描述：</p><input type="text" class="form-control" id="snapcontent" ref="snapcontent"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="snapsend()" data-dismiss="modal">确认创建</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="changetime" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="change">更改时间</h4>
          </div>
          <div class="modal-body">
            <p>更改时间：</p><input type="time" class="form-control" id="ti" ref="ti"/>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="changet()" data-dismiss="modal">确认更改</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="clonesn" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="clonename">快照克隆</h4>
          </div>
          <div class="modal-body">

            <p>克隆快照名称：</p><input type="text" class="form-control" id="bclone" ref="bclone"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="sendclone()" data-dismiss="modal">确定</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="addnew" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="addpool">添加块设备</h4>
          </div>
          <div class="modal-body">
            <p>块设备名称：</p><input type="text" class="form-control" id="addname" ref="addname"/>
            <p>块设备容量：</p><input type="number" class="form-control" id="addsize" ref="addsize"/>
            <p>存储池：</p>
            <select @click="selec()" v-on:change="bindexsel($event)" v-model="bsele" class="form-control">
              <option v-for="i in poollist" :value="i.val" >{{i.name}}</option>
            </select>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="addsend()" data-dismiss="modal">确认</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <tips ref="tips" :content=tipscontent></tips>
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
          clone:'',
          poolsele:'',
          sele:'',
          bsele:'',
          edit:'',
          snapt:'',
          poollist:[],
          tipscontent:''
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
          var ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          var name = $.map($('#table').bootstrapTable('getSelections'), function (row) {
            return row.snapname;
          });
          if (ids.length !== 1) {
            this.tipscontent='请选择其中一个设备进行修改'
            this.$refs.tips.usetips()
            // alert('请选择其中一个设备进行修改')
          }
          else if(ids.length === 1){
            this.edit = ids;

              $('#editm').modal("show")

          }
          this.name=name
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
        deletelist(){                       /*块设备删除功能*/
          var ids = $.map( $('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.blockname;
          });
          if (ids.length < 1) {
            this.tipscontent='请选择删除项'
            this.$refs.tips.usetips()
            // alert('请选择删除项')
          }
          else if(ids.length >= 1) {

            if (confirm('是否确认选择删除块设备：' + ids)) {
              $('#table_id').bootstrapTable('remove', {
                field: 'blockname',
                values: ids
              });
              this.$axios.post(this.allurl + 'manager/client/block/del_block', {ids: ids}).then(function (res) {
                // console.log('post ok')
              }).catch(function (error) {
                console.log(error)
              })
            }
            else {
              return
            }
            // console.log('delete')
          }
        },
        deletel(){                    /*快照删除功能*/
          var ids = $.map( $('#table').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (ids.length < 1) {
            this.tipscontent='请选择删除项'
            this.$refs.tips.usetips()
            // alert('请选择删除项')
          }
          else if(ids.length >= 1) {

            if (confirm('是否确认选择删除快照：' + ips)) {
              $('#table').bootstrapTable('remove', {
                field: 'snapid',
                values: ips
              });
              this.$axios.post(this.allurl + 'manager/client/block/del_snap', {ips: ips}).then(function (res) {
                // console.log('post ok')
              }).catch(function (error) {
                console.log(error)
              })
            }
            else {
              return
            }
            // console.log('delete')
          }
        },
        bdilata(){                        /*块设备扩容*/
          var ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.blockname;
            this.ids=ids
          });
          if (ids.length !== 1) {
            this.tipscontent='请选择其中一个设备进行修改'
            this.$refs.tips.usetips()
            // alert('请选择其中一个设备进行修改')
          }
          else if(ids.length === 1){
            this.edit = ids;

            $('#dilatation').modal("show")

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
          let ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.blockname;
          });
          if (ids.length !== 1) {
            this.tipscontent='请选择其中一个设备进行快照'
            this.$refs.tips.usetips()
            // alert('请选择其中一个设备进行快照')
          }
          else if(ids.length === 1){
            this.snapi = ids;

            $('#addsnap').modal("show")

          }
        },
        snapsend(){                            /*发送创建快照信息*/
            let name=this.$refs.snapname.value
            let content=this.$refs.snapcontent.value
            this.$axios.post(this.allurl+'manager/client/block/cre_snap',{name:name,content:content,id:this.snapi,pool:this.sele}).then(function (res) {
              // console.log(res)
            }).catch(function (error) {
              console.log(error)
            })
        },
        changetime(){                           /*更改时间*/
          let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (ids.length !== 1) {
            this.tipscontent='请选择其中一个设备更改时间'
            this.$refs.tips.usetips()
            // alert('请选择其中一个设备更改时间')
          }
          else if(ids.length === 1){
            this.snapt = ids;

            $('#changetime').modal("show")

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
          let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (ids.length !== 1) {
            this.tipscontent='请选择其中一个设备进行克隆'
            this.$refs.tips.usetips()
            // alert('请选择其中一个设备进行克隆')
          }
          else if(ids.length === 1){
            this.clone = ids;

            $('#clonesn').modal("show")

          }
        },
        addnew(){
          $('#addnew').modal("show")
        },
        addsend(){
          let addname=this.$refs.addname.value
          let addsize=this.$refs.addsize.value
            this.$axios.post(this.allurl + 'manager/client/block/create_block', {
              name: addname,
              size: addsize,
              type: this.bsele
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
          }).catch(function (error) {
            console.log(error)
          })
        }
      },
      mounted(){
          this.start()
      }
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
    color: white;font-size: 1.5em ;margin-bottom: 1em

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
      width:65px
    }
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    .kr{
      width: 100% !important;
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
      margin-top: 1em;
    }
  }
  @media screen and (min-width:1600px ) {
    .kr{
      width: 50px !important;
    }

  }
</style>
