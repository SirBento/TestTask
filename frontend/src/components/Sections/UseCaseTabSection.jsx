
import React ,{useState}from 'react'
import UseCaseTabCard from '../Cards/UseCaseTabCard';
import { useCaseData } from '../../constants/data';

function UseCaseTabSection() {
    const [activeTab, setActiveTab] = useState('Large Enterprise');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-primary text-white p-8 rounded-3xl">
    <div className="max-w-5xl mx-auto ">
      <div className="flex justify-between mb-8">
        {['Large Enterprise', 'Small to Medium Business', 'Merchant', 'Individual'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-lg font-medium hover:bg-hoverbg ${
              activeTab === tab ? 'bg-bgWhite text-secondary rounded-3xl' : ''
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
        <a href="#" className="text-blue-500 flex items-center hover:underline">
          See all <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {useCaseData[activeTab].map((useCase, index) => (
          <UseCaseTabCard key={index} {...useCase} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default UseCaseTabSection








