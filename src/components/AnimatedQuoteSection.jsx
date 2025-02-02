import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const AnimatedQuoteSection = ({ quotes ,className="" }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Filter out empty quotes
  const validQuotes = quotes.filter(quote => quote.quote && quote.quote.trim() !== "");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // Wait for exit animation to complete before changing quote
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => 
          prevIndex === validQuotes.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); // Half of the transition duration
      
    }, 3000); // Change quote every 3 seconds
    
    return () => clearInterval(interval);
  }, [validQuotes.length]);
  
  const currentQuote = validQuotes[currentQuoteIndex];
  
  return (
    <section className={`quote h-[600px] md:h-[800px] w-full flex justify-center items-center px-6 md:px-24 mb-24 md:mb-0 overflow-hidden ${className}`}>
      <div className="w-1/5 flex justify-end items-start -mt-[100px] md:-mt-[150px]">
        <FaQuoteLeft className="text-gray-600 size-[40px] md:size-[200px]" />
      </div>
      <div className="w-4/5 flex flex-col justify-center items-start -mb-[100px] md:-mb-[150px] pr-[5%] relative">
        <div
          className={`absolute w-full transition-all duration-1000 ease-in-out ${
            isAnimating
              ? '-translate-y-full opacity-0'
              : 'translate-y-0 opacity-100'
          }`}
        >
          <h1 className=" text-md md:text-xl xl:text-3xl font-medium mb-8">
            {currentQuote.quote}
          </h1>
          <p className="text-sm md:text-md xl:text-lg font-medium mb-4">
            {currentQuote.author}
          </p>
          <p className="text-xs md:text-sm xl:text-md font-medium">
            {currentQuote.designatin}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnimatedQuoteSection;