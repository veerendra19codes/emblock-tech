import  { useEffect, useRef, useState } from 'react'
import { FaArrowRightLong, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

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

const SocialMedia = () => {

  
  return (
    <section className="socialmedia w-full flex flex-col p-6 py-12 md:p-24 xl:py-36 bg-gray-100">
      
        <AnimatedElement>

          <div className="flex gap-2 justify-start items-center">
              <span className="bg-lime-400 text-white size-2 md:size-3 rounded-full">.</span>
              <p className="text-md md:text-lg font-semibold text-gray-400">Contact Us</p>
          </div>

          <h1 className="text-[25px] md:text-[40px] lg:text-[60px] font-normal">
              We&apos;re all over the internet
          </h1>
        </AnimatedElement>


          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4">


            <AnimatedElement delay={200}>
              <a href="https://www.instagram.com/emblock_tech/" target='_blank' className="card w-full rounded-xl flex flex-col justify-between bg-white p-4 md:p-12 text-black gap-8 shadow-sm h-[150px] md:h-[200px] group">
                  <h1 className="text-md md:text-2xl text-start w-full  font-medium">Instagram</h1>
                  
                  <p className="w-full flex justify-end">
                      <FaInstagram className="bg-customgreen rounded-full size-6 md:size-12 p-1 md:p-4   text-customblack font-bold text-xl group-hover:rotate-360 transition-all duration-300" />
                  </p>
              </a>
            </AnimatedElement>




            <AnimatedElement delay={400}>
              <a href="https://wa.me/919952311408" target="_blank" className="card w-full rounded-xl flex flex-col justify-between bg-white p-4 md:p-12 text-black gap-8 shadow-sm h-[150px] md:h-[200px] group">
                  <h1 className="text-md md:text-2xl text-start w-full  font-medium">Whatsapp</h1>
                  
                  <p className="w-full flex justify-end">
                      <FaWhatsapp className="bg-customgreen rounded-full size-6 md:size-12 p-1 md:p-4   text-customblack font-bold text-xl group-hover:rotate-360 transition-all duration-300" />
                  </p>
              </a>
            </AnimatedElement>


            <AnimatedElement delay={600}>
              <a href="https://www.linkedin.com/company/emblock-tech/"  target="_blank" className="card w-full rounded-xl flex flex-col justify-between bg-white p-4 md:p-12 text-black gap-8 shadow-sm h-[150px] md:h-[200px] group">
                  <h1 className="text-md md:text-2xl text-start w-full  font-medium">Linkedin</h1>
                  
                  <p className="w-full flex justify-end">
                      <FaLinkedin className="bg-customgreen rounded-full size-6 md:size-12 p-1 md:p-4   text-customblack font-bold text-xl group-hover:rotate-360 transition-all duration-300" />
                  </p>
              </a>
            </AnimatedElement>
            

            <AnimatedElement delay={800}>

              <Link to="/about" className="card w-full h-[150px] md:h-[200px] rounded-xl flex flex-col md:flex-row justify-center items-center bg-customgreen p-4  text-black gap-4 shadow-sm ease-in-out transition-all duration-300 group font-medium text-2xl">
                  More 
                  <FaArrowRightLong className="size-6 md:size-8 rounded-full bg-customblack p-1 md:p-2 text-customgreen  -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </Link>
            </AnimatedElement>

              

          </div>
      
      </section>
  )
}

export default SocialMedia
