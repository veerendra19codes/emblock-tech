import AccordionExample from './Accordian'
import React, { useEffect, useRef, useState } from 'react';

const AnimatedElement = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

   return (
    <div 
      ref={elementRef}
      className={`transform transition-all duration-700 ${
        isVisible 
          ? `opacity-100 translate-y-0 delay-[${delay}ms]` 
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const Faq = () => {
  

  return (
    <div className="w-full flex flex-col justify-center items-center bg-white py-48">

      <AnimatedElement>

         <div className="flex gap-2 justify-center items-center">
            <span className="bg-lime-400 text-black size-3 rounded-full">.</span>
            <p className="text-lg font-semibold text-gray-400"> {"{05} - "}FAQ</p>
        </div>

        <h1 className="text-[90px]">
            Got Questions?
        </h1>
        </AnimatedElement>

        <AnimatedElement delay={200}>
          <AccordionExample />
        </AnimatedElement>
    </div>
  )
}

export default Faq
