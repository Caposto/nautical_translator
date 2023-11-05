import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshStandardMaterial } from 'three';

// eslint-disable-next-line react/prop-types
export default function BoatPart({ url, scale, name, id, color }) {
  const part = useLoader(GLTFLoader, url);

  // Create a custom material
  const customMaterial = new MeshStandardMaterial({ color: color || 'white' });

  // Traverse the loaded GLTF and change the material
  part.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = customMaterial;
    }
  });

  return (
    <primitive 
      object={part.scene}
      scale={scale}
      userData={{ name: name, id: id }}
    />
  );
}
