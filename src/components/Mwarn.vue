<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Mwarn" >
    <div class="row a">
      <table class="table table-responsive text-nowrap" id="table_id" data-height="550" data-side-pagination="server" data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]" data-toggle="table"  data-classes="table-no-bordered"  data-url="http://localhost:3000/api/tableDate">
        <thead>
        <tr>
          <th data-field="rank" >级别</th>
          <th data-field="status" >状态</th>
          <th data-field="warnid">警报ID</th>
          <th data-field="warnname">警报名称</th>
          <th data-field="warnindex">对象索引</th>
          <th data-field="date">产生时间</th>
          <th data-field="content">警报描述</th>
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
        return{}
      },
      methods:{
          start(){                    /*bootstrap-table初始化，server请求，server分页功能*/
            $('#table_id').bootstrapTable({

            })

          }
      },
      mounted(){
          this.start()
      }
    }
</script>

<style scoped>
  #Mwarn{
    color: white;
  }
  .a{
    margin-top: 3em;
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
