<template>
  <div id="Aobj" class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid">
    <div class="row">
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
        <table class="table table-responsive text-nowrap" id="objtable" data-toolbar="#toolbar" data-height="350" data-toggle="table" data-click-to-select="true" data-classes="table-no-bordered" >
          <div class="alert alert-danger " id="tipscontent" style="display: none;">{{tipscontent}}</div>
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="user">用户</th>
            <th data-field="access">Access_key</th>
            <th data-field="secret">Secret_key</th>
            <th data-field="keytype">密钥类型</th>
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
      <table class="table table-responsive text-nowrap" id="subtable" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-click-to-select="true" data-classes="table-no-bordered">
        <div class="alert alert-danger " id="tipsc" style="display: none;">{{tipsc}}</div>
        <thead>
        <tr>
          <th data-field="state" data-checkbox="true" ></th>
          <th data-field="subname">子用户</th>
          <th data-field="subkey">Secret_key</th>
          <th data-field="subtype">密钥类型</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
        <div id="func" >
          <p @click="subadd()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-plus add" title="新建" data-toggle="tooltip" data-placement="right"></span></p>
          <p @click="subdelete()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
        </div>
      </div>
    </div>
    <tips ref="tips" :content=tcontent :dotitle=title :docontent=dosome></tips>
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
          dosome:''
        }
      },
      methods: {
          start(){
            $('#objtable').bootstrapTable({
              url:this.allurl+"obj"
            })
            $('#subtable').bootstrapTable({
              url:this.allurl+"obj"
            })
            $("[data-toggle='tooltip']").tooltip({html:true});
          },
        add(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $("#tipscontent").show().delay (2000).fadeOut ();;
          }
          else
            $('#addkey').modal("show")
        },
        deletelist(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay(2000).fadeOut()
          }
          else {
            this.who = 'delekey'
            let ids = $.map($('#objtable').bootstrapTable('getSelections'), function (row) {
              return row.user;
            });
            if (ids.length < 1) {
              this.tipscontent = '请选择一个密钥删除项'
              this.$refs.tips.usetips()
              // alert('请选择删除项')
            }
            else if (ids.length = 1) {

            }
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
