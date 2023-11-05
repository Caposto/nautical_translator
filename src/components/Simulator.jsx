import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import Boat from './Boat';
import Ocean from './Ocean';
import { Button } from "@material-tailwind/react";

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
	<div className="w-full h-[500px] my-4 flex items-center justify-center">
		<div className="flex flex-col h-full justify-around">
			<Button className='bg-blue-600 text-white flex-grow m-3 text-lg' onClick={() => editPart("hull")}>Hull</Button>
			<Button className='bg-blue-600 text-white flex-grow m-3 text-lg' onClick={() => editPart("keel")}>Keel</Button>
			<Button className='bg-blue-600 text-white flex-grow m-3 text-lg' onClick={() => editPart("rudder")}>Rudder</Button>
			<Button className='bg-blue-600 text-white flex-grow m-3 text-lg' onClick={() => editPart("mast")}>Mast</Button>
			<Button className='bg-blue-600 text-white flex-grow m-3 text-lg' onClick={() => editPart("sail")}>Sail</Button>
			<Button className='bg-blue-600 text-white flex-grow m-3 text-lg' onClick={() => editPart("boom")}>Boom</Button>
		</div>
		<div className='relative w-[675px] h-[500px] drop-shadow-2xl'> 
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
		<div className="flex flex-col h-full">
			<Button className='bg-white text-blue-600 flex-grow m-3 text-lg border-2 border-blue-600'>Words</Button>
			<Button className='bg-white text-blue-600 flex-grow m-3 text-lg border-2 border-blue-600'>Words</Button>
		</div>
    </div>
  )
}

export default Simulator;
