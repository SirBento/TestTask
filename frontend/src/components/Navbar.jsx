import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles';
import {AiOutlineRight} from "react-icons/ai"
import {FaUser} from "react-icons/fa"


function Navbar() {
  return (
    <div className={`${style.navbar}`}>
        <div className='flex items-center'>
        <img src alt="Hugly" className="w-[48px] h-[48px]" />
        <span>Hughly.dev</span>
        </div>
       

         <div className=''>
         <Link to="/signin" 
          variant="gradient"
          size="sm"
          className="text-textBlueSecond lg:inline-block  bg-primary  border border-textBlue rounded-xl py-4 px-7 hover:bg-textBlue hover:text-white  font-poppins ]">

          <div className="flex items-center text-[14px]">
          <span className="mr-2">Log In</span>
            <FaUser size={24}/>
            
          </div>
          </Link>



         <Link 
         to="/signup" 
         variant="gradient"
         size="sm"
         className="text-white lg:inline-block  bg-textBlue  border border-textBlue rounded-xl py-4 px-7 hover:bg-textBlueSecond hover:text-black  font-poppins  ml-3"> 
            <div className="flex items-center font-poppins ">
                <span className="ml-2">Sign Up</span>
                <AiOutlineRight size={24}/>
                
            </div>
         </Link>
         </div>
    
    </div>
  )
}

export default Navbar