<template>
    <div id="Object" class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-11 col-xs-11">
         <ul id="tab" class="nav nav-tabs">
           <li id="target"  v-for="i in list" @click="father(i.id,i.name,i.visit,i.Maxobj,i.Maxsize)"><a :href="['#'+i.id]" data-toggle="tab">{{i.name}}</a></li>
         </ul>
          <div class="alert alert-danger " id="tipsc" style="display: none;">{{tipsc}}</div>
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
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >访问级别：</div>
                    <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{i.visit}}</div>
                  </div>
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >管理权限：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">{{i.power}}</div>
                  </div>
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe">用户状态：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 " >
                    <span>{{i.status}}</span>
                    <span style="cursor: pointer" class="glyphicon glyphicon-stop sopr" title="停止" @click="stopuser()" data-toggle="tooltip" data-placement="top" v-show="i.status=='on'"></span>
                    <span style="cursor: pointer" class="glyphicon glyphicon-off opr" title="启用" @click="startuser()" data-toggle="tooltip" data-placement="top" v-show="i.status=='off'"></span>
                  </div>
                  </div>
                  <div class="row all">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >配额参数：</div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">Max-objects：{{i.Maxobj}} / Max-size：{{i.Maxsize}}</div>
                  </div>
                  <div class="row all">
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 labe" >配额状态：</div>
                    <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 " >
                      <span>{{i.quotastatus}}</span>
                      <span style="cursor: pointer" class="glyphicon glyphicon-stop sopr" title="停止" @click="stopquota()" data-toggle="tooltip" data-placement="top" v-show="i.quotastatus=='on'"></span>
                      <span style="cursor: pointer" class="glyphicon glyphicon-off opr" title="启用" @click="startquota()" data-toggle="tooltip" data-placement="top" v-show="i.quotastatus=='off'"></span>
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
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <div class="row subuser">
            <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11" >
          <ul id="tabt" class="nav nav-tabs">
            <li id="two2" v-for="a in one1"><a :href="['#'+a.id]" data-toggle="tab" @click="thissub(a.id)">{{a.id}}</a></li>
          </ul>
          <div class="alert alert-danger " id="subtipsc" style="display: none;">{{subtipsc}}</div>
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
            <div col-lg-1 col-md-1 col-sm-1 col-sm-1>
              <div id="funa" >
                <p @click="subadd()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-plus add" title="添加" data-toggle="tooltip" data-placement="right"></span></p>
                <p @click="subedit()" data-toggle="editmodal" style="cursor: pointer"><span class="glyphicon glyphicon-edit edit" title="编辑" data-toggle="tooltip" data-placement="right"></span></p>
                <p @click="subdelete()" style="cursor: pointer"><span class="glyphicon glyphicon-remove-circle delete" title="删除" data-toggle="tooltip" data-placement="right"></span></p>
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 2em">
            <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
            <form action="" class="form-horizontal"  role="form">

                <div class="row form-group">
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 control-label"><label for="dtp_input2" >日期</label></div>
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
              <h4 class="modal-title" id="diskdata">添加用户</h4>
            </div>
            <div class="modal-body">
              <p>ID：</p><input type="text" class="form-control" id="addid" ref="addid" required="required"/>
              <p>名称：</p><input type="text" class="form-control" id="addname" ref="addname" required="required"/>
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
              <h4 class="modal-title" id="edituser">修改用户信息</h4>
            </div>
            <div class="modal-body">
              <p>ID：<span>{{num}}</span></p>
              <p>名称：</p><input type="text" class="form-control" id="name" :placeholder=name ref="name" required="required"/>
              <p>访问级别：</p>
              <select class="form-control" v-on:change="sele($event)" v-model="visitold">
                <option v-for="m in rank" :value="m.name">{{m.name}}</option>
              </select>
              <div style="color: red;margin-top: .5em;font-weight: 700;">{{cross}}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Cancel')}}</button>
              <button type="button" class="btn btn-primary" @click="editsend()">{{$t('message.Confirm')}}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>
      <div class="modal fade" id="all" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="look">查看用户信息</h4>
            </div>
            <div class="modal-body">
              <p>ID：<span>{{num}}</span></p>
              <p>名称：<span>{{name}}</span></p>
              <p>Max_bucket：<span></span></p>
              <p>Keys：</p>
              <p>Swift_keys：</p>
              <p>Bucket_quota：</p>
              <p>User_quota：</p>
              <p>Op_mask：</p>
              <p>Type：</p>
              <p></p>
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
              <h4 class="modal-title" id="subuser">添加子用户</h4>
            </div>
            <div class="modal-body">
              <p>名称：</p><input type="text" class="form-control" id="subname" ref="addid" required="required"/>
              <p>访问级别：</p>
              <select class="form-control" v-on:change="sel($event)" v-model="rankselect">
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
              <h4 class="modal-title" id="editsub">修改子用户信息</h4>
            </div>
            <div class="modal-body">
              <p>ID：</p><input type="text" class="form-control" id="subn" :placeholder=subnow ref="sname" required="required"/>
              <p>访问级别：</p>
              <select class="form-control" v-on:change="selec($event)" v-model="subvisit">
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
      <tips ref="tips" :content=tipscontent :dotitle=title :docontent=dosome ></tips>
    </div>
</template>

<script>
    import tips from './tips'

    export default {
        name: "Object",
      components:{tips},
      data(){
          return{
            list:[
              {id:'one1',name:'one',type:'one',power:'r',quota:'',visit:'full',Maxobj:'-1',Maxsize:'-1',quotastatus:'off',status:'on',dosage:'278',subuser:[
                  {origin:'1',id:'sub1',contorls:'full',status:'on'},
                  {origin:'2',id:'sub3',contorls:'full',status:'on'}
                ]},
              {id:'two2',name:'two',type:'two',power:'r',quota:'',visit:'full',quotastatus:'on',status:'off',dosage:'1278',subuser:[
                  {origin:'1',id:'sub1',contorls:'full',status:'on'},
                  {origin:'2',id:'sub2',contorls:'full',status:'off'}
                ]},
              {id:'3',name:'three',type:'three',power:'w',quota:'',visit:'full',quotastatus:'off',status:'on',dosage:'324'},
              {id:'4',name:'four',type:'four',power:'w',quota:'',visit:'full',quotastatus:'off',status:'on',dosage:'4654'},
              {id:'5',name:'five',type:'five',power:'full',quota:'',visit:'full',quotastatus:'off',status:'on',dosage:'2134'},
              {id:'6',name:'six',type:'six',power:'w',quota:'',visit:'full',quotastatus:'off',status:'on',dosage:'2238'},
              {id:'7',name:'seven',type:'seven',power:'r',quota:'',visit:'full',quotastatus:'off',status:'on',dosage:'1238'},
              {id:'8',name:'eight',type:'eight',power:'r',quota:'',visit:'full',quotastatus:'off',status:'on',dosage:'378'},

            ],
            one1:[

            ],
            rank:[
              {name:'只读',value:'read'},
              {name:'只写',value:'write'},
              {name:'读写',value:'readwrite'},
              {name:'Full',value:'full'},
            ],
            rankselect:'',
            num:'',
            name:'',
            cross:'',
            tipsc:'',
            tipscontent:'',
            dosome:'',
            title:'',
            visitold:'',
            subnow:'',
            subvisit:'',
            searchurl:'',
            Mobject:null,
            Msize:null,
            subtipsc:''

          }
      },
      methods:{
        father(n,m,v,o,s){
          this.num=n
          this.name=m
          this.visitold=v
          this.Mobject=o
          this.Msize=s
          let i=0
          for ( i;i<this.list.length; i++){
            if (n==this.list[i].id){
              this.one1=this.list[i].subuser
            }
          }
        },
        thissub(who){
          this.subnow=who
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
        start(){
          $('#target:first-child').addClass('active')
          // alert($('li:first'))
          $('#two2:first').addClass('active')
          $('.tab-pane:first-child').addClass('active in')
          $('.tab-pane:first-child').addClass('in')
          $('.tab-pa:first-child').addClass('active')
          $('.tab-pa:first-child').addClass('in')
          $('.all:odd').css("background","#42345E");
          $('.bg:odd').css("background","#42345E");
          $("[data-toggle='tooltip']").tooltip({html:true});
          this.one1=this.list[0].subuser
          this.num=this.list[0].id
          this.name=this.list[0].name
          this.visitold=this.list[0].visit
          this.Msize=this.list[0].Maxsize
          this.Mobject=this.list[0].Maxobj
          $('#sear').bootstrapTable({
            url:this.allurl+this.searchurl
          })

          // $('#userstatus').bootstrapSwitch('state', false)
          // $('#substatus').bootstrapSwitch('state', false)

        },
        add(){
          if (sessionStorage.getItem('islogin')==250){
            this.tipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
          else {
            this.cross=''
            $('#addnew').modal('show')
          }
        },
        addsend(){
          var id=this.$refs.addid.value
          var name=this.$refs.addname.value
          if (id==''||name==''){
            this.cross='请填写完整!'
          }
          else {
            this.$axios.post(this.allurl+'object',{id:id,name:name}).then(function (res) {
              if (res.data.status == 1) {
                this.tipsc = '操作成功'
                $('#tipsc').show().delay(2000).fadeOut()

              }
              else {
                this.tipsc = res.data.status
                $('#tipsc').show().delay(2000).fadeOut()

              }
            }).catch(function (error) {
              console.log(error)
            })
            $('#addnew').modal('hide')
          }
        },
        subadd(){
          if (sessionStorage.getItem('islogin')==250){
            this.subtipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();;
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
          this.$axios.post(this.allurl+'object/edit',{subname:subname,rankselect:this.rankselect}).then(function (res) {
            if (res.data.status == 1) {
              this.subtipsc = '操作成功'
              $('#subtipsc').show().delay(2000).fadeOut()
            }
            else {
              this.subtipsc = res.data.status
              $('#subtipsc').show().delay(2000).fadeOut()
            }
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
            this.$axios.post(this.allurl+'object/edit',{control:this.visitold,name:name}).then(function (res) {
              if (res.data.status == 1) {
                this.tipsc = '操作成功'
                $('#tipsc').show().delay(2000).fadeOut()
              }
              else {
                this.tipsc = res.data.status
                $('#tipsc').show().delay(2000).fadeOut()
              }
            }).catch(function (error) {
              console.log(error)
            })
            $('#edit').modal('hide')
          }
        },
        subeditsend(){
          var sname=this.$refs.sname.value
          if (this.subvisit==''||name==''){
            this.cross='请填写完整!'
          }
          else {
            this.$axios.post(this.allurl+'object/sub',{control:this.subvisit,name:sname}).then(function (res) {
              if (res.data.status == 1) {
                this.subtipsc = '操作成功'
                $('#subtipsc').show().delay(2000).fadeOut()

              }
              else {
                this.tipscontent = res.data.status
                $('#subtipsc').show().delay(2000).fadeOut()

              }
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
            $("#tipsc").show().delay (2000).fadeOut ();;
          }
          else {
            this.cross=''
            $('#subedit').modal('show')
          }
        },
        look(){
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
            this.title = '是否确认选择删除用户'
            this.dosome = this.num
            this.$refs.tips.dselect()
          }
        },
        subdelete(){
          if (sessionStorage.getItem('islogin')==250){
            this.subtipsc='普通用户无操作权限！'
            $("#tipsc").show().delay (2000).fadeOut ();
          }
          else {
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
      float: left;
    }
  .subuser{
    height: 25em;

  }
    thead{
      background-color: #C17F00;

    }
    .modal-content{
      background-color:#3E324E ;
      color: white;
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
