import React from 'react';
import { IoChevronForwardOutline } from 'react-icons/io5';
import style from '../../styles';

const TestimonialsCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="rounded-lg p-16 gap-2">
      
      <div className="flex items-center justify-between border-b border-textBlue pb-4">
        <h3 className="text-lg font-medium text-textWhite">{title}</h3>
        <IoChevronForwardOutline className="text-textRed hover:text-gray-300 cursor-pointer mt-3" size={28} />
      </div>

      <p className={`${style.samllText} text-start mt-6`}>{description}</p>
      <div className="flex items-center justify-start mt-6">
        <div className="border rounded-full p-4 h-[65px] w-[65px justify-center items-center]">
        {Icon && (
        <span className="justify-center items-center">
        <Icon className="h-[32px] w-[32px] text-center text-textBlue"/>
        </span>
    )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;