import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Boat from './Boat';
import Ocean from './Ocean';

function Simulator() {

  return (
	<div className="w-full h-[500px] my-4 flex items-center justify-center">
		<div className="flex flex-col h-full justify-around">
			<button className='flex flex-grow justify-center items-center px-4 py-3 bg-blue-100 m-3 rounded-lg border-2 border-blue-800 text-lg font-bold'>Words</button>
			<button className='flex flex-grow justify-center items-center px-4 py-3 bg-blue-100 m-3 rounded-lg border-2 border-blue-800 text-lg font-bold'>Words</button>
			<button className='flex flex-grow justify-center items-center px-4 py-3 bg-blue-100 m-3 rounded-lg border-2 border-blue-800 text-lg font-bold'>Words</button>
			<button className='flex flex-grow justify-center items-center px-4 py-3 bg-blue-100 m-3 rounded-lg border-2 border-blue-800 text-lg font-bold'>Words</button>
			<button className='flex flex-grow justify-center items-center px-4 py-3 bg-blue-100 m-3 rounded-lg border-2 border-blue-800 text-lg font-bold'>Words</button>
			<button className='flex flex-grow justify-center items-center px-4 py-3 bg-blue-100 m-3 rounded-lg border-2 border-blue-800 text-lg font-bold'>Words</button>
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
			<button className='flex flex-grow justify-center items-center px-4 py-3 bg-blue-100 m-3 rounded-lg border-2 border-blue-800 text-lg font-bold'>Words</button>
			<button className='flex flex-grow justify-center items-center px-4 py-3 bg-blue-100 m-3 rounded-lg border-2 border-blue-800 text-lg font-bold'>Words</button>
		</div>
    </div>
  )
}

export default Simulator;
