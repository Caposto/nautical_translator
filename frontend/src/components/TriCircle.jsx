import * as THREE from 'three';

export default function TriCircle({sceneRotation, color, id}) {
  return (
    <mesh rotation={sceneRotation} userData={{id}}>
      <circleGeometry args={[10, 32, 0, Math.PI * 2/3]} />
      <meshBasicMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  );
}