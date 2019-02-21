<template>
    <div id="Object" class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-11 col-xs-11">
         <ul id="tab" class="nav nav-tabs">
           <li id="target"  v-for="(i,index) in list" @click="father(i,i.user_id)" v-bind:class="{'active':index==0}"><a :href="['#'+i.user_id]" data-toggle="tab">{{i.user_id}}</a></li>
         </ul>
          <div class="alert alert-danger " id="tipsc" style="display: none;">{{tipsc}}</div>
          <div id="myTabContent" class="tab-content">

            <div class="tab-pane fade" :id="i.user_id"  v-for="(i,index) in list"  v-bind:class="{'active in':index==0}">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <i class="glyphicon glyphicon-user" style="margin: 0 .5em"></i>{{i.user_id}}
                  </h3>
                </div>
                <div class="row panel-body" id="userbody">
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe">ID：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{i.user_id}}</div>
                  </div>
                  <div class="row all odd">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >{{$t('message.display_name')}}：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{i.display_name}}</div>
                  </div>
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >{{$t('message.administration-authority')}}：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                    <p v-for="c in i.caps">{{$t('message.Type')}}：{{c.type}} / {{$t('message.jurisdiction')}}：{{c.perm}}</p>
                  </div>
                  </div>
                  <div class="row all odd">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe">{{$t('message.user-mode')}}：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 " >
                    <span>{{i.suspended}}</span>
                    <span style="cursor: pointer" class="glyphicon glyphicon-stop sopr" title="停止" @click="stopuser()" data-toggle="tooltip" data-placement="top" v-show="i.suspended=='0'"></span>
                    <span style="cursor: pointer" class="glyphicon glyphicon-off opr" title="启用" @click="startuser()" data-toggle="tooltip" data-placement="top" v-show="i.suspended=='1'"></span>
                  </div>
                  </div>
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >{{$t('message.The-quota-parameter')}}：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">Max-objects：{{i.bucket_quota.max_objects}} / Max-size：{{i.bucket_quota.max_size}}</div>
                  </div>
                  <div class="row all odd">
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >{{$t('message.The-quota-status')}}：</div>
                    <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 " >
                      <span>{{i.bucket_quota.enabled}}</span>
                      <span style="cursor: pointer" class="glyphicon glyphicon-stop sopr" title="停止" @click="stopquota()" data-toggle="tooltip" data-placement="top" v-show="i.bucket_quota.enabled==true"></span>
                      <span style="cursor: pointer" class="glyphicon glyphicon-off opr" title="启用" @click="startquota()" data-toggle="tooltip" data-placement="top" v-show="i.bucket_quota.enabled==false"></span>
                    </div>
                  </div>
                  <div class="row all">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 labe">
                      {{$t('message.User-dosage')}}：
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 data">
                      <span style="margin-left: .6em;font-size: 1.4em" v-if="i.usage==0">{{i.usage.size_kb}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

        <div class="col-lg-1 col-md-1 col-sm-1 col-sm-1">
          <div id="fun" >
            <p @click="add()" id="add" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-plus add" title="添加" data-toggle="tooltip" data-placement="right"></span></p>
            <p @click="editlist()" id="editlist" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-edit edit" title="编辑" data-toggle="tooltip" data-placement="right"></span></p>
            <p @click="addauth()" id="addauth" data-toggle="" style="cursor: pointer"><img class="img-font" src="../../static/image/addauth.png" title="增加权限" data-toggle="tooltip" data-placement="right"></p>
            <p @click="deleteauth()" id="deleteauth" data-toggle="" style="cursor: pointer"><img class="img-font" src="../../static/image/deleteauth.png" title="删除权限" data-toggle="tooltip" data-placement="right"></p>
            <p @click="quotaset()" id="quota" data-toggle="" style="cursor: pointer"><img class="img-font" src="../../static/image/quota.png" title="配额设置" data-toggle="tooltip" data-placement="right"></p>
            <p @click="look()" style="cursor: pointer" id="view"><span class="glyphicon glyphicon-eye-open look" title="查看" data-toggle="tooltip" data-placement="right"></span></p>
            <p @click="deletelist()" style="cursor: pointer" id="delete"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
          </div>

        </div>
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <div class="row subuser">
            <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11" >
          <ul id="tabt" class="nav nav-tabs">
            <li id="two2" v-for="(a,index) in one1" v-bind:class="{'active':index==0}"><a :href="['#'+a.id]" data-toggle="tab" @click="thissub(a.id)">{{a.id}}</a></li>
          </ul>
          <div class="alert alert-danger " id="tipscontent" style="display: none;">{{subtipsc}}</div>
          <div id="myTab" class="tab-content">
            <div class="tab-pane fade tab-pa" :id="b.id"  v-for="(b,index) in one1" v-bind:class="{'active in':index==0}">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <i class="glyphicon glyphicon-user" style="margin: 0 .5em"></i>{{b.id}}
                  </h3>
                </div>
                <div class="row panel-body">
                  <div class="row all bg" >
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe">{{$t('message.source')}}：</div>
                    <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{b.origin}}</div>
                  </div>
                  <div class="row all bg odd">
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >ID：</div>
                    <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{b.id}}</div>
                  </div>
                  <div class="row all bg">
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >{{$t('message.access-level')}}：</div>
                    <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{b.permissions}}</div>
                  </div>
                  <!--<div class="row all bg">-->
                    <!--<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >状态：</div>-->
                    <!--<div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{b.status}}</div>-->
                  <!--</div>-->
                </div>
              </div>
            </div>
          </div>
            </div>
            <div col-lg-1 col-md-1 col-sm-1 col-sm-1>
              <div id="funa" >
                <p @click="subadd()" id="subadd" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-plus add" title="添加" data-toggle="tooltip" data-placement="right"></span></p>
                <p @click="subedit()" id="sedit" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-edit edit" title="编辑" data-toggle="tooltip" data-placement="right"></span></p>
                <p @click="subdelete()" id="subdelete" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 2em">
            <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
            <form action="" class="form-horizontal"  role="form">

                <div class="row form-group">
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 control-label"><label for="dtp_input2" >{{$t('message.Date')}}</label></div>
                  <div class="input-group date form_date col-lg-4 col-md-4 col-sm-4 col-xs-4" data-date="" data-date-format="yyyy-mm-dd" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                    <input class="form-control" size="13" ref="startdate" style="color: black" type="text" value="" readonly>
                    <!--<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>-->
                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                  </div>
                  <span style="float: left;margin: 0 1em">~</span>
                  <div class="input-group date form_date col-lg-4 col-md-4 col-sm-4 col-xs-4" data-date="" data-date-format="yyyy-mm-dd" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                    <input class="form-control" size="13" style="color: black"  ref="enddate" type="text" value="" readonly>
                    <!--<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>-->
                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                  </div>
                  <input type="hidden" id="dtp_input2" value="" /><br/>

                </div>

            </form>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
              <button class="btn btn-info" @click="datesend()"><i class="glyphicon glyphicon-search"></i></button>
            </div>
          </div>
          <div class="row" >
            <table class="table table-responsive table-condensed" id="sear" data-toolbar="#toolbar" data-height="350"  data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]" data-toggle="table"  data-classes="table-no-bordered" >
              <thead>
              <tr>
                <th data-field="entries" >数据入口</th>
                <th data-field="summary">数据总量</th>
              </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>

        </div>

    </div>
      <div class="modal fade" id="addnew" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="diskdata">{{$t('message.Add-users')}}</h4>
            </div>
            <div class="modal-body">
              <p>ID：</p><input type="text" class="form-control" id="addid" ref="addid" required="required"/>
              <p>{{$t('message.Name')}}：</p><input type="text" class="form-control" id="addname" ref="addname" required="required"/>
              <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
              <button type="button" class="btn btn-primary" @click="addsend()" >{{$t('message.Confirm')}}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>
      <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="edituser">{{$t('message.Modify-user-information')}}</h4>
            </div>
            <div class="modal-body">
              <p>ID：<span>{{num}}</span></p>
              <p>{{$t('message.Name')}}：</p><input type="text" class="form-control" id="name" :placeholder=name ref="name" required="required"/>
              <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
              <button type="button" class="btn btn-primary" @click="editsend()">{{$t('message.Confirm')}}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>
      <div class="modal fade" id="quotaset" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="quotatitle">{{$t('message.Quota-setting')}}</h4>
            </div>
            <div class="modal-body">
              <p>ID：<span>{{num}}</span></p>
              <p>{{$t('message.Maximum-number-of-objects')}}：</p><input type="number" class="form-control" id="max-object"  ref="max-object" required="required"/>
              <p>{{$t('message.Maximum-storage-space')}}：</p><input type="number" class="form-control" id="max-size"  ref="max-size" required="required"/>
              <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
              <button type="button" class="btn btn-primary" @click="quotasend()">{{$t('message.Confirm')}}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>
      <div class="modal fade" id="auth" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" >{{auth_title}}</h4>
            </div>
            <div class="modal-body">
              <p>ID：<span>{{num}}</span></p>
              <!--<p>名称：</p><input type="text" class="form-control" id="name" :placeholder=name ref="name" required="required"/>-->
              <p>{{$t('message.Permission-types')}}：</p>
              <select class="form-control" id="authtype" v-on:change="sele($event)" v-model="authselect">
              <option v-for="a in caps_type" :value="a.name">{{a.name}}</option>
              </select>
              <p>{{auth_title}}：</p>
              <select class="form-control" id="whatauth" v-on:change="asele($event)" v-model="capsselect">
                <option v-for="c in caps" :value="c.name">{{c.name}}</option>
              </select>
              <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
              <button type="button" class="btn btn-primary" @click="authsend()">{{$t('message.Confirm')}}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>
      <div class="modal fade" id="all" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="look">{{$t('message.View-user-information')}}</h4>
            </div>
            <div class="modal-body row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">ID：</div><div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">{{personal.user_id}}</div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">{{$t('message.Name')}}：</div><div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">{{personal.display_name}}</div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">Max_bucket：</div><div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">{{personal.max_buckets}}</div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">Keys：</div><div class="col-lg-9 col-md-9 col-sm-9 col-xs-9"><p v-for="k in personal.keys">User：{{k.user}}<br>Access_key：{{k.access_key}}<br>Secret_key：{{k.secret_key}}</p></div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">Swift_keys：</div><div class="col-lg-9 col-md-9 col-sm-9 col-xs-9"><p v-for="s in personal.swift_keys">User：{{s.user}}<br>Secret_key：{{s.secret_key}}</p></div>
              <!--<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">Bucket_quota：</div><div class="col-lg-9 col-md-9 col-sm-9 col-xs-9" ><p v-show="personal.bucket_quota.enabled!=''">Enabled:{{personal.bucket_quota.enabled}} / Max_size{{personal.bucket_quota.max_size}} / Max_objects:{{personal.bucket_quota.max_objects}}</p></div>-->
              <!--<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">User_quota：</div><div class="col-lg-9 col-md-9 col-sm-9 col-xs-9"><p v-show="personal.user_quota.enabled!=''">Enable：{{personal.user_quota.enabled}} / Max_size：{{personal.user_quota.max_size}} / Max_objects：{{personal.user_quota.max_objects}}</p></div>-->
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">{{$t('message.user-permission')}}：</div><div class="col-lg-9 col-md-9 col-sm-9 col-xs-9"><p v-for="c in personal.caps">{{$t('message.Type')}}：{{c.type}} / {{$t('message.jurisdiction')}}：{{c.perm}}</p></div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
              <button type="button" class="btn btn-primary"  data-dismiss="modal">{{$t('message.Confirm')}}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>
      <div class="modal fade" id="addsub" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="subuser">{{$t('message.Add-child-user')}}</h4>
            </div>
            <div class="modal-body">
              <p>{{$t('message.Name')}}：</p><input type="text" class="form-control" id="subname" ref="subname" required="required"/>
              <p>{{$t('message.access-level')}}：</p>
              <select class="form-control" id="tank" v-on:change="sel($event)" v-model="rankselect">
              <option v-for="m in rank" :value="m.name">{{m.name}}</option>
              </select>
              <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
              <button type="button" class="btn btn-primary" @click="subsend()" >{{$t('message.Confirm')}}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>
      <div class="modal fade" id="subedit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="editsub">{{$t('message.Modify-child-user-information')}}</h4>
            </div>
            <div class="modal-body">
              <p>ID：</p><input type="text" class="form-control" id="subn" :placeholder=subnow ref="sname" required="required"/>
              <p>{{$t('message.access-level')}}：</p>
              <select class="form-control" id="modifyrank" v-on:change="selec($event)" v-model="subvisit">
                <option v-for="m in rank" :value="m.name">{{m.name}}</option>
              </select>
              <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
              <button type="button" class="btn btn-primary" @click="subeditsend()">{{$t('message.Confirm')}}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>
      <tips ref="tips" :content=tipscontent :dotitle=title :docontent=dosome  v-on:respond="res"></tips>
    </div>
</template>

<script>
    import tips from './tips'

    export default {
        name: "Object",
      components:{tips},
      data(){
          return{
            list:[],
            one1:[],
            rank:[
              {name:'只读',value:'read'},
              {name:'只写',value:'write'},
              {name:'读写',value:'readwrite'},
              {name:'Full',value:'full'},
            ],
            caps_type:[
              {name:'bucket',value:'bucket'},
              {name:'metadata',value:'metadata'},
              {name:'usage',value:'usage'},
              {name:'zone',value:'zone'}
            ],
            caps:[
              {name:'write',value:'write'},
              {name:'read',value:'read'},
              {name:'write-read',value:'write-read'},
              {name:'*',value:'*'}
            ],
            rankselect:'',
            personal:[],
            cross:'',
            tipsc:'',
            tipscontent:'',
            dosome:'',
            title:'',
            visitold:'',
            subnow:'',
            subvisit:'',
            searchurl:'',
            num:'',
            name:'',
            subtipsc:'',
            onelist:[],
            who:'',
            authselect:'',
            capsselect:'',
            auth_title:''
          }
      },
      methods:{
        father(a,n){                   //用户的切换
          // console.log(a)
          this.personal=a
          let i=0
          for ( i;i<this.list.length; i++){
            if (n==this.list[i].user_id){
              this.onelist=this.list[i].subusers
              this.num=this.list[i].user_id
              this.name=this.list[i].display_name
              if (this.onelist[0].origin===undefined){
                for(let i=0;i<this.onelist.length;i++){
                  this.onelist[i].origin=this.onelist[i].id.split(":")[0]
                  this.onelist[i].id=this.onelist[i].id.split(":")[1]
                  this.thissub(this.onelist[0].id)
                }

                this.one1=this.onelist
              }
              else {
                this.onelist=this.list[i].subusers

                this.one1=this.onelist
              }

            }
          }
        },
        res(data){           //子组件的返回
          if(data=='ok'&&this.who=='stopuser'){
            this.$axios.post(this.allurl+'gwobj/suspend_objuser',{uid:this.dosome,suspend:1}).then(function (res) {
              this.tipsc = res.data.status
              $('#tipsc').show().delay(2000).fadeOut()
            }).catch(function (error) {
              console.log(error)
            })
          }
          else if (data=='ok'&&this.who=='startuser'){
            this.$axios.post(this.allurl+'gwobj/suspend_objuser',{uid:this.dosome,suspend:0}).then(function (res) {
              this.tipsc = res.data.status
              $('#tipsc').show().delay(2000).fadeOut()
            }).catch(function (error) {
              console.log(error)
            })
          }
          else if(data=='ok'&&this.who=='deleteuser'){
            this.$axios.post(this.allurl+'gwobj/remove_objuser',{uid:this.dosome}).then(function (res) {
              this.tipsc = res.data.status
              $('#tipsc').show().delay(2000).fadeOut()
            }).catch(function (error) {
              console.log(error)
            })
          }
          else if(data=='ok'&&this.who=='stopquota'){
            this.$axios.post(this.allurl+'gwobj/trunquo_objuser',{uid:this.dosome,enable:0}).then(function (res) {
              this.tipsc = res.data.status
              $('#tipsc').show().delay(2000).fadeOut()
            }).catch(function (error) {
              console.log(error)
            })
          }
          else if(data=='ok'&&this.who=='startquota'){
            this.$axios.post(this.allurl+'gwobj/trunquo_objuser',{uid:this.dosome,enable:1}).then(function (res) {
              this.tipsc = res.data.status
              $('#tipsc').show().delay(2000).fadeOut()
            }).catch(function (error) {
              console.log(error)
            })
          }
          else if (data=='ok'&&this.who=='deletesub') {
            this.$axios.post(this.allurl+'gwobj/remove_subuser',{uid:this.num,sub_name:this.dosome}).then(function (res) {
              this.subtipsc = res.data.status
              $('#tipscontent').show().delay(2000).fadeOut()
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        thissub(who){          //所选的子用户
          this.subnow=who
          // alert(this.subnow)
        },
        sel(event){
          this.rankselect=event.target.value
        },
        sele(event){
          this.visitold=event.target.value
        },
        selec(event){
          this.subvisit=event.target.value
        },
        asele(event){
          this.capsselect=event.target.value
        },
        getsome(){           //获取用户信息
          var _this=this
          this.$axios.get(this.allurl+'gwobj/get_objusers').then(function (res) {
            _this.list=res.data

            _this.one1=_this.list[0].subusers
            for(let i=0;i<_this.one1.length;i++){
              _this.one1[i].origin=_this.one1[i].id.split(":")[0]
              _this.one1[i].id=_this.one1[i].id.split(":")[1]

              // _this.one1[i].id=_this.one1[i].id.replace(":","")

            }
            _this.thissub(_this.one1[0].id)
            // console.log(_this.one1)
            _this.num=_this.list[0].user_id
            _this.name=_this.list[0].display_name
            // _this.visitold=_this.list[0].visit
            _this.Msize=_this.list[0].user_quota.max_size
            _this.Mobject=_this.list[0].user_quota.max_objects
            _this.father(_this.list[0],_this.list[0].user_id)
            // console.log(_this.list[0].subusers)
          }).catch(function (error) {
            console.log(error)
          })

        },
        start(){
          this.getsome()

          $('#sear').bootstrapTable({
            url:this.allurl+this.searchurl
          })
        },
        add(){          //增加用户
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
          else {
            this.cross=''
            $('#addnew').modal('show')
          }
        },
        addauth(){         //增加权限
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
          else {
            this.cross=''
            this.who='addauth'
            this.auth_title="增加权限"
            $('#auth').modal('show')
          }
        },
        quotaset(){            //配额设置
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
          else {
            this.cross=''
            $('#quotaset').modal('show')
          }
        },
        quotasend(){       //配额信息发送
          var object=this.$refs.max-object.value
          var size=this.$refs.max-size.value
          if (object==''||size==''){
            this.cross='请填写完整!'
          }
          else {
            this.$axios.post(this.allurl+'gwobj/setquo_objuser',{uid:this.num,quota:object,size:size}).then(function (res) {

                this.tipsc = res.data.status
                $('#tipsc').show().delay(2000).fadeOut()


            }).catch(function (error) {
              console.log(error)
            })

          }
        },
        deleteauth(){        //删除用户
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
          else {
            this.cross=''
            this.who='deleteauth'
            this.auth_title="删除权限"
            $('#auth').modal('show')
          }
        },
        authsend(){
          if (this.who=='addauth'){
            this.$axios.post(this.allurl+'gwobj/capsadd_objuser',{uid:this.num,caps_type:this.authselect,caps:this.capsselect}).then(function (res) {
              this.tipsc = res.data.status
              $('#tipsc').show().delay(2000).fadeOut()
            }).catch(function (error) {
              console.log(error)
            })
          }
          else if (this.who=='deleteauth'){
            this.$axios.post(this.allurl+'gwobj/capsrm_objuser',{uid:this.num,caps_type:this.authselect,caps:this.capsselect}).then(function (res) {
              this.tipsc = res.data.status
              $('#tipsc').show().delay(2000).fadeOut()
            }).catch(function (error) {
              console.log(error)
            })
          }
        },
        addsend(){
          let id=this.$refs.addid.value
          let name=this.$refs.addname.value

          if (id==''||name==''){
            this.cross='请填写完整!'
          }
          else {
            this.$axios.post(this.allurl+'gwobj/create_objuser',{uid:id,display_name:name}).then(function (res) {
                this.tipsc = res.data.status
                $('#tipsc').show().delay(2000).fadeOut()

            }).catch(function (error) {
              console.log(error)
            })
            $('#addnew').modal('hide')
          }
        },
        subadd(){
          if (sessionStorage.getItem('islogin')==250){
            this.subtipsc='普通用户无操作权限！'
            $("#tipscontent").show().delay (2000).fadeOut ();;
          }
          else {
            this.cross=''
            $('#addsub').modal('show')
          }
        },
        subsend(){
          var subname=this.$refs.subname.value
          if (subname==''||this.rankselect=='') {
            this.cross='请填写完整!'
          }
          this.$axios.post(this.allurl+'gwobj/create_subuser',{uid:this.num,sub_name:subname,access:this.rankselect}).then(function (res) {

              this.subtipsc = res.data.status
              $('#tipscontent').show().delay(2000).fadeOut()

          }).catch(function (error) {
            console.log(error)
          })
          $('#addsub').modal('hide')
        },
        editsend(){
          var name=this.$refs.name.value
          if (this.visitold==''||name==''){
            this.cross='请填写完整!'
          }
          else {
            this.$axios.post(this.allurl+'gwobj/rename_objuser',{display_name:name,uid:this.num}).then(function (res) {

                this.tipsc = res.data.status
                $('#tipsc').show().delay(2000).fadeOut()

            }).catch(function (error) {
              console.log(error)
            })
            $('#edit').modal('hide')
          }
        },
        subeditsend(){         //子用户修改
          var sname=this.$refs.sname.value
          if (this.subvisit==''||name==''){
            this.cross='请填写完整!'
          }
          else {
            this.$axios.post(this.allurl+'gwobj/create_subuser',{uid:this.num,access:this.subvisit,sub_name:sname}).then(function (res) {

                this.tipscontent = res.data.status
                $('#tipscontent').show().delay(2000).fadeOut()


            }).catch(function (error) {
              console.log(error)
            })
            $('#subedit').modal('hide')
          }
        },
        editlist(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
          else {
            this.cross=''
            $('#edit').modal('show')
          }
        },
        subedit(){
          if (sessionStorage.getItem('islogin')==250){
            this.subtipsc='普通用户无操作权限！'
            $("#tipscontent").show().delay (2000).fadeOut ();;
          }
          else {
            this.cross=''
            $('#subedit').modal('show')
          }
        },
        look(){           //查看信息
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
          else {
            this.cross=''
            $('#all').modal('show')
          }
        },
        deletelist(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
          else {
            this.who='deleteuser'
            this.title = '是否确认选择删除用户'
            this.dosome = this.num
            this.$refs.tips.dselect()
          }
        },
        subdelete(){
          if (sessionStorage.getItem('islogin')==250){
            this.subtipsc='普通用户无操作权限！'
            $("#tipscontent").show().delay (2000).fadeOut ();
          }
          else {
            this.who='deletesub'
            this.title = '是否确认选择删除子用户'
            this.dosome = this.subnow
            this.$refs.tips.dselect()
          }
        },
        stopuser(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();
          }
          else {
            this.who='stopuser'
            this.title = '是否确认停用用户'
            this.dosome = this.num
            this.$refs.tips.dselect()
          }
        },
        startuser(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();
          }
          else {
            this.who='startuser'
            this.title = '是否确认启用用户'
            this.dosome = this.num
            this.$refs.tips.dselect()
          }
        },
        stopquota(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();
          }
          else {
            this.who='stopquota'
            this.title = '是否确认停用配额'
            // this.dosome = this.num
            this.$refs.tips.dselect()
          }
        },
        startquota(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();
          }
          else {
            if (this.Mobject<0||this.Msize<0){
              this.tipsc='开启配额先要配置参数！'
              $("#tipsc").show().delay (2000).fadeOut ();
            }
            else {
              this.who='startquota'
              this.title = '是否确认启用配额'
              // this.dosome = this.num
              this.$refs.tips.dselect()
            }

          }
        },
        datesend(){
          var start=this.$refs.startdate.value
          var end=this.$refs.enddate.value
          this.$axios.post(this.allurl+'object/edit',{start:start,end:end}).then(function (res) {
              this.searchurl=res.data
            $('#sear').bootstrapTable('refresh')
          }).catch(function (error) {
            console.log(error)
          })

        }

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
    background-color: #C17F00 !important;
    color: white !important;
    text-align: center !important;

  }
  .panel-default{
    border-color: #372B51 !important;
    margin-top: 2em !important;
    background-color: #3E285A !important;
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
  .odd{
    background-color: #42345E;
    height: 3em;
  }
  .all{
    min-height: 3em;
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
  .img-font{
    width: 1.5em;
  }
  #fun,#funa{
    margin-top: 8em;
  }
  #funa{
    float: right;
  }
    .edit,.add,.look,.delete{
      color: white;font-size: 1.5em ;

    }
    .input-group{
      float: left !important;
    }
  .subuser{
    height: 25em;

  }
    thead{
      background-color: #C17F00;

    }

    .opr,.sopr{
      float: right;
      margin: 0 1em;
      font-size: 1.3em;
    }
  .opr{
    color: green;

  }
  .sopr{
    color: #D9534F;
  }
</style>
