<template>
    <div class="row" id="server">
      <div class="row" id="staticser" style="overflow-y: scroll;">
        <!--<div id="alert" class="alert alert-success" style="display: none;float:top;width: 50%;margin-left: 20%;z-index: 999;position: absolute">-->
          <!--<a href="#" class="close" >-->
            <!--&times;-->
          <!--</a>-->
          <!--<p>名称：</p>-->
          <!--<p>状态：</p>-->
          <!--<p>可用空间：</p>-->
        <!--</div>-->
        <!--<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="staticser">-->

        <!--</div>-->
      </div>
      <div class="row">
        <!--<model-gltf :backgroundAlpha="bgAlpha" :backgroundColor="bgColor" src="../../static/server/server.gltf" :cameraPosition="camera" :width="wid" :height="hei"></model-gltf>-->
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
        much:18,
        sernum:3,
      }),
      created(){
          this.$nextTick(()=>{
            this.init()
          })
      },
      mounted(){
        this.init()
        this.drawserver(this.much,this.sernum,this.alone)
        this.show()
        $("[data-toggle='tooltip']").tooltip({html:true});

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

        drawserver(much,sernum) {
          for (let a=0;a<sernum;a++)
            $('#staticser').append("" +
              "<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\" style='width:40%;height: 5.5em;margin-left:2em;margin-bottom:1em;'>" +
              "<img src='../../static/image/left.png' style='left: 0;width: 18px;margin-top:1em;position: absolute' class='img-responsive'/>" +
              "<div id=\"oneser\" style=\"background-color: #232323;position: absolute;width:90%;\" ></div>" +
              "<img src='../../static/image/right.png' style='position:absolute;right:0em;width: 18px;margin-top: 1em' class='img-responsive' />" +
              "</div>")
          // alert(much)
          for (let i=0;i<much;i++){

            // if (i==1){
            //   $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 3.5em;display: inline-block;cursor: pointer" />')
            // }
            // if (i%4==0){
            //   $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 1.5em;display: inline-block;cursor: pointer" />')
            // }
            // else{
              $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive"  data-toggle="tooltip"\n' +
                'data-placement="bottom" style="width: 10%;margin:.1em 0em 0em 1.2em;display: inline-block;cursor: pointer"/>')
            // }

          }
        },
        show() {
          // $('img').on('click', function () {
          //   $('#alert').show()
          // })
          $('#img').attr('title','test')
        }
      }
    }
</script>

<style scoped>
  #server{
    margin-top: 3em;
    margin-bottom: 2em;
  }
  #oneser{
    width: 10px;
    height: 3px;
    background-color: red;
    position: relative;
  }
  #staticser{

  }
  @media screen and (min-width: 768px) and (max-width:1500px ) {
    #oneser{
      width: 10px;
      height: 3px;
      background-color: red;
      position: relative;
    }
  }
</style>
