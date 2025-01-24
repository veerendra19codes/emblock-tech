import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { LuGlobe } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from 'react';


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
  return (
    <section  className="featured-projects w-full h-full flex flex-col justify-center items-center bg-black text-white">

        <div className="marquee w-full shadow-xl relative bg-customblack">
          <div className="flex h-24 gap-8 justify-center items-center animate-marquee whitespace-nowrap">
            
            <p className="text-3xl"><span className="text-customgreen">{">"} 95% /</span> client retention rate</p>
            <p className="text-3xl"><span className="text-customgreen">{">"} 18 /</span> satisfied clients</p>
            <p className="text-3xl"><span className="text-customgreen">{">"} 8+ /</span> years of experience</p>
            <p className="text-3xl"><span className="text-customgreen">{">"} 14 /</span> projects finished</p>

            <p className="text-3xl"><span className="text-customgreen">{">"} 95% /</span> client retention rate</p>
            <p className="text-3xl"><span className="text-customgreen">{">"} 18 /</span> satisfied clients</p>
            <p className="text-3xl"><span className="text-customgreen">{">"} 8+ /</span> years of experience</p>
            <p className="text-3xl"><span className="text-customgreen">{">"} 14 /</span> projects finished</p>
          </div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
        </div>

        <div className="flex justify-between items-center w-full border border-gray-800 h-32 px-24">
            <div className="flex gap-2 justify-center items-center">
              <span className="bg-lime-400 text-black size-3 rounded-full">.</span>
              <p className="text-[14px] font-semibold ">Available for Freelance</p>
            </div>

            <div className="gap-4 flex items-center font-semibold text-gray-400">Back to top <FaArrowUp className="bg-white text-black size-12  p-4 text-md rounded-full" /></div>
        </div>

        <div className="w-full flex justify-center items-center">

            <div className="feature-hero w-1/2 flex flex-col gap-8 justify-center  items-start pl-24 py-40 bg-black">
            <AnimatedElement>

                <div className="flex justify-center items-start flex-col gap-2 leading-none ">
                    <h1 className="text-[90px] text-white leading-none">
                    Let&apos;s create
                    </h1>
                    <h1 className="text-[90px] text-white leading-none">
                    something
                    </h1>
                    <h1 className="text-[90px] text-white leading-none">
                    extraordinary
                    </h1>
                    <h1 className="text-[90px] text-white leading-none">
                    together <span className="text-customgreen">.</span>
                    </h1>
                </div>

                <p className="text-gray-400 font-semibold text-xl mt-4">Let&apos;s make an impact</p>
            </AnimatedElement>

            </div>


            <div className="w-1/2 flex flex-col justify-center items-start pl-28">
            <AnimatedElement delay={200}>


                <div className="w-full flex justify-start items-center gap-4 h-32">
                    <div className="left-image flex justify-center items-center h-full">
                        <img src="/profile.png" className="size-24 rounded-full" />
                    </div>
        
                    <div className="middle  flex flex-col justify-center items-start gap-1 pr-12">
                        <h1 className="name font-semibold text-xl text-white whitespace-nowrap">Andrew Scott</h1>
                        <p className="text-gray-400 font-semibold text-sm whitespace-nowrap">Web designer, developer</p>
                        <div className="icons flex gap-2 justify-center items-center mt-3">
                            <FaXTwitter className="text-gray-400 text-xl" />
                            <IoLogoInstagram  className="text-gray-400 text-2xl"/>
                            <LuGlobe className="text-gray-400 text-xl font-bold" />
                        </div>
                    </div>
                </div>

                <p className="text-gray-500 w-full text-start mt-12 font-semibold">Contact Me</p>
                <h1 className="text-5xl text-white w-full text-start my-4">hello<span className="text-customgreen">@</span>andrew.design</h1>
                <p className="w-full text-gray-500 text-xl flex flex-wrap font-semibold gap-2 pr-12 my-8">Hit me up if you&apos;re looking for a <span className="text-white">{"  "} fast, reliable 
                    web designer</span> who can bring your vision to life</p>

                <button className="rounded-full p-2 pl-6 text-xl text-black bg-customgreen flex gap-4 justify-center items-center mt-16 shadow-md shadow-customgreen group hover:shadow-none transition-all duration-500">Book a call <FaArrowRightLong className="bg-white text-customgray rounded-full size-10 p-3 font-thin transition-transform duration-300 -rotate-45 group-hover:rotate-0" /> </button>
            </AnimatedElement>


            </div>
        </div>
        

        <nav className="w-full h-36 flex flex-row justify-between items-center px-32 border border-gray-800 shadow-sm bg-black">

            <div className="logo flex justify-center items-center gap-2 object-contain rounded-full">
            <img src="/profile.png" className="size-8 rounded-full" />
            <p className="font-semibold text-2xl text-white">Webstack</p>
            </div>

            <ul className="nav-items flex flex-col justify-start items-start">
            <p className="text-gray-500 font-semibold text-md ">Copyright </p>
            <p className="text-gray-500 text-md   font-semibold">Andy Web Design and Web Development, 2025</p>
            </ul>

            <div className="contacts flex gap-4 justify-center items-center text-sm">
            <span className="text-gray-400 font-semibold ">Created by
                </span> <img src="/profile.png" className="size-8 rounded-full" /> Veerendra Gumate
            </div>

        </nav>

    </section>
  )
}

export default Footer
