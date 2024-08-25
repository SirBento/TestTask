import React from 'react';
import {socialMediaData} from '../constants/data';
import style from '../styles';



const SocialMediaLinks= () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
      {socialMediaData.map((data, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-full p-4">
            <data.icon className="h-[36px] w-[36px] text-primary" />
          </div>
          <h3 className={`${style.samllText} font-medium mt-3`}>{data.title}</h3>
          <p className="mt-2 text-gray-400 text-[14px] w-[230px]">{data.description}</p>

          
        </div>
      ))}
    </div>
  );
};

export default SocialMediaLinks;