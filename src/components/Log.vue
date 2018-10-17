<template>
  <div id="Log" class="container">
    <div class="row container-fluid">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
        <p @click="sele()" id="deletelist"><span class="glyphicon glyphicon-download" style="color: white;font-size: 1.5em" title="下载" ></span></p>
      </div>
    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
    <table class="table table-responsive table-condensed" id="logt" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered" data-url="http://localhost:3000/api/tableDate">
      <thead>
      <tr>
        <th data-field="state" data-checkbox="true" ></th>
        <th data-field="snapid">节点名称</th>
        <th data-field="snapname">IP地址</th>
        <th data-field="content">日志大小</th>
        <th data-field="date">日志名称</th>
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
          select:''
        }
      },
      methods:{
          start(){
            $('#logt').bootstrapTable({})
          },
        sele(){
          var ids = $.map( $('#logt').bootstrapTable('getSelections'), function (row) {
            return row.snapid;
            this.select=row.snapid
          });
          console.log(ids)
        }
      },
      mounted(){
          this.start()
      }
    }
</script>

<style scoped>
  #Log{
    color: white;
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
