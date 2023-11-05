import PropTypes from 'prop-types';

function TermCard({ title, options, updateDefinition }) {
	return (
		<div className="w-48 bg-cyan-100 flex flex-col justify-center items-center p-3 m-3 rounded-xl border-2">
			<h4 className="text-xl w-full py-1">{title}</h4>
			<select name="NauticalTerms" className="text-md bg-white w-full p-2 rounded-sm" onChange={updateDefinition}>
			{options.map((option) => 
				<option key={option.id} value={option.name}>{option.name}</option>
      )}
			</select>
		</div>
	)
}

TermCard.propTypes = {
	title: PropTypes.string.isRequired,
	options: PropTypes.array,
	updateDefinition: PropTypes.func,
}

export default TermCard;