// العنصر الأول (اليسار)
const container = document.getElementById('three-brackets');
if (container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // أقواس < >
    const bracketShape = new THREE.Shape();
    bracketShape.moveTo(0, 1);
    bracketShape.lineTo(0.5, 0);
    bracketShape.lineTo(0, -1);
    const extrudeSettings = { depth: 0.1, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 2, steps: 1 };
    const geometry1 = new THREE.ExtrudeGeometry(bracketShape, extrudeSettings);
    const material1 = new THREE.MeshPhongMaterial({ color: 0x4a6fa5, transparent: true, opacity: 0.7 });
    const leftBracket = new THREE.Mesh(geometry1, material1);
    leftBracket.position.set(-0.7, 0, 0);
    leftBracket.scale.set(1.5, 2.5, 1);
    scene.add(leftBracket);

    const geometry2 = geometry1.clone();
    const rightBracket = new THREE.Mesh(geometry2, material1.clone());
    rightBracket.position.set(0.7, 0, 0);
    rightBracket.scale.set(-1.5, 2.5, 1);
    scene.add(rightBracket);

    // أقواس { }
    const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.3, 1, 0),
        new THREE.Vector3(-0.7, 0.5, 0),
        new THREE.Vector3(-0.7, -0.5, 0),
        new THREE.Vector3(-0.3, -1, 0)
    );
    const points = curve.getPoints(50);
    const geometry3 = new THREE.BufferGeometry().setFromPoints(points);
    const material2 = new THREE.LineBasicMaterial({ color: 0x35507a, linewidth: 4 });
    const leftCurly = new THREE.Line(geometry3, material2);
    leftCurly.position.x = -1.2;
    leftCurly.scale.set(1.2, 1.8, 1);
    scene.add(leftCurly);

    const curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0.3, 1, 0),
        new THREE.Vector3(0.7, 0.5, 0),
        new THREE.Vector3(0.7, -0.5, 0),
        new THREE.Vector3(0.3, -1, 0)
    );
    const points2 = curve2.getPoints(50);
    const geometry4 = new THREE.BufferGeometry().setFromPoints(points2);
    const rightCurly = new THREE.Line(geometry4, material2.clone());
    rightCurly.position.x = 1.2;
    rightCurly.scale.set(1.2, 1.8, 1);
    scene.add(rightCurly);

    // إضاءة
    const light = new THREE.DirectionalLight(0xffffff, 0.7);
    light.position.set(2, 4, 4);
    scene.add(light);
    const ambient = new THREE.AmbientLight(0xcccccc, 0.5);
    scene.add(ambient);

    camera.position.z = 5;

    // حركة الأقواس
    function animate() {
        requestAnimationFrame(animate);
        leftBracket.rotation.y += 0.005;
        rightBracket.rotation.y -= 0.005;
        leftCurly.rotation.z += 0.003;
        rightCurly.rotation.z -= 0.003;
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

// العنصر الثاني (اليمين)
const containerRight = document.getElementById('three-brackets-right');
if (containerRight) {
    const scene2 = new THREE.Scene();
    const camera2 = new THREE.PerspectiveCamera(60, containerRight.offsetWidth / containerRight.offsetHeight, 0.1, 1000);
    const renderer2 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer2.setSize(containerRight.offsetWidth, containerRight.offsetHeight);
    containerRight.appendChild(renderer2.domElement);

    // أقواس < > للعنصر الثاني
    const bracketShape2 = new THREE.Shape();
    bracketShape2.moveTo(0, 1);
    bracketShape2.lineTo(0.5, 0);
    bracketShape2.lineTo(0, -1);
    const geometry1Right = new THREE.ExtrudeGeometry(bracketShape2, extrudeSettings);
    const material1Right = new THREE.MeshPhongMaterial({ color: 0x4a6fa5, transparent: true, opacity: 0.7 });
    const leftBracketRight = new THREE.Mesh(geometry1Right, material1Right);
    leftBracketRight.position.set(-0.7, 0, 0);
    leftBracketRight.scale.set(1.5, 2.5, 1);
    scene2.add(leftBracketRight);

    const geometry2Right = geometry1Right.clone();
    const rightBracketRight = new THREE.Mesh(geometry2Right, material1Right.clone());
    rightBracketRight.position.set(0.7, 0, 0);
    rightBracketRight.scale.set(-1.5, 2.5, 1);
    scene2.add(rightBracketRight);

    // أقواس { } للعنصر الثاني
    const curveRight = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.3, 1, 0),
        new THREE.Vector3(-0.7, 0.5, 0),
        new THREE.Vector3(-0.7, -0.5, 0),
        new THREE.Vector3(-0.3, -1, 0)
    );
    const pointsRight = curveRight.getPoints(50);
    const geometry3Right = new THREE.BufferGeometry().setFromPoints(pointsRight);
    const material2Right = new THREE.LineBasicMaterial({ color: 0x35507a, linewidth: 4 });
    const leftCurlyRight = new THREE.Line(geometry3Right, material2Right);
    leftCurlyRight.position.x = -1.2;
    leftCurlyRight.scale.set(1.2, 1.8, 1);
    scene2.add(leftCurlyRight);

    const curve2Right = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0.3, 1, 0),
        new THREE.Vector3(0.7, 0.5, 0),
        new THREE.Vector3(0.7, -0.5, 0),
        new THREE.Vector3(0.3, -1, 0)
    );
    const points2Right = curve2Right.getPoints(50);
    const geometry4Right = new THREE.BufferGeometry().setFromPoints(points2Right);
    const rightCurlyRight = new THREE.Line(geometry4Right, material2Right.clone());
    rightCurlyRight.position.x = 1.2;
    rightCurlyRight.scale.set(1.2, 1.8, 1);
    scene2.add(rightCurlyRight);

    // إضاءة للعنصر الثاني
    const light2 = new THREE.DirectionalLight(0xffffff, 0.7);
    light2.position.set(2, 4, 4);
    scene2.add(light2);
    const ambient2 = new THREE.AmbientLight(0xcccccc, 0.5);
    scene2.add(ambient2);

    camera2.position.z = 5;

    // حركة الأقواس للعنصر الثاني (عكس الاتجاه)
    function animate2() {
        requestAnimationFrame(animate2);
        leftBracketRight.rotation.y -= 0.005;
        rightBracketRight.rotation.y += 0.005;
        leftCurlyRight.rotation.z -= 0.003;
        rightCurlyRight.rotation.z += 0.003;
        renderer2.render(scene2, camera2);
    }
    animate2();

    // استجابة لتغيير حجم الشاشة للعنصر الثاني
    window.addEventListener('resize', () => {
        renderer2.setSize(containerRight.offsetWidth, containerRight.offsetHeight);
        camera2.aspect = containerRight.offsetWidth / containerRight.offsetHeight;
        camera2.updateProjectionMatrix();
    });
}