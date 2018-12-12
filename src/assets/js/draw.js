function draw() {
  var object=document.getElementById('webgl')
  var h=object.offsetHeight
  var w=object.offsetWidth
  var scence=new THREE.Scene();
  var camera=new THREE.PerspectiveCamera(75,w/h,0.1,1000)
  var renderer=new THREE.WebGLRenderer()
  renderer.setSize(w,h)
  object.appendChild(renderer.domElement)
  var geometry=new THREE.BoxGeometry(1,1,1)
  var materal=new THREE.MeshBasicMaterial({color:0x00ff00})
  var cube=new THREE.Mesh(geometry,materal)
  scence.add(cube)
  camera.position.z=5
  var animate=function () {
    requestAnimationFrame(animate)
    cube.rotation.x+=0.01
    cube.rotation.y+=0.01
  }
  animate()

}
