import React from 'react'
import Button from './Button'
const QuickSearch = () => {
    
  return (
    <div className='flex mx-auto justify-start lg:justify-center items-center lg:space-x-12 space-x-6  overflow-x-scroll w-[90%] no-scrollbar'>
        <Button types={''} name={'All'}/>
        <Button types={'anime'} name={'Anime'}/>
        <Button types={'technology'} name={'Technology'}/>
        <Button types={'mountains'} name={'Mountains'}/>
        <Button types={'landscape'} name={'LandScape'}/>
        <Button types={'photography'} name={'Photography'}/>
        <Button types={'wildlife'} name={'Wildlife'}/>
        <Button types={'marine'} name={'Marine'}/>
    </div>
  )
}

export default QuickSearch