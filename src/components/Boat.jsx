import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// eslint-disable-next-line react/prop-types
export default function Boat({scale}) {
  const gltf = useLoader(GLTFLoader, 'src/assets/Boat.glb');

  return (
    <primitive 
      object={gltf.scene}
      scale={scale} 
    />
  );
}
