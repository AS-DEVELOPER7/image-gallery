import React from 'react'
import { useStateContext } from '../context/StateContext'
const Button = ({name,types}) => {
    const {type,setType,setPage}=useStateContext()
  return (
    <button className={`${type===types?'border-b-[3px] text-slate-900 border-black':''} font-semibold text-slate-500 mt-6 tracking-widest`} onClick={()=>{
      setType(types)
      setPage(1)
    }}>{name}</button>
  )
}

export default Button
