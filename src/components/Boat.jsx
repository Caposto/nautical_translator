import { useRef } from "react";
import BoatPart from "./BoatPart";

// eslint-disable-next-line react/prop-types
export default function Boat({scale, scenePosition}) {
  const groupRef = useRef();

  const rotationInRadians = 90 * (Math.PI / 180)

  return (
    <group ref={groupRef} position={scenePosition} rotation={[rotationInRadians, 0, rotationInRadians * 2]}>
      <BoatPart url='src/assets/Hull.glb' scale={scale} name="Hull" id="hull" color="#ff0000"/>
      <BoatPart url='src/assets/Keel.glb' scale={scale} name="Keel" id="keel"/>
      <BoatPart url='src/assets/Rudder.glb' scale={scale} name="Rudder" id="rudder"/>
      <BoatPart url='src/assets/Mast.glb' scale={scale} name="Mast" id="mast"/>
      <BoatPart url='src/assets/Sail.glb' scale={scale} name="Sail" id="sail"/>
      <BoatPart url='src/assets/Boom.glb' scale={scale} name="Boom" id="boom"/>
    </group>
  );
}

