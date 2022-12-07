import React, { ReactNode } from 'react'

const Button = ({title, onclick}:{title:string, onclick:()=>void}) => {
  return (
        <button className='text-white text-lg font-medium border-none outline-none' onClick={onclick}>{title}</button>
  )
}

export default Button
