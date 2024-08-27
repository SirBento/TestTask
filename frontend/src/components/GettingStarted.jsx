import React from "react";
import { Link } from "react-router-dom";
import { IoIosRocket } from "react-icons/io";
import style from '../styles';
import GettingStartedCard from './Cards/GettingStartedCard';
import {GettingStartedData} from '../constants/data';

const GettingStarted = () => {
  return (
   
<div className="flex flex-col justify-center items-center overflow-hidden mt-10 w-full px-4 md:px-0">

        <IoIosRocket color="#EC2125" size={45}/>
        <span className={`${style.headings2} mt-3`}>Getting Started</span>

        <div className={`${style.samllText} w-full md:w-[420px] text-center mt-5 font-light leading-7`}>
           Resources and guides to help you through every step of the development journey
        </div>


        <div className="flex flex-col justify-between md:flex-row gap-[18px] mt-9 w-full">
            {GettingStartedData.map((nav, index) => (
              <GettingStartedCard
                  key={index}
                  title={nav.title}
                  links={nav.links}
                  icon={nav.icon}
              />
          ))}
        
        </div>
      </div>

  );
};

export default GettingStarted;