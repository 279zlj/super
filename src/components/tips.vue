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
          console.log('click')
          $('#tipsmodel').modal("show")
        }
      },
      props:['content']

    }
</script>

<style scoped>

  .modal-content{
    background-color:#3E324E ;
    color: white;
  }
</style>
