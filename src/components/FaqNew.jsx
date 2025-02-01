import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FaqNew = ({data}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of digital services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to meet your business needs."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and requirements. Typically, small projects take 2-4 weeks, while larger projects can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on various factors including scope, complexity, and timeline. We provide detailed quotes after understanding your specific requirements during our consultation."
    },
    {
      question: "Do you offer maintenance and support?",
      answer: "Yes, we provide ongoing maintenance and support services to ensure your digital solutions remain up-to-date and perform optimally. We offer various support packages to suit different needs and budgets."
    }
  ];

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