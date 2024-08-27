import React from 'react';

const UseCaseTabCard = ({ image, title, content }) => {
  return (
    <div className="">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="bg-primary rounded-b-lg p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">{title}</h3>
          <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="border-b border-borderBlue  pb-1 mb-2"></div>
        <p className="text-textWhite font-poppins font-thin text-[14px] text-left">{content}</p>
      </div>
    </div>
  );
};

export default UseCaseTabCard;