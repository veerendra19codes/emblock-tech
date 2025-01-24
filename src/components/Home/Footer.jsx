import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { LuGlobe } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react';
import { FaRegCopyright } from "react-icons/fa";

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

const Footer = () => {

  const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);

  const stats = [
    {
      id: 0,
      first: "98%",
      second: "client retention rate",
    },
    {
      id: 1,
      first: "50+",
      second: "satisfies clients",
    },
    {
      id: 3,
      first: "2+",
      second: "years of experience",
    },
    {
      id: 4,
      first: "70+",
      second: "finished projects",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section  className="featured-projects w-full h-full flex flex-col justify-center items-center bg-black text-white">

      <div className="marquee w-full shadow-xl relative bg-customblack">
        <div className="flex h-16 md:h-24 gap-8 justify-center items-center animate-marquee whitespace-nowrap">
            
          {numbers.map((num) => (
            <div key={num} className="flex h-full gap-8 justify-center items-center w-auto mx-4">

              <p className="text-3xl leading-none">
                <span className="text-customgreen">
                  {">"}{stats[num%4].first}/
                </span> 
                {stats[num%4].second}
              </p>
              <img src="/star.svg" className="size-8 text-customgreen" />
              </div>
          ))}
        </div>
          
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
      </div>

      <div className="flex justify-between items-center w-full border border-gray-800 h-24 md:h-32 px-4 md:px-24">
        <div className="flex gap-2 justify-center items-center">
          <span className="bg-lime-400 text-black size-3 rounded-full">.</span>
          <p className="text-[14px] font-semibold ">Available for work</p>
        </div>

        <button onClick={scrollToTop} className="gap-4 flex items-center font-semibold text-gray-400">Back to top <FaArrowUp className="bg-white text-black size-12  p-4 text-md rounded-full" /></button>     
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-center">

        <AnimatedElement>
          <div className="feature-hero w-full md:w-1/2 flex flex-col gap-8 justify-center  items-start pl-4 md:pl-24 py-20 md:py-40 bg-black">

            <div className="flex justify-center items-center md:items-start flex-col gap-2 leading-none ">
              <h1 className="text-[35px] md:text-[90px] text-white leading-none">
                    Let&apos;s create
              </h1>
              <h1 className="text-[35px] md:text-[90px] text-white leading-none">
                    something
              </h1>
              <h1 className="text-[35px] md:text-[90px] text-white leading-none">
                    extraordinary
              </h1>
              <h1 className="text-[35px] md:text-[90px] text-white leading-none">
                    together <span className="text-customgreen">.</span>
              </h1>
            </div>

            <p className="text-gray-400 font-semibold text-lg md:text-xl mt-4">Let&apos;s make an impact</p>

          </div>
        </AnimatedElement>


          <AnimatedElement delay={200}>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start py-8 pl-4 md:pl-28">


            <div className="flex justify-center md:justify-start items-center gap-2">
              <div className="left-image h-full flex justify-center items-center md:items-start">
                <img src="/container3.png" className="h-24 rotate-180" />
                <img src="/container2.png" className="h-24 rotate-180" />
                <img src="/container1.png" className="h-24 rotate-180" />
                <img src="/logocircle.png" className="size-24 rounded-full" />
                
              </div>

              <div className=" flex flex-col justify-center items-start gap-1">
                <h1 className="name font-semibold text-xl text-white font-manrope">EMBLOCK TECH</h1>
                <p className="text-gray-400 font-medium font-manrope text-xs">contact@emblocktech.com</p>
                <div className="icons w-full flex gap-2 justify-between items-center ">
                  <FaXTwitter className="text-gray-400 text-xl hover:rotate-360 transition-all duration-300 " />
                  <IoLogoInstagram  className="text-gray-400 text-2xl hover:rotate-360 transition-all duration-300 " />
                  <LuGlobe  className="text-gray-400 text-xl font-bold  hover:rotate-360 transition-all duration-300 " />
                </div>
              </div>

            </div>

            <p className="text-gray-500 w-full text-center md:text-start mt-12 font-semibold">Contact Me</p>
            <h1 className="text-3xl md:text-5xl text-white w-full text-center md:text-start my-4">contact<span className="text-customgreen">@</span>emblocktech.com</h1>
            <p className="w-full text-gray-500 text-xl flex flex-wrap font-semibold gap-2 pr-12 my-8 justify-center md:justify-start">Contact us for <span className="text-white">{"  "} fast, reliable and professional </span> services that bring your vision to life with precision and creativity</p>

            <button className="rounded-full p-2 pl-6 text-lg md:text-xl text-black bg-customgreen flex gap-4 justify-center items-center mt-16 shadow-md shadow-customgreen group hover:shadow-none transition-all duration-500">Book a call <FaArrowRightLong className="bg-white text-customgray rounded-full size-10 p-3 font-thin transition-transform duration-300 -rotate-45 group-hover:rotate-0" /> </button>


        </div>
          </AnimatedElement>
      </div>
        

      <nav className="w-full h-40 md:h-36 flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-32 border border-gray-800 shadow-sm bg-black py-4 gap-4">

        <img src="/logowhite.png" className="h-8" />

        <ul className="nav-items flex flex-col justify-center md:justify-start items-center md:items-start gap-2">
          <p className="text-gray-500 font-semibold text-md flex leading-none whitespace-nowrap ">Copyright <FaRegCopyright className="ml-2" /></p>
          <p className="text-gray-500 text-md   font-semibold">EMBLOCK TECH PRIVATE LIMITED, 2025</p>
        </ul>

      </nav>

    </section>
  )
}

export default Footer
