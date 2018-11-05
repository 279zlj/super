<template>
    <div id="tips">
      <div class="modal fade" id="tipsmodel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="myModalLabel">提示</h4>
            </div>
            <div class="modal-body">
                <p>{{content}}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">确定</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>

      <div class="modal fade" id="deletesure" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="delete">操作提示</h4>
            </div>
            <div class="modal-body">
              <p>{{content}}：{{title}}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal" @click="dsure()">确定</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>

      <div class="modal fade" id="cput" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
              <h4 class="modal-title" id="cputop">节点CPU使用率</h4>
            </div>
            <div class="modal-body">
              <table class="table table-responsive table-condensed" id="cputable" data-toggle="table" data-url=content  data-toolbar="#toolbar" data-classes="table-no-bordered">
                <thead class="o">
                <tr>
                  <th data-field="ip" >ip</th>
                  <th data-field="use" >使用率</th>
                  <th data-field="status" >状态</th>
                  <th data-field="time" >时间</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">确认</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>

      <div class="modal fade" id="iopsmbps" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
              <h4 class="modal-title" id="title">{{title}}</h4>
            </div>
            <div class="modal-body">
              <table class="table table-responsive table-condensed" id="ibtable" data-toggle="table" data-url=content  data-toolbar="#toolbar" data-classes="table-no-bordered">
                <thead class="o">
                <tr>
                  <th data-field="ip" >ip</th>
                  <th data-field="rw" >读/写</th>
                  <th data-field="status" >状态</th>
                  <th data-field="time" >时间</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">确认</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>


    </div>


</template>

<script>
  import tips from './tips'
    export default {

        components:{
          tips
        },
      methods:{
        usetips(){
          // console.log('click')
          $('#tipsmodel').modal("show")
        },
        cpuall(){
          $('#cput').modal("show")
          $('#cputable').bootstrapTable({

          })
        },
        iopsmbpsall(){
          $('#iopsmbps').modal("show")
          $('#ibtable').bootstrapTable({

          })
        },
        dselect(){
          $('#deletesure').modal("show")
        },
        dsure(){
          this.$emit("respond","ok")
        }
      },
      props:['content','title']

    }
</script>

<style scoped>
  #tipsmodel {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .o{
    background-color: #292431;
  }
  .modal-content{
    background-color:#3E324E ;
    color: white;
  }
</style>
