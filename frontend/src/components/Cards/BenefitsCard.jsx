import React from 'react'
import style from '../../styles';

function BenefitsCard({ icon: Icon, title, description}) {
  return (
    <div className="shadow-lg rounded-xl p-5 bg-secondary w-[340px]">
  
  <div className=" flex w-full md:mr-2 flex-row justify-center items-center  border-b border-borderBlue">
        <h3 className={`${style.samllText} pb-3 text-left `}>{title}</h3>
        {Icon && (
        <span className="-mt-3 md:-mt-3 md:ml-2 ml-2">
        <Icon className="h-[22px] w-[26px] text-blue ml-7" />
        </span>
    )}
    </div>
    <p className={`${style.samllText} text-start mt-6 text-textWhite font-thin`}>{description}</p>
  </div>
  )
}

export default BenefitsCard





