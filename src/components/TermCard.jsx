import PropTypes from 'prop-types';

function TermCard({ title, options, term = false, updateDefinition, definition }) {
	return (
		<div className="w-48 bg-cyan-100 flex flex-col justify-center items-center p-3 m-3 rounded-xl border-2">
			<h4 className="text-xl w-full py-1">{title}</h4>
			{(term && options) ? 
				<select name="NauticalTerms" className="text-md bg-white w-full p-2 rounded-sm" onChange={updateDefinition}>
				{options.map((key) => 
					<option key={key.toLowerCase()} value={key}>{key}</option>
				)}
				</select>
				:
				<p className="text-md bg-white w-full p-2 rounded-sm">{definition}</p>	
			}
						
		</div>
	)
}

TermCard.propTypes = {
	title: PropTypes.string.isRequired,
	options: PropTypes.array,
	term: PropTypes.bool,
	definition: PropTypes.string,
	updateDefinition: PropTypes.func,
}

export default TermCard;