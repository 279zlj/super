<template>
  <div id="Aobj" class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid">
    <div class="row">
      <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
        <table id="obj"></table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Aobj",
      methods: {
        start() {
          var table = $('#obj')
          table.bootstrapTable({
            url: '../static/data.json',
            sidePagination: 'server',
            idField: 'id',
            columns: [
              {
                field: 'ck',
                checkbox: true
              },
              {
                field: 'name',
                title: '名称',
              },
              {
                field: 'permissionValue',
                title: '权限值',

              },
              {
                field: 'button',
                title: '状态',
                sortable: true,
                align: 'center',
                formatter: 'statusFormatter'

              }
            ],
            treeShowField: 'name',
            parentIdField: 'pid',
            onLoadSuccess: function (data) {
              table.treegrid({
                treeColumn: 1,
                onChange: function () {
                  table.bootstrapTable('resetWidth')
                }
              })
            }
          })
        },
        typeFormatter(value, row, index)
    {
      if (value === 'menu') {
        return '菜单'
      }
      if (value === 'button') {
        return '按钮'
      }
      if (value === 'api') {
        return '接口'
      }
      return '-'
    }
    ,
    statusFormatter(value, row, index)
    {
      if (value === 1) {
        return '<span class="label label-success">正常</span>'
      }
      return '<span class="label label-default">锁定</span>'
    }

          },
      mounted(){
        this.start()
      }
    }
</script>

<style scoped>
  #Aobj{
    margin-top: 5em;
  }
</style>
