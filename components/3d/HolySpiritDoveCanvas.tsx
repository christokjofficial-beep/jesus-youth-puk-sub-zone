"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HolySpiritDoveCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const doveGroup = new THREE.Group();
    scene.add(doveGroup);

    // Radiant celestial white material for the Dove
    const doveMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.3,
      emissive: 0xf9e498,
      emissiveIntensity: 0.35,
    });

    // Dove Body
    const bodyGeo = new THREE.SphereGeometry(0.7, 32, 16);
    bodyGeo.scale(0.5, 0.45, 1.2);
    const bodyMesh = new THREE.Mesh(bodyGeo, doveMaterial);
    doveGroup.add(bodyMesh);

    // Dove Head
    const headGeo = new THREE.SphereGeometry(0.35, 24, 16);
    headGeo.scale(0.8, 0.9, 1.0);
    const headMesh = new THREE.Mesh(headGeo, doveMaterial);
    headMesh.position.set(0, 0.25, 0.95);
    doveGroup.add(headMesh);

    // Dove Beak (golden olive branch tone)
    const beakGeo = new THREE.ConeGeometry(0.08, 0.3, 12);
    beakGeo.rotateX(Math.PI / 2);
    const beakMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.8,
      roughness: 0.2,
    });
    const beakMesh = new THREE.Mesh(beakGeo, beakMat);
    beakMesh.position.set(0, 0.15, 1.35);
    doveGroup.add(beakMesh);

    // Left Wing Group
    const leftWingGroup = new THREE.Group();
    leftWingGroup.position.set(-0.25, 0.15, 0.1);
    doveGroup.add(leftWingGroup);

    const leftWingGeo = new THREE.BoxGeometry(1.6, 0.05, 0.8);
    leftWingGeo.translate(-0.8, 0, 0);
    const leftWingMesh = new THREE.Mesh(leftWingGeo, doveMaterial);
    leftWingMesh.rotation.y = -0.15;
    leftWingGroup.add(leftWingMesh);

    // Right Wing Group
    const rightWingGroup = new THREE.Group();
    rightWingGroup.position.set(0.25, 0.15, 0.1);
    doveGroup.add(rightWingGroup);

    const rightWingGeo = new THREE.BoxGeometry(1.6, 0.05, 0.8);
    rightWingGeo.translate(0.8, 0, 0);
    const rightWingMesh = new THREE.Mesh(rightWingGeo, doveMaterial);
    rightWingMesh.rotation.y = 0.15;
    rightWingGroup.add(rightWingMesh);

    // Tail Feathers
    const tailGeo = new THREE.ConeGeometry(0.4, 1.1, 16);
    tailGeo.scale(1.2, 0.1, 1.0);
    tailGeo.rotateX(-Math.PI / 2);
    const tailMesh = new THREE.Mesh(tailGeo, doveMaterial);
    tailMesh.position.set(0, 0.05, -1.0);
    doveGroup.add(tailMesh);

    // Divine Nimbus / Aura behind the Holy Spirit Dove
    const auraGeo = new THREE.RingGeometry(0.8, 1.8, 32);
    const auraMat = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const auraMesh = new THREE.Mesh(auraGeo, auraMat);
    auraMesh.rotation.x = Math.PI / 4;
    auraMesh.position.set(0, -0.2, -0.2);
    doveGroup.add(auraMesh);

    // Divine Particle Trail
    const trailCount = 150;
    const trailGeo = new THREE.BufferGeometry();
    const trailPos = new Float32Array(trailCount * 3);
    for (let i = 0; i < trailCount; i++) {
      trailPos[i * 3] = (Math.random() - 0.5) * 3;
      trailPos[i * 3 + 1] = (Math.random() - 0.5) * 3;
      trailPos[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    trailGeo.setAttribute("position", new THREE.BufferAttribute(trailPos, 3));
    const trailMat = new THREE.PointsMaterial({
      color: 0xf9e498,
      size: 0.04,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const trailPoints = new THREE.Points(trailGeo, trailMat);
    scene.add(trailPoints);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);

    const goldPoint = new THREE.PointLight(0xffdf80, 2.5, 12);
    goldPoint.position.set(0, 2, 3);
    scene.add(goldPoint);

    const softBlue = new THREE.DirectionalLight(0x66c7ea, 1.5);
    softBlue.position.set(-2, -3, 2);
    scene.add(softBlue);

    // Orient dove slightly downwards as if descending from heaven
    doveGroup.rotation.x = 0.35;
    doveGroup.rotation.y = -0.2;

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Wing gentle flapping glide
      const wingFlap = Math.sin(t * 3.5) * 0.3;
      leftWingGroup.rotation.z = wingFlap;
      rightWingGroup.rotation.z = -wingFlap;

      // Descending drift
      doveGroup.position.y = Math.sin(t * 1.5) * 0.15;
      doveGroup.rotation.z = Math.sin(t * 1.2) * 0.08;

      // Rotate aura
      auraMesh.rotation.z = t * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      bodyGeo.dispose();
      headGeo.dispose();
      beakGeo.dispose();
      leftWingGeo.dispose();
      rightWingGeo.dispose();
      tailGeo.dispose();
      auraGeo.dispose();
      doveMaterial.dispose();
      beakMat.dispose();
      auraMat.dispose();
      trailGeo.dispose();
      trailMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="webgl-canvas-container w-full h-[320px] sm:h-[400px] flex items-center justify-center"
      aria-label="3D Holy Spirit Descending Dove"
    />
  );
}
