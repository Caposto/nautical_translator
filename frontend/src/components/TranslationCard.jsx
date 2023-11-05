import PropTypes from 'prop-types';
import { Card, CardBody, Typography } from '@material-tailwind/react';

function TranslationCard({ title, definition }) {
	return (
		// <div className="w-64 bg-cyan-100 flex flex-col justify-center items-center p-3 m-3 rounded-xl border-2">
		// 	<h4 className="text-xl w-full py-1">{title}</h4>
		// 	<p className="text-md bg-white w-full p-2 rounded-sm">{definition.definition}</p>	
		// </div>
    <Card className='w-96 ml-3 border-2 border-blue-600'>
      <CardBody>
        <Typography variant='h4' className='font-courgette'>
          {title}:
        </Typography>
        <Typography className='font-courgette'>
          {definition ? 
            definition.definition :
            <span className='text-gray-500'>Select a nautical term.</span>
          }
        </Typography>
      </CardBody>
    </Card>
	)
}

TranslationCard.propTypes = {
	title: PropTypes.string.isRequired,
	definition: PropTypes.object,
}

export default TranslationCard;