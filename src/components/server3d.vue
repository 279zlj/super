<template>
    <div class="row" id="server">
      <div class="row" id="allpanel" style="overflow-y: scroll;">
        <div id="alert" class="alert alert-success" style="display: none;float:top;width: 50%;margin-left: 20%;z-index: 999;position: absolute">
          <a href="#" class="close" >
            &times;
          </a>
          <p>名称：</p>
          <p>状态：</p>
          <p>可用空间：</p>
        </div>
        <div id="staticser">

        </div>
      </div>
      <div class="row">
        <model-gltf :backgroundAlpha="bgAlpha" :backgroundColor="bgColor" src="../../static/server/server.gltf" :cameraPosition="camera" :width="wid" :height="hei"></model-gltf>
        <!--<div ref="server3d"></div>-->
      </div>
      <!--<tips ref="tips" :content=tcontent :dotitle=ttitle :docontent=dosome></tips>-->
    </div>
</template>

<script>
  import ModelGltf from "../assets/vue-3d/model-gltf";
    export default {
        name: "server",
      // components:{tips},
      components: {
        ModelGltf,
        // ModelObj
      },
      data:()=>({
        camera:{x:0, y:50, z:-200},
        bgAlpha:.3,
        bgColor:'#2E2245',
        wid:950,
        hei:340,
        tcontent:'',
        ttitle:'',
        dosome:'',
        much:20
      }),
      created(){
          this.$nextTick(()=>{
            this.init()
          })
      },
      mounted(){
        this.init()
        this.drawserver(this.much)
        this.show()

      },
      methods: {
        init() {
          var h=$('#gl').height()
          var w=$('#gl').width()
          $('.close').on('click',function () {
            $('#alert').hide()
          })
          // $('#modelobj').css({'width':w,'height':h*0.6})
          $('#allpanel').css({'width':w,'height':h*0.4})
          // this.initMesh()
        },

        drawserver(much) {
          $('#staticser').append("<div id=\"oneser\" style=\"background:url('../../static/image/panel.png') no-repeat;background-size: cover;width:480px;height: 5em;margin-left: 2em\" class=\"img-responsive\"></div>")
          // alert(much)
          for (let i=0;i<much;i++){

            // if (i==1){
            //   $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 3.5em;display: inline-block;cursor: pointer" />')
            // }
            if (i%4==0){
              $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 3.5em;display: inline-block;cursor: pointer" />')
            }
            else{
              $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em .8em;display: inline-block;cursor: pointer"/>')
            }

          }
        },
        show() {
          $('img').on('click', function () {
            $('#alert').show()
          })
        }
      }
    }
</script>

<style scoped>
  #server{
    margin-top: 3em;
    margin-bottom: 2em;
  }
  @media screen and (min-width: 768px) and (max-width:1500px ) {
    #allpanel{
      width: 100%;
      height: 100%;
    }
    #oneser{
      width:60% !important;
      z-index: 999;
    }
  }
</style>
