import scuba_fish_swimming4 from '../assets/scuba_fish_swimming4.gif';

function Navbar() {
  return (
    <div className='bg-gradient-to-b from-sky-600 to-white w-screen h-24 flex flex-row items-center justify-between '>
		<div className="pl-10">
			<h1 className="text-3xl font-extrabold">Jib Jargon</h1>
			<p className="text-sm font-normal">Shawn, Christian, Rumi</p>
		</div> 
		<div className="pr-10">
            <img src={scuba_fish_swimming4} alt="" width={80} height={80} className='bg-cyan-100 rounded-full border-md'/>
		</div>
    </div>
  )
}

export default Navbar;