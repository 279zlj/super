<template>
    <div id="Object" class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-sm-11 col-xs-11">
         <ul id="tab" class="nav nav-tabs">
           <li id="target"  v-for="i in list" @click="father(i.id)"><a :href="['#'+i.id]" data-toggle="tab">{{i.name}}</a></li>
         </ul>
          <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade" :id="i.id"  v-for="i in list">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <i class="glyphicon glyphicon-user" style="margin: 0 .5em"></i>{{i.name}}
                  </h3>
                </div>
                <div class="row panel-body">
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe">ID：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{i.id}}</div>
                  </div>
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >显示名：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{i.name}}</div>
                  </div>
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >类型：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{i.type}}</div>
                  </div>
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >管理权：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{i.power}}</div>
                  </div>
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe">用户状态：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 switch" data-on="warning" data-off="danger">
                    <input type="checkbox" checked />
                  </div>
                  </div>
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >配额参数：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">Max-objects：{{i.id}} / Max-size：{{i.quota}}</div>
                  </div>
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >配额状态：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 switch" data-on="warning" data-off="danger">
                    <input type="checkbox" checked />
                  </div>
                  </div>
                  <div class="row all">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 labe">
                      用户用量管理：
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 data">
                      <span style="margin-left: .6em;font-size: 1.4em">{{i.dosage}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

        <div class="col-lg-1 col-md-1 col-sm-1 col-sm-1">
          <div id="fun" >
            <p @click="add()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-plus add" title="添加" data-toggle="tooltip" data-placement="right"></span></p>
            <p @click="editlist()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-edit edit" title="编辑" data-toggle="tooltip" data-placement="right"></span></p>
            <p @click="look()" style="cursor: pointer"><span class="glyphicon glyphicon-eye-open look" title="查看" data-toggle="tooltip" data-placement="right"></span></p>
            <p @click="deletelist()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
          </div>

        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="row subuser">
          <ul id="tabt" class="nav nav-tabs">
            <li id="two2" v-for="a in one1"><a :href="['#'+a.id]" data-toggle="tab">{{a.id}}</a></li>
          </ul>
          <div id="myTab" class="tab-content">
            <div class="tab-pane fade tab-pa" :id="b.id"  v-for="b in one1">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <i class="glyphicon glyphicon-user" style="margin: 0 .5em"></i>{{b.id}}
                  </h3>
                </div>
                <div class="row panel-body">
                  <div class="row all bg" >
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe">来源：</div>
                    <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{b.origin}}</div>
                  </div>
                  <div class="row all bg">
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >ID：</div>
                    <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{b.id}}</div>
                  </div>
                  <div class="row all bg">
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >访问级别：</div>
                    <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{b.contorls}}</div>
                  </div>
                  <div class="row all bg">
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >状态：</div>
                    <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{b.status}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="row" style="margin-top: 2em">
            <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
            <form action="" class="form-horizontal"  role="form">

                <div class="row form-group">
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 control-label"><label for="dtp_input2" >日期</label></div>
                  <div class="input-group date form_date col-lg-4 col-md-4 col-sm-4 col-xs-4" data-date="" data-date-format="yyyy-mm-dd" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                    <input class="form-control" size="13" style="color: black" type="text" value="" readonly>
                    <!--<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>-->
                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                  </div>
                  <span style="float: left;margin: 0 1em">~</span>
                  <div class="input-group date form_date col-lg-4 col-md-4 col-sm-4 col-xs-4" data-date="" data-date-format="yyyy-mm-dd" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                    <input class="form-control" size="13" style="color: black" type="text" value="" readonly>
                    <!--<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>-->
                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                  </div>
                  <input type="hidden" id="dtp_input2" value="" /><br/>

                </div>

            </form>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
              <button class="btn btn-info"><i class="glyphicon glyphicon-search"></i></button>
            </div>
          </div>
          <div class="row" >
            <table class="table table-responsive table-condensed" id="sear" data-toolbar="#toolbar" data-height="350"  data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]" data-toggle="table"  data-classes="table-no-bordered" >
              <thead>
              <tr>
                <th data-field="entries" >{{$t('message.Node-name')}}</th>
                <th data-field="summary">{{$t('message.IP-address')}}</th>
              </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>

        </div>

    </div>
    </div>
</template>

<script>

    export default {
        name: "Object",
      data(){
          return{
            list:[
              {id:'one1',name:'one',type:'one',power:'r',quota:'',quotastatus:'off',status:'on',dosage:'278',subuser:[
                  {origin:'1',id:'sub1',contorls:'full',status:'on'},
                  {origin:'2',id:'sub3',contorls:'full',status:'on'}
                ]},
              {id:'two2',name:'two',type:'two',power:'r',quota:'',quotastatus:'off',status:'on',dosage:'1278',subuser:[
                  {origin:'1',id:'sub1',contorls:'full',status:'on'},
                  {origin:'2',id:'sub2',contorls:'full',status:'off'}
                ]},
              {id:'3',name:'three',type:'three',power:'w',quota:'',quotastatus:'off',status:'on',dosage:'324'},
              {id:'4',name:'four',type:'four',power:'w',quota:'',quotastatus:'off',status:'on',dosage:'4654'},
              {id:'5',name:'five',type:'five',power:'full',quota:'',quotastatus:'off',status:'on',dosage:'2134'},
              {id:'6',name:'six',type:'six',power:'w',quota:'',quotastatus:'off',status:'on',dosage:'2238'},
              {id:'7',name:'seven',type:'seven',power:'r',quota:'',quotastatus:'off',status:'on',dosage:'1238'},
              {id:'8',name:'eight',type:'eight',power:'r',quota:'',quotastatus:'off',status:'on',dosage:'378'},

            ],
            one1:[

            ],

            num:''

          }
      },
      methods:{
        father(n){
          this.num=n
          let i=0
          for ( i;i<this.list.length; i++){
            if (n==this.list[i].id){
              this.one1=this.list[i].subuser
            }
          }


        },
        start(){
          $('#target:first-child').addClass('active')
          // alert($('li:first'))
          $('#two2:first').addClass('active')
          $('.tab-pane:first-child').addClass('active')
          $('.tab-pane:first-child').addClass('in')
          $('.tab-pa:first-child').addClass('active')
          $('.tab-pa:first-child').addClass('in')
          $('.all:even').css("background","#42345E");
          $('.bg:even').css("background","#42345E");
          $("[data-toggle='tooltip']").tooltip({html:true});
          this.one1=this.list[0].subuser
          $('#sear').bootstrapTable({
            url:this.allurl+"manctl/"
          })

          $('.switch').bootstrapSwitch('onText','开启').bootstrapSwitch('offText','关闭').bootstrapSwitch("onColor",'success')

        },
        add(){

        },
        editlist(){

        },
        look(){

        },
        deletelist(){

        }

      },
      created(){
        $('.switch').bootstrapSwitch('onText','开启').bootstrapSwitch('offText','关闭').bootstrapSwitch("onColor",'success')
      },
      mounted(){
        this.start()
        $('.form_date').datetimepicker({
          language:  'zh-CN',
          weekStart: 1,
          todayBtn:  1,
          autoclose: 1,
          todayHighlight: 1,
          startView: 2,
          minView: 2,
          forceParse: 0
        });


      }
    }
</script>

<style scoped>
    #Object{
      margin-top: 5em;
      color: white;
    }
    a{
      color: #FFFFFF;
    }
  #tab{
    white-space: nowrap;
    overflow-x:hidden ;
    overflow-y: scroll;
    height: 3em;
    /*width: 75%;*/
  }
  #myTabContent{
    /*width: 75%;*/
  }
  .panel-heading{
    background-color: #C17F00;
    color: white;
    text-align: center;

  }
  .panel-default{
    border-color: #372B51;
    margin-top: 2em;
    background-color: #3E285A;
  }
    .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover{
      color: white;
      background-color: #C17F00;
    }
    .nav > li > a:focus, .nav > li > a:hover{
      background-color: #C17F00;
      color: white;
    }

  .labe{
    text-align:left;
    padding-left: 2em;
  }
  .all{
    height: 2.8em;
    width: 100%;
    margin-left: 0em;
    padding-top: .8em;
    /*font-size: 1.3em;*/
  }
  .data{
    background: url('../../static/image/datastatus.png') no-repeat;
    background-size: contain;
    height:8em;
    margin: 0 auto;
  }
  #fun{
    margin-top: 8em;
  }
    .edit,.add,.look,.delete{
      color: white;font-size: 1.5em ;

    }
    .input-group{
      float: left;
    }
  .subuser{
    height: 25em;
  }
    thead{
      background-color: #C17F00;

    }


</style>
