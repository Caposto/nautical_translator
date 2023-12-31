import TriCircle from "./TriCircle";
import { useRef } from "react";

export default function Sides({center, portVisibility, sternVisibility, startboardVisibility}) {
  const sidesRef = useRef();
  const ninetyDegreeRotationInRadians = (90 * Math.PI) / 180;
  const oneThirdCircleRadians = (120 * Math.PI) / 180;

  return (
    <group ref={sidesRef} position={center} rotation={[0, 0, 2*ninetyDegreeRotationInRadians]}>
        <TriCircle sceneRotation={[ninetyDegreeRotationInRadians, 0, 0]} color={0xF88379} visible={portVisibility} id="port"/>
        <TriCircle sceneRotation={[ninetyDegreeRotationInRadians, 0, oneThirdCircleRadians]} color={0xffffff} visible={sternVisibility} id="stern"/>
        <TriCircle sceneRotation={[ninetyDegreeRotationInRadians, 0, 2 * oneThirdCircleRadians]} color={0x50C878} visible={startboardVisibility} id="startboard" />
    </group>
  )
}
