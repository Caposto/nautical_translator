function TermCard() {
	return (
		<div className="w-32 h-32 bg-cyan-100 flex flex-col justify-center items-center">
			<h4 className="tex-2xl">Nautical Term</h4>
			<select name="NauticalTerms" className="text-md p-2 bg-white">
				<option value="bow">Bow</option>
				<option value="stern">Stern</option>
			</select>
		</div>
	)
}

export default TermCard;