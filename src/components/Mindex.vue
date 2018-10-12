<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Mindex" style="overflow-x:hidden">
    <table class="table" id="table_id" data-toggle="table" data-detail-view="true" data-detail-formatter="detailFormatter" data-classes="table-no-bordered" data-pagination="true" data-page-number="1" data-url="http://localhost:3000/api/solve" data-page-size="10" data-search="true" data-show-refresh="true">
      <colgroup>
        <col style="width: 5%;"/>
        <col style="width: 15%;"/>
        <col style="width: 80%;"/>
      </colgroup>
      <thead>
        <tr>
          <th data-field="title">常见问题</th>
          <th data-field="content">具体解决方法</th>
        </tr>
        </thead>
      </table>
  </div>
</template>

<script>
      import $ from 'jquery'
    export default {
        name: "Mindex",
      data(){
          return{
          }
      },
      mounted(){
        this.datatable();
        this.detailFormatter()
      },
      activated(){
        this.datatable();

      },

      methods:{
          datatable(){
            $(document).ready( function () {
              $('#table_id').bootstrapTable({
                detailView:true,
                detailFormatter:function(index,row){
                  var html=[];
                  $.each(row,function (key,value) {
                    html.push('<h4><b>'+key+':</b></h4>'+value);
                  });
                  return html.join('');
                },
                url:'http://localhost:3000/api/solve',
                methods:'get',
                column:[{
                  field:'title',
                  title:'常见问题'
                },{
                  field:'content',
                  title:'具体解决方法'
                }
                ],

              });
              console.log('ok')
            } );
          },
        detailFormatter:function(index,row){
          var html=[];
          $.each(row,function (key,value) {
            html.push('<h4><b>'+key+':</b></h4>'+value);
          });
          return html.join('');
        },
      }
    }
</script>

<style scoped>
#Mindex{
  color: white;
  margin-top: 4em;
  background-color: #3A2F50;
  margin-bottom: 2em;

}
#table_id{
  background-color: #3A2F50;

  border-radius: 5px;
}
thead{
  font-size: 1.2em;
  background-color: #34284C;
  border-radius: 5px;
}
  td{
    font-size: 1.1em;
  }
  button[name='refresh']{
    background-color: green !important;
  }
</style>
