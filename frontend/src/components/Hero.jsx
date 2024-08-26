import React from 'react'
import {AiOutlineRight} from "react-icons/ai"
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2625)] to-[rgba(0,0,0,0.5625)]"></div>
    <div className="absolute inset-0 bg-[url('/path/to/your/image.jpg')] bg-no-repeat bg-cover"></div>
    <div className="absolute inset-0 flex flex-col justify-end items-start text-white z-10 w-[640px] mb-10 pl-10">
      <div className='w-[540px] text-left'>

          <h2 className="text-[45px] font-bold mb-4 ">Connecting every corner of your business</h2>
          <p className="text-[16px] mb-8 ">
            Join thousands of business owners using Hugly to get paid and grow. We've got industry-leading APIs for, online payments, business tools and expert 7-day support.
          </p>  
      </div>
      

      <div className="flex gap-3">
       
        <Link 
         to="/signin" 
         variant="gradient"
         size="sm"
         className="text-dimBlue lg:inline-block  bg-lightBlue rounded-lg py-3 px-7 hover:bg-textBlueSecond hover:text-black  font-poppins h-[46px] ml-3 font-medium "> 
            <div className="flex items-center justify-between flex-row font-poppins text-borderBlue ">
                <span className="ml-2 text-[14px] mr-1 font-poppins"> Learn more</span>
                <AiOutlineRight size={23}/>
                
            </div>
         </Link>







         <Link 
         to="/signin" 
         variant="gradient"
         size="sm"
         className="lg:inline-block hover:text-black  font-poppins h-[46px] ml-3 font-medium  bg-transparent hover:bg-borderBlue text-white py-3 px-6 rounded-lg border items-center justify-center"> 

        <span className="ml-2 text-[14px] mr-1 font-poppins text-center"> Contact Sales</span>
          
         </Link>
       
      </div>
    </div>
  </div>
  )
}

export default Hero