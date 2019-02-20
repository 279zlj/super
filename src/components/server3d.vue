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
          <!--<div style="width: 10em;height: 7em;margin: .7em">-->
            <!--<p>硬盘温度：</p>-->
            <!--<p>CPU温度：</p>-->
            <!--<p>阵列卡温度：</p>-->
          <!--</div>-->
        </div>
        <model-gltf v-if="isrefresh" :backgroundAlpha="bgAlpha"  :rotation="rotation"  @on-load="onLoad" :spritefun="safun" :spritetext="sastatic" :tonealgin="tonealgin"  :ttwoalgin="ttwoalgin" :tcolor="tcolor"  :position="where" :backgroundColor="bgColor" src="../../static/server/server2801.gltf" :cameraPosition="camera" :width="wid" :height="hei"></model-gltf>
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

    // props:['sstatic','sfun','scard'],
    // watch:{
    //   sstatic(){
    //     return this.sastatic=this.sstatic
    //   },
    //   sfun(){
    //     return this.safun=this.sfun
    //   },
    //   scard(){
    //     return this.sacard=this.scard
    //   }
    // },
    computed:{
      sstatic(){
        return this.$store.state.cputem,this.$store.state.funspeed,this.$store.state.cardtem
      }
    },
      data(){
          return {
            camera: {x: 0, y: 70, z: -280},
            bgAlpha: .3,
            bgColor: '#2E2245',
            wid: 950,
            hei: 443,
            tcontent: '',
            ttitle: '',
            dosome: '',
            sastatic:this.$store.state.cputem[0],
            safun: this.$store.state.funspeed[0],
            sacard: '',
            tonealgin:'bottomLeft',
            ttwoalgin:'bottomRight',
            tcolor:'#FFFFFF',
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            where: {x: 0, y: 0, z: -20},
            server: [
              {name: 'node1', osd: ['ada', 'adb', 'adv'], static: ['ok', 'error', 'ok'], row: 6, cloumn: 3},
              {name: 'node2', osd: ['ada', 'adb', 'adv'], static: ['ok', 'ok', 'ok'], row: 6, cloumn: 3},
              {name: 'node3', osd: ['ada', 'adb', 'adv'], static: ['ok', 'ok', 'ok'], row: 6, cloumn: 3}
            ],
            isrefresh:true
          }
      },
      created(){
          this.$nextTick(()=>{
            this.init()
          })
        // this.sprite='CPU温度：30°C,风扇转速：300转,显卡温度：20°C'
      },
      mounted(){
        this.init()
        this.drawserver(this.server)

        // this.onLoad()
        $("[data-toggle='tooltip']").tooltip({html:true});
        // alert(this.sacard)

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
        reload () {             //重新加载
          this.isrefresh = false
          this.$nextTick(() => (this.isrefresh = true))
        },

        rotate () {
          // for (let i=0;i<10;i++)
          // this.rotation.x+= 0.01;
            this.rotation.y += 0.0003;
          // for (let p=0;p<10;p++)
          //   this.rotation.y -= 0.05;
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
              "<div id='" +server[a].name + "'" + " style=\"background-color: #232323;position: absolute;cursor:pointer;width:90%;height: 4.5em\"  class='serpanle' ></div>" +
              "<img src='../../static/image/right.png' style='position:absolute;right:.5em;width: 18px;margin-top: 1em' class='img-responsive' />" +
              "</div>")
            for (let i=0;i<server[a].osd.length;i++) {
              if (server[a].static[i]=='ok')
                $('#'+server[a].name).append('<img src="../../static/image/cipan.png" class="img-responsive"  data-toggle="tooltip" title="Name：'+server[a].osd[i]+'<br>Static：'+server[a].static[i]+'" data-placement="bottom" style="width: 14%;margin:.1em 0em 0em .5em;display: inline-block;cursor: pointer" />')
              else
                $('#'+server[a].name).append('<img src="../../static/image/cipanerror.png" class="img-responsive"  data-toggle="tooltip" title="Name：'+server[a].osd[i]+'<br>Static：'+server[a].static[i]+'" data-placement="bottom" style="width: 14%;margin:.1em 0em 0em .5em;display: inline-block;cursor: pointer" />')
            }
          }
          var _this=this
          $(document).on('click','.serpanle',function () {
            let fileId=$(this).attr("id")
            // alert(server.length)
            for (let i=0;i<server.length;i++){

              if (server[i].name==fileId){
                _this.sastatic=_this.$store.state.cputem[i]
                _this.safun=_this.$store.state.funspeed[i]
                _this.sacard=_this.$store.state.cardtem[i]

                _this.reload()
              }
            }

          })
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
