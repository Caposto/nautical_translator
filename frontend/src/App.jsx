import Simulator from './components/Simulator';
import Navbar from './components/Navbar';
import Translater from './components/Translater';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full h-full overflow-hidden bg-gradient-to-b from-blue-500 to-white'> 
      <Navbar />
      <Simulator />
      <Translater />
      <Footer />
    </div>
  )
}

export default App