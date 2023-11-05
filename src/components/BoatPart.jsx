import { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshStandardMaterial } from 'three';

// eslint-disable-next-line react/prop-types
export default function BoatPart({ url, scale, name, id, color, highlightColor }) {
  const [active, setActive] = useState(false);
  const part = useLoader(GLTFLoader, url);

  // Create a custom material
  const customMaterial = new MeshStandardMaterial({ color: color || 'white' });

  // Attach a useEffect that runs when active changes
  // Change active from the buttons in Simulator.jsx

  // Set intial color
  part.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = customMaterial;
    }
  });

  // If active, change the color (different color for each component)

  return (
    <primitive 
      object={part.scene}
      scale={scale}
      userData={{ name: name, id: id }}
    />
  );
}
