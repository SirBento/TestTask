import React from "react";
import { Link } from "react-router-dom";
import { IoIosRocket } from "react-icons/io";
import style from '../styles';
import GettingStartedCard from './Cards/GettingStartedCard';
import {GettingStartedData} from '../constants/data';

const GettingStarted = () => {
  return (
   
      <div className="flex flex-col justify-center items-center">

        <IoIosRocket color="#EC2125" width={40} height={40}/>
        <span className={`${style.headings2}`}>Getting Started</span>

        <div className={`${style.samllText}  w-[300px] md:w-[420px] text-center`}>
           Resources and guides to help you through every step of the development journey
        </div>


        <div className="flex flex-col md:flex-row gap-[16px] mt-9">
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