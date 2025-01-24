import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import {  LuGlobe } from "react-icons/lu";

const Hero = () => {
  return (

    <div className="flex flex-col gap-8 justify-center items-center w-full h-full bg-[url('/herobg.jpg')]">

        <div className="hero w-full h-full flex flex-col md:flex-row justify-between items-center px-6 md:px-12 pt-8 md:pt-24 lg:pt-44">


          <div className="w-full lg:w-[65%] right flex justify-center items-start flex-col gap-4 font-normal">

            <h1 className="text-[30px] lg:text-[50px] leading-none align-middle flex justify-center items-center mt-4 ">
              <span className="opacity-0 translate-y-full animate-slide-up-text-1  animate-fill-mode-forwards">
                The Future is 
              </span>
              <span className="opacity-0 translate-y-full px-6 py-4 border border-transparent shadow-lg rounded-full text-[15px] lg:text-[25px] font-semibold mx-6 animate-slide-down-text-1 animate-fill-mode-forwards whitespace-nowrap">Connected</span>
            </h1>
            
            <h1 className="text-[30px] lg:text-[50px] leading-none align-middle flex justify-center items-center">
              <span className=" opacity-0 translate-y-full animate-slide-up-text-2 animate-fill-mode-forwards">At</span>   

              <span className="opacity-0 translate-y-full px-6 py-4  border border-transparent shadow-lg rounded-full text-[15px] lg:text-[25px] font-bold text-white bg-customgray mx-6 animate-slide-up-text-3 animate-fill-mode-forwards uppercase">Embock Tech</span> 

              <span className="opacity-0  translate-y-full animate-slide-up-text-4 animate-fill-mode-forwards">we turn</span>     <span className="opacity-0 translate-x-full px-6 py-4  border border-gray-600 shadow-lg rounded-full text-[15px] lg:text-[25px] mx-6 font-semibold animate-slide-left-text-5 animate-fill-mode-forwards whitespace-nowrap">Ideas</span>
            </h1>

            <h1 className="text-[30px] lg:text-[50px] leading-none align-middle flex justify-center items-center">
              <span className=" opacity-0 translate-y-full animate-slide-up-text-2 animate-fill-mode-forwards whitespace-nowrap">into possibilities with</span>   

              <span className="opacity-0 translate-y-full px-6 py-4  border border-transparent shadow-lg rounded-full text-[15px] lg:text-[25px] font-bold text-white bg-customgray mx-6 animate-slide-up-text-3 animate-fill-mode-forwards uppercase whitespace-nowrap">Iot & Software</span> 
            </h1>

            <h1 className="text-[30px] lg:text-[50px] leading-none align-middle flex justify-center items-center">
              <span className=" opacity-0 translate-y-full animate-slide-up-text-2 animate-fill-mode-forwards whitespace-nowrap">solutions, empowering you, every</span>   
            </h1>

            <h1 className="text-[30px] lg:text-[50px] leading-none align-middle flex justify-center items-center">
              <span className=" opacity-0 translate-y-full animate-slide-up-text-2 animate-fill-mode-forwards">step of the way</span>   
            </h1>
            
          </div>

          <div className="w-full lg:w-[35%] h-full flex justify-center items-center">
            <img src="/hero.png" className="size-[460px]" />
          </div>
        </div>
        
        <div className="opacity-0 translate-y-full w-full flex justify-between items-start px-12 py-12 animate-slide-up-text-6 animate-fill-mode-forwards">
          <button className="rounded-full p-2   pl-6 text-xl text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group ">
            See what we can do 
            <FaArrowRightLong className="bg-white text-customgray rounded-full size-10 p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
          </button>

          <div className="hidden md:flex justify-center items-center gap-2">
            <div className=" flex flex-col justify-center items-start gap-1">
              <h1 className="name font-semibold text-xl text-customgray font-manrope">EMBLOCK TECH</h1>
              <p className="text-customgray font-medium font-manrope text-xs">contact@emblocktech.com</p>
              <div className="icons w-full flex gap-2 justify-between items-center ">
                <FaXTwitter className="text-gray-400 text-xl hover:rotate-360 transition-all duration-300 " />
                <IoLogoInstagram  className="text-gray-400 text-2xl hover:rotate-360 transition-all duration-300 " />
                <LuGlobe  className="text-gray-400 text-xl font-bold  hover:rotate-360 transition-all duration-300 " />
              </div>
            </div>

            <div className="left-image h-full flex justify-center items-start">
              <img src="/logocircle.png" className="size-24 rounded-full" />
              <img src="/container1.png" className="h-24" />
              <img src="/container2.png" className="h-24" />
              <img src="/container3.png" className="h-24" />
            </div>
          </div>
        </div>

      </div>

  )
}

export default Hero
