import { m } from 'framer-motion';
import PercentageSlider from '../Slider'
import { useState, useEffect, useRef } from 'react';

const ToolsAndSkills = () => {
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
      title: "Designers",
      content: "Crafts intuitive user experiences and visually engaging interface",
      percentage: 30,
      value: 3,
    },
    {
      id: 2,
      title: "Embedded System Engineers",
      content: "Develop firmware and software for the IoT devices themselves (microcontrollers, sensors, etc.)",
      percentage: 20,
      value: 2,
    },
    {
      id: 3,
      title: "Developers",
      content: "Transforms designs into responsive high-performing web and mobile applications",
      percentage: 80,
      value: 11,
    },
    {
      id: 4,
      title: "IoT Architects",
      content: "Design and plan the overall IoT system architecture, including connectivity, data flow and security.",
      percentage: 10,
      value: 1,
    },
    {
      id: 5,
      title: "Project Manager",
      content: "Coordinates the creative process, ensuring on-time delivery and client satisfaction.",
      percentage: 40,
      value: 4,
    },
    {
      id: 6,
      title: "IoT Data Scientists",
      content: "Analyze IoT data to extract insights, build predictive models and optimize system performance",
      percentage: 10,
      value: 1,
    },
  ]

  return (
    <section ref={sectionRef} className="tools-and-skills w-full py-12 md:py-24 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start bg-gray-100">
        
        <div className={`${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'}   transition-all duration-700 ease-out  left w-full md:w-1/3 text-center md:text-right flex flex-col gap-6 h-full`}>

          <div className="flex gap-2 justify-center md:justify-end items-center">
            <span className="bg-lime-400 text-black size-3 rounded-full">.</span>
            <p className="text-md md:text-lg font-semibold text-gray-400">Teams</p>
          </div>

          <h1 className="text-[35px] md:text-[80px] leading-none">
            <h1>Our Creative</h1>
            <h1>Teams</h1>
          </h1>

        </div>

        <div className="right w-full md:w-2/3 flex flex-col md:grid md:grid-cols-2 gap-4 justify-center items-center md:items-start px-4 md:px-8 mt-12 md:mt-0">
          
          {cards.map((card) => (
            <div key={card.id} className={`${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'} 
            m-2 card flex flex-col shadow-md rounded-lg bg-white p-4 md:p-10 pl-12 md:pl-24 w-[350px] md:w-[450px] transition-all duration-1000 ease-out text-start`}>
                <h3 className="text-xl font-medium">{card.title}</h3>
                <p className="text-customgrayhover text-base">{card.content}</p>
                <PercentageSlider percentage={card.percentage} value={card.value} />
            </div>
          ))}
          
        </div>
      </section>
  )
}

export default ToolsAndSkills
