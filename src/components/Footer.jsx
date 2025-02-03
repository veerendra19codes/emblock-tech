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
    <section  className="footer w-full h-full flex flex-col justify-center items-center bg-black text-white md:pt-12">

      <div className="w-full flex flex-col lg:flex-row justify-between items-start py-12">

        <AnimatedElement className="w-full lg:w-1/2 sm:px-[10%] lg:px-0">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8 justify-center items-start pl-4 lg:pl-[10%] 2xl:pl-[20%]  bg-black pb-8 border-b lg:border-b-0 border-gray-800">

            <div className="flex justify-center items-start flex-col gap-2 leading-none ">
              <h1 className="text-[40px] lg:text-[60px] text-white leading-none">
                    Let&apos;s create
              </h1>
              <h1 className="text-[40px] lg:text-[60px] text-white leading-none">
                    something
              </h1>
              <h1 className="text-[40px] lg:text-[60px] text-white leading-none">
                    extraordinary
              </h1>
              <h1 className="text-[40px] lg:text-[60px] text-white leading-none">
                    together <span className="text-customgreen">.</span>
              </h1>
            </div>

            <p className="text-gray-400 font-semibold text-md lg:text-xl mt-0 lg:mt-4">Let&apos;s make an impact</p>

          </div>
        </AnimatedElement>


        <div className="w-full lg:w-1/2  flex flex-col justify-start       items-start pl-0  lg:pl-24 gap-8 pt-8 lg:mt-0">
        <AnimatedElement delay={200} className="w-full flex flex-col items-center justify-start sm:px-[10%] lg:px-0 lg:items-start">

          <div className="w-full flex flex-col justify-center  items-center px-4 lg:px-0 gap-8 lg:gap-12">

            <div className="w-full flex justify-start items-center gap-2">
              <div className="left-image h-full flex justify-between items-center lg:items-start">
                <img src="/container3.png" className="h-12 sm:h-16 rotate-180" />
                <img src="/container2.png" className="h-12 sm:h-16  rotate-180" />
                <img src="/container1.png" className="h-12 sm:h-16  rotate-180" />
                <img src="/logocircle.png" className="h-12 sm:h-16  rounded-full" />
              </div>

              <div className="flex flex-row md:flex-col justify-between items-center">

                <div className=" flex flex-col justify-center items-start">
                  <h1 className="name font-semibold text-xs  sm:text-lg  text-white font-manrope">EMBLOCK TECH</h1>
                  <p className="text-gray-400 font-medium font-manrope text-xs sm:text-base   ">contact@emblocktech.com</p>
                  <div className="icons w-full flex gap-2 justify-between items-center ">
                    <FaXTwitter className="text-gray-400 text-md lg:text-xl hover:rotate-360 transition-all duration-300 " />
                    <IoLogoInstagram  className="text-gray-400 text-md lg:text-xl hover:rotate-360 transition-all duration-300 " />
                    <FaLinkedinIn  className="text-gray-400 text-md lg:text-xl font-bold  hover:rotate-360 transition-all duration-300 " />
                  </div>
                </div>

              </div>
            </div>

            <div className="w-full h-full flex justify-start items-start flex-col ">

              <p className="text-gray-400 text-lg lg:text-3xl lg:my-2">Contact Us</p>
              <h1 className="text-base lg:text-2xl text-white w-full text-start lg:my-2">contact<span className="text-customgreen">@</span>emblocktech.com</h1>
              <h1 className="text-base lg:text-2xl text-white w-full text-start lg:my-2"><span className="text-customgreen">+91</span>99523 11408</h1>
              
            </div>

          </div>

          <div className="w-full flex flex-col gap-1 my-6 justify-center lg:justify-start items-start lg:items-start">     

            <p className="w-full  text-gray-500 text-md lg:text-xl flex flex-wrap font-semibold  justify-start items-center text-start px-4 lg:px-0 mt-8">102, 20th Cross Road, Bengaluru 560076, Karnataka, India </p>
              <p className="w-full  text-gray-500 text-md lg:text-xl flex flex-wrap font-semibold   justify-start items-center text-start px-4 lg:px-0 ">No.23-A, Vadakuthu, Cuddalore, Tamil Nadu, 607308</p>          
            </div>  

            <Link to="/contactus" className="rounded-full p-2  lg:m-0 pl-4 md:pl-6 text-md md:text-xl text-black bg-customgreen flex gap-4 justify-center items-center mt-8 lg:my-12 shadow-md shadow-customgreen group hover:shadow-none transition-all duration-500  font-medium w-fit">Book a call <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform duration-300 -rotate-45 group-hover:rotate-0" /> </Link>
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
