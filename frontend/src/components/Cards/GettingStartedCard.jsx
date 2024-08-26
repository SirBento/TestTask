import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import style from '../../styles';

const GettingStartedCard = ({ title, links, icon: Icon }) => {
  return (
    <div className="rounded-lg p-9">

    <div className="flex items-center mb-4 flex-row justify-center">
    <div className="w-full md:mr-2">
        <h3 className={`${style.samllText} border-b border-borderBlue pb-3`}>{title}</h3>
    </div>
    {Icon && (
        <span className="-mt-3 md:-mt-3 md:ml-0 ml-2">
        <Icon className="h-[20px] w-[20px] text-blue" />
        </span>
    )}
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