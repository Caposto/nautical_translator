import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function TestGroup() {
  const groupRef = useRef();

  // This function runs every frame to animate the group
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <sphereBufferGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </group>
  );
}