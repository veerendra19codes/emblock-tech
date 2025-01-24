import { FaXTwitter } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from 'react';
import { CornerDownRight } from 'lucide-react';

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

const Contact = () => {
  return (
    <div className="w-full flex flex-col p-24 bg-gray-100">
      
      <AnimatedElement>

        <div className="flex gap-2 justify-start items-center">
            <span className="bg-lime-400 text-black size-3 rounded-full">.</span>
            <p className="text-lg font-semibold text-gray-400"> {"{06} - "}Contact me</p>
        </div>

        <h1 className="text-[90px]">
            I&apos;m all over the internet
        </h1>
      </AnimatedElement>


        <div className="grid grid-cols-3 gap-4">

            <div className="card w-full rounded-xl flex flex-col bg-white p-12 text-black gap-8 shadow-sm group">
                <h1 className="text-2xl text-start w-full  font-medium">Twitter/X</h1>
                
                <p className="w-full flex justify-end">
                    <FaXTwitter className="bg-customgreen rounded-full size-12 p-4   text-customblack font-bold text-xl group-hover:rotate-360 transition-transform" />
                </p>
            </div>

            <div className="card w-full rounded-xl flex flex-col bg-white p-12 text-black gap-8 shadow-sm group">
                <h1 className="text-2xl text-start w-full  font-medium">Twitter/X</h1>
                
                <p className="w-full flex justify-end">
                    <FaXTwitter className="bg-customgreen rounded-full size-12 p-4   text-customblack font-bold text-xl group-hover:rotate-360 transition-transform" />
                </p>
            </div>

            <div className="card w-full rounded-xl flex flex-col bg-white p-12 text-black gap-8 shadow-sm group">
                <h1 className="text-2xl text-start w-full  font-medium">Twitter/X</h1>
                
                <p className="w-full flex justify-end">
                    <FaXTwitter className="bg-customgreen rounded-full size-12 p-4  text-customblack font-bold text-xl group-hover:rotate-360 transition-transform" />
                </p>
            </div>

            <div className="card w-full rounded-xl flex flex-col bg-white p-12 text-black gap-8 shadow-sm group">
                <h1 className="text-2xl text-start w-full  font-medium">Twitter/X</h1>
                
                <p className="w-full flex justify-end">
                    <FaXTwitter className="bg-customgreen rounded-full size-12 p-4   text-customblack font-bold text-xl group-hover:rotate-360 transition-transform" />
                </p>
            </div>

            <div className="card w-full rounded-xl flex flex-col justify-center items-center bg-customgreen p-12 text-black gap-8 shadow-sm ease-in-out transition-all duration-300 group hover:gap-4">
                <h1 className="text-2xl text-start w-full  font-medium  group-hover:pl-2 transition-all">Get in touch</h1>
                
                <p className="w-full flex justify-end group-hover:pr-2 transition-all">
                    <CornerDownRight className="bg-customgreen rounded-full size-12 p-2   text-customblack font-bold text-xl " />
                </p>
            </div>
        </div>
    
    </div>
  )
}

export default Contact
