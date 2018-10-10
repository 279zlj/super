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
