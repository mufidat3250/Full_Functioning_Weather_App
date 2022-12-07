
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let date = DateTime.now().setZone("America/New_York").minus({ weeks: 1 }).endOf("day").toISO();



function App() {

const [query, setquery] = useState({q:'Nigeria'})
const [units, setUnits] = useState('metric');
const [weather, setWeather] = useState<any>(null)
const [value, setValue] = useState('')
console.log(value)

 console.log(query)
 console.log(weather, 'weather')

  useEffect(() => {
    async function fetchWeatherData (){ 
      const message = query.q ? query.q : 'current location.'
      toast.info('fetching weather for '+ message)    
     await getFormatedWeatherData({...query, units})    
      .then((data:object)=> {
        // @ts-ignore
        toast.success (`successfully fetched weather for ${data.name}`)
        setWeather(data)
      })        
    } 
    fetchWeatherData()
  }, [query, units]) 

  const handleClick =()=>{
    if(value !== '') setquery({q:value})
    setValue('')
  }

  const handleLocationOnClick =()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        // @ts-ignore
        setquery({lat, lon})
      })
    }
  }

const handleUnitChange = (e:any)=>{
  let selectedInit = e.currentTarget.name
  if(units !== selectedInit) setUnits(selectedInit)
}

const formatBackground = ()=>{
  if(!weather) return 'from-cyan-700 to-blue-700';
  const threshold = units === 'metrics' ? 20 : 60;
  if(weather.temp <=threshold) return 'from-cyan-700 to-blue-700';

  return 'from-yellow-700 to-orange-700'

}

  return (
    <div className={`App-container ${formatBackground()}`}>
      <div className='button-wrapper'>
        {city.map((data)=> <Button onclick={()=>setquery({q:data.title})} key={data.id} title={data.title}/>)}
      </div>
      <div className='py-5 flex items-center  justify-between'>
        <div className='flex items-center gap-4 '>
          <Input value={value} onchange={(e:any)=> setValue(e.target.value.toLowerCase())}/>
          <FiSearch className='cursor-pointer text-[25px] transition ease-out hover:scale-125' onClick={handleClick}/>
          <FiMapPin className='cursor-pointer text-[25px] transition ease-out hover:scale-125' width='100' onClick={handleLocationOnClick}/>
        </div>
          <div className='flex'>
            <button
            name='metric'
            className='text-xl text-white font-light hover:scale-125 transision ease-out'
            onClick={handleUnitChange}
            >°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button name='imperal' className='text-xl text-white font-light hover:scale-125 trasition ease-out' onClick={handleUnitChange}>°F</button>
          </div>
      </div>
    {
      weather && (
        <div>
      <TimeAndLocation weather={weather}/>
      <TemperatureAndDetail weather={weather}/>      
      <Forcast name='hourly forcast' weather={weather.hourly} />
      <Forcast name='Daily Forcast' weather = {weather.daily}/>
        </div>
      )
    }

<ToastContainer autoClose={5000} theme='colored' newestOnTop={true}/>
    </div>
  )
}
export default App
