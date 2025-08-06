const container = document.getElementById('three-container');
if (container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // جسم اللابتوب (مستطيل)
    const baseGeometry = new THREE.BoxGeometry(2, 0.15, 1.2);
    const baseMaterial = new THREE.MeshPhongMaterial({ color: 0x4a6fa5 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -0.4;
    scene.add(base);

    // شاشة اللابتوب
    const screenGeometry = new THREE.BoxGeometry(2, 1.1, 0.08);
    const screenMaterial = new THREE.MeshPhongMaterial({ color: 0x222b3a });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.y = 0.25;
    screen.position.z = -0.56;
    screen.rotation.x = -0.25;
    scene.add(screen);

    // إضاءة
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 4, 4);
    scene.add(light);
    const ambient = new THREE.AmbientLight(0xcccccc, 0.7);
    scene.add(ambient);

    camera.position.z = 4;

    // حركة اللابتوب
    function animate() {
        requestAnimationFrame(animate);
        base.rotation.y += 0.005;
        screen.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();

    // استجابة لتغيير حجم الشاشة
    window.addEventListener('resize', () => {
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
    });
}