const Input = ({value ,onchange}:{value:string,onchange:(e:any)=>void}) => {
  return (
    <div className=''>
        <input type="text" className='py-2 w-full px-2 shadow-xl focus:outline-none text-black text-xl capitalize' onChange={onchange} value={value} placeholder='Search ...'/>
    </div>
  )
}

export default Input