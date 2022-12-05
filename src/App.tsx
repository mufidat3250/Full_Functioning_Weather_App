
import './App.css'
import Button from './Components/Buttons'
import Input from './Components/Input/Index'
import {city} from './data'
import { FiSearch, FiMapPin } from "react-icons/fi";
import TemperatureAndDetail from './Components/TemperatureAndDetail';
import TimeAndLocation from './Components/TimeAndLocation';
import Forcast from './Components/Forcast';



function App() {

  return (
    <div className="App-container">
      <div className='button-wrapper'>
        {city.map((data)=> <Button key={data.id} title={data.title}/>)}
      </div>
      <div className='py-5 flex items-center  justify-between'>
        <div className='flex items-center gap-4 '>
          <Input/>
          <FiSearch className='cursor-pointer text-[25px] transition ease-out hover:scale-125'/>
          <FiMapPin className='cursor-pointer text-[25px] transition ease-out hover:scale-125' width='100'/>
        </div>
          <div className='flex'>
            <button
            name='metric'
            className='text-xl text-white font-light'
            >°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button name='imperal' className='text-xl text-white font-light'>°F</button>
          </div>
      </div>
      <TimeAndLocation/>
      <TemperatureAndDetail/>
      <Forcast title='hourly forcast'/>
      <Forcast title='Daily Forcast'/>

    </div>
  )
}

export default App
