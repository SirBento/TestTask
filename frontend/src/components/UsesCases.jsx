import React from 'react'
import style from '../styles';
import UseCaseDropdownSection from './Sections/UseCaseDropdownSection';
import UseCaseTabSection from './Sections/UseCaseTabSection';

function UsesCases() {
  return (
    <div className=" bg-secondary flex flex-col justify-center items-center rounded-3xl">

        <span className="text-textRed font-poppins text-[14px] mt-5 text ">USE CASES</span>
        <span className={`${style.headings2} w-[557px]`}>Join the #1 partner for small & large businesses today</span>

        <div className={`${style.samllText}  w-[300px] md:w-[420px] text-center`}>
         Check out various use cases and examples to see how our APIs can solve your needs.
        </div>
        
        <div>
            <UseCaseTabSection/>
        </div>

      <div>
            <UseCaseDropdownSection />
      </div>


    </div>
  )
}

export default UsesCases