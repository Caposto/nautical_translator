// import { useState } from 'react';
import DialogButton from './DialogButton';
import scuba_fish_swimming4 from '../assets/scuba_fish_swimming4.gif';

function Navbar() {
	// const [showInstructions, setShowInstructions] = useState(false);
	const fish = (
		<img 
			src={scuba_fish_swimming4} 
			className='w-[80px] h-[80px] bg-cyan-100 rounded-full border cursor-pointer hover:scale-x transform transition duration-y'
			alt="" 
			width={80} 
			height={80}
		/>
	);
	const content = 'Welcome to Nauti(cal) Phrases! In order to navigate around the site try clicking any of the buttons on the side of the 3D viewer, each of these buttons will show you a different part of the boat. You’re also able to move around the 3D viewer with your right click, scroll wheel and left click. If you want to see the normal english translation of the words select them in the list translation below. Happy Learning! ⛵';

  return (
    <div className='bg-transparent w-screen h-24 flex flex-row items-center justify-between '>
		<div className="pl-10">
			<h1 className="text-4xl font-extrabold">Nauti(cal) Phrases</h1>
			<p className="text-sm font-normal">Shawn, Christian, Rumi, Justin</p>
		</div> 
		<div className="pr-10 flex flex-row"> 
			{false && 
				<div alt="message-bubble" className='flex items-center'>
					<div class="flex items-center justify-end">
						<div class="bg-blue-200 p-2 rounded-lg text-md w-64">
							Learn all about Nautical Terms via the defintions and visualzation below!
						</div>
						<div class="w-3 overflow-hidden ">
							<div class="h-4 bg-blue-200 rotate-45 transform origin-top-left rounded-sm"></div>
						</div>
					</div>
				</div>
			}
			<DialogButton buttonText={fish} content={content} modalTitle='Greetings! 👋' />		
			</div>
    </div>
  )
}

export default Navbar;