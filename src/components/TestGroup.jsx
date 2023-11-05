import { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';

export default function TestGroup() {
  const groupRef = useRef();

  return (
    <group ref={groupRef}>
      <mesh visible userData={{ hello: 'world' }} position={[1, 4, 6]} rotation={[Math.PI / 2, 0, 0]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshStandardMaterial color="hotpink" transparent />
      </mesh>
      <mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="hotpink" transparent />
      </mesh>
    </group>
  );
}