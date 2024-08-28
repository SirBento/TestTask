import React from 'react'
import style from '../../styles';

function BenefitsCard({ icon: Icon, title, description}) {
  return (
    <div className={`${style.benefitsCardbg}`}>
  
  <div className= {`${style.benefitsCardBorder}`}>
        <h3 className={`${style.samllText} pb-3 text-left `}>{title}</h3>
        {Icon && (
        <span className={`${style.benefitsCardSpan} `}>
        <Icon className= {`${style.benefitsCardIcon} `} />
        </span>
    )}
    </div>
    <p className={`${style.samllText}  ${style.benefitsCardDescription}`}>{description}</p>
  </div>
  )
}

export default BenefitsCard





