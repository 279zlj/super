<template>
    <div class="row" id="server">
      <div class="row" id="staticser" style="overflow-y: scroll;">
      </div>
      <div class="row" >
        <div class="background-panel panel " style="float: top;right:0;width: 30%;margin-left: 3em;position: absolute;">

        </div>
        <div class="content " style="border: 1px solid #56466D;display: none;">
          <div style="width: 15em;height: 3em;border: 1px solid #56466D;">
            <h3 class="panel-title" style="display: inline-block;margin: .7em">机箱当前状态</h3>
            <span style="right:1em;position: absolute"><i class="glyphicon glyphicon-remove" style="cursor: pointer;margin:.8em .5em" @click="panelhide"></i></span>
          </div>
          <div style="width: 10em;height: 7em;margin: .7em">
            <p>硬盘温度：</p>
            <p>CPU温度：</p>
            <p>阵列卡温度：</p>
          </div>
        </div>
        <model-gltf :backgroundAlpha="bgAlpha" :rotation="rotation" @on-load="onLoad" @on-click="panelshow" :position="where" :backgroundColor="bgColor" src="../../static/server/server01.gltf" :cameraPosition="camera" :width="wid" :height="hei"></model-gltf>
        <!--<div ref="server3d"></div>-->
      </div>
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
        camera:{x:0, y:25, z:-75},
        bgAlpha:.3,
        bgColor:'#2E2245',
        wid:1000,
        hei:443,
        tcontent:'',
        ttitle:'',
        dosome:'',
        rotation: {
          x:0,
          y:0,
          z:0
        },
        where:{ x: 0, y: 0, z: 20 },
        server:[
          {name:'node1',osd:['ada','adb','adv'],static:['ok','error','ok'],row:6,cloumn:3},
          {name:'node2',osd:['ada','adb','adv'],static:['ok','ok','ok'],row:6,cloumn:3},
          {name:'node3',osd:['ada','adb','adv'],static:['ok','ok','ok'],row:6,cloumn:3}
        ]
      }),
      created(){
          this.$nextTick(()=>{
            this.init()
          })
      },
      mounted(){
        this.init()
        this.drawserver(this.server)
        $("[data-toggle='tooltip']").tooltip({html:true});

      },
      methods: {
        init() {
          var h=$('#gl').height()
          var w=$('#gl').width()
          $('.close').on('click',function () {
            $('#alert').hide()
          })
          $('#allpanel').css({'width':w,'height':h*0.5})
        },
        onLoad () {
          this.rotate();
        },
        rotate () {
          // this.rotation.x+= 0.01;
          this.rotation.y+= 0.01;
          requestAnimationFrame( this.rotate );
        },
        panelshow(){
          $('.content').css('display','block')
        },
        panelhide(){
          $('.content').css('display','none')
        },
        drawserver(server) {
          for (let a=0;a<server.length;a++){
            if (a==(server.cloumn-1)){
              return '<br>'
            }
            $('#staticser').append("" +
              "<div class=\"col-lg-6 col-md-8 col-sm-6 col-xs-6\" style='width:40%;height: 5.5em;margin-left:2.5em;margin-bottom:1em;'>" +
              "<img src='../../static/image/left.png' style='left: 0;width: 18px;margin-top:1em;position: absolute' class='img-responsive'/>" +
              "<div id='" +server[a].name + "'" + " style=\"background-color: #232323;position: absolute;width:90%;height: 4.5em\" class='serpanle' ></div>" +
              "<img src='../../static/image/right.png' style='position:absolute;right:.5em;width: 18px;margin-top: 1em' class='img-responsive' />" +
              "</div>")
            for (let i=0;i<server[a].osd.length;i++) {
              if (server[a].static[i]=='ok')
                $('#'+server[a].name).append('<img src="../../static/image/cipan.png" class="img-responsive"  data-toggle="tooltip" title="Name：'+server[a].osd[i]+'<br>Static：'+server[a].static[i]+'" data-placement="bottom" style="width: 10%;margin:.1em 0em 0em 1.2em;display: inline-block;cursor: pointer" />')
              else
                $('#'+server[a].name).append('<img src="../../static/image/cipanerror.png" class="img-responsive"  data-toggle="tooltip" title="Name：'+server[a].osd[i]+'<br>Static：'+server[a].static[i]+'" data-placement="bottom" style="width: 10%;margin:.1em 0em 0em 1.2em;display: inline-block;cursor: pointer" />')
            }
          }
        },

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
  .panel{
    /*color: black;*/
    opacity: 0;
    border: 1px solid #45355E;
    font-size: x-small;
  }
  .content{
    /*top: 0;*/
    right: 0;
    position: absolute;
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
