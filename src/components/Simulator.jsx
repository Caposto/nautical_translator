/* eslint-disable react/no-unknown-property */
/* eslint no-use-before-define: 0 */  // --> OFF

import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

function Simulator() {
  return (
	<div className="w-full h-[500px] flex items-center justify-center">
		<div className='bg-indigo-100 relative w-3/4 h-96'> 
			<div className='h-full'>
				<Canvas camera = {{
				position: [0,0,7],
				fov:30,
				}}>
				<color attach="background" args={["#ececec"]}/>
				<OrbitControls/> 
				<mesh rotation ={[Math.PI / 10,10,10]}>
					<torusGeometry /> 
					<meshNormalMaterial/>
				</mesh>
				</Canvas>
			</div>
        </div>
	</div>
  )
}

export default Simulator;