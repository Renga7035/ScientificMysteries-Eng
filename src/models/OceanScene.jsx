// src/models/OceanScene.jsx
import React, { useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Ocean = () => {
  const meshRef = useRef();
  
  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(20, 20, 20, 20);
  }, []);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#006994') },
  }), []);

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      pos.z = sin(pos.x * 2.0 + uTime) * 0.5 + cos(pos.y * 2.0 + uTime) * 0.5;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(uColor, 1.0);
    }
  `;

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide,
    });
  }, []);

  React.useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        uniforms.uTime.value += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2, 0]}
    />
  );
};

const OceanScene = () => {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Ocean />
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.5} minPolarAngle={Math.PI / 3} />
    </Canvas>
  );
};

export default OceanScene;