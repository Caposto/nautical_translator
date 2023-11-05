import TermCard from "./TermCard";
import TranslationCard from "./TranslationCard";
import Arrow from "../assets/Arrow.svg";
import { useEffect, useState } from "react";

function Translater() {
  
	let defaultSelectOptions = [
    {
      id: '1',
      name: 'Hull',
      definition: "The main body of a ship or boat."
		},
    {
      id: '2',
      name: "Keel",
      definition: "The bottom part of the hull that helps provide stability."
    }
  ]

  const [partObjects, setPartObjects] = useState([...defaultSelectOptions]);
  const [selected, setSelected] = useState(defaultSelectOptions[0])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3500/request')
      if (!response.ok) {
        console.log('Problem with fetch.')
      }
      const jsonResponse = await response.json();
      setPartObjects([...partObjects, ...jsonResponse])
    }

    fetchData()
  }, [])

	const handleChange = (event) => {
    const currentOption = partObjects.filter(option => option.name === event.target.value)
		setSelected(currentOption[0]);
	}

	return (
		<div className="w-full flex justify-center items-center p-4">
			<TermCard title="Nautical Term" updateDefinition={handleChange} options={partObjects} />
			<img src={Arrow} alt="Arrow" />
			<TranslationCard title="Translation" definition={selected}/>
		</div>
	)
}

export default Translater;