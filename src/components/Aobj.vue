<template>
  <div id="Aobj" class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid">
    <div class="row">
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
        <table class="table table-responsive text-nowrap" id="objtable" data-toolbar="#toolbar" data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]" data-height="350" data-toggle="table" data-click-to-select="true" data-classes="table-no-bordered" >
          <div class="alert alert-danger " id="tipscontent" style="display: none;">{{tipscontent}}</div>
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="user">用户</th>
            <th data-field="access_key">Access_key</th>
            <th data-field="secret_key">Secret_key</th>
            <th data-field="type">密钥类型</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
        <div id="fun" >
          <p @click="add()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-plus add" title="新建" data-toggle="tooltip" data-placement="right"></span></p>
          <p @click="deletelist()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
        </div>
      </div>
    </div>
    <div class="rwo two">
    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
      <table class="table table-responsive text-nowrap" id="subtable" data-toolbar="#toolbar" data-height="350" data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]" data-toggle="table"  data-click-to-select="true" data-classes="table-no-bordered">
        <div class="alert alert-danger " id="tipsc" style="display: none;">{{tipsc}}</div>
        <thead>
        <tr>
          <th data-field="state" data-checkbox="true" ></th>
          <th data-field="user">子用户</th>
          <th data-field="secret_key">Secret_key</th>
          <th data-field="type">密钥类型</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
      <!--<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">-->
        <!--<div id="func" >-->
          <!--<p @click="subadd()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-plus add" title="新建" data-toggle="tooltip" data-placement="right"></span></p>-->
          <!--<p @click="subdelete()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></p>-->
        <!--</div>-->
      <!--</div>-->
    </div>

    <tips ref="tips" :content=tcontent :dotitle=title :docontent=dosome v-on:respond="res"></tips>
  </div>
</template>

<script>
  import tips from './tips'
    export default {
        name: "Aobj",
      components:{tips},
      data(){
        return{
          tipscontent:'',
          tipsc:'',
          tcontent:'',
          title:'',
          dosome:'',
          list:[],
          keys:[
            {name:'access ',value:'access '},
            {name:'secret ',value:'secret '}
          ],
          keysele:'',
          cross:''
        }
      },
      methods: {
          start(){
            $('#objtable').bootstrapTable({
              url:this.allurl+"gwobj/get_s3keys"
            })
            $('#subtable').bootstrapTable({
              url:this.allurl+"gwobj/get_swift_keys"
            })
            // var _this=this
            // this.$axios.get(this.url+'gwobj/get_objusers').then(function (res) {
            //   _this.list=res.data
            // })
            $("[data-toggle='tooltip']").tooltip({html:true});

          },
        add(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $("#tipscontent").show().delay (2000).fadeOut ();;
          }
          else {
            var ids = $.map($('#objtable').bootstrapTable('getSelections'), function (row) {
              return row.user;
            });
            if (ids.length !== 1) {
              this.tcontent = '请选择其中一个用户新建密钥'
              this.$refs.tips.usetips()
              // alert('请选择其中一个设备进行修改')
            }
            else if (ids.length === 1) {
              this.edit = ids;
              this.title = '是否确认新建密钥'
              this.$refs.tips.dselect()
              this.who = 'addekey'

            }
          }
        },
        subadd(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();
          }
          else {
            // var ids = $.map($('#subtable').bootstrapTable('getSelections'), function (row) {
            //   return row.user;
            // });
            // if (ids.length !== 1) {
            //   this.tcontent = '请选择其中一个子用户新建密钥'
            //   this.$refs.tips.usetips()
            //   // alert('请选择其中一个设备进行修改')
            // }
            // else if (ids.length === 1) {
            //   this.tcontent = '确定为子项目新建密钥？'
            //   this.$refs.tips.usetips()
            //
            //
            // }
            this.tipsc='暂不提供此功能'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
        },
        keysel(event){
          this.keysele=event.target.value
        },

        deletelist(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay(2000).fadeOut()
          }
          else {

            var ids = $.map($('#objtable').bootstrapTable('getSelections'), function (row) {
              return row.user;
            });
            if (ids.length < 1) {
              this.title = '请选择一个用户删除密钥'
              this.$refs.tips.usetips()
              // alert('请选择删除项')
            }
            else if (ids.length === 1) {
              this.title = '是否确认删除密钥'
              this.$refs.tips.dselect()
              this.who = 'delekey'
            }
          }

        },
        res(data){
            if (this.who=='addekey') {
              let ids = $.map($('#objtable').bootstrapTable('getSelections'), function (row) {
                return row.user;
              });
              this.respond = data
              if (this.respond == 'ok') {
                this.$axios.post(this.allurl + 'gwobj/create_s3keys', {uid: ids}).then(function (res) {
                  if (res.data = 'ok') {
                    $('#objtable').bootstrapTable('refresh')
                  }
                }).catch(function (error) {
                  console.log(error)
                })
              }
            }
          else if (this.who=='delekey') {
              let ids = $.map($('#objtable').bootstrapTable('getSelections'), function (row) {
                return row.user;
              let ips = $.map($('#objtable').bootstrapTable('getSelections'), function (row) {
                return row.access_key;
              });
                this.respond = data
                if (this.respond == 'ok') {
                  this.$axios.post(this.allurl + 'gwobj/rm_s3keys', {uid: ids,access_key:ips}).then(function (res) {
                    if (res.data = 'ok') {
                      $('#objtable').bootstrapTable('refresh')
                    }
                  }).catch(function (error) {
                    console.log(error)
                  })
                }
            });
          }
        },
        subdelete(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $('#tipsc').show().delay(2000).fadeOut()
          }
          else {
            // this.who = 'subdele'
            // let ids = $.map($('#subtable').bootstrapTable('getSelections'), function (row) {
            //   return row.user;
            // });
            // if (ids.length < 1) {
            //   // this.title = '是否确认授权客户端'
            //   this.title = '请选择一个子用户删除密钥'
            //   this.$refs.tips.usetips()
            //   // alert('请选择删除项')
            // }
            // else if (ids.length = 1) {
            //
            // }
            this.tipsco='暂不提供此功能'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
        }
          },
      mounted(){
          this.start()
      }
    }
</script>

<style scoped>
  #Aobj{
    margin-top: 3.8em;
    color:white !important;
  }

  thead{
    background-color: #372B51;
  }
  #fun,#func{
    margin-top: 8em;
  }
  .add,.delete{
    font-size: 1.5em;
  }
  .two{
    margin-top: 1em;
  }
</style>
