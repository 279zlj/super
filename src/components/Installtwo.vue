<template>
    <div class="row" id="Installtwo">
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 left">
        <img src="../../static/image/install/twoleft.png" class="img-responsive" style="float: right;width: 2.5em"/>
        <img src="../../static/image/install/install-logo.png" class="img-responsive logo"/>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 center">
        <div class="row container">
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">

            <p class="font1" >安装进程</p>
            <p class="font2">Istanllation Process</p>
            <img src="../../static/image/install/twoleftdown.png" class="img-responsive yun"/>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
            <div class="cont" >


                <div class="allselected">
                  <p style="margin-top: 1em">已选择监控节点：</p>
                  <span v-for="jk in jkselected" style="font-size: 1.2em">
                    {{jk}}
                  </span>
                  <p>共：<span style="font-size: 1.4em">{{jknum}} </span>个</p>
                  <p>已选择集群节点：</p>
                  <span v-for="jq in jqselected" style="font-size: 1.2em">
                    {{jq}}
                  </span>
                  <p>共：<span style="font-size: 1.4em">{{jqnum}} </span>个</p>
                </div>


            </div>
            <div class="g">
              <h3 style="margin-left: 1em">Monitor：</h3>
              <div style="width:30%;border: 1px solid black; border-radius: 1em;margin: 2em">
                <p v-for="aa in jkselected" style="text-align: center;line-height: 2em">{{aa}}</p>
              </div>
              <h3 style="margin-left: 1em">Nodes：</h3>
              <div style="width:50%;border: 1px solid black; border-radius: 1em;margin: 2em">
                <p v-for="bb in jqselected" style="text-align: center;line-height: 2em">{{bb}}</p>
              </div>
            </div>
            <div class="r" @keydown="keyd" >
              <router-link :to="{name:'Installone'}"><span style="margin-right: 1em" ><span class="glyphicon glyphicon-chevron-left"></span>上一步</span></router-link>
              <router-link :to="{name:'Installthree'}"><span @click="myselect">下一步<span class="glyphicon glyphicon-chevron-right"></span></span></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src="../../static/image/install/tworightup.png" class="img-responsive right"/>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Installtwo",
      computed:{
        jjselect(){
            return this.$store.state.jkselect,this.$store.state.jqselect
          }
      },
      data(){
          return{
            jqselected:'',
            jkselected:'',
            jqnum:'',
            jknum:''
          }
      },
      methods:{
        keyd(){                          /*键盘事件监听*/
          // console.log(this.$route.path)

          var _this=this
          document.onkeydown=function (e) {
            var key=window.event.keyCode
            // console.log(key)
            if (key==39){
              _this.$router.push({name:'Installthree'})
            }
            else if(key==37){
              _this.$router.push({name:'Installone'})
            }
            else {
              return;
            }
            e.cancelBubble=true;
          }

        },
        myselect(){
          this.$axios.post(this.allurl+'',{monitor:this.jkselected,node:this.jqselected},function (res) {

          }).catch(function (error) {
            console.log(error)
          })
        }
      },

      mounted(){
        this.keyd()
        this.jqselected=this.$store.state.jqselect
        this.jkselected=this.$store.state.jkselect
        this.jqnum=this.jqselected.length
        this.jknum=this.jkselected.length
        // alert(this.$store.state.jkselect)
      },


    }
</script>

<style scoped>
#Installtwo{
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
.g{
  background-color: #9AA3B0;width: 45em;height: 30em;position: relative;z-index: 999;margin-top: 1em;border-radius: 5px;overflow-y: scroll;
}
.font1{
  text-align: center;margin: 6em 0 0 0;font-size: 3.5em;color:black;
}
.font2{
  text-align: center;font-size: 2em;color: gray;
}
.allselected{
  color: black;
  height: 12em;
  overflow-y: scroll;
  margin-left: 1em;
}
.left{
  background-color: #C4D4EB;
  height: 100%;
  margin: 0;
  width: 150px;
}
.logo{
  position: fixed;
  bottom: 3em;
  left: 3em;
  width: 5em;
}
.yun{
  left: 150px;
  position: fixed;
  bottom: 0;
  width: 20em;
}
.right{
  top:0;
  right: 0;
  width: 35em;
  position: fixed;
  z-index: 100;
}
.cont{
  width: 45em;height: 12em;background-color: #DEE7F3;z-index: 999;position: relative;opacity: .8;margin-top: 12em;
  border-radius: 5px;
}
.r{
  text-align: center;
  line-height: 3.5em;

  font-size: 1.5em;
}
@media screen and (min-width: 1440px){
  .cont,.g{
    margin-left: 13em;
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
  .cont,.g{
    margin-left: 0em;
    width: 45em;
  }
  .font1{
    margin-left: 0em;
  }
  .font2{
    margin-left: 0em;
  }
  .r{
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
