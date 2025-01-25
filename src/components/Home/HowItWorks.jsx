import { LuClock3 } from "react-icons/lu";
import { FaStarOfLife } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

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

const HowItWorks = () => {
  const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);

  const services = [
    {
      id: 0,
      value: "Corporate Website"
    },
    {
      id: 1,
      value: "ERP & CRM"
    },
    {
      id: 3,
      value: "IoT"
    },
    {
      id: 4,
      value: "Mobile APP"
    },
    {
      id: 5,
      value: "Ecommerce"
    },
  ]

  const steps = [
    {
      id: 1,
      name: "Understand",
      title: "Our collaborative & Results-Driver Approach",
      steps: [
        {
          id: 1,
          content: "We begin by carefully listening to your needs and goals."
        },
        {
          id: 2,
          content: "We ask insightful questions to fully grasp your objectives and challenges."
        },
        {
          id: 3,
          content: "We conduct thorough research and analysis to gain a deep understanding of your specific situation."
        },
      ]
    },
    {
      id: 2,
      name: "Plan",
      title: "Our collaborative & Results-Driver ApproachA Step-by-Step Guide to Success",
      steps: [
        {
          id: 1,
          content: "We develop a tailored strategy based on our insights."
        },
        {
          id: 2,
          content: "We outline a clear roadmap with specific, measurable, achievable, relevant, and time-bound (SMART) goals."
        },
        {
          id: 3,
          content: "We identify the resources and expertise required to successfully execute the plan."
        },
      ]
    },
    {
      id: 3,
      name: "Execute",
      title: "The Journey to Achieving Your Goals",
      steps: [
        {
          id: 1,
          content: "We diligently implement the plan, ensuring efficient and effective execution."
        },
        {
          id: 2,
          content: "We monitor progress closely and make adjustments as needed to stay on track."
        },
        {
          id: 3,
          content: "We leverage our expertise and resources to overcome any obstacles that may arise."
        },
      ]
    },
    {
      id: 4,
      name: "Deliver",
      title: "Our Proven Method: From Vision to Reality",
      steps: [
        {
          id: 1,
          content: "We deliver high-quality results that exceed your expectations."
        },
        {
          id: 2,
          content: "We provide ongoing support and maintenance to ensure long-term success."
        },
        {
          id: 3,
          content: "We build strong, lasting relationships based on trust, transparency, and mutual benefit."
        },
      ]
    },

  ]
    
  return (
    <section  className="featured-projects w-full h-full flex flex-col justify-center items-center bg-black text-white">

        <div className="marquee w-full shadow-xl relative bg-customblack">

          <div className="flex h-16 md:h-24 gap-8 justify-center items-center animate-marquee whitespace-nowrap ">
            
             {numbers.map((num) => (
              <div key={num} className="flex h-full gap-8 justify-center items-center w-auto mx-4">

                <p className="text-3xl leading-none">{services[num%5].value}</p>
                <img src="/star.svg" className="size-8 text-customgreen" />
              </div>
             ))}
          </div>

          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>

        </div>

        {/* 1 */}
         <AnimatedElement>

        <div className="feature-hero w-full flex flex-col gap-4 justify-center  items-start pl-4 md:pl-24 py-12 md:py-40 bg-black animate-fadeInUp">

          <div className="flex gap-2 justify-center items-center">
            <span className="bg-lime-400 text-black size-3 rounded-full">.</span>
            <p className="text-md md:text-lg font-semibold text-gray-400">Process</p>
          </div>

          <div className="flex justify-center items-start flex-col gap-2 leading-none ">
            <h1 className="text-[35px] md:text-[90px] text-white leading-none">
              How we work
            </h1>
          </div>

        </div>
        </AnimatedElement>

        <div className="stpes flex flex-col w-full bg-black px-6  md:px-24">
          {/* 2 */}
          {steps.map((step) => (
          <AnimatedElement delay={step.id*100} key={step.id}>
            <div  className="step py-8  md:py-16 flex flex-col md:flex-row w-full justify-center items-start border-t-2 border-gray-900 gap-2">

              <div className="w-full md:w-[20%] flex justify-center md:justify-start items-center md:items-start">
                  <button className="w-1/2 button py-2 px-4 border border-gray-800 rounded-full">{step.name}</button>
              </div>

              <h1 className="w-full md:w-[10%] step-count text-2xl md:text-3xl font-semibold flex">
                  <span className="text-customgreen">{"/"}</span> 0{step.id}
              </h1>

              <div className="description flex flex-col gap-2 w-full md:w-[70%] items-start justify-start">
                  <h1 className="text-white text-2xl pb-2">{step.title}</h1>
                  {step.steps.map((s) => (
                    <p key={s.id} className="text-gray-400 flex justify-center items-center gap-2 pl-4"><FaStarOfLife className="text-customgreen" />{s.content}</p>
                  ))}
                
              </div>

            </div>
          </AnimatedElement>
          ))}         
        </div>
        
        <div className="cards flex flex-col md:flex-row justify-center items-center w-full gap-6 p-4 md:p-24">

          {/* 6 */}
          <AnimatedElement delay={800}>
            <div className="card w-full rounded-xl flex flex-col bg-customgreen p-6 md:p-12 h-[240px] md:h-[280px] justify-between">
                <h1 className="text-[60px] md:text-[80px] text-start w-full text-customblack font-medium">95+</h1>
                <div className="flex flex-col justify-end items-center">
                  <p className="text-end w-full text-customgray font-semibold">Percent</p>
                  <p className="text-end w-full text-green-700 text-xl fotnsembold">Customer Satisfaction</p>
                </div>
            </div>
          </AnimatedElement>

          {/* 7 */}
          <AnimatedElement delay={700}>
            <div className="card w-full rounded-xl flex flex-col bg-customblack p-6 md:p-12 text-white h-[240px] md:h-[280px] justify-between ">
                <h1 className="text-[60px] md:text-[80px] text-start w-full  font-medium">10+</h1>
                <div className="flex flex-col justify-between items-center">
                  <p className="text-end w-full  font-semibold">Years</p>
                  <p className="text-end w-full text-gray-500 text-xl font-semibold">of Experience</p>
                </div>
            </div>
          </AnimatedElement>

          {/* 8 */}
          <AnimatedElement delay={800}>
            <div className="card w-full rounded-xl flex flex-col bg-gray-100 p-6 md:p-12 h-[240px] md:h-[280px] justify-between">
                <h1 className="text-[60px] md:text-[80px] text-start w-full text-customblack font-medium">24+</h1>
                <div className="flex flex-col justify-between items-center">
                  <p className="text-end w-full text-customblack font-semibold">Projects</p>
                  <p className="text-end w-full text-green-700 text-xl font-semibold">Completed</p>
                </div>
            </div>
          </AnimatedElement>

        </div>

      </section>
  )
}

export default HowItWorks
