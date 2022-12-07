
import './App.css'
import Button from './Components/Buttons'
import Input from './Components/Input/Index'
import {city} from './data'
import { FiSearch, FiMapPin } from "react-icons/fi";
import TemperatureAndDetail from './Components/TemperatureAndDetail';
import TimeAndLocation from './Components/TimeAndLocation';
import Forcast from './Components/Forcast';
import { getFormatedWeatherData, getWeatherData } from './services/weatherService';
import {DateTime} from 'luxon'
import { useEffect, useState } from 'react';

let date = DateTime.now().setZone("America/New_York").minus({ weeks: 1 }).endOf("day").toISO();



function App() {

const [query, setquery] = useState({q:'Nigeria'})
const [units, setUnits] = useState('metric');
const [weather, setWeather] = useState(null)

 console.log(query)
 
  useEffect(() => {
    async function fetchWeatherData (){
      const data = await getFormatedWeatherData({...query, units})
      console.log(data, 'data')
        setWeather(data)
    } 
    fetchWeatherData()
  }, [query, units])
  console.log(weather)

  return (
    <div className="App-container">
      <div className='button-wrapper'>
        {city.map((data)=> <Button onclick={()=>setquery({q:data.title})} key={data.id} title={data.title}/>)}
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
    {
      weather && (
        <div>
      <TimeAndLocation weather={weather}/>
      <TemperatureAndDetail weather={weather}/>
      <Forcast title='hourly forcast' />
      <Forcast title='Daily Forcast'/>
        </div>
      )
    }
      {date}
    </div>
  )
}

export default App
