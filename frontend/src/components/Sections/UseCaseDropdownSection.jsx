import React,{useState} from 'react'
import { UsecaseDropdownData } from '../../constants/data';
import UseCaseDropDownCard from '../Cards/UseCaseDropDownCard';

function UseCaseDropdownSection() {
   const [expandedIndex, setExpandedIndex] = useState(-1);

   const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };
  return (
    <div className="bg-transparent text-white p-8">
    <div>
      {UsecaseDropdownData.map((feature, index) => (
        <UseCaseDropDownCard
          key={index}
          title={feature.title}
          image={feature.image}
          content={feature.content}
          isExpanded={expandedIndex === index}
          handleToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  </div>
  )
}

export default UseCaseDropdownSection
