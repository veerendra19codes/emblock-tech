import { m } from 'framer-motion';
import PercentageSlider from '../Slider'
import { useState, useEffect, useRef } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

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

//  const cards = [
//     {
//       id: 1,
//       title: "Designers",
//       content: "Crafts intuitive user experiences and visually engaging interface",
//       percentage: 30,
//       value: 3,
//     },
//     {
//       id: 2,
//       title: "Embedded System Engineers",
//       content: "Develop firmware and software for the IoT devices themselves (microcontrollers, sensors, etc.)",
//       percentage: 20,
//       value: 2,
//     },
//     {
//       id: 3,
//       title: "Developers",
//       content: "Transforms designs into responsive high-performing web and mobile applications",
//       percentage: 80,
//       value: 11,
//     },
//     {
//       id: 4,
//       title: "IoT Architects",
//       content: "Design and plan the overall IoT system architecture, including connectivity, data flow and security.",
//       percentage: 10,
//       value: 1,
//     },
//     {
//       id: 5,
//       title: "Project Manager",
//       content: "Coordinates the creative process, ensuring on-time delivery and client satisfaction.",
//       percentage: 40,
//       value: 4,
//     },
//     {
//       id: 6,
//       title: "IoT Data Scientists",
//       content: "Analyze IoT data to extract insights, build predictive models and optimize system performance",
//       percentage: 10,
//       value: 1,
//     },
//   ]

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
            <span className="bg-lime-400 text-black size-3 rounded-full">.</span>
            <p className="text-lg lg:text-lg font-semibold text-gray-400">Services</p>
          </div>

          <h1 className="text-[35px] lg:text-[80px] leading-none">
            <h1>Our Services</h1>
            <h1>Teams</h1>
          </h1>

        </div>

        <div className="right w-full lg:w-2/3 flex flex-wrap gap-2 md:gap-4 justify-center items-center lg:items-start px-4 lg:px-8 mt-12 lg:mt-0">
          
          {cards.map((card) => (
            <div key={card.id} className={`${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'} 
             card flex flex-col justify-between shadow-lg rounded-lg bg-white p-4 lg:p-12 w-[45%] h-[200px] lg:h-[180px] transition-all duration-1000 ease-out text-start`}>
                <div className="flex flex-col">
                  <h3 className="text-xs lg:text-xl font-medium">{card.title}</h3>
                  <p className="text-customgrayhover text-xs lg:text-base">{card.content}</p>
                </div>
                {/* <PercentageSlider percentage={card.percentage} value={card.value} /> */}
            </div>
          ))}

          <div className="allservices bg-customgreen rounded-lg w-[45%] h-[200px] lg:h-[180px] flex flex-col md:flex-row justify-center items-center group gap-2 shadow-lg text-xs md:text-lg whitespace-nowrap">
            View all Services 
            <FaArrowRightLong className="size-6 md:size-8 rounded-full bg-customblack p-1 md:p-2 text-customgreen  -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
          </div>
          
        </div>
      </section>
  )
}

export default OurServices
