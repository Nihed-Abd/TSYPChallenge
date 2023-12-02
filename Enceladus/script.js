let clock = new THREE.Clock();

let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000),
  light = new THREE.PointLight(0xFFFFFF, 2, 5000);
camera.position.set(1300, 0, 0),
  scene = new THREE.Scene();

camera.lookAt(scene.position);
light.position.set(2000, 2000, 1500);
scene.add(light);

let marsGeo = new THREE.SphereGeometry(400, 32, 32),
  marsMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('../img/encMoon.jpg'), // Assuming the image is in the same directory
  }),
  marsMesh = new THREE.Mesh(marsGeo, marsMaterial);
scene.add(marsMesh);

let renderer = new THREE.WebGLRenderer({ antialiasing: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('marsloc').appendChild(renderer.domElement);

let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);

// Add an ambient light to the scene
let ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5); // Adjust the intensity as needed
scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  render();
}

function render() {
  var delta = clock.getDelta();
  marsMesh.rotation.y += 0.1 * delta;
  renderer.clear();
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
