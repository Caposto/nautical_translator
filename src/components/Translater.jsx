import TermCard from "./TermCard";

function Translater() {
	return (
		<div className="w-full flex justify-center items-center p-4">
			<TermCard title="Nautical Term"/>
			&gt;
			<TermCard title="Translated Term"/>
		</div>
	)
}

export default Translater;