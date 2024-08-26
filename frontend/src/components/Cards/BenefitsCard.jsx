import React from 'react'
import style from '../../styles';

function BenefitsCard({ icon: Icon, title, description}) {
  return (
    <div className="shadow-lg rounded-xl p-6 bg-secondary w-[340px]">
  
    <div className="flex items-center mb-4 flex-row justify-center">
    <div className="w-full md:mr-1 border-b border-borderBlue">
        <h3 className={`${style.samllText} pb-3 text-start font-semibold`}>{title}</h3>
    </div>
    {Icon && (
        <span className="-mt-3 md:-mt-3 md:ml-0 ml-2">
        <Icon className="h-[20px] w-[20px] text-blue" />
        </span>
    )}
    </div>
    <p className={`${style.samllText} text-start mt-6 text-textWhite font-thin`}>{description}</p>
  </div>
  )
}

export default BenefitsCard

