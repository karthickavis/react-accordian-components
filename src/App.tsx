
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/Accordian'
import { accordianData } from './data/accordianData'


function App() {
 

  return (
   <div className='min-h-screen bg-blue-50 p-6'>
    <h1 className='text-3xl font-bold text-center mb-6 text-blue-900'>FAQ Accordian</h1>
    <Accordian items={accordianData}/>
   </div>
  )
}

export default App
