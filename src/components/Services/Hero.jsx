import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start font-manrope p-6 md:p-24 gap-12">
      <h1 className="w-full md:w-[70%] flex justify-start items-center flex-wrap text-3xl md:text-6xl font-normal  text-start whitespace-normal animate-slide-up-text-1 opacity-0 animate-fill-mode-forwards">
        Innovative IoT and Software Solutions Tailored to Transform Your Business and Empower Your Growth Journey
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="left w-full md:w-1/2 flex flex-col items-start justify-start gap-8">
            <p className="text-gray-400 leading-none flex-wrap text-md md:text-xl font-medium animate-slide-up-text-2 opacity-0 animate-fill-mode-forwards">
                Over the years, we&apos;ve had the privilege of partnering with a diverse range of clients, from startups to established enterprises, helping them turn their visions into impactful solutions.
            </p>
            
            <Link to={"/contactus"} className="rounded-full p-2   pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium animate-slide-up-text-3 opacity-0 animate-fill-mode-forwards">
                Contact Us Now 
                <FaArrowRightLong className="bg-white text-customgray rounded-full size-10 p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
            </Link>
        </div>

        <div className="w-full md:w-1/3 right flex flex-wrap flex-end justify-start lg:justify-center items-start lg:items-end  gap-4 mt-4 lg:mt-0">
            <span className="opacity-0 translate-x-full px-6 py-2 md:py-3  border border-gray-600 shadow-lg rounded-full text-sm md:text-2xl  font-semibold animate-slide-left-text-5 animate-fill-mode-forwards whitespace-nowrap">Embedded</span>

            <span className="opacity-0 translate-y-full px-6 py-2 md:py-3  border border-transparent shadow-lg rounded-full text-sm md:text-2xl  font-semibold animate-slide-down-text-1 animate-fill-mode-forwards whitespace-nowrap">ERP & CRM</span>

            <span className="opacity-0 translate-y-full px-6 py-2 md:py-3   border border-transparent shadow-lg rounded-full text-sm md:text-2xl  font-bold text-white bg-customgray   animate-slide-up-text-3 animate-fill-mode-forwards uppercase whitespace-nowrap">IoT & Software</span> 

            <span className="opacity-0 translate-x-full px-6 py-2 md:py-3  border border-gray-600 shadow-lg rounded-full text-sm md:text-2xl  font-semibold animate-slide-left-text-5 animate-fill-mode-forwards whitespace-nowrap">Cloud</span>

            <span className="opacity-0 translate-y-full px-6 py-2 md:py-3  border border-transparent shadow-lg rounded-full text-sm md:text-2xl  font-semibold  animate-slide-down-text-1 animate-fill-mode-forwards whitespace-nowrap">Security</span>
        </div>
      </div>
    </div>
  )
}

export default ServicesHero
