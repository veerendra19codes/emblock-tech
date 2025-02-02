import { useState, useEffect, useRef } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from "react-router-dom";

const OurServices = () => {
  
  const [isAnimated, setIsAnimated] = useState(false);
 const sectionRef = useRef(null);

 useEffect(() => {
   const observer = new IntersectionObserver(
     ([entry]) => {
       if (entry.isIntersecting && !isAnimated) {
         setIsAnimated(true);
       }
     },
     { threshold: 0.1 }
   );

    if (sectionRef.current) {
     observer.observe(sectionRef.current);
   }

   return () => {
     if (sectionRef.current) {
       observer.unobserve(sectionRef.current);
     }
   };
 }, [isAnimated]);



  const cards = [
    {
      id: 1,
      title: "IoT Platform Development",
      content: "Designs scalable platforms, enabling seamless device connectivity.",
    },
    {
      id: 2,
      title: "IoT System Maintenance and Support",
      content: "Ensures system reliability through proactive monitoring and updates.",
      
    },
    {
      id: 3,
      title: "Edge Computing Solutions",
      content: "Processes data closer to the source, reducing latency.",
      
    },
    {
      id: 4,
      title: "Smart Asset Tracking",
      content: "Enhances visibility with real-time location and status monitoring.",
      
    },
    {
      id: 5,
      title: "Device and Sensor Provisioning",
      content: "Deploys secure, optimized devices for seamless IoT integration.",
      
    },
  ]

  return (
    <section ref={sectionRef} className="tools-and-skills w-full py-12 lg:py-24 flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start bg-gray-100">
        
        <div className={`${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'}   transition-all duration-700 ease-out  left w-full lg:w-1/3 text-center lg:text-right flex flex-col gap-6 h-full`}>

          <div className="flex gap-2 justify-center lg:justify-end items-center">
            <span className="bg-lime-400 text-white size-2 sm:size-3 rounded-full">.</span>
            <p className="text-sm  lg:text-lg font-semibold text-gray-500">Services</p>
          </div>

          <h1 className="text-[25px] sm:text-[40px] lg:text-[60px] leading-none">
            <h1>Our Services</h1>
            <h1>Teams</h1>
          </h1>

        </div>

        <div className="right w-full lg:w-2/3 flex flex-wrap gap-2 md:gap-4 justify-center items-center lg:items-start px-4 lg:px-8 mt-12 lg:mt-0">
          
          {cards.map((card) => (
            <div key={card.id} className={`${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'} 
             card flex flex-col justify-between shadow-lg rounded-lg bg-white p-4 lg:p-8 xl:p-12 w-[45%] h-[200px] lg:h-[250px] transition-all duration-1000 ease-out text-center`}>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm sm:text-xl lg:text-2xl font-semibold">{card.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-lg  font-medium">{card.content}</p>
                </div>
                
            </div>
          ))}

          <Link to="/services" className="allservices bg-customgreen rounded-lg w-[45%] h-[200px] lg:h-[250px] flex flex-col md:flex-row justify-center items-center group gap-2 shadow-lg text-xs md:text-lg 2xl:text-2xl whitespace-nowrap font-medium">
            View all Services 
            <FaArrowRightLong className="size-6 md:size-8 2xl:size-12 rounded-full bg-customblack p-1 md:p-2 2xl:p-3 text-customgreen  -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
          </Link>
          
        </div>
      </section>
  )
}

export default OurServices
