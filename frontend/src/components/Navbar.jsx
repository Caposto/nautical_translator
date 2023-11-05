// import { useState } from 'react';
import Logo from '../assets/Logo.png';
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

  return (
    <div className='bg-transparent w-screen h-24 flex flex-row items-center justify-between my-3'>
			<div className="pl-10">
				<a href="./" class="flex items-center">
					<img src={Logo} class="w-72 mr-3" alt="Nauti phrases" />
				</a>	
				<p className="text-sm font-normal">Shawn, Christian, Rumi, Justin</p>
			</div> 
			<div className="pr-10 flex flex-row"> 
				<DialogButton buttonText={fish} modalTitle='Greetings! 👋' />		
			</div>
    </div>
  )
}

export default Navbar;