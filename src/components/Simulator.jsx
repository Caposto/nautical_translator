import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import Boat from './Boat';
import Ocean from './Ocean';

function Simulator() {
	const [activeParts, setActiveParts] = useState(new Set()); // Hashmap of part names

	// Since sets are mutable have to add additional add/remove functions to update state
	const editPart = part => {
		// Remove Part if it already exists
		if (activeParts.has(part)) {
			setActiveParts(prev => new Set([...prev].filter(x => x !== part)))
		}
		else {
			setActiveParts(previousState => new Set([...previousState, part]))
		}
	}

  return (
	<div className="w-full h-[525px] flex items-center justify-center">
		<div className='relative w-5/6 h-[500px] drop-shadow-2xl'> 
			<div className='h-full'>
			<Canvas camera={{
				position: [0, 10, 18],
				fov: 45,
			}}>
				<color attach="background" args={["#ececec"]}/>
				<OrbitControls minDistance={5} maxDistance={30} maxPolarAngle={Math.PI / 2 - 0.1} /> 
				<ambientLight intensity={1} />
				<directionalLight position={[0, 0, 5]} intensity={2} />
				<Boat scale={0.01} scenePosition={[0, 0.5, 3]} activeParts={activeParts}/>
				<Ocean />
			</Canvas>
			</div>
		</div>
    </div>
  )
}

export default Simulator;

