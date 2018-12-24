<template>
    <div class="row" id="server">
      <div class="row" id="allpanel">
        <div id="alert" class="alert alert-success" style="display: none;float:top;width: 50%;margin-left: 5em;z-index: 999;position: absolute">
          <a href="#" class="close" data-dismiss="alert">
            &times;
          </a>
          <p>名称：</p>
          <p>状态：</p>
          <p>可用空间：</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="staticser">

        </div>
      </div>
      <div class="row">
        <div ref="server3d"></div>
      </div>
      <!--<tips ref="tips" :content=tcontent :dotitle=ttitle :docontent=dosome></tips>-->
    </div>
</template>

<script>
  import * as THREE from 'three'
  import OrbitControls from 'three-orbitcontrols'
  // import tips from './tips'
    export default {
        name: "server",
      // components:{tips},
      data:()=>({
        control:{
          scene:null,
          camera:null,
          renderer:null,
          controls:null,
          loader:null,
          raycas:null,
          mouse:null,
          // rotationSpeed:0.02
        },
        tcontent:'',
        ttitle:'',
        dosome:''
      }),
      created(){

          this.$nextTick(()=>{
            this.init()
          })
      },
      mounted(){
        this.drawserver()
        this.show()
      },
      methods:{
        init(){
            this.initMesh()
          },

        initMesh(){
          var h=$('#gl').height()
          var w=$('#gl').width()
          $('#allpanel').css('height',h/2)
          this.scene=new THREE.Scene()
          this.camera = new THREE.PerspectiveCamera(8, w/(h/2), 0.1, 1000) // 相机.视场，长宽比，近面，远面
          this.camera.position.x = -140
          this.camera.position.y = 12
          this.camera.position.z = 10
          this.camera.lookAt(this.scene.position)

          this.renderer = new THREE.WebGLRenderer({ antialias: true ,alpha:true})// 渲染器
          this.renderer.setSize(w,(h/2) - 100)
          this.renderer.setClearColor(0xEEEEEE, 0.0);

          let cubeGeometry = new THREE.BoxGeometry(20, 4, 15)
          let cube2Geometry = new THREE.BoxGeometry( .3, .6,1)
          let cube3Geometry = new THREE.BoxGeometry( .3, 1.2,.4)
          var texloader = new THREE.TextureLoader();
          var tex=texloader.load("../../static/image/logoa.png");
          var matArray = [];
          matArray.push(new THREE.MeshBasicMaterial({color: '#323232'}));  //后
          matArray.push(new THREE.MeshBasicMaterial({color: '#323232'}));  //前
          matArray.push(new THREE.MeshBasicMaterial( { color: 0xffffff,map: tex }))
          matArray.push(new THREE.MeshBasicMaterial({color: '#C1C1C1'}));  //下
          matArray.push(new THREE.MeshBasicMaterial({color: '#C1C1C1'}));   //右
          matArray.push(new THREE.MeshBasicMaterial({color: '#C1C1C1'}));   //左
          let cubeMaterial = new THREE.MeshLambertMaterial({color:  '#C1C1C1'})
          this.cube = new THREE.Mesh(cubeGeometry, matArray);
          this.cube2 = new THREE.Mesh(cube2Geometry, cubeMaterial);
          this.cube3 = new THREE.Mesh(cube3Geometry, cubeMaterial);
          this.cube4 = new THREE.Mesh(cube2Geometry, cubeMaterial);
          this.cube5 = new THREE.Mesh(cube2Geometry, cubeMaterial);
          this.cube6 = new THREE.Mesh(cube3Geometry, cubeMaterial);
          this.cube7 = new THREE.Mesh(cube2Geometry, cubeMaterial);
          this.cube.position.x=-4
          this.cube.position.y = 3
          this.cube.position.z = 0

          this.cube2.position.x=-13.5
          this.cube2.position.y = 4
          this.cube2.position.z = -7.8

          this.cube3.position.x=-13.5
          this.cube3.position.y = 3.2
          this.cube3.position.z = -8.1

          this.cube4.position.x=-13.5
          this.cube4.position.y = 2.3
          this.cube4.position.z = -7.8

          this.cube5.position.x=-13.5
          this.cube5.position.y = 4
          this.cube5.position.z = 7.9

          this.cube6.position.x=-13.5
          this.cube6.position.y =3.2
          this.cube6.position.z = 8.2

          this.cube7.position.x=-13.5
          this.cube7.position.y =2.3
          this.cube7.position.z = 7.9

          let cubeEdges = new THREE.EdgesGeometry(cubeGeometry, 1);
          let edgesMtl =  new THREE.LineBasicMaterial({color: 0x000000});
          let cubeLine = new THREE.LineSegments(cubeEdges, edgesMtl);
          this.cube.add(cubeLine)

          this.raycas = new THREE.Raycaster();//光线投射器
          this.mouse = new THREE.Vector2();//二维向量
          document.addEventListener('mousemove', function(){
            event.preventDefault();
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          }, false);

          let DirectionalLight = new THREE.DirectionalLight(0xffffff)
          DirectionalLight.position.set(-40, 60, 10)

          this.scene.add(this.cube)
          this.scene.add(this.cube2)
          this.scene.add(this.cube3)
          this.scene.add(this.cube4)
          this.scene.add(this.cube5)
          this.scene.add(this.cube6)
          this.scene.add(this.cube7)
          this.scene.add(DirectionalLight)
          this.controls = new OrbitControls(this.camera, this.renderer.domElement);
          this.$refs.server3d.append(this.renderer.domElement)
          this.renderScene()
        },
        renderScene () {
          let {scene, camera, renderer} = this
          this.controls.update();
          requestAnimationFrame(this.renderScene)
          renderer.render(scene, camera)
        },
        drawserver(){
          $('#staticser').append("<div id=\"oneser\" style=\"background:url('../../static/image/panel.png') no-repeat;background-size: contain;\" class=\"img-responsive\"></div>")
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 3.5em;display: inline-block;cursor: pointer" />')
          // $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em .8em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 1em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 1em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 3.5em;display: inline-block;cursor: pointer"/>')
          // $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em .8em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 1em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 1em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 3.5em;display: inline-block;cursor: pointer"/>')
          // $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em .8em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 1em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 1em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 3.5em;display: inline-block;cursor: pointer"/>')
          // $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em .8em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 1em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 1em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 3.5em;display: inline-block;cursor: pointer"/>')
          // $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em .8em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 1em;display: inline-block;cursor: pointer"/>')
          $('#oneser').append('<img src="../../static/image/cipan.png" class="img-responsive" style="width: 7%;margin:.1em 0em 0em 1em;display: inline-block;cursor: pointer"/>')
        },
        show(){
          $('img').on('click',function () {
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

</style>
