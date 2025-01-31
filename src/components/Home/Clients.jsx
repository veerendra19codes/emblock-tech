import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react';
import { CornerDownRight } from 'lucide-react';
import { Link } from "react-router-dom";

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


        <div className="flex flex-wrap gap-4">

            {clients.map((client) => (
              <div key={client.id} className="card rounded-xl flex flex-col bg-white p-4 md:p-12 text-black gap-8 shadow-sm group h-[200px] justify-center items-center w-[45%]">
                <img src={client.image} className="h-8 md:h-20 w-auto" />
                
                <p className="w-full flex justify-center text-sm md:text-lg font-medium text-black">
                  {client.name}
                </p>
            </div>
            ))}

            <Link to="/about" className="card w-[45%] rounded-xl flex flex-col md:flex-row justify-center items-center bg-customgreen p-12 text-black gap-2 shadow-sm ease-in-out transition-all duration-300 group hover:gap-4 group">
                More
                
                <FaArrowRightLong className="size-6 md:size-8 rounded-full bg-customblack p-1 md:p-2 text-customgreen  -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </Link>
        </div>
    
    </div>
  )
}

export default Clients
