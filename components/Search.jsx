import React from 'react'
import { useStateContext } from '../context/StateContext'

const Search = () => {
  const {typeRef,search}=useStateContext()
  return (
    <div>
        <div className='flex justify-center items-center lg:w-[80%] space-x-5 mx-auto lg:ml-[10em]'>
            <input ref={typeRef} type="text"placeholder='Your Type....' name="search" className='outline-none border-b-[1px] border-b-slate-400 p-2 text-slate-500 w-[60%] lg:w-[50%]'/>
            <button className='bg-black text-white rounded-lg px-5 py-2  lg:w-[15%] font-bold text-md lg:text-lg shadow-md 'onClick={search}>Search</button>
        </div>
    </div>
  )
}

export default Search