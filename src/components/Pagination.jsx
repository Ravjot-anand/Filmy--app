import React from 'react'

const Pagination = ({Pnumber,handlePREV,handleFORW}) => {
  return (
    <div className='bg-black flex justify-center p-2 rounded my-7'>
        <div className='text-yellow-500 hover:cursor-pointer' onClick={handlePREV}><i class="fa-solid fa-arrow-left"></i></div>
        <div className='pr-4 pl-4 text-yellow-600'>{Pnumber}</div>
        <div className='text-yellow-500 hover:cursor-pointer' onClick={handleFORW}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination