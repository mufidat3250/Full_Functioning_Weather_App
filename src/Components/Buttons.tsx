import React from 'react'

const Button = ({title}:{title:string}) => {
  return (
        <button className='text-white text-lg font-medium border-none outline-none'>{title}</button>
  )
}

export default Button
