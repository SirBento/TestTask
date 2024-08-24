import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center">
         <img src alt="Hugly" className="w-[48px] h-[48px]" />

    <Link to="/signup" className="text-white"> Sign In</Link>
    <Link to="/signup" className="text-white"> Sign Up </Link>
    </div>
  )
}

export default Navbar