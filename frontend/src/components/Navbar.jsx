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
          className="text-textBlueSecond lg:inline-block  bg-primary  border border-textBlue rounded-xl py-2 px-7 hover:bg-textBlue hover:text-white font-poppins h-[44px]">

          <div className="flex items-center justify-between flex-row font-poppins gap-2">
          <span className="mr-2 text-[14px] text-center">Log In</span>
            <FaUser size={21}/>
            
          </div>
          </Link>



         <Link 
         to="/signup" 
         variant="gradient"
         size="sm"
         className="text-white lg:inline-block  bg-textBlue  border border-textBlue rounded-xl py-2 px-7 hover:bg-textBlueSecond hover:text-black  font-poppins  h-[44px] ml-3"> 
            <div className="flex items-center justify-between flex-row font-poppins ">
                <span className="ml-2 text-[14px] mr-1">Sign Up</span>
                <AiOutlineRight size={23}/>
                
            </div>
         </Link>
         </div>
    
    </div>
  )
}

export default Navbar