import { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';

export default function TestGroup() {
  const groupRef = useRef();

  // Might need to create a context to reference each object's color

  // // This function runs every frame to animate the group
  // useFrame(() => {
  //   if (groupRef.current) {
  //     groupRef.current.rotation.y += 0.01;
  //   }
  // });

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