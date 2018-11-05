<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Aoperation">
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 contenttop" >
      <div id="y">
        <p @click="editlist()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-edit verticalimg" title="编辑"></span></p>
        <p @click="deletelist()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle verticalimg" title="删除"></span></p>
      </div>
      <div style="width: 300px" id="h">
        <span @click="editlist()" data-toggle="editmodal"><span class="glyphicon glyphicon-edit infeed" title="编辑"></span></span>
        <span @click="deletelist()" ><span class="glyphicon glyphicon-remove-circle infeed" title="删除"></span></span>
      </div>
      </div>
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
        <div class="row">
          <div class="col-lg-3 col-lg-offset-8 col-md-3 col-md-offset-7 col-sm-4 col-sm-offset-6 col-xs-5 col-xs-offset-5">
            <input type="search" class="form-control" id="key" placeholder="请输入ip地址" ref="inp"/>
          </div>
          <div class="col-lg-1 col-md-2 col-sm-2 col-xs-2">
            <input type="submit" class="btn btn-success" id="search" @click="sentip()" />
          </div>
        </div>
        <table class="table table-responsive text-nowrap" id="table_id" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered" >
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="id">ID</th>
            <th data-field="content">描述</th>
            <th data-field="size">容量</th>
            <th data-field="date">更新时间</th>
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
            <h4 class="modal-title" id="myModalLabel">修改运维信息</h4>
          </div>
          <div class="modal-body">
            <p>容量：</p><input type="text" class="form-control" id="name" ref="size"/>
            <p>描述：</p><input type="text" class="form-control" id="content" ref="content"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="editsend()" data-dismiss="modal">确认修改</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
      <tips ref="tips" :content=tipscontent :title=title v-on:respond="res"></tips>
    </div>
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
            respond:''
          }
      },
      methods:{
          start(url){                         /*bootstrap-table初始化*/
            $('#table_id').bootstrapTable({
              url:url

            })
            // console.log(this.urla)
          },
        editlist() {                       /*运维信息修改*/
          var ids = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (ids.length !== 1) {
            this.tipscontent='请选择其中一个设备进行修改'
            this.$refs.tips.usetips()
            // alert('请选择其中一个设备进行修改');
            return;
          }
          else if(ids.length === 1){
            this.edit = ids;

              $('#editm').modal("show")

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
            return row.snapid;
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
          let ids = $.map( $('#table_id').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
          });
          if (ids.length < 1) {
            this.tipscontent='请选择删除项'
            this.$refs.tips.usetips()
            // alert('请选择删除项')
          }
          else if(ids.length >= 1) {
            this.tipscontent='是否确认选择删除存储池'
            this.title=ids
            this.$refs.tips.dselect()
            // console.log('delete')
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
          // this.start()
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
  .modal-content{
    background-color:#3E324E ;
    color: white;
  }
  .contenttop{
    margin-top: 15em;
  }
  .one{
    margin-top: 4.7em;
  }
</style>
