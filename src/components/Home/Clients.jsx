import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

const AnimatedElement = ({ children, delay = 0, className="" }) => {
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
      className={`transform transition-all duration-700 ${className} ${
        isVisible 
          ? `opacity-100 translate-y-0 delay-[${delay}ms]` 
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};



const Clients = () => {
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
    <div className="w-full flex flex-col justify-center  px-6 py-12 md:p-24 bg-gray-100">
      
      <AnimatedElement>

        <div className="flex gap-2 justify-start items-center 2xl:pl-[5%] mb-4">
            <span className="bg-lime-400 text-white size-2 md:size-3 rounded-full">.</span>
            <p className="text-sm md:text-lg font-semibold text-gray-400"> Our Clients </p>
        </div>

        <h1 className="text-[25px] md:text-[40px] lg:text-[60px] mb-12 2xl:pl-[5%]">
            Discover our happiest clients
        </h1>
      </AnimatedElement>


        <div className="flex flex-wrap gap-4 justify-center">

            {clients.map((client, index) => (
              
              <AnimatedElement delay={100*(index+1)} key={client.id} className="card rounded-xl flex flex-col bg-white p-4 md:p-12 text-black gap-8 shadow-sm group h-[150px] md:h-[200px] justify-center items-center w-[45%] md:w-[30%]">
                {/* <AnimatedElement key={client.id} delay={100*(index+1)}> */}
                <img src={client.image} className="h-8 md:h-20 w-auto" />
                
                <p className="w-full flex justify-center text-center text-sm md:text-lg font-medium text-black">
                  {client.name}
                </p>
              {/* </AnimatedElement> */}
            </AnimatedElement>

            ))}


            <Link to="/about" className="card w-[45%] md:w-[30%]  shadow-sm ease-in-out transition-all duration-300 group hover:gap-4 group">
<AnimatedElement delay={100 * (clients.length + 1)} className="bg-customgreen w-full h-full  p-12 flex flex-col md:flex-row justify-center items-center  text-black gap-2  rounded-xl">
              <div to="/about" className="card w-full flex flex-col md:flex-row justify-center items-center bg-customgreen  text-black gap-2  ease-in-out transition-all duration-300  group">
                More
                
                <FaArrowRightLong className="size-6 md:size-8 rounded-full bg-customblack p-1 md:p-2 text-customgreen  -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
</AnimatedElement>
            </Link>

        </div>
    
    </div>
  )
}

export default Clients
