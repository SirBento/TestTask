import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles';
import { AiOutlineRight } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="text-textWhite fixed top-0 left-0 right-0 z-10 py-4">
      <div className="container mx-auto flex justify-between items-center h-20">
        <div className="flex items-center">
            <img src="src/assets/hugly_studio_logo.jpeg" alt="Hugly" className="w-12 h-12 mr-2 rounded-full" />
            <span className="font-poppins text-[22px] font-medium">Hughly.dev</span>
          </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/signin"
            variant="gradient"
            size="sm"
            className="text-textBlueSecond bg-primary border border-textBlue rounded-xl py-2 px-7 hover:bg-textBlue hover:text-white font-poppins h-[44px] flex items-center gap-2">
              <span className="text-[14px] font-poppins">Log In</span>
              <FaUser size={21} />
          </Link>


          <Link
            to="/signup"
            variant="gradient"
            size="sm"
            className="text-white bg-textBlue border border-textBlue rounded-xl py-2 px-7 hover:bg-hoverbg hover:text-textWhite font-poppins h-[44px] flex items-center gap-1">
            <span className="text-[14px] font-poppins">Sign Up</span>
            <AiOutlineRight size={23} />
            
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


