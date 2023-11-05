import { useRef } from "react";
import BoatPart from "./BoatPart";

// eslint-disable-next-line react/prop-types
export default function Boat({scale, scenePosition, activeParts}) {
  const groupRef = useRef();

  const rotationInRadians = 90 * (Math.PI / 180)

  return (
    <group ref={groupRef} position={scenePosition} rotation={[rotationInRadians, 0, rotationInRadians * 2]}>
      <BoatPart url='src/assets/Hull.glb' scale={scale} name="Hull" id="hull" color="#406882" highlightColor="#FF0000" activeParts={activeParts}/>
      <BoatPart url='src/assets/Keel.glb' scale={scale} name="Keel" id="keel" color="#8B4513" highlightColor="#FF0000" activeParts={activeParts}/>
      <BoatPart url='src/assets/Rudder.glb' scale={scale} name="Rudder" id="rudder" color="#5C4033" highlightColor="#FF0000" activeParts={activeParts}/>
      <BoatPart url='src/assets/Mast.glb' scale={scale} name="Mast" id="mast" color="#D2B48C" highlightColor="#FF0000" activeParts={activeParts}/>
      <BoatPart url='src/assets/Sail.glb' scale={scale} name="Sail" id="sail" color="#F8F8FF" highlightColor="#FF0000" activeParts={activeParts}/>
      <BoatPart url='src/assets/Boom.glb' scale={scale} name="Boom" id="boom" color="#3B444B" highlightColor="#FF0000" activeParts={activeParts}/>
    </group>
  );
}
