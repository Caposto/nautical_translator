import logoVertical from "./../assets/LogoVert.png";

function Footer(){
	return (
		<footer className="bg-white dark:bg-gray-900 font-sans">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between md:items-center">
					<div className="mb-6 md:mb-0">
						<a href="" className="flex items-center">
							<img src={logoVertical} className="h-32 mr-3" alt="Nauti phrases" />
						</a>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6">
						<div>
							<h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white font-sans">Links</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-3">
									<a href="https://github.com/Caposto/nautical_translator" className="hover:underline font-sans">Github</a>
									</li>
								<li>
									<a href="https://hacknjit-2023.devpost.com/" className="hover:underline font-sans">Devpost</a>
									</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;