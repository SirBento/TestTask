import React from 'react'
import style from '../../styles';

function UseCaseDropDownCard({ title, content, image, isExpanded, handleToggle }) {
  return (
    <div className={`${style.UseCaseDropdownCardBroder}`}>
      <div
        className={`flex justify-between items-center cursor-pointer py-4 ${isExpanded ? 'text-textBlue' : 'text-textWhite'}`}
        onClick={handleToggle}>
        <h3 className={`${style.UseCaseDropdownCardTitle}`}>
          {title}
        </h3>
        <span
          className={`text-3xl font-thin hover:text-textBlue hover:font-semibold ${
            isExpanded ? 'text-blue bg-dimBlue px-2 text-3xl size-10 rounded-full font-bold' : ''
          }`}
        >
          {isExpanded ? "-" : "+"}
        </span>
      </div>
      {isExpanded && (
        <div className={`${style.UseCaseDropdownCardContentWrapper}`}>
            <div className={`${style.UseCaseDropdownCardContent}`}>
              <p>{content}</p>
            </div>
            <div>
                <img src={image}alt={title} className="w-[300px] h-[200px] rounded-3xl"/>
            </div>
        </div>
      )}
    </div>
  )
}

export default UseCaseDropDownCard


