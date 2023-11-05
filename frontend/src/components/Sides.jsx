import TriCircle from "./TriCircle";
import { useRef } from "react";

export default function Sides({center}) {
  const sidesRef = useRef();
  const ninetyDegreeRotationInRadians = (90 * Math.PI) / 180;
  const oneThirdCircleRadians = (120 * Math.PI) / 180;

  return (
    <group ref={sidesRef} position={center}>
        <TriCircle sceneRotation={[ninetyDegreeRotationInRadians, 0, 0]} color={0xff0000} />
        <TriCircle sceneRotation={[ninetyDegreeRotationInRadians, 0, oneThirdCircleRadians]} color={0xffff00} />
        <TriCircle sceneRotation={[ninetyDegreeRotationInRadians, 0, 2 * oneThirdCircleRadians]} color={0xff00ff} />
    </group>
  )
}
