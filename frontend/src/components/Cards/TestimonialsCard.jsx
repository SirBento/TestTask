import React from 'react';
import { IoChevronForwardOutline } from 'react-icons/io5';
import style from '../../styles';

const TestimonialsCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="rounded-lg p-8 gap-2 hover:bg-hoverbg mt-10">
      <div className="flex items-center justify-between border-b border-textBlue pb-4">
        <h3 className="text-[16px] font-bold text-textWhite">{title}</h3>
        <IoChevronForwardOutline className="text-textRed hover:text-gray-300 cursor-pointer mt-3" size={28} />
      </div>
      <p className={`${style.samllText} text-start mt-6 leading-5 text-textWhite font-thin`}>{description}</p>
      <div className="flex justify-start mt-8 ">
        <div className="border rounded-full p-4 h-[65px] w-[65px] flex justify-center items-center">
          {Icon && (
            <Icon className="h-[33px] w-[33px] text-textBlue" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;