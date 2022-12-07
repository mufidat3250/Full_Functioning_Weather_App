import React from 'react'

const Forcast = ({name, weather}:{name:string, weather:Array<{title:string, icon:string, temp:number}>}) => {
  const heading =  weather.map((data)=> data)
  console.log(heading)
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white font-medium uppercase'>
               {name}
            </p>
        </div>
        <hr  className='my-2'/>
        <div className=' flex flex-row items-center justify-between text-white '>
         
      {
        weather.map(({title, icon, temp}, index)=> {
          console.log(typeof temp)
          return <div key={index} className='flex flex-col  items-center justify-center'>            
          <p className='font-light text-sm'>{title}</p>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className='w-12 my-1'  />
          <p className='text-white'>{temp ? temp.toFixed() : 30}°</p>  
        </div>
        })
      }
  

  </div>
    </div>
  )
}

export default Forcast

  
   
