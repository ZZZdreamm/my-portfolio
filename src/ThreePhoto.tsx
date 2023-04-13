import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

//@ts-ignore
export default function ThreePhoto({ imageUrl, depthUrl }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create a new Three.js scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // field of view
      window.innerWidth / window.innerHeight, // aspect ratio
      0.1, // near clipping plane
      1000 // far clipping plane
    );

    // Create a new Three.js renderer and attach it to the canvas
//@ts-ignore
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Load the image and depth map textures
    const textureLoader = new THREE.TextureLoader();
    const imageTexture = textureLoader.load(imageUrl);
    const depthTexture = textureLoader.load(depthUrl);

    // Create a new Three.js plane geometry
    const planeGeometry = new THREE.PlaneGeometry(1, 1);

    // Create a new Three.js material with the image and depth map textures
    const material = new THREE.MeshBasicMaterial({
      map: imageTexture,
//@ts-ignore
      displacementMap: depthTexture,
      displacementScale: 0.1 // adjust this value to control the depth effect
    });

    // Create a new Three.js mesh with the plane geometry and material
    const mesh = new THREE.Mesh(planeGeometry, material);

    // Add the mesh to the scene
    scene.add(mesh);

    // Set the camera position and look at the mesh
    camera.position.z = 5;
    camera.lookAt(mesh.position);

    // Create a render function that will be called on each frame
    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }

    // Call the render function to start the animation loop
    render();
  }, [imageUrl, depthUrl]);

  return <canvas ref={canvasRef} />;
}