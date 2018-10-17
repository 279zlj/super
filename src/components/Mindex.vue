<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Mindex" style="overflow-x:hidden">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
          <table class="table" id="table_id" data-toggle="table" data-classes="table-no-bordered" data-pagination="true" data-page-number="1" data-url="http://localhost:3000/api/solve" data-page-size="10" data-search="true" data-show-refresh="true">
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

      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 two">
        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive">
          <h3>
            {{detail}}
          </h3>
          <div>
            {{detailc}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
      import $ from 'jquery'
    export default {
        name: "Mindex",
      data(){
          return{
            detail:[],
            detailc:[]
          }
      },
      mounted(){
        this.datatable();
        this.dlick()

      },
      updated(){
        this.dlick()
      },
      activated(){
        this.datatable();

      },

      methods:{
          datatable(){
            $(document).ready( function () {
              $('#table_id').bootstrapTable({

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
        dlick(){
          var _this=this
          $("#table_id").bootstrapTable({

            onClickRow: function (row) {
              _this.$set(_this.detail,0,row.title)
              _this.$set(_this.detailc,0,row.content)
              console.log("click:" ,this.detail)

            }

          })
        }

      }
    }
</script>

<style scoped>
#Mindex{
  color: white;
  margin-top: 4em;

  margin-bottom: 2em;

}
.one{
  background-color: #3A2F50;
}
#table_id{
  background-color: #3A2F50;

  border-radius: 5px;
}
tr{
  cursor:pointer;
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
  .two{
    background-color: #3A2F50;
    height: 44em;
  }
</style>
