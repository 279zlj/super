<template>
    <div id="Login" class="container">
      <div>
        <img src="../../static/image/login/one.png" class="img-responsive one"/>
        <img src="../../static/image/login/two.png" class="img-responsive two"/>
        <img src="../../static/image/login/three.png" class="img-responsive three"/>
        <img src="../../static/image/login/four.png" class="img-responsive four"/>
      </div>
      <div class="container-fluid" style="margin-top: 13em;margin-bottom: 8em">
        <form>
        <div class="row">
        <div class="col-lg-3 col-lg-offset-3 col-md-4 col-md-offset-2 col-sm-5 col-sm-offset-1 col-xs-6 content" >
          <div class="container-fluid" @keydown.enter="loginuser">
          <h2 class="t">登录</h2>
          <label class="l">用户名：</label>
          <input type="text" class="form-control" placeholder="请输入用户名" ref="user" id="user" autofocus="autofocus" required="required"/>
          <label class="l">密码：</label>
          <input type="password" class="form-control" placeholder="输入密码" ref="pwd" id="pwd" required="required"/>
            <div id="tips" style="color: red;margin-top: .5em;font-weight: 700;">{{tips}}</div>
          <input type="button" class="btn btn-info b" value="登录" @click="loginuser()" @keydown.enter="loginuser()"/>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-5 col-xs-6">
          <div class="row">
            <img src="../../static/image/login/right.png" class="img-responsive logo_img" />
          </div>
        </div>
        </div>
        </form>
      </div>
    </div>
</template>

<script>
  import 'store'
  import 'vuex'
  import '../store/store'
  import jsonp from 'jsonp'
  import qs from 'qs'

    export default {
        name: "Login",
        jsonp,
      qs,
      computed:{            /*调用Vuex中的islogin值，有缓存左右*/
          islogin(){
            return this.$store.state.islogin
          },
        gnode(){
          return this.$store.state.osd_use,this.$store.state.collect,this.$store.state.pool_use
        },
        gcim(){
          return this.$store.state.mbps,this.$store.state.log,this.$store.state.warn,this.$store.state.iops,this.$store.state.cpu
        },
        gosd(){
            return this.$store.state.osdlist
        },
        osdalone(){
            return this.$store.state.diskall,this.$store.state.diskdefalut,this.$store.state.netcard,this.$store.state.netcarddefalut,this.$store.state.content
        }
      },
      data(){
          return{
            user:'',
            pwd:'',
            tips:'',
            osdid:''
          }
      },

      methods:{
        loginuser(){                /*登录的判断，用户名和密码不为空，假如登录成功后跳转，并缓存一个状态值用作页面拦截的通过值*/
          var _this=this
          if (this.$refs.user.value==''||this.$refs.pwd.value==''){
            this.tips='用户名或密码不能为空'
          }
          else
            _this.$router.push('/')
          // else {
          //   this.user=this.$refs.user.value;
          //   this.pwd=this.$refs.pwd.value;
          //   this.$axios.post(this.allurl+'login',{user:this.user,pwd:this.pwd}).then(function (res) {
          //     if (res.data.status===0) {
          //       _this.tips='账号/密码错误，请重新输入'
          //       return(_this.$refs.pwd.value='')
          //     }
          //     else if (res.status=='200'&& res.data.status===1){
          //       _this.$store.commit('islogin',200)
          //       sessionStorage.setItem('islogin','200')
          //       _this.$router.push('/')
          //       _this.general()
          //       // _this.change(0,_this.$store.state.osdlist[0].osdid)
          //     }
          //     else if (res.status=='200'&& res.data.status==2){
          //       _this.$store.commit('islogin',250)
          //       sessionStorage.setItem('islogin','250')
          //       _this.$router.push('/')
          //       _this.general()
          //
          //     }
          //   }).catch(function (error) {
          //     console.log(error)
          //   })
          // }
        },
        change(index,id) {
          var _this=this
          this.ind=index
          this.$axios.post(this.allurl+'manager/ioagent/ioagent_de',{id:id}).then(function (res) {
            _this.$store.commit('osdalone',{content:res.data.all,diskall:res.data.diskall,diskdefalut:res.data.diskall[0],netcard:res.data.netcard,netcarddefalut:res.data.netcard[0]})
          }).catch(function (error) {
            console.log(error)
          })
        },
        general(){
          var _this=this
          this.$axios.get(this.allurl+'overview').then(function (res) {
            _this.$store.commit('gnode',{osd_use:res.data.osd_use,collect:res.data.collect,pool_use:res.data.pool_user})
          }).catch(function (error) {
            console.log(error)
          })
          this.$axios.get(this.allurl+'list_data').then(function (res) {
            _this.$store.commit('gcim',{mbps:res.data.mbps,log:res.data.log,warn:res.data.warn,iops:res.data.iops,cpu:res.data.cpu})
          }).catch(function (error) {
            console.log(error)
          })
          this.$axios.get(this.allurl+'manager/ioagent/list_ioagent').then(function (res) {
            _this.$store.commit('gosd',res.data)
            _this.osdid=res.data[0].osdid
            _this.change(0,_this.osdid)
            // alert(_this.osdid)
          }).catch(function (error) {
            console.log(error)
          })
          // alert(_this.osdid)
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
  .logo_img{
    height: 35em;width: 100%
  }
  .one{
    position: fixed;
    right: 0;
    top: 0;

  }
  .t{
    text-align: center;
    margin-top: 2em;
    margin-bottom: .8em;
    color: black !important;
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
    background-color: white;height: 35em
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
    .one{
      width: 30%;
    }
    .two{
      width: 40%;
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
    .content,.logo_img{
      height: 30em;
    }
    .t{
      margin-top: 3em;
      margin-bottom: 1em;
    }
    .b{
      margin-top: 2em;
      margin-bottom: 1em;
      width: 50%;
      margin-left: 25%;
    }
    h2{
      font-size: 1.5em !important;
    }
    .l{
      font-size:1em ;
      margin-top: 1em;
    }
    .one{
      width: 30%;
    }
    .four{
      width: 30%;
    }
    .two{
      width: 60%;
    }
    .three{
      width: 20%;
    }
  }
</style>
