import Simulator from './components/Simulator';
import Navbar from './components/Navbar';
import Translater from './components/Translater';

function App() {
  return (
    <div className='w-full h-full overflow-hidden'> 
      <Navbar />
      <Simulator />
      <Translater />
    </div>
  )
}

export default App