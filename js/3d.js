let scene, camera, renderer, cube;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z =5;

renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const materials = [
    new THREE.MeshBasicMaterial({ color: 'yellow'}),
    new THREE.MeshBasicMaterial({ color: 'red'}),
    new THREE.MeshBasicMaterial({ color: 'blue'}),
    new THREE.MeshBasicMaterial({ color: 'white'}),
    new THREE.MeshBasicMaterial({ color: 'purple'}),
    new THREE.MeshBasicMaterial({ color: 'orange'}),
];

cube = new THREE.Mesh(geometry, materials);
scene.add(cube);
cube.position.z = 3;
cube.position.x += 1;

window.addEventListener("resize", function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();