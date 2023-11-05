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
				<p className="text-sm font-normal">Created by
					<span> <a href="https://shawnaviles.com" className='text-gray-100 underline' rel="noreferrer" target='_blank'>Shawn</a>, </span>
					<span><a href="https://github.com/Caposto" className='text-gray-100 underline' rel="noreferrer" target='_blank'>Christian</a>, </span>
					<span><a href="https://rumilog.github.io/site/" className='text-gray-100 underline' rel="noreferrer" target='_blank'>Rumi</a>, </span>
					<span><a href="https://github.com/j-ferber" className='text-gray-100 underline' rel="noreferrer" target='_blank'>Justin</a></span> 
				</p>
			</div> 
			<div className="pr-10 flex flex-row"> 
				<DialogButton buttonText={fish} modalTitle='Greetings! 👋' />		
			</div>
    </div>
  )
}

export default Navbar;