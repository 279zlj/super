<template>
  <div id="Log" class="container">
    <div class="row container-fluid">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
        <p @click="sele()" id="deletelist" style="cursor: pointer"><span class="glyphicon glyphicon-download" style="color: white;font-size: 1.5em" title="下载" data-toggle="tooltip" data-placement="right"></span></p>
      </div>

    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
    <table class="table table-responsive table-condensed" id="logt" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered">
      <div class="alert alert-danger " id="tipscontent" style="display: none;">普通用户无操作权限！</div>
      <thead>
      <tr>
        <th data-field="state" data-checkbox="true" ></th>
        <th data-field="name">{{$t('message.Node-name')}}</th>
        <th data-field="ip">{{$t('message.IP-address')}}</th>
        <th data-field="size">{{$t('message.Log-size')}}</th>
        <th data-field="logname">{{$t('message.Name-of-the-log')}}</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Log",
      data(){
        return{

        }
      },
      methods:{
          start(){                 /*bootstrap-table初始化*/
            $('#logt').bootstrapTable({
              url:this.allurl+"manctl/log_list"
            })
          },
        sele() {               /*选择某一日志进行操作*/
          if (sessionStorage.getItem('islogin') == 250) {
            $('#tipscontent').show().delay(2000).fadeOut()
          }
          else {
            var ids = $.map($('#logt').bootstrapTable('getSelections'), function (row) {
              return row.name;

            });
            this.$axios.post(this.allurl + 'manctl/log_exp', {select: ids}).then(function (res) {
              // console.log(res)
            }).catch(function (error) {
              console.log(error)
            })
            // console.log(ids)
          }
        }
      },
      mounted(){
          this.start()
        $("[data-toggle='tooltip']").tooltip({html:true});
      }
    }
</script>

<style scoped>
  #Log{
    color: white;
    width: 100%;
  }
  .one{
    margin-top: 5em;
  }
  .a{
    margin-top: 10em;
  }
  thead{
    background-color: #372B51;
  }
  @media screen  and (max-width: 425px){
    .a{
      margin-top: 4em;
    }
    .one{
      margin-top: 2em;
    }
  }
</style>
