import React from 'react'

function UseCaseDropDownCard({ title, content, image, isExpanded, handleToggle }) {
  return (
    <div className="border-b border-dimBlue last:border-b-0 pb-4 md:w-[1080px] sm:w-[320px]">
      <div
        className={`flex justify-between items-center cursor-pointer py-4 ${isExpanded ? 'text-textBlue' : 'text-textWhite'}`}
        onClick={handleToggle}
      >
        <h3 className="text-[14px] font-medium font-poppins hover:text-textBlue">
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
        <div className="flex items-start flex-row justify-between">
          <div className="flex text-[14px] font-light font-poppins w-[730px] text-start text-textWhite">
            <p>{content}</p>
          </div>
          <div>
            <img
              src={image}
              alt={title}
              className="w-[300px] h-[200px] rounded-3xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default UseCaseDropDownCard


