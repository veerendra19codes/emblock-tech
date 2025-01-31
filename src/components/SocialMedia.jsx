import { CornerDownRight } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

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
      className={`transform transition-all duration-700 w-full ${
        isVisible 
          ? `opacity-100 translate-y-0 delay-[${delay}ms]` 
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const SocialMedia = () => {
  return (
    <section className="socialmedia w-full flex flex-col p-6 py-12 md:p-24 ">
      
        <AnimatedElement>

          <div className="flex gap-2 justify-start items-center">
              <span className="bg-lime-400 text-black size-2 md:size-3 rounded-full">.</span>
              <p className="text-md md:text-lg font-semibold text-gray-400">Contact Us</p>
          </div>

          <h1 className="text-[25px] md:text-[60px] font-medium">
              We&apos;re all over the internet
          </h1>
        </AnimatedElement>


          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-0">

              <div className="card w-full rounded-xl flex flex-col justify-between bg-white p-4 md:p-12 text-black gap-8 shadow-sm">
                  <h1 className="text-md md:text-2xl text-start w-full  font-medium">Twitter/X</h1>
                  
                  <p className="w-full flex justify-end">
                      <FaXTwitter className="bg-customgreen rounded-full size-6 md:size-12 p-1 md:p-4   text-customblack font-bold text-xl" />
                  </p>
              </div>

              <div className="card w-full rounded-xl flex flex-col justify-between bg-white p-4 md:p-12 text-black gap-8 shadow-sm">
                  <h1 className="text-md md:text-2xl text-start w-full  font-medium">Twitter/X</h1>
                  
                  <p className="w-full flex justify-end">
                      <FaXTwitter className="bg-customgreen rounded-full size-6 md:size-12 p-1 md:p-4   text-customblack font-bold text-xl" />
                  </p>
              </div>

              <div className="card w-full rounded-xl flex flex-col justify-between bg-white p-4 md:p-12 text-black gap-8 shadow-sm">
                  <h1 className="text-md md:text-2xl text-start w-full  font-medium">Twitter/X</h1>
                  
                  <p className="w-full flex justify-end">
                      <FaXTwitter className="bg-customgreen rounded-full size-6 md:size-12 p-1 md:p-4   text-customblack font-bold text-xl" />
                  </p>
              </div>

              <div className="card w-full rounded-xl flex flex-col justify-between bg-white p-4 md:p-12 text-black gap-8 shadow-sm">
                  <h1 className="text-md md:text-2xl text-start w-full  font-medium">Twitter/X</h1>
                  
                  <p className="w-full flex justify-end">
                      <FaXTwitter className="bg-customgreen rounded-full size-6 md:size-12 p-1 md:p-4   text-customblack font-bold text-xl" />
                  </p>
              </div>

              <div className="card w-full rounded-xl flex flex-col justify-between bg-white p-4 md:p-12 text-black gap-8 shadow-sm">
                  <h1 className="text-md md:text-2xl text-start w-full  font-medium">Twitter/X</h1>
                  
                  <p className="w-full flex justify-end">
                      <FaXTwitter className="bg-customgreen rounded-full size-6 md:size-12 p-1 md:p-4   text-customblack font-bold text-xl" />
                  </p>
              </div>

              <Link to="/about" className="card w-full rounded-xl flex flex-col justify-center items-center bg-customgreen p-4 md:p-12 text-black gap-8 shadow-sm ease-in-out transition-all duration-300 group hover:gap-4">
                <h1 className="text-lg md:text-2xl text-start w-full  font-medium  group-hover:pl-2 transition-all duration-300">More</h1>
                
                <p className="w-full flex justify-end group-hover:pr-2 transition-all duration-300">
                    <CornerDownRight className="bg-customgreen rounded-full size-6 md:size-12 p-1 md:p-2   text-customblack font-bold text-xl " />
                </p>
            </Link>

              

          </div>
      
      </section>
  )
}

export default SocialMedia
