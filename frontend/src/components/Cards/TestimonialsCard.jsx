import React from 'react';
import { IoChevronForwardOutline } from 'react-icons/io5';
import style from '../../styles';

const TestimonialsCard = ({ icon, title, description }) => {
  return (
    <div className={`${style.TestimonyCardbg}`}>

          <div className={`${style.TestimonyCardBorder}`}>

                <h3 className={`${style.TestimonyCardTitle}`}>{title}</h3>
                <IoChevronForwardOutline className={`${style.TestimonyCarddForwardOultine}`} size={28} />
          </div>
          <p className={`${style.samllText} ${style.TestimonyCardText}`}>{description}</p>

          <div className="flex justify-start mt-8 ">
            
                <div className={`${style.TestimonyCardIcon}`}>
                  {icon && (
                    <img src={icon} alt={title} className="h-[40px] w-[40px] text-textBlue" />
                  )}
                </div>
          </div>
    </div>
  );
};

export default TestimonialsCard;