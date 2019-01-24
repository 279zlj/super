<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rfile">
    <div class="container-fluid ">
      <div class="row">
        <div class="container-fluid row" id="mdslist">
          <p class="mdstitle">等级<i style="float: right;margin-top: .2em;cursor: pointer" title="设置" data-toggle="tooltip" data-placement="right" class="glyphicon glyphicon-cog"></i></p>
          <div class="container-fluid tcolor">
          <table class="table table-responsive text-nowrap" id="table_id"  data-height="150" data-toggle="table"  data-classes="table-no-bordered" >
            <div class="alert alert-danger " id="tipscontent" style="display: none;">{{tipscontent}}</div>
            <thead>
            <tr>
              <th data-field="rank">等级</th>
              <th data-field="status">状态</th>
              <th data-field="process">进程</th>
              <th data-field="speed">速度</th>
              <th data-field="cache">缓存目录</th>
              <th data-field="index">索引节点</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <div class="row">
    <div class="container-fluid row" id="fslist">
      <p class="mdstitle">资源池</p>
      <div class="container-fluid tcolor">
      <table class="table table-responsive text-nowrap" id="table"  data-height="200" data-toggle="table"  data-classes="table-no-bordered" >
        <div class="alert alert-danger " id="tipsc" style="display: none;">{{tipsc}}</div>
        <thead>
        <tr>
          <th data-field="pool">资源池</th>
          <th data-field="type">类型</th>
          <th data-field="usage">已用</th>
          <th data-field="aviliable">总容量</th>
          <th data-field="percetage">使用占比</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      </div>
    </div>
      </div>
    </div>
    <tips ref="tips" :title=transmittitle  :content=transmiturl :dotitle=title :docontent=dosome v-on:respond="res"></tips>
  </div>
</template>

<script>
  import tips from './tips'
    export default {
        name: "Rfile",
      components:{tips},
      data(){
          return{
            tipscontent:'',
            title:'',
            dosome:'',
            tipsc:'',
            cross:'',
            transmiturl:'',
            transmittitle:''
          }
      },
      methods:{
        start(){
          $('#table_id').bootstrapTable({
            url:this.allurl+"manager/tank/list_tank"
          })
          $('#table').bootstrapTable({
            url:this.allurl+"manctl/client_list"
          })
        },
        res(){},

      },
      mounted(){
        $("[data-toggle='tooltip']").tooltip({html:true});
        this.start()
      }
    }
</script>

<style scoped>
    #Rfile{
      margin-top: 4em;
      /*margin-left: 1em;*/
    }

    th{
      text-align: center;
    }
    #mdslist{
      margin-top: 1em;
      border: 1px solid gray;
      border-radius: .5em;
      height: 16em;
      overflow-y: scroll;
    }
    #fslist{
      margin-top: 1em;
      border: 1px solid gray;
      border-radius: .5em;
      height: 20em;
      overflow-y: scroll;
    }

  .mdstitle{
    color: #80B2CA;
    font-size: 1.5em;
    /*line-height: 2.5em;*/
    margin-top: .5em;
  }

  td{
    color: #93BFDF;
  }
  i{
    color: white !important;
  }
  .tcolor{
    background-color: #22355C;
    border-radius: .5em;
  }
  table{
    color: white !important;
  }
</style>
