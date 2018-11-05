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
      <div class="col-lg-3 col-md-3 col-sm-1 col-xs-0">

      </div>
      <div v-for="i in nav" class="col-lg-1 col-md-1 col-sm-1 col-xs-12 one" :class="issele===i.name?'two':''">
        <div class="r-border" >
          <router-link :to="{name:i.href}"><p class="font" @click="changenav(i.name)">{{i.name}}</p></router-link>
          <!--<p class="font" @click="changenav(i.name)">{{i.name}}</p>-->
        </div>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 warnstatus" >
        <router-link :to="{name:'Mwarn'}">
          <span class="jg" title="警告事件：紧急" >{{$store.state.jj}}</span>
          <span class="jgtw" title="警告事件：重要">{{$store.state.zy}}</span>
          <span class="jgth" title="警告事件：次要">{{$store.state.cy}}</span>
        </router-link>
      </div>
      <div class="col-lg-1 col-md-1 col-md-offset-0 col-sm-2 col-xs-12 dropdown">
      <a class="dropdown-toggle glyphicon glyphicon-user white" data-toggle="dropdown" style="cursor: pointer"><span class="jl">admin</span></a>
        <ul class="dropdown-menu">
          <li @click="us()"><router-link :to="{name:'User'}">用户管理</router-link></li>
          <li><a style="cursor: pointer"><span id="out">退出登陆</span></a></li>
        </ul>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-2 col-xs-12 dropdown">
      <a class="dropdown-toggle glyphicon glyphicon-cog white" data-toggle="dropdown" style="cursor: pointer"><span class="jl">管理</span></a>
        <ul class="dropdown-menu">
          <li><a><span style="cursor: pointer" data-toggle="modal" data-target="#bb" @click="bbm()">版本管理</span></a></li>
          <li><a ><span style="cursor: pointer" data-toggle="modal" data-target="#lisense" @click="lis()">lisense管理</span></a></li>
          <li @click="us()"><router-link :to="{name:'Log'}">日志管理</router-link></li>
          <li><a><span style="cursor: pointer" data-toggle="modal" data-target="#notice" @click="addnotice()">添加警告通知</span></a></li>
        </ul>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 dropdown" id="lang">
        <a data-toggle="dropdown" style="cursor: pointer;color: white"><span class="j2">语言</span></a>
        <ul class="dropdown-menu">
          <li ><a style="cursor: pointer">中文</a></li>
          <li><a style="cursor: pointer">英语</a></li>
        </ul>
      </div>
    </div>
    <div class="modal fade" id="bb" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="bbmodal">版本升级</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-6 col-lg-offset-4 col-md-6 col-sm-6 col-xs-6">
                <input type="file" class="form-control" value="请选择上传的安装包"/>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <button class="btn btn-info">上传</button>
              </div>
            </div>
            <div class="row container-fluid" style="margin-top: 1em">

              <table class="table table-responsive" id="modalt" data-toggle="table"  data-classes="table-no-bordered"  data-toolbar="#toolbar" >
                <thead class="p">
                <tr>
                  <th data-field="rank">当前版本：v11</th>
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
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">确认</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="lisense" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
            <h4 class="modal-title" id="lisensemodal">lisense管理</h4>
          </div>
          <div class="modal-body">
            <table class="table table-responsive table-condensed" id="lisenset" data-toggle="table"  data-toolbar="#toolbar" data-classes="table-no-bordered">
              <thead class="o">
              <tr>
                <th data-field="node" >服务器节点</th>
                <th data-field="ipaddress" >IP地址</th>
                <th data-field="rank" >许可证</th>
                <th data-field="time" >剩余时间</th>
                <th data-field="size" >授权容量</th>
                <th data-field="usize" >使用容量</th>
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
    <div class="modal fade" id="notice" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="noticeconfigure">通知配置</h4>
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
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>

  </div>
</template>

<script>
  import 'store'
  import 'vuex'
  import '../store/store'
export default {
  name: 'HelloWorld',
  data () {
    return {
      issele:'首页',
      nav:[
        {index:'0',name:'首页',href:'HelloWorld'},
        {index:'1',name:'资源监控',href:'Resources'},
        {index:'2',name:'资源调配',href:'Allocation'},
        {index:'3',name:'风险控制',href:'Management'},
      ],
      ind:'',
      warn:[],
      jj:0,
      zy:0,
      cy:0,
    }
  },
  computed:{
    islogin(){
      return this.$store.state.islogin
    },
    countwarn(){
      return this.$store.state.jj,this.$store.state.zy,this.$store.state.cy
    }

  },
  methods:{
    outlog(){                 /*退出登录*/
      let self=this
      $('#out').click(function () {

        var msg=confirm('确定退出？')
        if (msg===true){
          self.$store.commit('islogin',0)
          sessionStorage.removeItem('islogin');
          localStorage.removeItem('islogin')
          self.$router.push({path:'/Login'})
          window.document.body.style.backgroundColor = '#242424';
        }
        else return;
      })
    },
    us(){
      this.changenav('none')
    },
    changenav:function (name) {               /*一级导航栏状态存储，建立一个issele的sessionStorage值，刷新时调用，保持状态*/
      this.issele=name

      sessionStorage.setItem('issele',this.issele)

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
    this.outlog()
    this.warnall()
    if (sessionStorage.getItem('issele')==null){             /*最初状态设置为首页*/
      this.changenav('首页')
    }
    else {
    this.issele=sessionStorage.getItem('issele')
    }


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navn{
    height: 3.5em !important;
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
    padding: .7rem .5rem .8rem 1.5rem;
    width: 85%;

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
    line-height: 3.9em;

  }
  .white{
    color: white;

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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 10%;
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
  @media screen and (min-width: 769px) and (max-width: 1025px) {
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
  @media screen and (min-width: 1440px) and (max-width: 1599px) {
    .warnstatus{
      line-height: 1em;
    }
    .jg,.jgtw,.jgth{
      margin-top: 0.2em;
      height: 1.5em;
      line-height: 1.5em;
    }
  }
  @media screen and (min-width:1600px ) {

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
