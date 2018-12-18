<template>
    <div ref="server3d" id="server"></div>
</template>

<script>
  import * as THREE from 'three'
  import OrbitControls from 'three-orbitcontrols'
  import dat from 'dat.gui'
    export default {
        name: "server",
      data:()=>({
        control:{
          scene:null,
          camera:null,
          renderer:null,
          controls:null,
          loader:null,
          raycas:null,
          mouse:null
          // rotationSpeed:0.02
        }
      }),
      created(){

          this.$nextTick(()=>{
            this.init()
          })
      },
      methods:{
        init(){
            // let initMesh=this
            // const gui=new dat.GUI()
            // gui.add(controls, 'rotationSpeed', 0, 0.5)
            this.initMesh()
            // this.loader=new THREE.FontLoader()
            // this.loader.load('../node_modules/three/examples/fonts/helvetiker_bold.typeface.json',function (font) {
            //   this.initMesh(font);
            // })

          },

        initMesh(){
          var h=$('#gl').height()
          var w=$('#gl').width()
          this.scene=new THREE.Scene()
          this.camera = new THREE.PerspectiveCamera(10, w/ h, 0.1, 1000) // 相机.视场，长宽比，近面，远面
          this.camera.position.x = -140
          this.camera.position.y = 12
          this.camera.position.z = 10
          this.camera.lookAt(this.scene.position)

          this.renderer = new THREE.WebGLRenderer({ antialias: true ,alpha:true})// 渲染器
          this.renderer.setSize(w,h - 100)
          this.renderer.setClearColor(0xEEEEEE, 0.0);
          // this.renderer.shadowMapEnabled = true // 开启阴影

          // let axes = new THREE.AxisHelper(20) // 坐标轴

          // let planeGeometry = new THREE.PlaneGeometry(60, 20, 10, 10) // 生成平面
          // let planeMaterial = new THREE.MeshLambertMaterial({color: '#fff'}) // 材质
          // let plane = new THREE.Mesh(planeGeometry, planeMaterial)
          // plane.rotation.x = -0.5 * Math.PI
          // plane.position.x = 0
          // plane.position.y = 0
          // plane.position.z = 0
          // plane.receiveShadow = true

          let cubeGeometry = new THREE.BoxGeometry(20, 4, 15)
          let cube2Geometry = new THREE.BoxGeometry( .3, .6,1)
          let cube3Geometry = new THREE.BoxGeometry( .3, 1.2,.4)
          // let cubeMaterial = new THREE.MeshLambertMaterial({color:  '#C1C1C1'})
          var texloader = new THREE.TextureLoader();
          var tex=texloader.load("../../static/image/logoa.png");
          var matArray = [];
          matArray.push(new THREE.MeshBasicMaterial({color: '#323232'}));  //后
          matArray.push(new THREE.MeshBasicMaterial({color: '#323232'}));  //前
          // matArray.push(new THREE.MeshBasicMaterial({color: '#C1C1C1'}));   //上
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
          // this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
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

          // var text='Server-1'
          // var g=new THREE.TextGeometry(text,{
          //   font:font,
          //   size:30,
          //   height:30
          // })
          // g.computeBoundingBox()
          // var m = new THREE.MeshBasicMaterial({color:0xff0000});
          // var mesh = new THREE.Mesh(g,m);
          //
          // // 加入到场景中
          // this.scene.add(mesh);
          // this.cube.castShadow = true

          let DirectionalLight = new THREE.DirectionalLight(0xffffff)
          DirectionalLight.position.set(-40, 60, 10)
          // spotLight.castShadow = true

          // this.scene.add(axes) // 场景添加坐标轴
          // this.scene.add(plane) // 向该场景中添加物体
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
