import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Boat from "./Boat";

function Simulator() {
  return (
	<div className="w-full h-[500px] flex items-center justify-center">
		<div className='bg-indigo-100 relative w-3/4 h-96'> 
			<div className='h-full'>
				<Canvas camera = {{
					position: [0,5,18],
					fov:45,
					}}>
					<color attach="background" args={["#ececec"]}/>
					<OrbitControls/> 
					<ambientLight intensity={0.5} />
					<directionalLight position={[0, 0, 5]} intensity={1} />
					<Boat scale={0.01}/>
					<gridHelper />
					<axesHelper args={[5]}/>
				</Canvas>
			</div>
        </div>
	</div>
  )
}

export default Simulator;