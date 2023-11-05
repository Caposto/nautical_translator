import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// eslint-disable-next-line react/prop-types
export default function BoatPart({url, scale, name, id}) {
    const part = useLoader(GLTFLoader, url);

    return (
      <primitive 
        object={part.scene}
        scale={scale} 
        userData={{name: name, id: id}}
      />
    );
}