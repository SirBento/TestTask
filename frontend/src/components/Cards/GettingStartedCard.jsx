import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import style from '../../styles';

const GettingStartedCard = ({ title, links, icon: Icon }) => {
  return (
    <div className="rounded-lg py-2 px-4">

    <div className=" items-center mb-4">
    <div className=" flex w-full md:mr-2 flex-row justify-center items-center  border-b border-borderBlue">
        <h3 className={`${style.samllText} pb-3 text-start`}>{title}</h3>
        {Icon && (
        <span className="-mt-3 md:-mt-3 md:ml-2 ml-2">
        <Icon className="h-[20px] w-[26px] text-blue ml-2" />
        </span>
    )}
    </div>
    
    </div>



    <div className="space-y-3">
      {links.map((link, index) => (
        <a key={index} href={link.url} className={`${style.smallTextBlue}`}>
          {link.label}
          <AiOutlineRight className="h-[20px] w-[20px] text-gray-400 hover:text-text" />
        </a>
      ))}
    </div>
  </div>
  );
};

export default GettingStartedCard;