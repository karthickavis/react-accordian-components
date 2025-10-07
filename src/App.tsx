
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/Accordian'
import { accordianData } from './data/accordianData'
import CheckBox from './checkbox/CheckBox'


function App() {
 

  return (
   <div className='min-h-screen bg-gray-50 flex justify-center items-center'>
    {/* <h1 className='text-3xl font-bold text-center mb-6 text-blue-900'>FAQ Accordian</h1> */}
    {/* <Accordian items={accordianData}/> */}
    <CheckBox/>

   </div>
  )
}

export default App
