import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom"

const FeaturedProjects = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [visibleImages, setVisibleImages] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimated) {
          setIsAnimated(true);
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    const imageObserver = new IntersectionObserver(
      (entries) => {
        const newVisibleImages = {};
        entries.forEach((entry) => {
          newVisibleImages[entry.target.id] = entry.isIntersecting;
        });
        setVisibleImages((prev) => ({ ...prev, ...newVisibleImages }));
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe all images
    const images = document.querySelectorAll('.project-image');
    images.forEach((img, index) => {
      img.id = `project-image-${index}`;
      imageObserver.observe(img);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      images.forEach((img) => imageObserver.unobserve(img));
    };
  }, [isAnimated]);

  
  return (
    <section ref={sectionRef}   className="featured-projects w-full h-full  flex flex-col justify-center items-center bg-customblack text-white ">

        <div className=" feature-hero w-full flex justify-start  items-center  py-12 lg:py-40 bg-black ">

          <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center items-start pl-6 lg:pl-24">

            <div className={`${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} 
            flex gap-2 justify-center items-center transition-all duration-1000 ease-out`}>
              <span className="bg-lime-400 text-black size-2 md:size-3 rounded-full">.</span>
              <p className="text-sm md:text-lg font-semibold text-gray-400">Featured projects</p>
            </div>

            <div className={`${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} 
            flex justify-center items-start flex-col gap-2  leading-tight transition-all duration-1000 ease-out delay-200`}>
              <h1 className="text-[25px] md:text-[40px] lg:text-[60px] text-white leading-tight whitespace-nowrap">
                Turning Imagination
              </h1>
              <h1 className="text-[25px] md:text-[40px] lg:text-[60px] text-white leading-tight">
                Into Innovation
              </h1>
            </div>

            <Link to="/contactus" className={`${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} 
            rounded-full p-2  pl-4 md:pl-6 text-md md:text-xl text-black bg-customgreen flex gap-4 justify-center items-center mt-8 md:mt-16 shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group  font-medium`}>Become a client <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> </Link>

          </div>

          {/* <div className="hidden right w-1/2 h-auto md:flex justify-center items-center">
             <img src="/bulb.png" className="md:size-[400px] lg:size-[600px]" />
          </div> */}

        </div>

        <div className="projects-2 w-full flex flex-col lg:flex-row justify-center items-center bg-black">

          <Link to="/product/3" className="w-full lg:w-1/2 border border-gray-800  hover:bg-customblackhover flex flex-col justify-between items-start p-6 md:px-16 md:pb-16 lg:px-12  lg:pb-12 xl:pb-16 h-[280px] sm:h-[400px] md:h-[550px] 2xl:h-[700px]">


            <div className="w-full flex flex-col justify-start items-start gap-2 md:gap-4">

              <h1 className="text-2xl md:text-3xl  2xl:text-4xl">EDGECARTS</h1>

              <p className="text-gray-500 font-semibold text-xs md:text-md 2xl:text-lg">Web design & Web development</p>

            </div>

            <img src="/edgecarts.webp" className={`project-image  w-full 2xl:w-[95%] mx-auto h-[150px] sm:h-[250px] md:h-[350px] 2xl:h-[450px] object-cover rounded-xl mt-6 md:mt-12  transition-transform duration-500 ease-in-out ${visibleImages[`project-image-0`] ? 'md:scale-110' : 'scale-100'}`}  />
          </Link>

          <Link to="/product/4" className="w-full lg:w-1/2 border border-gray-800  hover:bg-customblackhover flex flex-col justify-between items-start p-6 md:px-16 md:pb-16 lg:px-12 lg:pb-12 xl:pb-16  h-[280px] sm:h-[400px] md:h-[550px] 2xl:h-[700px]">

            <div className="w-full flex flex-col justify-start items-start gap-2 md:gap-4">

              <h1 className="text-2xl md:text-3xl  2xl:text-4xl">BUILDOPS</h1>

              <p className="text-gray-500 font-semibold text-xs md:text-md 2xl:text-lg">ERP & PMS for Construction firm</p>

            </div>

            <img src="/buildops.jpg" className={`project-image  w-full 2xl:w-[95%] mx-auto h-[150px] sm:h-[250px]  md:h-[350px] 2xl:h-[450px] object-cover rounded-xl mt-6  md:mt-12 transition-transform duration-500  ease-in-out ${visibleImages[`project-image-1`] ? 'md:scale-110' : 'scale-100'}`} />
          </Link>

        </div>

        <div className="projects-3 h-auto w-full flex flex-col lg:flex-row justify-center items-center bg-black">

          <Link to="/product/2" className="w-full lg:w-1/3 h-[300px] sm:h-[450px] md:h-[600px] lg:h-[600px] 2xl:h-[720px] border border-gray-800  hover:bg-customblackhover flex flex-col justify-between items-start p-6 md:px-12 lg:px-8 xl:p-12 gap-2 md:gap-4">

            <div className="w-full flex flex-col justify-start items-start gap-2 md:gap-4">

              <h1 className="text-2xl md:text-3xl  2xl:text-4xl">STRIKES</h1>

              <p className="text-gray-500 font-semibold text-xs md:text-md 2xl:text-lg">App that Connect the Influencer and Brand and Audience</p>

            </div>

            <img src="/strikes.jpeg"  className={`project-image w-full md:w-[95%] mx-auto h-[150px] sm:h-[250px]  md:h-[300px] lg:h-[350px] 2xl:h-[450px] object-cover rounded-xl mt-6 md:mt-12  transition-transform duration-500 ease-in-out lg:my-4 
              ${visibleImages[`project-image-2`] ? 'md:scale-110' : 'scale-100'}`}  />
          </Link>

          <Link to="/product/1" className="w-full  lg:w-1/3 h-[330px] sm:h-[450px] md:h-[600px] lg:h-[600px] border 2xl:h-[720px] border-gray-800 flex flex-col hover:bg-customblackhover justify-between items-start p-6 md:px-8 xl:p-12 gap-2 md:gap-4">

          <div className="flex flex-col gap-2 md:gap-4 justify-start items-start">

            <h1 className="text-2xl md:text-3xl 2xl:text-4xl">Real-Time Machine Monitoring System</h1>

            <p className="text-gray-500 font-semibold text-xs md:text-md 2xl:text-lg">Monitorting system for your industry with hardware prototype combined software</p>
          </div>

            <img src="/real-time-machine-monitoring-product.jpg"  className={`project-image w-full md:w-[95%]  mx-auto h-[150px] sm:h-[250px]  md:h-[300px] lg:h-[350px] 2xl:h-[450px] object-cover rounded-xl mt-6 md:mt-12 transition-transform duration-500 ease-in-out lg:my-4 
              ${visibleImages[`project-image-3`] ? 'md:scale-110' : 'scale-100'}`}  />
          </Link>

          <div className="w-full lg:w-1/3 border border-gray-800 flex justify-center items-center h-[200px] sm:h-[500px]  lg:h-[600px] 2xl:h-[720px]">
            <Link to="/ourproducts" className="flex justify-center items-center rounded-none md:rounded-xl size-[100%] md:size-[90%] hover:size-[100%] hover:rounded-none ease-in-out bg-customgreen text-customblack text-xl 2xl:text-2xl gap-4 font-medium transition-all duration-500 group">
              View all Projects <FaArrowRightLong className="size-8 2xl:size-12 rounded-full bg-customblack p-2 text-customgreen  -rotate-45 group-hover:rotate-0 transition-transform duration-500 " />
            </Link>
          </div>

        </div>

      </section>
  )
}

export default FeaturedProjects
