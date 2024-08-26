import React from 'react'
import TestimonialsCard from './Cards/TestimonialsCard';
import { testimonyData } from '../constants/data';
import { ImQuotesRight } from "react-icons/im";
import style from '../styles';

function Testimonials() {
  return (

    <div className="flex flex-col justify-center items-center">
    
    <ImQuotesRight color="#EC2125" size={45}/>
    <span className={`${style.headings2}`}>Customer Success Stories</span>

        <div className={`${style.samllText}  w-[300px] md:w-[400px] text-center`}>
           See what other companies have built using Hugly's APIs
        </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px]">

      {testimonyData.map((feature, index) => (
        <TestimonialsCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>

    </div>
  )
}

export default Testimonials