import  { useState, useEffect } from 'react';
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
    <div className="w-full h-auto flex justify-center items-center">

    <section className={`quote h-[500px] md:h-[700px] 2xl:h-[800px] w-full flex justify-center items-center pb-32 md:pb-16 px-6 md:px-24 md:mb-0 overflow-hidden ${className} transition-all duration-1000 ease-in-out ${
            isAnimating
              ? '-translate-y-24 opacity-0'
              : 'translate-y-0 opacity-100'
          }`}>
      <div className={`w-1/5 flex justify-end items-start -mt-[130px] sm:-mt-[170px] transition-all duration-1000 ease-in-out`}>
        <FaQuoteLeft className="text-gray-600 size-[40px] sm:size-[80px] md:size-[130px] lg:size-[200px]" />
      </div>
      <div className="w-4/5 flex flex-col justify-start items-start mb-[100px]  pr-[10%] md:mb-[50px] lg:mb-0 relative">
        <div
          className={`absolute w-full`}
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
    </div>

  );
};

export default AnimatedQuoteSection;