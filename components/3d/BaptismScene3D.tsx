"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface BaptismScene3DProps {
  currentStage: number; // 1 to 5
}

export default function BaptismScene3D({ currentStage }: BaptismScene3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef(currentStage);

  useEffect(() => {
    stageRef.current = currentStage;
  }, [currentStage]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const fog = new THREE.FogExp2(0x06202b, 0.05);
    scene.fog = fog;

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 7);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 2. Animated Living Water Plane
    const waterGeo = new THREE.PlaneGeometry(30, 30, 48, 48);
    waterGeo.rotateX(-Math.PI / 2);
    const initialPositions = (waterGeo.attributes.position.array as Float32Array).slice();

    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x13698e,
      roughness: 0.1,
      metalness: 0.6,
      transparent: true,
      opacity: 0.85,
      wireframe: false,
    });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.position.y = -0.5;
    scene.add(waterMesh);

    // 3. Underwater Immersion Bubbles
    const bubbleCount = 180;
    const bubbleGeo = new THREE.BufferGeometry();
    const bubblePos = new Float32Array(bubbleCount * 3);
    const bubbleSpeed = new Float32Array(bubbleCount);

    for (let i = 0; i < bubbleCount; i++) {
      bubblePos[i * 3] = (Math.random() - 0.5) * 8;
      bubblePos[i * 3 + 1] = -4 + Math.random() * 5;
      bubblePos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      bubbleSpeed[i] = 0.02 + Math.random() * 0.035;
    }
    bubbleGeo.setAttribute("position", new THREE.BufferAttribute(bubblePos, 3));
    const bubbleMat = new THREE.PointsMaterial({
      color: 0xa3dff4,
      size: 0.08,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const bubbleParticles = new THREE.Points(bubbleGeo, bubbleMat);
    scene.add(bubbleParticles);

    // 4. Holy Spirit Dove Mesh (Descending in Stage 4 & 5)
    const doveGroup = new THREE.Group();
    doveGroup.position.set(0, 5, 0); // starts high above

    const doveMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffd700,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.4,
    });

    const bodyGeo = new THREE.SphereGeometry(0.5, 16, 12);
    bodyGeo.scale(0.5, 0.4, 1.0);
    const bodyMesh = new THREE.Mesh(bodyGeo, doveMat);
    doveGroup.add(bodyMesh);

    // Wings
    const wingGeo = new THREE.BoxGeometry(1.4, 0.04, 0.6);
    wingGeo.translate(-0.7, 0, 0);
    const leftWing = new THREE.Mesh(wingGeo, doveMat);
    leftWing.position.set(-0.2, 0.1, 0);
    doveGroup.add(leftWing);

    const rightWingGeo = new THREE.BoxGeometry(1.4, 0.04, 0.6);
    rightWingGeo.translate(0.7, 0, 0);
    const rightWing = new THREE.Mesh(rightWingGeo, doveMat);
    rightWing.position.set(0.2, 0.1, 0);
    doveGroup.add(rightWing);

    // Golden Aura Halo
    const haloGeo = new THREE.TorusGeometry(0.9, 0.03, 16, 48);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    const doveHalo = new THREE.Mesh(haloGeo, haloMat);
    doveHalo.rotation.x = Math.PI / 2;
    doveGroup.add(doveHalo);

    scene.add(doveGroup);

    // 5. Great Commission Sacred Cross (Stage 5)
    const crossGroup = new THREE.Group();
    crossGroup.position.set(0, -6, 0); // initially hidden below
    const crossGoldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x9e7d17,
      emissiveIntensity: 0.3,
    });
    const cVertGeo = new THREE.BoxGeometry(0.35, 3.2, 0.35);
    const cHorizGeo = new THREE.BoxGeometry(2.0, 0.35, 0.35);
    const cVert = new THREE.Mesh(cVertGeo, crossGoldMat);
    const cHoriz = new THREE.Mesh(cHorizGeo, crossGoldMat);
    cHoriz.position.y = 0.5;
    crossGroup.add(cVert);
    crossGroup.add(cHoriz);
    scene.add(crossGroup);

    // 6. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 0.6);
    scene.add(ambientLight);

    const celestialLight = new THREE.DirectionalLight(0xfffaed, 2.5);
    celestialLight.position.set(0, 10, 5);
    scene.add(celestialLight);

    const underwaterBlueLight = new THREE.PointLight(0x34aedb, 2.0, 15);
    underwaterBlueLight.position.set(0, -2, 0);
    scene.add(underwaterBlueLight);

    const goldenSunRay = new THREE.DirectionalLight(0xffd700, 1.8);
    goldenSunRay.position.set(5, 5, 2);
    scene.add(goldenSunRay);

    // Resize handler
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
      const time = clock.getElapsedTime();
      const current = stageRef.current;

      // 1. Water waves vertex animation
      const posArray = waterGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < posArray.length; i += 3) {
        const u = initialPositions[i];
        const w = initialPositions[i + 2];
        // Dynamic undulating ripples
        posArray[i + 1] =
          Math.sin(u * 0.8 + time * 2.2) * 0.18 +
          Math.cos(w * 0.8 + time * 1.8) * 0.15;
      }
      waterGeo.attributes.position.needsUpdate = true;

      // 2. Rising immersion bubbles
      const bArray = bubbleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < bubbleCount; i++) {
        bArray[i * 3 + 1] += bubbleSpeed[i];
        if (bArray[i * 3 + 1] > 2) {
          bArray[i * 3 + 1] = -4; // loop back to riverbed
        }
      }
      bubbleGeo.attributes.position.needsUpdate = true;

      // 3. Stage-specific camera and scene choreography
      // Stage 1: River Jordan (peaceful riverbank, above water)
      if (current === 1) {
        camera.position.y += (1.8 - camera.position.y) * 0.05;
        camera.position.z += (6.5 - camera.position.z) * 0.05;
        waterMesh.position.y += (-0.8 - waterMesh.position.y) * 0.05;
        doveGroup.position.y += (6.0 - doveGroup.position.y) * 0.05;
        crossGroup.position.y += (-6.0 - crossGroup.position.y) * 0.05;
        waterMat.color.setHex(0x13698e);
        fog.color.setHex(0x06202b);
        fog.density = 0.04;
      }
      // Stage 2: The Sacred Immersion (deep underwater submersion with caustics)
      else if (current === 2) {
        camera.position.y += (-1.8 - camera.position.y) * 0.05;
        camera.position.z += (5.0 - camera.position.z) * 0.05;
        waterMesh.position.y += (1.2 - waterMesh.position.y) * 0.05; // water overhead
        doveGroup.position.y += (7.0 - doveGroup.position.y) * 0.05;
        crossGroup.position.y += (-6.0 - crossGroup.position.y) * 0.05;
        waterMat.color.setHex(0x0e4e6a);
        fog.color.setHex(0x06202b);
        fog.density = 0.09; // murky deep water atmosphere
      }
      // Stage 3: Emergence into Divine Light (breaching surface, sunlight flare)
      else if (current === 3) {
        camera.position.y += (0.8 - camera.position.y) * 0.05;
        camera.position.z += (5.8 - camera.position.z) * 0.05;
        waterMesh.position.y += (-0.4 - waterMesh.position.y) * 0.05;
        doveGroup.position.y += (4.0 - doveGroup.position.y) * 0.05;
        crossGroup.position.y += (-4.0 - crossGroup.position.y) * 0.05;
        waterMat.color.setHex(0x34aedb);
        fog.color.setHex(0x0a3649);
        fog.density = 0.03;
      }
      // Stage 4: Descent of the Holy Spirit Dove (celestial golden opening)
      else if (current === 4) {
        camera.position.y += (1.2 - camera.position.y) * 0.05;
        camera.position.z += (5.2 - camera.position.z) * 0.05;
        waterMesh.position.y += (-1.2 - waterMesh.position.y) * 0.05;
        // Dove descends center frame
        doveGroup.position.y += (1.1 - doveGroup.position.y) * 0.05;
        doveGroup.rotation.y = Math.sin(time * 0.8) * 0.25;
        // Wing flapping
        const wing = Math.sin(time * 4) * 0.35;
        leftWing.rotation.z = wing;
        rightWing.rotation.z = -wing;
        doveHalo.rotation.z = time * 0.5;
        crossGroup.position.y += (-4.0 - crossGroup.position.y) * 0.05;
        fog.color.setHex(0x15264d);
        fog.density = 0.02;
      }
      // Stage 5: The Great Commission (Radiant Cross rising, worldwide mission)
      else if (current === 5) {
        camera.position.y += (1.4 - camera.position.y) * 0.05;
        camera.position.z += (6.0 - camera.position.z) * 0.05;
        doveGroup.position.y += (2.6 - doveGroup.position.y) * 0.05;
        // Luminous cross rises majestically from the water
        crossGroup.position.y += (0.4 - crossGroup.position.y) * 0.05;
        crossGroup.rotation.y = time * 0.4;
        waterMesh.position.y += (-1.4 - waterMesh.position.y) * 0.05;
        waterMat.color.setHex(0x1a8bb9);
        fog.color.setHex(0x091124);
        fog.density = 0.025;
      }

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
      waterGeo.dispose();
      waterMat.dispose();
      bubbleGeo.dispose();
      bubbleMat.dispose();
      bodyGeo.dispose();
      wingGeo.dispose();
      rightWingGeo.dispose();
      haloGeo.dispose();
      doveMat.dispose();
      haloMat.dispose();
      crossGoldMat.dispose();
      cVertGeo.dispose();
      cHorizGeo.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="webgl-canvas-container absolute inset-0 w-full h-full pointer-events-none"
      aria-label="3D Baptism Scene Water and Light WebGL Canvas"
    />
  );
}
