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
  const clients = [
    {
      id: 1,
      image: "/client1.png",
      name: "Buddybooks",
    },
    {
      id: 2,
      image: "/client2.png",
      name: "Aarga Constructions",
    },
    {
      id: 3,
      image: "/client3.png",
      name: "Nishikas",
    },
    {
      id: 4,
      image: "/client4.png",
      name: "Trusspur",
    },
    {
      id: 5,
      image: "/client5.png",
      name: "Yaco",
    },
  ]
  return (
    <div className="w-full flex flex-col p-4 md:p-24 bg-gray-100">
      
      <AnimatedElement>

        <div className="flex gap-2 justify-start items-center">
            <span className="bg-lime-400 text-white size-2 md:size-3 rounded-full">.</span>
            <p className="text-md md:text-lg font-semibold text-gray-400"> Our Clients </p>
        </div>

        <h1 className="text-[35px] md:text-[70px] mb-12">
            Discover our happiest clients
        </h1>
      </AnimatedElement>


        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">

            {clients.map((client) => (
              <div key={client.id} className="card w-full rounded-xl flex flex-col bg-white p-12 text-black gap-8 shadow-sm group h-[200px] justify-center items-center">
                <img src={client.image} className="h-16 md:h-20" />
                
                <p className="w-full flex justify-center text-lg font-medium text-black">
                  {client.name}
                </p>
            </div>
            ))}

            <div className="card w-full rounded-xl flex flex-col justify-center items-center bg-customgreen p-12 text-black gap-8 shadow-sm ease-in-out transition-all duration-300 group hover:gap-4">
                <h1 className="text-2xl text-start w-full  font-medium  group-hover:pl-2 transition-all duration-300">More</h1>
                
                <p className="w-full flex justify-end group-hover:pr-2 transition-all duration-300">
                    <CornerDownRight className="bg-customgreen rounded-full size-12 p-2   text-customblack font-bold text-xl " />
                </p>
            </div>
        </div>
    
    </div>
  )
}

export default Contact
