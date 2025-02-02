import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { useEffect, useRef, useState } from 'react';
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
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

const Footer = () => {

  return (
    <section  className="featured-projects w-full h-full flex flex-col justify-center items-center bg-black text-white md:pt-12">

      <div className="w-full flex flex-col lg:flex-row justify-between items-start py-24">

        <AnimatedElement className="w-full lg:w-1/2">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8 justify-center items-center lg:items-start pl-4 lg:pl-[10%] 2xl:pl-[20%]  bg-black">

            <div className="flex justify-center items-center lg:items-start flex-col gap-2 leading-none ">
              <h1 className="text-[25px] md:text-[40px] lg:text-[60px] text-white leading-none">
                    Let&apos;s create
              </h1>
              <h1 className="text-[25px] md:text-[40px] lg:text-[60px] text-white leading-none">
                    something
              </h1>
              <h1 className="text-[25px] md:text-[40px] lg:text-[60px] text-white leading-none">
                    extraordinary
              </h1>
              <h1 className="text-[25px] md:text-[40px] lg:text-[60px] text-white leading-none">
                    together <span className="text-customgreen">.</span>
              </h1>
            </div>

            <p className="text-gray-400 font-semibold text-sm lg:text-xl mt-0 lg:mt-4">Let&apos;s make an impact</p>

          </div>
        </AnimatedElement>


        <div className="w-full lg:w-1/2  flex flex-col justify-center items-center lg:items-start pl-0  lg:pl-24 gap-8 mt-12 lg:mt-0">
        <AnimatedElement delay={200} className="flex flex-col items-center justify-start lg:items-start">


            <div className="flex justify-center lg:justify-start items-center gap-2">
              <div className="left-image h-full flex justify-center items-center lg:items-start">
                <img src="/container3.png" className="h-12 lg:h-24 rotate-180" />
                <img src="/container2.png" className="h-12 lg:h-24 rotate-180" />
                <img src="/container1.png" className="h-12 lg:h-24 rotate-180" />
                <img src="/logocircle.png" className="h-12 lg:size-24 rounded-full" />
                
              </div>

              <div className=" flex flex-col justify-center items-start gap-1">
                <h1 className="name font-semibold text-lg lg:text-xl text-white font-manrope">EMBLOCK TECH</h1>
                <p className="text-gray-400 font-medium font-manrope text-[10px] lg:text-xs">contact@emblocktech.com</p>
                <div className="icons w-full flex gap-2 justify-between items-center ">
                  <FaXTwitter className="text-gray-400 text-lg lg:text-xl hover:rotate-360 transition-all duration-300 " />
                  <IoLogoInstagram  className="text-gray-400 text-lg lg:text-xl hover:rotate-360 transition-all duration-300 " />
                  <FaLinkedinIn  className="text-gray-400 text-lg lg:text-xl font-bold  hover:rotate-360 transition-all duration-300 " />
                </div>
              </div>

            </div>

            
            <div className="flex flex-col gap-1 my-12 justify-center lg:justify-start items-start lg:items-start">
              
              <h1 className="text-xl md:text-3xl text-white w-full text-center lg:text-start ">contact<span className="text-customgreen">@</span>emblocktech.com</h1>

              <h1 className="text-xl md:text-3xl text-white w-full text-center lg:text-start my-4 "><span className="text-customgreen">+91</span>99523 11408</h1>

              

              <p className="w-full  text-gray-500 text-md lg:text-xl flex flex-wrap font-semibold   justify-center  lg:justify-start items-center text-center lg:text-start px-4 lg:px-0 mt-8">102, 20th Cross Road, Bengaluru 560076, Karnataka, India </p>
              <p className="w-full  text-gray-500 text-md lg:text-xl flex flex-wrap font-semibold   justify-center  lg:justify-start items-center text-center lg:text-start px-4 lg:px-0 ">No.23-A, Vadakuthu, Cuddalore, Tamil Nadu, 607308</p>

              
              
            </div>

            

            <Link to="/contactus" className="rounded-full p-2 m-auto lg:m-0  pl-6 text-lg lg:text-xl text-black bg-customgreen flex gap-4 justify-center items-center mt-8 lg:mt-16 shadow-lg shadow-customgreen group hover:shadow-none transition-all duration-500 font-medium w-fit md:w-fit">Book a call <FaArrowRightLong className="bg-white text-customgray rounded-full size-10 p-3 font-thin transition-transform duration-300 -rotate-45 group-hover:rotate-0" /> </Link>


          </AnimatedElement>
        </div>

      </div>
        

      <nav className="w-full h-24 lg:h-36 flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 lg:px-32 border-t border-gray-800 shadow-sm bg-black py-4 gap-2 lg:gap-4">

        <img src="/logowhite.png" className="h-6 lg:h-8" />

        <ul className="nav-items flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
          <p className="text-gray-500 font-semibold text-sm lg:text-lg leading-none whitespace-nowrap flex items-center">Copyright <FaRegCopyright className="ml-2" /></p>
          <p className="text-gray-500 text-xs md:text-sm  font-semibold">EMBLOCK TECH PRIVATE LIMITED, 2025</p>
        </ul>

      </nav>

    </section>
  )
}

export default Footer
