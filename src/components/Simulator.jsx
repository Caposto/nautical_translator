import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Boat from './Boat';
import Ocean from './Ocean';
import { Button } from "@material-tailwind/react";

function Simulator() {

  return (
	<div className="w-full h-[500px] my-4 flex items-center justify-center">
		<div className="flex flex-col h-full justify-around">
			<Button className='bg-blue-600 text-white flex-grow m-3 text-lg'>Words</Button>
			<Button className='bg-blue-600 text-white flex-grow m-3 text-lg'>Words</Button>
			<Button className='bg-blue-600 text-white flex-grow m-3 text-lg'>Words</Button>
			<Button className='bg-blue-600 text-white flex-grow m-3 text-lg'>Words</Button>
			<Button className='bg-blue-600 text-white flex-grow m-3 text-lg'>Words</Button>
			<Button className='bg-blue-600 text-white flex-grow m-3 text-lg'>Words</Button>
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
				<Boat scale={0.01} scenePosition={[0, 0.5, 3]}/>
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
