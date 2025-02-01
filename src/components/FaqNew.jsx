import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FaqNew = ({data}) => {
  const [openIndex, setOpenIndex] = useState(null);

  

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-6 space-y-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-300"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-4 md:p-6 bg-white hover:bg-gray-50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center bg-gray-100 rounded-full w-8 h-8 text-sm xl:text-lg font-medium text-gray-700 group-hover:bg-gray-200 transition-colors duration-300">
                {index + 1}
              </span>
              <h3 className="text-left text-sm md:text-base xl:text-xl font-medium text-gray-900">
                {item.title}
              </h3>
            </div>
            <span className="ml-4 flex-shrink-0">
              <Plus 
                className={`w-5 h-5 xl:size-8 text-gray-500 transition-transform duration-300 ease-in-out transform ${
                  openIndex === index ? 'rotate-45' : 'rotate-0'
                }`}
              />
            </span>
          </button>
          
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <p className={`p-4 md:p-6 text-sm md:text-base xl:text-xl text-gray-600 border-t transform transition-all duration-300 ${
              openIndex === index 
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}>
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqNew;