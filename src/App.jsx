import Simulator from './components/Simulator';
import Navbar from './components/Navbar';
import Translater from './components/Translater';
import { BoatContext } from './utils/BoatContext';
import Boat from './components/Boat';

function App() {
  // Boat Context Wraps the Simulation & Translater (user input)
  // Changes in the Translater update the Boat Context
    // i.e user selects "hull", the camera should lookAt the hull and change hull's mesh material to highlight it
    // Only select user inputs are acted on in the Boat Context - see Boat.jsx for the 6 parts
  return (
    <div className='w-full h-full overflow-hidden'> 
      <Navbar />
      <BoatContext.Provider value={Boat}>
        <Simulator />
        <Translater />
      </BoatContext.Provider>
    </div>
  )
}

export default App