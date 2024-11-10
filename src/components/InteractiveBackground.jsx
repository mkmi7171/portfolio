import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DynamicBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        const particleCount = 500;
        const particles = new THREE.BufferGeometry();
        const positions = [];

        for (let i = 0; i < particleCount; i++) {
            positions.push((Math.random() - 0.5) * 10); // x
            positions.push((Math.random() - 0.5) * 10); // y
            positions.push((Math.random() - 0.5) * 10); // z
        }
        particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        const particleMaterial = new THREE.PointsMaterial({
            color: 0x8b00ff,
            size: 0.1,
            transparent: true,
            opacity: 0.8
        });

        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);

        const animateParticles = () => {
            const positions = particles.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 1] -= 0.01;
                if (positions[i + 1] < -5) positions[i + 1] = 5;
            }
            particles.attributes.position.needsUpdate = true;
        };

        const animate = () => {
            requestAnimationFrame(animate);
            animateParticles();
            renderer.render(scene, camera);
        };

        animate();

        const onResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'absolute', width: '100%', height: '100%' }} />;
};

export default DynamicBackground;
