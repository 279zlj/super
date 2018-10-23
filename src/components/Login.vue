<template>
    <div id="Login" class="container">
      <div>
        <img src="../../static/image/login/one.png" class="img-responsive one"/>
        <img src="../../static/image/login/two.png" class="img-responsive two"/>
        <img src="../../static/image/login/three.png" class="img-responsive three"/>
        <img src="../../static/image/login/four.png" class="img-responsive four"/>
      </div>
      <div class="container-fluid" style="margin-top: 13em">
        <div class="row">
        <div class="col-lg-3 col-lg-offset-3 col-md-4 col-md-offset-2 col-sm-5 col-sm-offset-1 col-xs-6 content" style="background-color: white;">
          <div class="container-fluid">
          <h2 class="t">登录</h2>
          <label class="l">用户名：</label>
          <input type="text" class="form-control" placeholder="请输入用户名" ref="user" id="user"/>
          <label class="l">密码：</label>
          <input type="password" class="form-control" placeholder="输入密码" ref="pwd" id="pwd"/>
          <input type="button" class="btn btn-info b" value="登录" @click="loginuser()" />
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-5 col-xs-6" >
          <div class="row">
            <img src="../../static/image/login/right.png" class="img-responsive"/>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
  import 'store'
  import 'vuex'
  import '../store/store'

    export default {
        name: "Login",

      computed:{
          islogin(){
            return this.$store.state.islogin
          }
      },
      data(){
          return{
            user:'',
            pwd:''
          }
      },

      methods:{
        loginuser(){

          if (this.$refs.user.value==''||this.$refs.pwd.value==''){
            alert('用户名或密码不能为空')
          }

          else {
            this.user=this.$refs.user.value;
            this.pwd=this.$refs.pwd.value;
            // this.setToken('login_token','ewraweesdfasd')
            // this.setToken('islogin',200)
            this.$store.commit('islogin',200)
            sessionStorage.setItem('islogin','200')
            this.$router.push('/')
            // this.$axios.post('/Login',{user:this.user,pwd:this.pwd}).then(function (res) {
            //   if (res.status=='200'){
            //     this.$store.commit('islogin',200)
            //     sessionStorage.setItem('islogin','200')
            //     this.$router.push('/')
            //   }
            // }).catch(function (error) {
            //   console.log(error)
            // })


          }
        }
      }
    }
</script>

<style scoped>
  #Login{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #242424 !important;
    width: 100%;
  }
  .one{
    position: fixed;
    right: 0;
    top: 0;

  }
  .t{
    text-align: center;
    margin-top: 3em;
    margin-bottom: .8em;
  }
  .l{
    font-size: 1.3em;
    line-height: 2em;
    color: gray;
    margin-top: 1em;
  }
  .b{
    margin-top: 5em;
    width: 30%;
    margin-left: 35%;
    margin-bottom: 7.5em;
  }
  input[type='text'],input[type='password']{
    background-color: white !important;
    color: black;

  }
  .two{
    position: fixed;
    bottom:0;
    margin-left: 30%;
  }
  .three{
    position: fixed;
    bottom: 0;
  }
  .four{
    position: fixed;
    margin: 10%;
  }
  .content{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  @media screen and (max-width: 1440px) and (min-width: 1025px){
    .t{
      margin-top: 2.5em;
      margin-bottom: 0em;
    }
    .b{
      margin-top: 3em;
      margin-bottom: 2.5em;
    }
  }
  @media screen and (max-width: 1024px) and (min-width: 766px){
    .t{
      margin-top: 2em;
      margin-bottom: 0em;
    }
    .b{
      margin-top: 3em;
      margin-bottom: 2em;
    }
  }
  @media screen and (max-width: 768px) and (min-width: 426px){
    .t{
      margin-top: 2em;
      margin-bottom: 0em;
    }
    .b{
      margin-top: 2.5em;
      margin-bottom: 2em;
    }
    .l{
      margin-top: .6em;
    }
  }
  @media screen and (max-width: 425px){
    .t{
      margin-top: .5em;
      margin-bottom: 0em;
    }
    .b{
      margin-top: 1em;
      margin-bottom: 1em;
      width: 50%;
      margin-left: 25%;
    }
    h2{
      font-size: 1.5em !important;
    }
    .l{
      font-size:1em ;
      margin-top: .3em;
    }
  }
</style>
