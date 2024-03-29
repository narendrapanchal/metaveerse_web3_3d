import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useWeb3 } from './web3';

const ThreeAnimation = () => {
  const sceneRef = useRef();
  const { account, connectWallet, disconnectWallet } = useWeb3();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div>
      <div>
        <p>{account ? `Connected Wallet: ${account}` : 'Wallet not connected'}</p>
        <button onClick={account ? disconnectWallet : connectWallet}>
          {account ? 'Disconnect Wallet' : 'Connect Wallet'}
        </button>
      </div>
      <div ref={sceneRef}></div>
      
    </div>
  );
};

export default ThreeAnimation;
