<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Aindex">
    <div class="m">
      <v-table is-vertical-resize
               :vertical-resize-offset='60'
               is-horizontal-resize
               style="width:100%"
               :multiple-sort="false"
               :title-rows="tableConfig.titleRows"
               :columns="tableConfig.columns"
               :table-data="tableConfig.tableData"
               @sort-change="sortChange"
               @on-custom-comp="customCompFunc"
               :paging-index="(pageIndex-1)*pageSize" class="t"></v-table>
      <div class="mt20 mb20 bold n"></div>
      <v-pagination @page-change="pageChange" @page-size-change="pageSizeChange" :total="50" :page-size="pageSize" :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"></v-pagination>
    </div>
  </div>
</template>

<script>
    import VTable from "vue-easytable/libs/v-table/src/table";
    import tableDate from '../../src/mock/tableData';
    import Vue from 'vue'
    export default {
        name: "Aindex",
      components: {VTable},
      tableDate,
      data(){
          return{
            pageIndex:1,
            pageSize:10,
            tableConfig: {
              multipleSort: false,
              tableData: [],
              columns: [
                {
                  field: 'custome', title:'序号', width: 50, titleAlign: 'center', columnAlign: 'center',
                  formatter: function (rowData,rowIndex,pagingIndex,field) {
                    return rowIndex < 3 ? '<span >' + (rowIndex + 1) + '</span>' : rowIndex + 1
                  }, isFrozen: true,isResize:true
                },
                {field: 'name', width: 100, title: '姓名', titleAlign: 'center', columnAlign: 'center', isFrozen: false},
                {field: 'height', width: 100, title: '身高', titleAlign: 'center',columnAlign: 'center', isFrozen:false},
                {field: 'gender', width: 90,title: '性别', titleAlign: 'center', columnAlign: 'center', isFrozen: false},
                {field: 'address', width: 180,title: '住址', titleAlign: 'center', columnAlign: 'left',isResize:true},
                {field: 'hobby', width: 180,  title: '爱好', titleAlign: 'center',columnAlign: 'center',isResize:true},
                {field: 'custome-adv', width: 180,title: '操作',titleAlign: 'center',columnAlign:'center',componentName:'table-operation',isResize:true}
              ],


            }
          }
      },
      methods:{
        getTableData(){
          this.tableConfig.tableData = tableDate.slice((this.pageIndex-1)*this.pageSize,(this.pageIndex)*this.pageSize)
        },
        pageChange(pageIndex){
          this.pageIndex = pageIndex;
          this.getTableData();
          console.log(pageIndex)
        },
        pageSizeChange(pageSize){

          this.pageIndex = 1;
          this.pageSize = pageSize;
          this.getTableData();
        },
        sortChange(params){

          if (params.height.length > 0){

            this.tableConfig.tableData.sort(function (a, b) {

              if (params.height === 'asc'){

                return a.height - b.height;
              }else if(params.height === 'desc'){

                return b.height - a.height;
              }else{

                return 0;
              }
            });
          }
        },
        customCompFunc:function(params){

          console.log(params);

          if (params.type === 'delete'){ // do delete operation

            this.$delete(this.tableConfig.tableData,params.index);

          }else if (params.type === 'edit'){ // do edit operation

            alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
          }

        }
      },
      created(){
        this.getTableData();
      }
    }
    Vue.component('table-operation',{
      template:`<span>
        <a href="" @click.stop.prevent="update(rowData,index)">编辑</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>
        </span>`,
      props:{
        rowData:{
          type:Object
        },
        field:{
          type:String
        },
        index:{
          type:Number
        }
      },
      methods:{
        update(){

          // 参数根据业务场景随意构造
          let params = {type:'edit',index:this.index,rowData:this.rowData};
          this.$emit('on-custom-comp',params);
        },

        deleteRow(){

          // 参数根据业务场景随意构造
          let params = {type:'delete',index:this.index};
          this.$emit('on-custom-comp',params);

        }
      }
    })
</script>

<style scoped>
  #Aindex{
    color: white;
  }
  .m{
    margin-top: 5em;

  }
  .n{
    margin-top: 2em;
  }
  .v-table-body-class {
    font-weight: normal;
   background-color: #20192F;

  }

  .v-table-header-row{
    background-color: #302647 !important;
  }
  .t{
    border-radius: 2px;
    background-color: #2E2245 !important;
    color: white;
  }

</style>
