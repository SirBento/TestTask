import React from 'react'
import style from '../styles';
import BenefitsCard from './Cards/BenefitsCard';
import {BenefitsData} from '../constants/data';


function Benefits() {
  return (
    <div className="flex flex-col md:flex-row gap-[16px] mt-9">
            {BenefitsData.map((nav, index) => (
              <BenefitsCard
                  key={index}
                  title={nav.title}
                  description={nav.description}
                  icon={nav.icon}
              />
          ))}
        
        </div>
  )
}

export default Benefits