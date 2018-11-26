<template>

  <div class="row nav-color" id="HelloWorld">

      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 navbar-header mp">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
          <span class="sr-only">切换导航</span>
          <span class="icon-bar" data-toggle="collapse" data-target="#navbar-menu" ></span>
          <span class="icon-bar" data-toggle="collapse" data-target="#navbar-menu"></span>
          <span class="icon-bar" data-toggle="collapse" data-target="#navbar-menu"></span>
          <span class="icon-bar" data-toggle="collapse" data-target="#navbar-menu"></span>
        </button>
        <a href="#" class="navbar-brand nav-title bg">
          <img src="../../static/image/logo.png" class="img-responsive imgg"/>
        </a>
      </div>
    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-12 collapse navbar-collapse navn" id="navbar-menu" >
      <div class="col-lg-2 col-md-2 col-sm-1 col-xs-0">

      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 one"  :class="issele==='HelloWorld'?'two':''">
        <div class="r-border" >
          <router-link :to="{name:'HelloWorld'}" ><p class="font" @click="changenav('HelloWorld')" >{{$t('nav.Home')}}</p></router-link>
        </div>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 one"  :class="issele==='Resources'?'two':''">
        <div class="r-border" >
          <router-link :to="{name:'Resources'}"><p class="font" @click="changenav('Resources')">{{$t('nav.Control')}}</p></router-link>
        </div>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 one"  :class="issele==='Allocation'?'two':''">
        <div class="r-border" >
          <router-link :to="{name:'Allocation'}"><p class="font" @click="changenav('Allocation')">{{$t('nav.Allocation')}}</p></router-link>
        </div>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12" :class="issele==='Management'?'two':''" >
        <div class="r-border" >
          <router-link :to="{name:'Management'}"><p class="font" @click="changenav('Management')">{{$t('nav.Risk')}}

            <span class=" label label-danger" style="vertical-align: super" title="警告事件：紧急"  data-toggle="tooltip" data-placement="top">{{$store.state.jj}}</span>
            <span class=" label label-warning" style="vertical-align: super" title="警告事件：重要" data-toggle="tooltip" data-placement="top">{{$store.state.zy}}</span>
            <span class=" label label-info" style="vertical-align: super" title="警告事件：次要" data-toggle="tooltip" data-placement="top">{{$store.state.cy}}</span>

          </p></router-link>
        </div>
      </div>
      <!--<div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 warnstatus" >-->
        <!--<router-link :to="{name:'Mwarn'}">-->
          <!--<span class="jg" title="警告事件：紧急"  data-toggle="tooltip" data-placement="bottom">{{$store.state.jj}}</span>-->
          <!--<span class="jgtw" title="警告事件：重要" data-toggle="tooltip" data-placement="bottom">{{$store.state.zy}}</span>-->
          <!--<span class="jgth" title="警告事件：次要" data-toggle="tooltip" data-placement="bottom">{{$store.state.cy}}</span>-->
        <!--</router-link>-->
      <!--</div>-->
      <div class="col-lg-1 col-lg-offset-1 col-md-1 col-sm-2 col-xs-12 dropdown">
      <a class="dropdown-toggle glyphicon glyphicon-user white" data-toggle="dropdown" style="cursor: pointer"><span class="jl">admin</span></a>
        <ul class="dropdown-menu">
          <li @click="us()"><router-link :to="{name:'User'}">{{$t('message.User-control')}}</router-link></li>
          <li><a style="cursor: pointer"><span @click="outlog">{{$t('message.Log-out')}}</span></a></li>
          <li><a style="cursor: pointer"><span  v-on:click="changeone()" style="color: black;">简约风格</span></a></li>
          <li><a style="cursor: pointer"><span  v-on:click="changetwo()" style="color: black;">原始主题</span></a></li>
        </ul>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 dropdown">
      <a class="dropdown-toggle glyphicon glyphicon-cog white" data-toggle="dropdown" style="cursor: pointer"><span class="jl">{{$t('nav.Management')}}</span></a>
        <ul class="dropdown-menu">
          <li><a><span style="cursor: pointer" data-toggle="modal" data-target="#bb" @click="bbm()">{{$t('message.Versioning')}}</span></a></li>
          <li><a ><span style="cursor: pointer" data-toggle="modal" data-target="#lisense" @click="lis()">{{$t('message.Lisense-management')}}</span></a></li>
          <li @click="us()"><router-link :to="{name:'Log'}">{{$t('message.Log-management')}}</router-link></li>
          <li><a><span style="cursor: pointer" data-toggle="modal" data-target="#notice" @click="addnotice()">{{$t('message.Add-warning-notice')}}</span></a></li>
        </ul>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 dropdown" id="lang">
        <a data-toggle="dropdown" style="cursor: pointer" class="glyphicon glyphicon-font white"><span class="j2">{{$t('nav.Language')}}</span></a>
        <ul class="dropdown-menu">
          <li ><a style="cursor: pointer" @click="changelanguage('zh')">{{$t('message.Chinese')}}</a></li>
          <li><a style="cursor: pointer" @click="changelanguage('en')">{{$t('message.English')}}</a></li>
        </ul>
      </div>
    </div>
    <div class="modal fade" id="bb" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="bbmodal">{{$t('message.Version-upgrade')}}</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-6 col-lg-offset-3 col-md-6 col-sm-6 col-xs-6">
                <input type="file" class="form-control" value="请选择上传的安装包"/>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <button class="btn btn-info">{{$t('message.Uploading')}}</button>
              </div>
            </div>
            <div class="row container-fluid" style="margin-top: 1em">

              <table class="table table-responsive" id="modalt" data-toggle="table"  data-classes="table-no-bordered"  data-toolbar="#toolbar" >
                <thead class="p">
                <tr>
                  <th data-field="rank">{{$t('message.Current-Versions')}}：v11</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
              <div class="col-lg-2 col-lg-offset-10">
                <input type="button" class="btn btn-info" value="一键升级" style="margin-top: 1em"/>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Close')}}</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="lisense" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
            <h4 class="modal-title" id="lisensemodal">{{$t('message.Lisense-management')}}</h4>
          </div>
          <div class="modal-body">
            <table class="table table-responsive table-condensed" id="lisenset" data-toggle="table"  data-toolbar="#toolbar" data-classes="table-no-bordered">
              <thead class="o">
              <tr>
                <th data-field="node" >{{$t('message.Server-node')}}</th>
                <th data-field="ipaddress" >{{$t('message.IP-address')}}</th>
                <th data-field="rank" >{{$t('message.Licence')}}</th>
                <th data-field="time" >{{$t('message.RemainingTime')}}</th>
                <th data-field="size" >{{$t('message.Authorized-capacity')}}</th>
                <th data-field="usize" >{{$t('message.Available-capacity')}}</th>
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
    <div class="modal fade" id="notice" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="noticeconfigure">{{$t('message.Notification-handlers')}}</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <input type="text" class="form-control" placeholder="手机号码" autofocus="autofocus"/>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <input type="button" class="btn btn-info" value="添加"/>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('message.Close')}}</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">{{$t('message.Confirm')}}</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <tips ref="tips" :out=outtitle v-on:log="res"></tips>

  </div>

</template>

<script>
  import 'store'
  import 'vuex'
  import '../store/store'
  import tips from './tips'
  import Vue from 'vue'

export default {
  name: 'HelloWorld',
  components:{tips},
  data () {
    return {

      issele:'首页',
      // nav:[
      //   {index:'0',name:'首页',href:'HelloWorld'},
      //   {index:'1',name:'资源监控',href:'Resources'},
      //   {index:'2',name:'资源调配',href:'Allocation'},
      //   {index:'3',name:'风险控制',href:'Management'},
      // ],
      ind:'',
      warn:[],
      jj:0,
      zy:0,
      cy:0,
      outtitle:'',
      respond:'',
      language:''

    }
  },
  computed:{
    islogin(){
      return this.$store.state.islogin
    },
    countwarn(){
      return this.$store.state.jj,this.$store.state.zy,this.$store.state.cy
    },
    // selectlang(){
    //   return this.$store.state.language
    // }

  },
  methods:{
    res(data){
      this.respond=data
      if(this.respond=='logout'){
        this.$store.commit('islogin',0)
        sessionStorage.removeItem('islogin');
        sessionStorage.removeItem('issele')
        localStorage.removeItem('islogin')
        this.$router.push({path:'/Login'})
        window.document.body.style.backgroundColor = '#242424';
      }
    },
    changeone(){
      // window.document.body.style.backgroundColor='#FFF'
      $('body').css('background','#FFF')
      // $('#app').css('color','#000')
      $('#app').css('background-color','#FFF')
    },
    changetwo(){
      $('body').css('background','#2E2245')
      $('#app').css('background-color','#2E2245')
    },
    outlog(){                 /*退出登录*/

        this.outtitle='确定退出？'
        // this.title=ids
        this.$refs.tips.logout()

    },
    changelanguage(lang){
      this.$i18n.locale = lang
      this.language=lang
      // console.log(this.one)
      sessionStorage.setItem('language',this.language)

    },
    us(){
      this.changenav('none')
    },
    changenav:function (name) {               /*一级导航栏状态存储，建立一个issele的sessionStorage值，刷新时调用，保持状态*/
      this.issele=name
      sessionStorage.setItem('issele',this.issele)
      // return this.issele
    },
    warnall(){
      var _this=this
      this.$axios.get(this.allurl+'list_data').then(function (res) {
        _this.warn=res.data.warn
        _this.count()                    /*警告事件的分类统计*/

      }).catch(function (error) {
        console.log(error)
      })
    },
    count(){
      let i;
      for(i in this.warn){
        if(this.warn[i].status=='紧急'){
          this.jj+=1;

        }
        if (this.warn[i].status=='重要'){
          this.zy+=1;
        }
        if (this.warn[i].status=='次要'){
          this.cy+=1;
        }
      }
      this.$store.commit('countwarn',{one:this.jj,two:this.zy,three:this.cy})
      return this.jj,this.zy,this.cy
    },
    lis(){
      // console.log('lis',document.getElementById('lisenset'))
      $('#lisenset').bootstrapTable({
        url:this.allurl+"manctl/licen_list"
      })
    },
    bbm(){
      // console.log('bbm')
      $('#modalt').bootstrapTable({
        url:this.allurl+"manctl/versions"
      })
    },
    addnotice(){
      // console.log('bbm')

    }
  },

  mounted(){
    // this.outlog()
    $("[data-toggle='tooltip']").tooltip();
    this.warnall()
    if (sessionStorage.getItem('issele')==null){             /*最初状态设置为首页*/
      this.changenav('HelloWorld')
    }
    else {
    this.issele=sessionStorage.getItem('issele')
    }
    if (sessionStorage.getItem('language')!=null) {
      this.language = sessionStorage.getItem('language')
      // console.log(this.$store.state.language)
      this.changelanguage(this.language)
    }
    else this.changelanguage('zh')
    // this.$i18n.locale = this.$store.state.language
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navn{
    height: 3.3em !important;
  }
  .navbar-toggle .icon-bar{
    background-color:#ffffff
  }
  .mp{
    margin: 0;padding: 0;
  }
  a{
    text-decoration: none;
  }
  .imgg{
    padding: .7rem .5rem .8rem 1.8rem;
    margin-left: .2em;
    width: 75%;

  }
  .two{
    background-color: #3F3456 !important;
    z-index: 999;
  }
  .jl{
    padding-left: .5rem;
    line-height: 4rem;

  }
  .j2{
    line-height: 3.5em;
    padding-left: .5rem;
    width: 2em;
    height: 1em;

  }
  .white{
    color: white;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  thead{
    background-color: #292431;

  }
  .p th{
    line-height: 2.5em;

  }
  .o th{
    text-align: center;
    line-height: 2em;
  }
  .r-border{
    padding-top: 1em;
    line-height: 2.2em;
    text-align: center;
  }
  p{
    color: white;
    text-align: center;
  }
  .font{
    font-size: 1.3rem;
    line-height: 2em;
    height: 2em;
    width: 100%;
    text-align: center;
    display: table-cell;
    vertical-align: middle;

  }
  .one{
    width: 10%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  table{

  }
  .modal-content{
    background-color:#3E324E ;
    color: white;
  }
  .close{
    color: white !important;
  }
  .bg{
    background-color: #0090ff;
    height: 2.8em;
  }
  .nav-color{
    background-color: #56466D;
    margin-top: 5rem;
    padding-left: 0;
    box-shadow: 10px 10px 50px #181123;

  }
  .active{
    background-color: #3F3456;

  }
  .warnstatus{
    line-height: 3.5em;display: table-cell;text-align: center;vertical-align: middle;
  }
  .jg{
    background-color: #AD1501;padding: 0 .3em;cursor:pointer;margin-top: 1em;color: white;width: 1.8em !important;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;display: inline-block;height: 1.5em;line-height: 1em;
  }
  .jgtw{
    background-color: #DA4409;padding: 0 .3em;cursor:pointer;margin-top: 1em;color: white;width: 1.8em !important;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;display: inline-block;height: 1.5em;line-height: 1em;
  }
  .jgth{
    background-color: #FF8A00;padding: 0 .3em;cursor:pointer;margin-top: 1em;color: white;width: 1.8em !important;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;display: inline-block;height: 1.5em;line-height: 1em;
  }
  .lang {
    height: 3.5em;
    font-size: 1.2rem;
    line-height: 4.5em
  }
  @media screen and (max-width: 425px) {
    .imgg{
      padding: .7rem .5rem .8rem .5rem;
      width: 4em;
      height: 100%;
    }
    .nav-color{
      margin-top: 0;
    }
    .one{
      width: 100%;
    }

    .navn{
      height:100% !important;
    }
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    .imgg{
      padding: 1rem .5rem .8rem .5rem;
      width: 100%;
    }

    .warnstatus{
      line-height: 0em;
    }
    .jg,.jgtw,.jgth{
      margin-top: 0em;
      height: 1.2em;
      line-height: 0.8em;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .imgg{
      padding: .8rem .5rem .8rem .8rem;
      width: 90%;
    }
    .jl{
      padding-left: .2rem;
      font-size: 12.5px;
    }
    .warnstatus{
     line-height: 0em;
    }
   .jg,.jgtw,.jgth{
     margin-top: 0em;
     height: 1.2em;
     line-height: 0.8em;
   }
  }
  @media screen and (min-width: 1025px) and (max-width: 1199px) {
    .imgg{
      padding: .8rem .5rem .8rem .8rem;
      width: 90%;
    }
    .jl{
      padding-left: .2rem;
      font-size: 12.5px;
    }
    .warnstatus{
      line-height: 0em;
    }
    .jg,.jgtw,.jgth{
      margin-top: 0em;
      height: 1.2em;
      line-height: 0.8em;
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1439px) {
    .imgg{
      padding: .8rem .5rem .8rem .8rem;
      width: 90%;
    }
    .jl{
      padding-left: .2rem;
      font-size: 12.5px;
    }
    .warnstatus{
      line-height: 0em;
    }
    .jg,.jgtw,.jgth{
      margin-top: 0.3em;
      height: 1.2em;
      line-height: 1em;
    }
  }
  @media screen and (min-width: 1440px) and (max-width: 1599px) {
    .warnstatus{
      line-height: 1em;
    }
    .jg,.jgtw,.jgth{
      margin-top: 0em;
      height: 1.5em;
      line-height: 1.5em;
    }
  }
  @media screen and (min-width:1600px ) and (max-width:1910px ) {
    .warnstatus{
      line-height: 1em;
    }
    .jg,.jgtw,.jgth{
      margin-top: 0.2em;
      height: 1.5em;
      line-height: 1.5em;
    }
    .imgg{
      padding: .7rem .5rem .8rem 2rem;
      margin-left: .5em;
      width: 75%;
    }

  }

  .nav-title{
    font-family: 'Abril Fatface', cursive;
  }

</style>
