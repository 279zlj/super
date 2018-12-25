
import  'three/examples/js/controls/OrbitControls'

function darw() {
  var h=$('#gl').height()
  var w=$('#gl').width()
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 100, w/h, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer({ antialias: true,alpha:true });
  renderer.setSize( w, h);
  renderer.setClearColor(0xEEEEEE, 0.0);
  $('#gl').append(renderer.domElement )
  var geometry = new THREE.BoxGeometry( 5, 1, 5 );
  let cubeEdges = new THREE.EdgesGeometry(geometry, 1);
  let edgesMtl =  new THREE.LineBasicMaterial({color: 0x000000});
  let cubeLine = new THREE.LineSegments(cubeEdges, edgesMtl);
  var material = new THREE.MeshBasicMaterial( { color: '#C1C1C1' } );
  var cube = new THREE.Mesh( geometry, material );

  var light =  new THREE.DirectionalLight(0xff0000,1);
  light.position.set(0,10,5);
  scene.add(light);
  cube.add(cubeLine)
  scene.add( cube );

  camera.position.z = 5
  camera.position.y=1
  var controls =new OrbitControls(camera)
  controls.addEventListener('change', renderer);

    renderer.render( scene, camera );


}

export {darw}
