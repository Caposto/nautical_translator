import TermCard from "./TermCard";
import Arrow from "../assets/Arrow.svg";
import { useState } from "react";

function Translater() {
	const defaultSelectOptions = {
		Bow: "The front part of a boat.",
		Stern: "The rear part of a boat.",
		Port: "The left side of a boat when facing forward.",
		Starboard: "The right side of a boat when facing forward.",
		Mast: "A vertical pole that supports sails.",
	}

	const handleChange = (event) => {
		setCurrentSelection(event.target.value);
	}

	const [currentSelection, setCurrentSelection] = useState(Object.keys(defaultSelectOptions)[0]);

	return (
		<div className="w-full flex justify-center items-center p-4">
			<TermCard title="Nautical Term" updateDefinition={handleChange} options={Object.keys(defaultSelectOptions)} term/>
			<img src={Arrow} alt="Arrow" />
			<TermCard title="Translation" definition={defaultSelectOptions[currentSelection]} />
		</div>
	)
}

export default Translater;