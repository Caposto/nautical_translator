import * as THREE from 'three';

export default function TriCircle({sceneRotation, color, visible, id}) {
  return (
    <mesh rotation={sceneRotation} userData={{id}}>
      <circleGeometry args={[20, 32, 0, Math.PI * 2/3]} />
      <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent={true} opacity={0.5} visible={visible}/>
    </mesh>
  );
}