import React from 'react'
import { formatTolocalTime } from '../../services/weatherService'


const TimeAndLocation = ({weather:{name, country, dt, timezone}}:{weather:{name:string, country:string, dt:number, timezone:string}}) => {
  
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            {/* <p>{formatTolocalTime(dt, timezone)}</p> */}
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>{name}, {country}</p>
        </div>
      
    </div>
  )
}

export default TimeAndLocation