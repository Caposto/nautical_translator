/* eslint-disable react/no-unknown-property */
/* eslint no-use-before-define: 0 */  // --> OFF

import Simulator from './components/Simulator';
import Navbar from './components/Navbar';
import TranslateWrapper  from './components/TranslateWrapper';

function App() {

  return (
    <div className='bg-blue-1 w-full h-full overflow-hidden'> 
      <Navbar />
      <Simulator />
      <TranslateWrapper />
    </div>
  )
}

export default App