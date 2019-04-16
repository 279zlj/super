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
          <div class="box" id="box">
            <div class="first img-responsive"></div>
            <div class="second img-responsive"></div>
            <div class="three img-responsive"><img src="../../static/image/logo.png" class="img-responsive imgg"/></div>
            <div class="four img-responsive"><img src="../../static/image/wuzhou.png" class="img-responsive imgg"/></div>

          </div>
        </a>
      </div>
    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-12 collapse navbar-collapse navn" id="navbar-menu" >
      <div class="col-lg-2 col-md-2 col-sm-1 col-xs-0">

      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 one" :class="issele==='HelloWorld'?'two':''">
        <div class="r-border"  >
          <router-link :to="{name:'HelloWorld'}" ><p class="font" @click="changenav('HelloWorld')" id="index">{{$t('nav.Home')}}</p></router-link>
        </div>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 one"  :class="issele==='Resources'?'two':''">
        <div class="r-border" >
          <router-link :to="{name:'Resources'}"><p class="font" @click="changenav('Resources')" id="resources">{{$t('nav.Control')}}</p></router-link>
        </div>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 one"  :class="issele==='Allocation'?'two':''">
        <div class="r-border" >
          <router-link :to="{name:'Allocation'}"><p class="font" @click="changenav('Allocation')" id="allocation">{{$t('nav.Allocation')}}</p></router-link>
        </div>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12" :class="issele==='Management'?'two':''" >
        <div class="r-border" >
          <router-link :to="{name:'Management'}"><p class="font" @click="changenav('Management')" id="management">{{$t('nav.Risk')}}

            <span class=" label label-danger" style="vertical-align: super" title="警告事件：紧急"  data-toggle="tooltip" data-placement="bottom">{{$store.state.jj}}</span>
            <span class=" label label-warning" style="vertical-align: super" title="警告事件：重要" data-toggle="tooltip" data-placement="bottom">{{$store.state.zy}}</span>
            <span class=" label label-info" style="vertical-align: super" title="警告事件：次要" data-toggle="tooltip" data-placement="bottom">{{$store.state.cy}}</span>

          </p></router-link>
        </div>
      </div>

      <div class="col-lg-1 col-lg-offset-1 col-md-1 col-sm-2 col-xs-12 dropdown">
      <a class="dropdown-toggle glyphicon glyphicon-user white" data-toggle="dropdown" data-hover="dropdown"  data-close-others="false"  style="cursor: pointer"><span class="j2" id="useropt">{{user}}</span></a>
        <ul class="dropdown-menu">
          <li @click="us()"><router-link :to="{name:'User'}" id="usermanager">{{$t('message.User-control')}}</router-link></li>
          <li><a style="cursor: pointer"><span @click="outlog" id="outlogin">{{$t('message.Log-out')}}</span></a></li>
          <!--<li><a style="cursor: pointer"><span  v-on:click="changeone()" style="color: black;">简约风格</span></a></li>-->
          <!--<li><a style="cursor: pointer"><span  v-on:click="changetwo()" style="color: black;">原始主题</span></a></li>-->
        </ul>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 dropdown">
      <a class="dropdown-toggle glyphicon glyphicon-cog white" data-toggle="dropdown" data-hover="dropdown"  data-close-others="false" style="cursor: pointer"><span class="j2" id="manager">{{$t('nav.Management')}}</span></a>
        <ul class="dropdown-menu">
          <li><a><span style="cursor: pointer" data-toggle="modal" data-target="#bb" @click="bbm()" id="version">{{$t('message.Versioning')}}</span></a></li>
          <li><a ><span style="cursor: pointer" data-toggle="modal" data-target="#lisense" @click="lis()" id="lisenseopt">{{$t('message.Lisense-management')}}</span></a></li>
          <li @click="us()"><router-link :to="{name:'Log'}" id="logmanager">{{$t('message.Log-management')}}</router-link></li>
          <li><a><span style="cursor: pointer" data-toggle="modal" data-target="#notice" @click="addnotice()" id="addwarn">{{$t('message.Add-warning-notice')}}</span></a></li>
        </ul>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 dropdown" id="lang">
        <a data-toggle="dropdown" data-hover="dropdown"  data-close-others="false"  style="cursor: pointer" class="glyphicon glyphicon-font white"><span class="j2" id="langue">{{$t('nav.Language')}}</span></a>
        <ul class="dropdown-menu">
          <li ><a style="cursor: pointer" @click="changelanguage('zh')" id="chinese">{{$t('message.Chinese')}}</a></li>
          <li><a style="cursor: pointer" @click="changelanguage('en')" id="english">{{$t('message.English')}}</a></li>
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
                <button class="btn btn-info" id="upload">{{$t('message.Uploading')}}</button>
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
                <button type="button" class="btn btn-info" id="rank" style="margin-top: 1em">一键升级</button>
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
                <input type="text" ref="phone" class="form-control" id="phone" placeholder="手机号码" autofocus="autofocus"/>
                <span style="color:red">{{cross}}</span>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <button class="btn btn-info" type="button" id="addno" @click="warnphone()">添加</button>
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
  import {delCookie} from '../assets/js/base'

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
      language:'',
      user:'',
      timertip:null,
      cross:''

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
        delCookie('username');
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
    warnphone(){
      var phoner='/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/'
      var phone=this.$refs.phone.value
      this.cross=''
      if (phoner.test(phone)){
        this.$axios.post(this.allurl+'',{'phone':phone}).then(function () {

        }).catch(function (error) {
          console.log(error)
        })
      }
      else {
        this.cross='输入手机号码格式不对'
      }
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
    timer(){
      var _this=this

      this.timertip=setInterval(function () {
        _this.jj=0,_this.zy=0,_this.cy=0
        _this.warnall()
      },30000)
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
    lis(){               //license初始化
      // console.log('lis',document.getElementById('lisenset'))
      $('#lisenset').bootstrapTable({
        url:this.allurl+"manctl/licen_list"
      })
    },
    bbm(){                    //版本管理初始化
      // console.log('bbm')
      if (sessionStorage.getItem('islogin')==250) {
        $('#upload').addClass('disabled')

        $('#rank').addClass('disabled')
      }
      $('#modalt').bootstrapTable({
        url:this.allurl+"manctl/versions"
      })
    },
    addnotice(){
      // console.log('bbm')
      if (sessionStorage.getItem('islogin')==250)
        $('#addno').addClass('disabled')
    },
    roate(){             //logo动画
      setInterval(function () {
        $('#three').fadeIn('slow')
        $('#four').slideDown(5000)
        $('#four').fadeOut('slow')
        $('#three').slideDown(5000)
        // $('#four').slideUp('slow')
        // $('#three').slideUp('slow')

      },5000)

    }
  },

  mounted(){
    // this.outlog()
    $("[data-toggle='tooltip']").tooltip();
    this.roate()
    // console.log(this.$store.state.islogin)
    if (sessionStorage.getItem('islogin')==200){
      this.user='Admin'
    }
    else {
      this.user='User'
    }
    this.warnall()
    this.timer()
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
    // this.looksome()
  },
  destroyed(){
    clearInterval(this.timertip)
  }
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

    background-color: #2E2245;
  }
  a{
    text-decoration: none;
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
    background-color: #172952;

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

  .close{
    color: white !important;
  }

  .nav-color{
    background-color: #56466D;
    margin-top: 2.5rem;
    padding-left: 0;
    box-shadow: 10px 10px 50px #181123;

  }
  @keyframes rotate{
    0%{
      transform:rotateX(0deg) ;
    }
    100%{
      transform:rotateX(360deg)
    }
  }
  .box{
    margin:0 auto;
    width:100%;
    height:100%;
    position:relative;
    transform-style: preserve-3d;
    /*transform:rotateX(0deg);*/
    transform: perspective(180px) rotateX(0deg) rotateY(0deg);
    /*animation:rotate 10s infinite linear;*/
    animation: xuanzhuan 20s infinite;

  }
  .box>div{
    width:100%;
    height:100%;
    /*border:1px solid #FFFFFF;*/
    position:absolute;
    top: 0;
    left: 0;
    /*  transition:transform 5s ease-in; */
  }
  .first{
    height: 1em !important;
    transform: translateY(2.25em) translateZ(0em) rotateX(90deg);
    background-color:  #00b5FF;
  }
  .second{
    height: 1em !important;
    transform: translateY(-.5em) translateZ(0em) rotateX(90deg);
    background-color:  #00b5FF;
  }
  .three{
    transform:rotateX(0deg) translateZ(.5em);
    background-color: #0590FF;
    /*background-image: url("../../static/image/logo.png") ;*/
    background-size: cover;
    opacity:1;
  }
  .four{
    transform:rotateX(180deg) translateZ(.5em);
    background-color: #0590FF;
    /*background-image: url("../../static/image/wuzhou.png") ;*/
    background-size: cover;
    opacity:1;
  }
  .dropdown-menu{
    top:100% !important;
  }
  @keyframes xuanzhuan
  {
    0%{
      transform:perspective(180px) rotateX(0deg);
    }
    10%,20%,30%,40%{
      transform:perspective(180px) rotateX(180deg);
    }
    50%{
      transform:perspective(180px) rotateX(180deg);
    }
    60%,70%,80%,90%{
      transform:perspective(180px) rotateX(360deg);
    }
    100%{
      transform:perspective(180px) rotateX(360deg);
    }
  }

  @-webkit-keyframes xuanzhuan{
    0%{
      transform:perspective(180px) rotateX(0deg);
    }
    10%,20%,30%,40%{
      transform:perspective(180px) rotateX(180deg);
    }
    50%{
      transform:perspective(180px) rotateX(180deg);
    }
    60%,70%,80%,90%{
      transform:perspective(180px) rotateX(360deg);
    }
    100%{
      transform:perspective(180px) rotateX(360deg);
    }
  }
  .box:hover{
    transform: perspective(180px) scale(1.5);
    animation: xuanzhuan 10s cubic-bezier(0.0,0.0,0.0,0.0) infinite paused forwards;
    /*有hover事件是动画暂停*/
  }


  .active{
    background-color: #3F3456;

  }
  .warnstatus{
    line-height: 3.5em;display: table-cell;text-align: center;vertical-align: middle;
  }

  .lang {
    height: 3.5em;
    font-size: 1.2rem;
    line-height: 4.5em
  }
  .bg{

    height: 2.8em;
    width: 100%;
  }
  @media screen and (max-width: 425px) {

    .nav-color{
      margin-top: 0;
    }
    .one{
      width: 100%;
    }
    .bg{
      width: 7em !important;
    }
    .navn{
      height:100% !important;
    }
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    .imgg{
     margin-top: .5em;
    }

    .warnstatus{
      line-height: 0em;
    }

  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .imgg{
      margin-top: .5em;
    }
    .jl{
      padding-left: .2rem;
      font-size: 12.5px;
    }
    .warnstatus{
     line-height: 0em;
    }

  }
  @media screen and (min-width: 1025px) and (max-width: 1199px) {
    .imgg{
      margin-top: .5em;
    }
    .jl{
      padding-left: .2rem;
      font-size: 12.5px;
    }
    .warnstatus{
      line-height: 0em;
    }

  }
  @media screen and (min-width: 1200px) and (max-width: 1439px) {

    .imgg{
      margin-top: .5em;
    }
    .jl{
      padding-left: .2rem;
      font-size: 12.5px;
    }
    .warnstatus{
      line-height: 0em;
    }

  }
  @media screen and (min-width: 1440px) and (max-width: 1599px) {
    .warnstatus{
      line-height: 1em;
    }

  }
  @media screen and (min-width:1600px ) and (max-width:1910px ) {
    .warnstatus{
      line-height: 1em;
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
