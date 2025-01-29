import React from 'react'

import Logo from '../Reel.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-3'>
        <img src={Logo} className='w-[50px] border-black border-2 rounded-full'/>
        <Link to="/" className='text-yellow-500 font-bold'>Home</Link>
        <Link to="/watchlist" className='text-yellow-500 font-bold'> WatchList</Link>

    </div>


  )
}

export default Navbar
 