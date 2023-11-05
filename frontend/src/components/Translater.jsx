import TermCard from "./TermCard";
import TranslationCard from "./TranslationCard";
import Arrow from "../assets/Arrow.svg";
import { useEffect, useState } from "react";

function Translater() {
  
	let defaultSelectOptions = [
    {
      id: '1',
      name: 'Hull',
      definition: "The main body of a ship or boat.",
      phonetic: "həl"
		},
    {
      id: '2',
      name: "Keel",
      definition: "The bottom part of the hull that helps provide stability.",
      phonetic: "kēl"
    }
  ]

  const [partObjects, setPartObjects] = useState([...defaultSelectOptions]);
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://nautical-translator-server.onrender.com/request')
      if (!response.ok) {
        console.log('Problem with fetch.')
      }
      const jsonResponse = await response.json();
      setPartObjects([...partObjects, ...jsonResponse])
    }

    fetchData()
  }, [partObjects])

	const handleChange = (event) => {
    const currentOption = partObjects.filter(option => option.name === event)
		setSelected(currentOption[0]);
	}

	return (
		<div className="w-full flex justify-center items-center p-4">
			<TermCard title="Nautical Term" updateDefinition={handleChange} options={partObjects} selected={selected} />
			<img src={Arrow} alt="Arrow" />
			<TranslationCard title="Translation" definition={selected}/>
		</div>
	)
}

export default Translater;