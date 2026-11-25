"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SacredCrossCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Group for the sacred cross and halo
    const crossGroup = new THREE.Group();
    scene.add(crossGroup);

    // Golden metallic material
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x5a4208,
      emissiveIntensity: 0.2,
    });

    const haloMaterial = new THREE.MeshStandardMaterial({
      color: 0xf9e498,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0xd4af37,
      emissiveIntensity: 0.4,
      wireframe: false,
    });

    // Vertical beam of the cross
    const vertGeo = new THREE.BoxGeometry(0.5, 3.8, 0.45);
    const vertMesh = new THREE.Mesh(vertGeo, goldMaterial);
    crossGroup.add(vertMesh);

    // Horizontal crossbeam
    const horizGeo = new THREE.BoxGeometry(2.5, 0.5, 0.45);
    const horizMesh = new THREE.Mesh(horizGeo, goldMaterial);
    horizMesh.position.y = 0.55;
    crossGroup.add(horizMesh);

    // Beveled center gem / Sacred Heart medallion
    const centerGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.5, 16);
    centerGeo.rotateX(Math.PI / 2);
    const centerMesh = new THREE.Mesh(centerGeo, haloMaterial);
    centerMesh.position.y = 0.55;
    crossGroup.add(centerMesh);

    // Radiant Nimbus / Halo ring behind the cross intersection
    const haloGeo = new THREE.TorusGeometry(1.05, 0.05, 16, 64);
    const haloMesh = new THREE.Mesh(haloGeo, haloMaterial);
    haloMesh.position.set(0, 0.55, -0.1);
    crossGroup.add(haloMesh);

    // Second ethereal halo
    const outerHaloGeo = new THREE.TorusGeometry(1.4, 0.02, 16, 64);
    const outerHaloMat = new THREE.MeshBasicMaterial({
      color: 0xffe680,
      transparent: true,
      opacity: 0.6,
    });
    const outerHaloMesh = new THREE.Mesh(outerHaloGeo, outerHaloMat);
    outerHaloMesh.position.set(0, 0.55, -0.15);
    crossGroup.add(outerHaloMesh);

    // Swirling sacred light particles
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.2 + Math.random() * 2.8;
      const y = (Math.random() - 0.5) * 4.5;
      particlePositions[i * 3] = Math.cos(theta) * radius;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = Math.sin(theta) * radius;
      particleSpeeds[i] = 0.005 + Math.random() * 0.015;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf9e498,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 0.8);
    scene.add(ambientLight);

    const directLight1 = new THREE.DirectionalLight(0xfffaed, 2.5);
    directLight1.position.set(3, 4, 5);
    scene.add(directLight1);

    const directLight2 = new THREE.DirectionalLight(0x34aedb, 1.2);
    directLight2.position.set(-3, -2, 2);
    scene.add(directLight2);

    const pointLight = new THREE.PointLight(0xffd700, 3, 10);
    pointLight.position.set(0, 0.55, 1.2);
    scene.add(pointLight);

    // Mouse movement parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Gentle floating and rotation
      crossGroup.rotation.y = Math.sin(elapsedTime * 0.4) * 0.35 + targetX * 0.45;
      crossGroup.rotation.x = Math.cos(elapsedTime * 0.3) * 0.1 - targetY * 0.25;
      crossGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

      // Halo pulsating rotation
      outerHaloMesh.rotation.z = elapsedTime * 0.2;
      haloMesh.rotation.z = -elapsedTime * 0.15;

      // Particle orbit animation
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        let x = positions[i * 3];
        let z = positions[i * 3 + 2];
        const angle = particleSpeeds[i];

        positions[i * 3] = x * Math.cos(angle) - z * Math.sin(angle);
        positions[i * 3 + 2] = x * Math.sin(angle) + z * Math.cos(angle);
        positions[i * 3 + 1] += Math.sin(elapsedTime + i) * 0.003;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      vertGeo.dispose();
      horizGeo.dispose();
      centerGeo.dispose();
      haloGeo.dispose();
      outerHaloGeo.dispose();
      goldMaterial.dispose();
      haloMaterial.dispose();
      outerHaloMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="webgl-canvas-container w-full h-[450px] sm:h-[550px] lg:h-[620px] flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
      aria-label="3D Interactive Luminous Cross of Jesus"
    />
  );
}
