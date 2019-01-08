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
                  <p style="margin-top: 1em">集群名称：<span style="font-size: 1.3em">{{$store.state.cname}}</span></p>
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
                  <p>已选择元数据服务器：</p>
                  <span v-for="m in mdsselected" style="font-size: 1.2em">
                    {{m}}

                  </span>
                  <p>共：<span style="font-size: 1.4em">{{mnum}} </span>个</p>
                  <p>已选择对象存储网关：</p>
                  <span v-for="r in rgwselected" style="font-size: 1.2em">
                    {{r}}

                  </span>
                  <p>共：<span style="font-size: 1.4em">{{rnum}} </span>个</p>
                </div>
            </div>
            <div class="g">
              <Iplumb :jkselect="jkselected" :jqselect="jqselected"></Iplumb>
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
  import jsplumb from 'jsplumb'
  import Vue from 'vue'
  const later = Vue.component('Iplumb', function (resolve) {
    setTimeout(function () {
      require(['./Iplumb.vue'], resolve)
    }, 2000);
  });
    export default {
        name: "Installtwo",
      // jsplumb,
      components:{later},
      computed:{
        jjselect(){
            return this.$store.state.jkselect,this.$store.state.jqselect
          }
      },
      data(){
          return{
            jqselected:'',
            jkselected:'',
            mdsselected:'',
            rgwselected:'',
            jqnum:'',
            jknum:'',
            mnum:'',
            rnum:''

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
          this.$axios.post(this.allurl+'post_node_select',{cluster_name:this.$store.state.cname,mon:this.$store.state.jqid,osd:this.$store.state.jqid,mds:this.$store.state.mdsid,rgw:this.$store.state.rgwid},function (res) {

          }).catch(function (error) {
            console.log(error)
          })
        },
        jsPlumb(tar){
          jsPlumb.ready(function () {
            for (let i=0;i<tar.length;i++)
            jsPlumb.connect({
              source: 'flowchartWindowone',
              target: tar[i],
              endpoint: 'Rectangle'
            })
            // jsplumb.draggable('server8')
          })

        },

      },
      watch:{
        '$route': 'jsPlumb'
      },
      // create(){
      //   this.jsPlumb(this.jqselected)
      //
      // },
      mounted(){
        // this.jsPlumb(this.$store.state.jqselect)
        this.keyd()
        this.jqselected=this.$store.state.jqselect
        this.jkselected=this.$store.state.jkselect
        this.mdsselected=this.$store.state.mdsselect
        this.rgwselected=this.$store.state.rgwselect
        this.jqnum=this.jqselected.length
        this.jknum=this.jkselected.length
        this.mnum=this.mdsselected.length
        this.rnum=this.rgwselected.length
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

  font-size: 1.4em;
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
  .g{
    height: 25em;
  }
  .cont{
    margin-top: 4em;
  }
  .right{
    width: 20em;
  }
  .yun{
    width: 20em;
  }
  .font1{
    margin-left: 0em;
    margin-top: 3em;
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
