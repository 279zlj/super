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
              <div class="row"><div class="col-lg-3">请输入验证码：</div><div id="yzm" class="col-lg-2">{{identify}}</div><input type="text" id="sr" ref="sr" class="col-lg-6 col-lg-offset-1 form-control"/></div>
              <span style="color:red">{{cross}}</span>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
              <button type="button" class="btn btn-info" @click="dsure()">{{$t('message.Confirm')}}</button>
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
              <table class="table-condensed table-responsive table">
                <thead class="o">
                  <tr>
                    <th>ip</th>
                    <th>使用率</th>
                    <th>状态</th>
                    <th>时间</th>
                  </tr>
                </thead>
                <tbody>
                <tr v-for="i in $store.state.cpu">
                  <td>{{i.ip}}</td>
                  <td>{{i.network}}</td>
                  <td :class="{'successa':i.status==='正常','fail':i.status==='不健康'}">{{i.status}}</td>
                  <td>{{i.time}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Close')}}</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" >{{$t('message.Confirm')}}</button>
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
              <table class="table-condensed table-responsive table">
                <thead class="o">
                <tr>
                  <th >ip</th>
                  <th >读/写</th>
                  <th >状态</th>
                  <th >时间</th>
                </tr>
                </thead>
                <tbody v-if="content=='iops'">
                <tr v-for="i in $store.state.iops">
                  <td>{{i.ip}}</td>
                  <td>{{i.network[0]}}/{{i.network[1]}}</td>
                  <td :class="{'successa':i.status==='正常','fail':i.status==='不健康'}">{{i.status}}</td>
                  <td>{{i.time}}</td>
                </tr>
                </tbody>
                <tbody v-if="content=='mbps'">
                <tr v-for="i in $store.state.mbps">
                  <td>{{i.ip}}</td>
                  <td>{{i.network[0]}}/{{i.network[1]}}</td>
                  <td :class="{'successa':i.status==='正常','fail':i.status==='不健康'}">{{i.status}}</td>
                  <td>{{i.time}}</td>
                </tr>
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
            identify:'',
            paraone:'',
            mark:'',
            paratwo:'',
            cross:''
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

        },
        iopsmbpsall(){
          $('#iopsmbps').modal("show")

        },
        fsmount(){
          $('#fsmountdetail').modal("show")

        },
        dselect(){
          this.cross=''
          this.code()
          $('#deletesure').modal("show")

        },
        dsure(){
          var codesure=this.$refs.sr.value
          var sum=this.paraone+this.paratwo
          var cut=this.paraone-this.paratwo
          if (this.mark=='+'){
            if (codesure==sum){
              this.$emit("respond","ok")
              $('#deletesure').modal('hide')
            }
            else {
              this.cross='输入验证码错误'
            }
          }
          else if (this.mark=='-'){
            if (codesure==cut){
              this.$emit("respond","ok")
              $('#deletesure').modal('hide')
            }
            else {
              this.cross='输入验证码错误'
            }
          }
        },
        osure(){
          this.$emit("log","logout")
        },
        code(){                     //简单生成验证码
          var a=Math.floor(Math.random()*(100-0+1)+0);
          var b=Math.floor(Math.random()*(100-0+1)+0);
          var c=new Array('-','+')
          var d=Math.floor(Math.random()*2)
          var e=c[d]
          var f=a+e+b
          this.paraone=a
          this.mark=e
          this.paratwo=b
          this.identify=f
          console.log(this.identify)
        }
      },
      mounted(){
        this.code()
      }

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
    background-color: #172952;
  }
  #yzm{
    background: linear-gradient(to top right, #0F3F6B, #2E6CA4, #609CD2);
    color: #7FAAD2;
    font-style: italic;
    font-size: 1.5em;
  }
  #sr{
    width: 40%;

  }
</style>
