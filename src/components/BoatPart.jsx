import { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshStandardMaterial } from 'three';

// eslint-disable-next-line react/prop-types
export default function BoatPart({ url, scale, name, id, color, highlightColor, activeParts }) {
  const part = useLoader(GLTFLoader, url);

  // Create a custom material
  const customMaterialRef = useRef(new MeshStandardMaterial({ color: color || 'white' }));
  const highlightMaterialRef = useRef(new MeshStandardMaterial({ color: highlightColor || 'yellow' })); // Default highlight color set to yellow

  // Check if the part is active and should be highlighted
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const isActive = activeParts.has(id); // Check if the part's name is in the activeParts set
    part.scene.traverse((child) => {
      if (child.isMesh) {
        // Apply the highlight material if active, otherwise the regular material
        child.material = isActive ? highlightMaterialRef.current : customMaterialRef.current;
      }
    });
  }, [activeParts, name, part.scene]); // Depend on activeParts, name, and part.scene to rerun this effect

  return (
    <primitive 
      object={part.scene}
      scale={scale}
      userData={{ name, id }}
    />
  );
}
