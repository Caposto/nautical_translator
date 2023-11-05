import { useRef, useEffect } from "react";
import BoatPart from "./BoatPart";

export default function Boat({ scale, scenePosition }) {
  const groupRef = useRef();
  const rotationInRadians = 90 * (Math.PI / 180);

  useEffect(() => {
    const animate = () => {
      // Calculate the new Y position based on a sine wave.
      const newY = scenePosition[1] + Math.sin(Date.now() * 0.001) * 0.2; // You can adjust the amplitude and speed as needed.
      
      // Calculate a slight rotation around the X-axis.
      const newRotation = rotationInRadians + Math.sin(Date.now() * 0.001) * 0.05; // Adjust the rotation speed as needed.

      // Update the group's position and rotation.
      groupRef.current.position.y = newY;
      groupRef.current.rotation.x = newRotation;
      groupRef.current.rotation.z = newRotation;

      // Request the next animation frame.
      requestAnimationFrame(animate);
    };

    // Start the animation loop.
    animate();

    // Cleanup function
    return () => {
      // Stop the animation loop if the component unmounts.
      cancelAnimationFrame(animate);
    };
  }, [scenePosition]);

  return (
    <group ref={groupRef} position={scenePosition}>
      <BoatPart url="src/assets/Hull.glb" scale={scale} name="Hull" id="hull" />
      <BoatPart url="src/assets/Keel.glb" scale={scale} name="Keel" id="keel" />
      <BoatPart url="src/assets/Rudder.glb" scale={scale} name="Rudder" id="rudder" />
      <BoatPart url="src/assets/Mast.glb" scale={scale} name="Mast" id="mast" />
      <BoatPart url="src/assets/Sail.glb" scale={scale} name="Sail" id="sail" />
      <BoatPart url="src/assets/Boom.glb" scale={scale} name="Boom" id="boom" />
    </group>
  );
}
