import { Zone } from 'luxon'
import React from 'react'
import { formatTolocalTime, iconUrlFromCode } from '../../services/weatherService'

const TemperatureAndDetail = ({weather:{temp, icon, feels_like, humidity,  sunrise, sunset, timezone, temp_max, temp_min, speed}}:{weather:{temp:number, icon:string, feels_like:number, humidity:number, wind:number, sunrise:number, sunset:number, timezone:string, temp_max:number, temp_min:number, speed:number}}) => {
    console.log(icon)
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Cloudy</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src={iconUrlFromCode(icon)} alt="" className='w-20' />
            <p className='text-5xl'>{temp.toFixed()}°</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    Real fell:
                    <span className='font-medium ml-1'>{feels_like.toFixed()}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    Humidity:
                    <span className='font-medium ml-1'>{humidity.toFixed()}%</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    Wind:
                    <span className='font-medium ml-1'>{speed.toFixed()}km/h</span>
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <p>
                Rise: <span className='font-medium ml-1'>{formatTolocalTime(sunrise, timezone, 'hh:mm a')}</span>
            </p>
            <p className='font-light'>~</p>
            <p>
                Set: <span className='font-medium ml-1'>{formatTolocalTime(sunset, timezone, 'hh:mm a')}</span>
            </p>
            <p className='font-light'>~</p>
            <p>
                High: <span className='font-medium ml-1'>{temp_max.toFixed()}*</span>
            </p>
            <p className='font-light'>~</p>
            <p>
                 Low: <span className='font-medium ml-1'>{temp_min.toFixed()}*</span>
            </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetail