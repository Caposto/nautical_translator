import { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshStandardMaterial } from 'three';

export default function BoatPart({ url, scale, name, id, color, highlightColor, activePart }) {
  const part = useLoader(GLTFLoader, url);

  const baseMaterialRef = useRef(new MeshStandardMaterial({ color: color || 'white' }));
  const highlightMaterialRef = useRef(new MeshStandardMaterial({ color: highlightColor || 'yellow' })); // Default highlight color set to yellow
  const opacityMaterialRef = useRef(new MeshStandardMaterial({ transparent: true, opacity: 0.5 }))

  // Check if the part is active and should be highlighted
  useEffect(() => {
    const isActive = activePart;
    part.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = (id === activePart ? highlightMaterialRef.current : isActive !== null ? opacityMaterialRef.current : baseMaterialRef.current)
      }
    });
  }, [activePart, name, part.scene, id]);

  return (
    <primitive 
      object={part.scene}
      scale={scale}
      userData={{ name, id }}
    />
  );
}
