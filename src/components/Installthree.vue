<template>
    <div class="row" id="Installthree">
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 left">
        <img src="../../static/image/install/threeleft.png" class="img-responsive" style="float: right;width: 2.5em"/>
        <img src="../../static/image/install/install-logo.png" class="img-responsive logo"/>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 center">
        <div class="row container">
          <div class="col-lg-5 col-md-3 col-sm-5 col-xs-5">

            <p class="font1" >安装中...</p>
            <p class="font2">Istanllation Process</p>

          </div>
          <div class="col-lg-7 col-md-6 col-sm-7 col-xs-7">
            <div class="pr">
              <progress :value=installnum max="100" class="p" ></progress>
            </div>
            <div class="c">
              <div v-show="pinfo!=0" >
                <p v-for="p in pinfo" style="margin-left: 1em">{{p}}</p>
              </div>
            </div>
            <div class="botn">
              <input type="button" class="form-control btn btn-info" style="width: 10%;float: right" @click="gologin" value="Login"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src="../../static/image/install/threerightup.png" class="img-responsive right"/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Installthree",
      data(){
          return{
            pinfo:[],
            installnum:null
          }
      },
      methods:{
          gprocess(){             //读取安装中的信息
            var _this=this
            if (this.installnum!=100) {
              this.$axios.get(this.installurl + 'get_process').then(function (res) {
                _this.installnum = JSON.stringify(res.data.percent)
                // console.log(res.data.process)
                var content = res.data.process
                _this.pinfo.push(content)
                // console.log(JSON.stringify(_this.pinfo))
              }).catch(function (error) {
                console.log(error)
              })
            }
            if (this.installnum==100) {
              this.stop()
              _this.pinfo.push('Install Successfully')
            }
          },
        stop(){
            // var _this=this
            if (this.installnum==100){
              clearInterval(this.gprocess())
            }

        },
        start(){

            var _this = this
            setInterval(function () {
              _this.gprocess()
            }, 3000)

        },
        gologin(){           //跳转到登录页面
            var _this=this
            this.$axios.post(this.installurl+'post_login_sys',{login:'yes'}).then(function (res) {
              if (res.status==200)
                _this.$router.push('/Login')
            }).catch(function (error) {
              console.log(error)
            })
        }
      },
      mounted(){
        this.start()
      },
      destroyed(){
        clearInterval(this.gprocess())
      }

    }
</script>

<style scoped>
#Installthree{
  height: 100%;
  margin: 0;
  padding: 0;
  position:absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: white !important;
  width: 100%;
}
.left{
  background-color: #EDD8AC;
  height: 100%;
  margin: 0;
  width: 150px;
}
.font1{
  text-align: center;margin: 6em 0 0 0;font-size: 3.5em;color:black
}
progress::-webkit-progress-bar
{
  background-color:#C5C5C5;
}
progress::-webkit-progress-value
{
  background-color:#DDA22E;
}
.pr{
  margin-top: 18em;width: 100%
}
.botn{margin:2em 0 0 13em ;width: 100%;}
.p{
  width: 100%;background: #DDA22E !important;color: #DDA22E !important;height: 8px;border-radius: 1em;position: relative;z-index: 999
}
.c{
  background-color: #9AA3B0 !important;width: 45em;height: 30em;position: relative;z-index: 999;margin-top: 1em;border-radius: 5px;overflow-y: scroll;
}
.font2{
  text-align: center;font-size: 2em;color: gray;
}
.logo{
  position: fixed;
  bottom: 3em;
  left: 3em;
  width: 5em;
}

.right{
  top:10em;
  right: 0;
  width: 35em;
  position: fixed;
  z-index: 100;
}
@media screen and (min-width: 1440px){
 .c{
    margin-left: 13em;
    width: 50em;
  }
  .pr,.p{
    margin-left: 6.5em;
    width: 50em;
  }
  .font1{
    margin-left: 2em;
  }
  .font2{
    margin-left: 4em;
  }
  .r{
    margin-left: 20em;
  }
}
@media screen and (max-width: 1440px) and (min-width: 1024px){
  .c{
    margin-left: 0em;
    width: 40em;
  }
  .pr,.p{
    margin-left:0em;
    width: 40em;
    margin-top: 5em;
  }
  .font1{
    margin-left: 0em;
    margin-top:3em
  }
  .font2{
    margin-left: 0em;
  }

}
@media screen and (max-width: 1024px) and (min-width: 768px){
  .cont,.g{
    margin-left: 0em;
    width: 35em;
  }
  .font1{
    margin-left: 0em;
    font-size: 2em;
    margin-top: 10em;
  }
  .font2{
    margin-left: 0em;
    font-size: 1em;
  }
  .r{
    margin-left: 0em;
  }
  .right{
    width: 30em;
  }
  .left{
    width: 100px;
  }
  .yun{
    left: 100px;
    width: 15em;
  }
  .logo{
    left: 1em;

  }
}
</style>
