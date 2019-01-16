<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Afile">
    <div class="row">
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
        <table class="table table-responsive text-nowrap" id="filetable" data-toolbar="#toolbar" data-height="350" data-toggle="table" data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]" data-click-to-select="true" data-classes="table-no-bordered" >
          <div class="alert alert-danger " id="tipscontent" style="display: none;">{{tipscontent}}</div>
          <thead>
          <tr>
            <th data-field="state" data-checkbox="true" ></th>
            <th data-field="id">ID</th>
            <th data-field="inst">inst</th>
            <th data-field="ceph_version">版本</th>
            <th data-field="hostname">主机名称</th>
            <th data-field="mount_point">挂载位置</th>
            <th data-field="state">状态</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1" id="tool">
        <p @click="quzhu()" data-toggle="addnew" style="cursor: pointer"><img src="../../static/image/quzhu1.png" class="img-responsive quzhu" title="驱逐" data-toggle="tooltip" data-placement="right" /></p>
      </div>
    </div>
    <tips ref="tips" :content=tipscontent :dotitle=title :docontent=dosome v-on:respond="res"></tips>
  </div>
</template>

<script>
  import tips from './tips'
    export default {
        name: "Afile",
      components:{tips},
      data(){
          return{
            tipscontent:'',
            title:'',
            dosome:''
          }
      },
      methods:{
          start(){
            $('#filetable').bootstrapTable({
              url:this.allurl+"manager/tank/list_tank"
            })
          },
        res(){

        },
        quzhu(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipscontent='普通用户无操作权限！'
            $('#tipscontent').show().delay(2000).fadeOut()
          }
          else {
            this.who = 'pool'
            let ids = $.map($('#filetable').bootstrapTable('getSelections'), function (row) {
              return row.id;
            });
            if (ids.length != 1) {
              this.tipscontent = '请选择其中一个客户端进行驱逐'
              this.$refs.tips.usetips()
              // alert('请选择删除项')
            }
            else {

            }
          }
        }
      },
      mounted(){
        $("[data-toggle='tooltip']").tooltip();
        this.start()
      }
    }
</script>

<style scoped>
  #Afile{
    margin-top: 3em;
  }
  #tool{
    margin-top: 8em;
  }
  thead{
    background-color: #372B51;
  }
</style>
