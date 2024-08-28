import React from 'react'
import style from '../styles';
import UseCaseDropdownSection from './Sections/UseCaseDropdownSection';
import UseCaseTabSection from './Sections/UseCaseTabSection';

function UsesCases() {
  return (
    <div className={`${style.useCasesbg}`}>

        <span className={`${style.useCasesRedText}`}>USE CASES</span>
        <span className={`${style.headings2}`}>Join the #1 partner for small & large businesses today</span>

          <div className={`${style.samllText} ${style.useCasesDescriptionText} `}>
                Check out various use cases and examples to see how our APIs can solve your needs.
          </div>
      
          <div className='mt-12'>
              <UseCaseTabSection/>
          </div>

          <div>
             <UseCaseDropdownSection />
          </div>


    </div>
  )
}

export default UsesCases