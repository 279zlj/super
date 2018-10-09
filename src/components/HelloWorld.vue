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
      <div class="col-lg-1 col-lg-offset-3 col-md-1 col-md-offset-1 col-sm-1 col-xs-12 right-border">
        <router-link to="/"><p class="font">首页</p></router-link>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 right-border">
      <router-link :to="{name:'Resources'}"><p class="font">资源监控</p></router-link>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 right-border">
        <router-link :to="{name:'Allocation'}"><p class="font">资源调配</p></router-link>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 right-border">
        <router-link :to="{name:'Management'}"><p class="font">风险控制</p></router-link>
      </div>
      <div class="col-lg-1 col-lg-offset-2 col-md-1 col-md-offset-0 col-sm-2 col-xs-12 dropdown">
      <a class="dropdown-toggle glyphicon glyphicon-user white" data-toggle="dropdown" style="cursor: pointer"><span class="jl">admin</span></a>
        <ul class="dropdown-menu">
          <li><a href="#">用户管理</a></li>
          <li><a href="#">退出登陆</a></li>
        </ul>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 dropdown">
      <a class="dropdown-toggle glyphicon glyphicon-cog white" data-toggle="dropdown" style="cursor: pointer"><span class="jl">管理</span></a>
        <ul class="dropdown-menu">
          <li><a href="#">版本控制</a></li>
          <li><a href="#">lisense管理</a></li>
          <li><a href="#">日志管理</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
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
  .right-border{
    border-right: 1px solid #675E7B;
    margin-top: 1.3%;
    vertical-align: middle;
    height: 2em;
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
    border-right: 1px solid #181123;
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
    .right-border{
      margin-top: 1.6%;
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

  .cative{
    font-family:'Comfortaa', cursive;
  }

</style>
