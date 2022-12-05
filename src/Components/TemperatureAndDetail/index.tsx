import React from 'react'

const TemperatureAndDetail = () => {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Cloudy</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-20' />
            <p className='text-5xl'>34</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    Real fell:
                    <span className='font-medium ml-1'>32*</span>
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <p>
                Rise: <span className='font-medium ml-1'>06:45 AM</span>
            </p>
            <p className='font-light'>~</p>
            <p>
                Set: <span className='font-medium ml-1'>06:45 AM</span>
            </p>
            <p className='font-light'>~</p>
            <p>
                High: <span className='font-medium ml-1'>70*</span>
            </p>
            <p className='font-light'>~</p>
            <p>
                Low: <span className='font-medium ml-1'>40*</span>
            </p>
            <p className='font-light'>~</p>
        </div>
    </div>
  )
}

export default TemperatureAndDetail