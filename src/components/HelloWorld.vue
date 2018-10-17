<template>
  <div class="row nav-color" id="HelloWorld">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 navbar-header mp">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
          <span class="sr-only">切换导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="index.html" class="navbar-brand nav-title bg">
          <img src="../../static/image/logo.png" class="img-responsive imgg"/>
        </a>
      </div>
    <div class="col-lg-11 collapse navbar-collapse" id="navbar-menu">
      <div class="col-lg-1 col-lg-offset-3 col-md-1 col-md-offset-1 col-sm-1 col-xs-12" :class="{active:one}" >
        <div class="r-border">
          <router-link to="/"><p class="font" @click="clione()">首页</p></router-link>
        </div>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12" :class="{active:two}">
        <div class="r-border">
          <router-link :to="{name:'Resources'}"><p class="font" @click="clitwo()">资源监控</p></router-link>
        </div>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12" :class="{active:three}">
        <div class="r-border">
          <router-link :to="{name:'Allocation'}"><p class="font" @click="clithree()">资源调配</p></router-link>
        </div>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12" :class="{active:four}">
        <div class="r-border">
          <router-link :to="{name:'Management'}"><p class="font" @click="clifour()">风险控制</p></router-link>
        </div>
      </div>
      <div class="col-lg-1 col-lg-offset-2 col-md-1 col-md-offset-0 col-sm-2 col-xs-12 dropdown">
      <a class="dropdown-toggle glyphicon glyphicon-user white" data-toggle="dropdown" style="cursor: pointer"><span class="jl">admin</span></a>
        <ul class="dropdown-menu">
          <li><router-link :to="{name:'User'}">用户管理</router-link></li>
          <li><a style="cursor: pointer"><span id="out">退出登陆</span></a></li>
        </ul>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 dropdown">
      <a class="dropdown-toggle glyphicon glyphicon-cog white" data-toggle="dropdown" style="cursor: pointer"><span class="jl">管理</span></a>
        <ul class="dropdown-menu">
          <li><a><span style="cursor: pointer" data-toggle="modal" data-target="#bb">版本控制</span></a></li>
          <li><a ><span style="cursor: pointer" data-toggle="modal" data-target="#lisense">lisense管理</span></a></li>
          <li><router-link :to="{name:'Log'}">日志管理</router-link></li>
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

              <table class="table table-responsive">
                <thead class="p"><th>当前版本：v11</th></thead>
                <tbody>
                  <tr>
                    <td>1232143142</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">确认</button>
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
            <table class="table table-responsive table-condensed">
              <thead class="o">
                <th>服务器节点</th>
                <th>IP地址</th>
                <th>许可证</th>
                <th>剩余时间</th>
                <th>授权容量</th>
                <th>使用容量</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">确认</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      one:true,
      two:false,
      three:false,
      four:false,
    }
  },
  methods:{
    clione:function () {
      this.one=true,
      this.two=false,
      this.three=false,
      this.four=false
    },
    clitwo:function () {
      this.one=false,
      this.two=true,
      this.three=false,
      this.four=false
    },
    clithree:function () {
      this.one=false,
      this.two=false,
      this.three=true,
      this.four=false
    },
    clifour:function () {
      this.one=false,
      this.two=false,
      this.three=false,
      this.four=true
    },
    outlog(){
      $('#out').click(function () {
        confirm('确定推出？')
      })
    }
  },
  mounted(){
    this.outlog()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .jl{
    padding-left: 1rem;
    line-height: 4rem;
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
    width: 100%;
    text-align: center;
    display: table-cell;
    vertical-align: middle;

  }
  table{
    text-align:center;
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
  @media screen and (max-width: 425px) {
    .imgg{
      padding: .7rem .5rem .8rem .5rem;
      width: 4em;
      height: 100%;
    }
    .nav-color{
      margin-top: 0;
    }
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    .imgg{
      padding: 1rem .5rem .8rem .5rem;
      width: 100%;
    }

  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .imgg{
      padding: .8rem .5rem .8rem .8rem;
      width: 90%;
    }

  }
  .nav-title{
    font-family: 'Abril Fatface', cursive;
  }

</style>
