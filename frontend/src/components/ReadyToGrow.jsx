import React from 'react'
import { PiChartLineUpBold } from "react-icons/pi";
import {AiOutlineRight} from "react-icons/ai"
import { Link } from 'react-router-dom';


function ReadyToGrow() {
  return (
    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mt-16">
      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.7)] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('src/assets/chess.jpg')`,
          filter: 'brightness(0.6)'
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <PiChartLineUpBold size={40} color="#02437D" />
        <h2 className="text-4xl font-bold mb-4 text-white mt-6">Ready to grow?</h2>
        <p className="text-[14px] font-poppins w-[320px] mb-8 text-white">
          It takes just 5 minutes to create a Hugly Developer profile.
        </p>

        <Link
          to="/signin"
          variant="gradient"
          size="sm"
          className="text-textWhite lg:inline-block bg-dimBlue rounded-lg py-3 px-7 hover:bg-textBlue hover:text-dimBlue font-poppins h-[46px] ml-3 font-medium">
            
          <div className="flex items-center justify-between flex-row font-poppins text-blue  hover:text-dimBlue">
            <span className="ml-2 text-[14px] mr-1 font-poppins">Get started</span>
            <AiOutlineRight size={23} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ReadyToGrow;