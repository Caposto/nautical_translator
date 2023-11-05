import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Boat from "./Boat";
import Ocean from "./Ocean";

function Simulator() {
  return (
	<div className="w-full h-[525px] flex items-center justify-center">
		<div className='relative w-5/6 h-[500px] drop-shadow-2xl'> 
			<div className='h-full'>
				<Canvas camera = {{
					position: [0,10,18],
					fov:45,
					}}>
					<color attach="background" args={["#ececec"]}/>
					<OrbitControls/> 
					<ambientLight intensity={1} />
					<directionalLight position={[0, 0, 5]} intensity={2} />
					<Boat scale={0.01} scenePosition={[0, 0.5, 3]}/>
					<Ocean />
					<gridHelper />
					<axesHelper args={[5]}/>
				</Canvas>
			</div>
        </div>
	</div>
  )
}

export default Simulator;