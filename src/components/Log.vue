<template>
  <div id="Log" class="container">
    <div class="row container-fluid">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 a" >
        <p @click="collect()" id="collect" style="cursor: pointer"><span class="glyphicon glyphicon-sort-by-attributes-alt" style="color: white;font-size: 1.5em" title="收集" data-toggle="tooltip" data-placement="right"></span></p>
        <p @click="sele()" id="deletelist" style="cursor: pointer"><span class="glyphicon glyphicon-download" style="color: white;font-size: 1.5em" title="下载" data-toggle="tooltip" data-placement="right"></span></p>

      </div>

    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 table-responsive one">
    <table class="table table-responsive table-condensed" id="logt" data-toolbar="#toolbar" data-height="350" data-toggle="table"  data-classes="table-no-bordered">
      <div class="alert alert-danger " id="tipscontent" style="display: none;">{{tips}}</div>
      <thead>
      <tr>
        <th data-field="state" data-checkbox="true" ></th>
        <th data-field="name">{{$t('message.Node-name')}}</th>
        <th data-field="ip">{{$t('message.IP-address')}}</th>
        <th data-field="size">{{$t('message.Log-size')}}</th>
        <th data-field="logname">{{$t('message.Name-of-the-log')}}</th>
        <th data-field="path">{{$t('message.logpath')}}</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
    </div>
    <div class="modal fade" id="addnew" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="addpool">收集参数</h4>
          </div>
          <div class="modal-body">

            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">收集类型：</div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <select class="form-control" v-on:change="seltype($event)" v-model="typesele">
                  <option v-for="t in type" :value="t.name">{{t.name}}</option>
                </select>
              </div>
            </div>

            <div class="row" style="margin-top: 1em">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">收集时间：</div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <select class="form-control" v-on:change="selday($event)" v-model="daysele">
                  <option v-for="m in day" :value="m.name">{{m.name}}</option>
                </select>
              </div>
            </div>

            <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="collectsend()" data-dismiss="modal">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <tips ref="tips" :content=tipscontent :dotitle=title :docontent=dosome ></tips>
  </div>
</template>

<script>
  import tips from './tips'
    export default {
        name: "Log",
      components:{tips},
      data(){
        return{
          tipscontent:'',
          title:'',
          dosome:'',
          day:[
            {name:'1天',value:'oneday'},
            {name:'3天',value:'threeday'},
            {name:'一周',value:'week'},
            {name:'一个月',value:'mouth'},

          ],
          type:[
            {name:'os',value:'os'},
            {name:'cluster',value:'cluster'},
            {name:'seabed',value:'seabed'},

          ],
          typesele:'',
          daysele:'',
          cross:'',
          tips:'',
          lname:''
        }
      },
      methods:{
          start(){                 /*bootstrap-table初始化*/
            $('#logt').bootstrapTable({
              url:this.allurl+"manctl/log_list"
            })
          },
        sele() {               /*选择某一日志进行操作*/
          // var _this=this
          if (sessionStorage.getItem('islogin') == 250) {
            $('#tipscontent').show().delay(2000).fadeOut()
          }
          else {
            var name = $.map($('#logt').bootstrapTable('getSelections'), function (row) {
              return row.name;

            });

            var logname = $.map($('#logt').bootstrapTable('getSelections'), function (row) {
              return row.logname;
            });
            this.lname=logname
            if (name.length !== 1){
              this.tipscontent = '请选择其中一个节点进行下载'
              // alert(this.$refs.tips)
              this.$refs.tips.usetips()
              // alert('1')
            }
            else {
              var _this=this
              // this.$axios.post(this.allurl + 'manctl/log_download', {host: name,ip:ip,path:path,logname:logname,responseType: 'arraybuffer'}).then(function (res) {
              //   // console.log(res.data)
              //   _this.download(res.data)
              //   // console.log(res)
              //   // alert(res.data)
              //   if (res.data.status == 1) {
              //     _this.tips = '操作成功'
              //     $('#tipscontent').show().delay(2000).fadeOut()
              //     $('#table_id').bootstrapTable('refresh')
              //   }
              //   else {
              //     _this.tips = res.data.status
              //     $('#tipscontent').show().delay(2000).fadeOut()
              //     $('#table_id').bootstrapTable('refresh')
              //   }
              // }).catch(function (error) {
              //   console.log(error)
              // })
              //先在服务器中做软连  到资源目录下的某个文件夹  ln -s 外部文件夹
              _this.download('../static/logmanager'+_this.lname)

              // console.log(ids)
            }
          }
        },
        download (data) {
          if (!data) {
            return
          }
          // let url = window.URL.createObjectURL(new Blob([data],{type: "application/vnd.ms-excel"}))
          let url=data
          let link = document.createElement('a')
          link.style.display = 'none'
          link.href = url
          link.setAttribute('download', this.lname)

          document.body.appendChild(link)
          link.click()
        },
        collect(){

          if (sessionStorage.getItem('islogin') == 250) {
            $('#tipscontent').show().delay(2000).fadeOut()
          }
          else {
            var name = $.map($('#logt').bootstrapTable('getSelections'), function (row) {
              return row.name;
            });
            if (name.length!=1){
              this.tipscontent = '请选择其中一个节点进行收集'
              this.$refs.tips.usetips()
            }
            else
            $('#addnew').modal('show')
          }
        },
        collectsend(){
          var _this=this
          if (this.typesele==''||this.daysele==''){
            _this.cross='请填写完整'
          }
          else {
            var name = $.map($('#logt').bootstrapTable('getSelections'), function (row) {
              return row.name;
            });
            var ip= $.map($('#logt').bootstrapTable('getSelections'), function (row) {
              return row.ip;
            });
            this.$axios.post(this.allurl + 'manctl/log_collect', {host: name,ip:ip,type:this.typesele,collect_time:this.daysele}).then(function (res) {
              // console.log(res)
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        seltype(event){
          this.typesele=event.target.value
        },
        selday(event){
          this.daysele=event.target.value
        }
      },
      mounted(){
          this.start()
        $("[data-toggle='tooltip']").tooltip({html:true});
      }
    }
</script>

<style scoped>
  #Log{
    color: white;
    width: 100%;
  }
  .one{
    margin-top: 5em;
  }
  .a{
    margin-top: 10em;
  }
  thead{
    background-color: #372B51;
  }
  .modal-content{
    background-color:#3E324E ;
    color: white;
  }

  @media screen  and (max-width: 425px){
    .a{
      margin-top: 4em;
    }
    .one{
      margin-top: 2em;
    }
  }
</style>
