function Navbar() {
  return (
    <div className='bg-cyan-300 w-screen h-32 flex flex-row items-center justify-between '>
		<div className="pl-10">
			<h1 className="text-3xl font-bold">Jib Jargon</h1>
			<p className="text-sm font-normal">Shawn, Christian, Rumi</p>
		</div> 
		<div className="pr-10">
      <img src="https://picsum.photos/200/100" alt="" />
		</div>
    </div>
  )
}

export default Navbar;