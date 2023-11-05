import Simulator from './components/Simulator';
import Navbar from './components/Navbar';
import Translater from './components/Translater';

function App() {
  return (
    <div className='bg-blue-1 w-full h-full overflow-hidden'> 
      <Navbar />
      <Simulator />
      <Translater />
    </div>
  )
}

export default App