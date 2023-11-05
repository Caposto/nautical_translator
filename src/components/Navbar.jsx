import { useState } from 'react';
import scuba_fish_swimming4 from '../assets/scuba_fish_swimming4.gif';

function Navbar() {
	const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className='bg-gradient-to-b from-sky-600 to-white w-screen h-24 flex flex-row items-center justify-between '>
		<div className="pl-10">
			<h1 className="text-3xl font-extrabold">Jib Jargon</h1>
			<p className="text-sm font-normal">Shawn, Christian, Rumi</p>
		</div> 
		<div className="pr-10 flex flex-row"> 
			{showInstructions && 
				<div alt="message-bubble" className='flex items-center'>
					<div class="flex items-center justify-end">
						<div class="bg-blue-200 p-2 rounded-lg text-sm w-64">
							Learn all about Nautical Terms via the defintions and visualzation below!
						</div>
						<div class="w-3 overflow-hidden ">
							<div class="h-4 bg-blue-200 rotate-45 transform origin-top-left rounded-sm"></div>
						</div>
					</div>
				</div>
			}
			<img 
				src={scuba_fish_swimming4} 
				className='w-[80px] h-[80px] bg-cyan-100 rounded-full border cursor-pointer hover:scale-x transform transition duration-y'
				alt="" 
				width={80} 
				height={80}
				onClick={() => setShowInstructions(!showInstructions)} 
			/>
			</div>
    </div>
  )
}

export default Navbar;