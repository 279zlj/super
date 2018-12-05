<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Mwarn" >
    <div class="row a">
      <table class="table table-responsive text-nowrap" id="table_id" data-height="550" data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]" data-toggle="table"  data-classes="table-no-bordered" >
        <thead>
        <tr>
          <th data-field="rank" >{{$t('message.Rank')}}</th>
          <th data-field="status" >{{$t('message.Status')}}</th>
          <th data-field="warnid">{{$t('message.Alert-ID')}}</th>
          <th data-field="warnname">{{$t('message.Alert-name')}}</th>
          <th data-field="warnindex">{{$t('message.An-object')}}</th>
          <th data-field="date">{{$t('message.Time-Generated')}}</th>
          <th data-field="content">{{$t('message.Alert-description')}}</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Mwarn",
      data(){
        return{
          timertip:null
        }
      },
      methods:{
          start(){                    /*bootstrap-table初始化，server请求，server分页功能*/
            $('#table_id').bootstrapTable({
              url:this.allurl+"manctl/err_ctl/get_err"
            })

          },
        timer(){
          var _this=this
          _this.timertip=setInterval(function () {
            _this.strat()
          },30000)
        }
      },
      mounted(){
          this.start()
      },
      destroyed(){
          var _this=this
          clearInterval(_this.timertip)
      }
    }
</script>

<style scoped>
  #Mwarn{
    color: white;
  }
  .a{
    margin-top: 5.2em;
    margin-bottom: 2em;
  }
     thead{
       background-color: #372B51;
       color: white;
     }
  .red{
    color:#AD1501 ;
  }
  .or{
    color: #EC4701;
  }
  .yellow{
    color: #FF9500;
  }
  .successa{
    color: #28CF21;
  }
  .fail{
    color: #AD1501;
  }
</style>
