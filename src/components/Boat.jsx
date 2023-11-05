// import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import BoatPart from "./BoatPart";

// eslint-disable-next-line react/prop-types
export default function Boat({scale, scenePosition}) {
  const gltf = useLoader(GLTFLoader, 'src/assets/Boat.glb');

  /* 
  const hull = useLoader(GLTFLoader, 'src/assets/Hull.glb');
  const keel = useLoader(GLTFLoader, 'src/assets/Keel.glb');
  const rudder = useLoader(GLTFLoder, 'src/assets/Rudder.glb');
  const mast = useLoader(GLTFLoader, 'src/assets/Mast.glb');
  const sail = useLoader(GLTFLoader, 'src/assets/Sail.glb');
  const boom = useLoader(GLTFLoader, 'src/assets/Boom.glb');

  IN JSX:
  Use group to group the parts together
  <group>

  </group>
  <BoatPart url={hull} scale={scale} name="Hull" id="hull"/>
  */

  return (
    <primitive 
      object={gltf.scene}
      scale={scale} 
      position={scenePosition}
    />
  );
}
