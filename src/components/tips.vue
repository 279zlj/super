<template>
    <div id="tips">
      <div class="modal fade" id="tipsmodel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-if="content">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="myModalLabel">{{$t('message.Prompt')}}</h4>
            </div>
            <div class="modal-body">
                <p>{{content}}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Confirm')}}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>

      <div class="modal fade" id="logout" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="log">{{$t('message.Exit-the-prompt')}}</h4>
            </div>
            <div class="modal-body">
              <p>{{out}}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal"  @click="osure()">{{$t('message.Confirm')}}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>

      <div class="modal fade" id="deletesure" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-if="dotitle || docontent">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="delete">{{$t('message.Operation-tip')}}</h4>
            </div>
            <div class="modal-body">
              <p>{{dotitle}}:{{docontent}}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
              <button type="button" class="btn btn-info" data-dismiss="modal" @click="dsure()">{{$t('message.Confirm')}}</button>
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
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Close')}}</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">{{$t('message.Confirm')}}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>

      <div class="modal fade" id="iopsmbps" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-if="title">
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
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Close')}}</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">{{$t('message.Confirm')}}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>

      <div class="modal fade" id="fsmountdetail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-if="title">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
              <h4 class="modal-title" >{{title}}</h4>
            </div>
            <div class="modal-body">
              <table class="table table-responsive table-condensed" id="fstable" data-toggle="table" data-url=content  data-toolbar="#toolbar" data-classes="table-no-bordered">
                <thead class="o">
                <tr>
                  <th data-field="Filesystem" >Filesystem</th>
                  <th data-field="Size" >Size</th>
                  <th data-field="Used" >Used</th>
                  <th data-field="Avail" >Avail</th>
                  <th data-field="Use" >Use%</th>
                  <th data-field="Mounted" >Mounted</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Close')}}</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">{{$t('message.Confirm')}}</button>
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
      props:['content','title','out','docontent','dotitle'],
      data(){
          return{

          }
      },
      watch:{
        content(){
          // console.log(this.content)
          return this.content
        },
        title(){
          // console.log(this.title)
          return this.title
        },
        out(){
          // console.log(this.out)
          return this.out
        },
        docontent(){
          return this.docontent
        },
        dotitle(){
          return this.dotitle
        }
      },
      methods:{
        usetips(){

          $('#tipsmodel').modal("show")
        },
        logout(){
          // console.log('click')
          $('#logout').modal("show")
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
        fsmount(){
          $('#fsmountdetail').modal("show")
          $('#fstable').bootstrapTable({

          })
        },
        dselect(){
          $('#deletesure').modal("show")
        },
        dsure(){
          this.$emit("respond","ok")
        },
        osure(){
          this.$emit("log","logout")
        }
      },


    }
</script>

<style scoped>
  /*#tipsmodel {*/
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translateX(-50%) translateY(-50%);*/
  /*}*/
  .o{
    background-color: #292431;
  }
  .modal-content{
    background-color:#3E324E ;
    color: white;
  }
</style>
