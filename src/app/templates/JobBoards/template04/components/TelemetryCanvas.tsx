"use client";

import { useEffect, useRef } from "react";

export default function TelemetryCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    let renderer: any;
    let scene: any;
    let camera: any;
    let meshGroup: any;

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.async = true;
    script.onload = () => {
      const THREE = (window as any).THREE;
      if (!THREE || !container) return;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.z = 24;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      meshGroup = new THREE.Group();
      scene.add(meshGroup);

      // Core icosahedron wireframe
      const icosaGeo = new THREE.IcosahedronGeometry(7, 1);
      const icosaMat = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const icosaMesh = new THREE.Mesh(icosaGeo, icosaMat);
      meshGroup.add(icosaMesh);

      // Inner glowing core
      const innerGeo = new THREE.OctahedronGeometry(3.5, 0);
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      meshGroup.add(innerMesh);

      // Orbital rings
      const ringGeo1 = new THREE.TorusGeometry(10, 0.08, 16, 100);
      const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.5 });
      const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      ring1.rotation.x = Math.PI / 3;
      meshGroup.add(ring1);

      const ringGeo2 = new THREE.TorusGeometry(12.5, 0.06, 16, 100);
      const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.4 });
      const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.rotation.y = Math.PI / 4;
      meshGroup.add(ring2);

      // Mouse rotation listener
      let mouseX = 0;
      let mouseY = 0;
      const onMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      };
      window.addEventListener("mousemove", onMouseMove);

      const onResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
      window.addEventListener("resize", onResize);

      const clock = new THREE.Clock();
      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        icosaMesh.rotation.y = t * 0.15;
        icosaMesh.rotation.x = t * 0.1;
        innerMesh.rotation.y = -t * 0.25;
        ring1.rotation.z = t * 0.12;
        ring2.rotation.z = -t * 0.08;

        meshGroup.rotation.y += (mouseX * 0.5 - meshGroup.rotation.y) * 0.05;
        meshGroup.rotation.x += (mouseY * 0.5 - meshGroup.rotation.x) * 0.05;

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animId);
        if (renderer && renderer.domElement) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 h-full w-full opacity-90 pointer-events-none overflow-hidden" />;
}
