import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { OrbitControls, Sky } from '@react-three/drei';
import Boat from './Boat';
import Ocean from './Ocean';
import { Button } from "@material-tailwind/react";
import Sides from './Sides';
import wheel from '../assets/wheel.png';

function Simulator() {
	const [activePart, setActivePart] = useState(null);
	const [portVisibility, setPortVisibility] = useState(false);
	const [startboardVisibility, setStartboardVisibility] = useState(false);
	const [sternVisibility, setSternVisibility] = useState(false);

	// Since sets are mutable have to add additional add/remove functions to update state
	const editPart = part => {
		if (activePart === part) {
			setActivePart(null);
			return;
		}
		// turn off if the same part is clicked twice
		setActivePart(part);
	}

	const setPortVisibilityFunc = () => {
		setPortVisibility(!portVisibility);
	}

	const setSternVisibilityFunc = () => {
		setSternVisibility(!sternVisibility);
	}

	const setStartboardVisibilityFunc = () => {
		setStartboardVisibility(!startboardVisibility);
	}

	const buttonText = text =>(
		<span className="flex flex-col justify-center items-center">
			<span className="font-sans">{text}</span>
			<img src={wheel} alt="wheel" className="w-8 h-8"/>
		</span>
	)

  return (
		<div className="w-full h-[500px] my-4 flex items-center justify-center">
			<div className="flex flex-col h-full justify-around w-48">
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
					position: [0, 16, 30],
					fov: 45,
				}}>
					<color attach="background" args={["#ececec"]}/>
					<OrbitControls minDistance={5} maxDistance={40} maxPolarAngle={Math.PI / 2 - 0.2} /> 
					<ambientLight intensity={1} />
					<directionalLight position={[0, 0, 5]} intensity={2} />
					<Boat scale={0.01} scenePosition={[0, 0.5, 3]} activePart={activePart}/>
					<Sides center={[0, 0.5, 3]} portVisibility={portVisibility} sternVisibility={sternVisibility} startboardVisibility={startboardVisibility}/>
					<Ocean />
					<Sky scale = {1000} sunPosition = {[500,150,-1000]} turbidity={0.1} />
				</Canvas>
				</div>
			</div>
			<div className="flex flex-col h-full w-48">
				<Button className='bg-white text-blue-600 flex-grow m-3 text-lg border-2 border-blue-600' onClick={setStartboardVisibilityFunc}>{buttonText('Starboard')}</Button>
				<Button className='bg-white text-blue-600 flex-grow m-3 text-lg border-2 border-blue-600' onClick={setSternVisibilityFunc}>{buttonText('Stern')}</Button>
				<Button className='bg-white text-blue-600 flex-grow m-3 text-lg border-2 border-blue-600' onClick={setPortVisibilityFunc}>{buttonText('Port')}</Button>
			</div>
		</div>
  )
}

export default Simulator;
