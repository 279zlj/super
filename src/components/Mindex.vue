<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Mindex" style="overflow-x:hidden">
    <table id="table_id">
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
      created(){
        this.datatable();
      },
      methods:{
          datatable(){
            $(document).ready( function () {
              $('#table_id').bootstrapTable({
                url:'http://localhost:3000/api/solve',
                methods:'get',
                cache:false,
                pagination:true,
                sortable:false,
                sortOrder:'desc',
                pageNumber:1,
                pageSize:10,
                pageList:[10,25,50],
                queryParamsType:'',
                sidePagination:'server',
                search:true,
                strictSearch:true,
                column:[{
                  field:'title',
                  title:'常见问题'
                },{
                  field:'content',
                  title:'具体解决方法'
                }
                ]
              });
              console.log('ok')
            } );
          },

      }
    }
</script>

<style scoped>
#Mindex{
  color: white;
  margin-top: 5em;
}
#table_id{
  background-color: #34284C;
  margin-bottom: 2em;
  border-radius: 5px;
}
thead{
  font-size: 1.2em;
  background-color: #3F3456;
  border-radius: 5px;
}
  td{
    font-size: 1.1em;
  }
</style>
