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

  return (
    <section ref={sectionRef}   className="featured-projects w-full h-full  flex flex-col justify-center items-center bg-customblack text-white ">

        {/* <div className="marquee  w-full shadow-xl relative group">
          <div className="flex h-16 md:h-24 gap-8 justify-center items-center animate-marquee lg:animate-marqueeslow whitespace-nowrap ">
            
             {numbers.map((num) => (
              <div key={num} className="flex h-full gap-4 lg:gap-8 justify-center items-center w-auto mx-0 lg:mx-4">

                <p className="text-xl lg:text-3xl leading-none"><span className="text-customgreen">{">"}{stats[num%4].first}/</span> {stats[num%4].second}</p>
                <img src="/star.svg" className="size-4 lg:size-8 text-customgreen" />
              </div>
             ))}
            

            
          </div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
        </div> */}

        <div className=" feature-hero w-full flex justify-start  items-center  py-12 lg:py-40 bg-black ">

          <div className="w-full md:w-1/2 flex flex-col gap-4 lg:gap-8 justify-center items-start pl-6 lg:pl-24">

            <div className={`${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} 
            flex gap-2 justify-center items-center transition-all duration-1000 ease-out`}>
              <span className="bg-lime-400 text-black size-2 md:size-3 rounded-full">.</span>
              <p className="text-xs md:text-lg font-semibold text-gray-400">Featured projects</p>
            </div>

            <div className={`${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} 
            flex justify-center items-start flex-col gap-2 lg:gap-12 leading-none transition-all duration-1000 ease-out delay-200`}>
              <h1 className="text-2xl md:text-4xl lg:text-[80px] text-white leading-none whitespace-nowrap">
                Turning Imagination
              </h1>
              <h1 className="text-2xl md:text-4xl lg:text-[80px] text-white leading-none">
                Into Innovation
              </h1>
            </div>

            <Link to="/contactus" className={`${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} 
            rounded-full p-2  pl-6 text-lg md:text-xl text-black bg-customgreen flex gap-4 justify-center items-center mt-8 md:mt-16 shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium`}>Become a client <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> </Link>

          </div>

          {/* <div className="hidden right w-1/2 h-auto md:flex justify-center items-center">
             <img src="/bulb.png" className="md:size-[400px] lg:size-[600px]" />
          </div> */}

        </div>

        <div className="projects-2 w-full flex flex-col md:flex-row justify-center items-center bg-black">

          <Link to="/product/1" className="w-full md:w-1/2 border border-gray-800  hover:bg-customblackhover flex flex-col justify-center items-start p-6 md:p-16  gap-2 md:gap-4">

            <h1 className="flex justify-start items-center gap-6 text-lg md:text-xl"> 
              <div><span className="text-customgreen">{"{"}</span> E-commerce Saas <span className="text-customgreen">{"}"}</span>
              </div> 
              <div className="text-gray-400">5/31/24</div>
            </h1>

            <h1 className="text-2xl md:text-3xl">EDGECARTS</h1>

            <p className="text-gray-500 font-semibold text-xs md:text-md">Web design & Web development</p>

            <img src="/image1.png" className={`project-image  w-full h-[150px] md:h-[400px] rounded-xl mt-6 md:mt-12 transition-transform duration-500 ease-in-out ${visibleImages[`project-image-0`] ? 'md:scale-110' : 'scale-100'}`}  />
          </Link>

          <Link to="/product/2" className="w-full md:w-1/2 border border-gray-800 flex flex-col hover:bg-customblackhover justify-center items-start p-6 md:p-16 gap-2 md:gap-4">

            <h1 className="flex justify-start items-center gap-6 text-lg md:text-xl"> 
              <div><span className="text-customgreen">{"{"}</span> Saas <span className="text-customgreen">{"}"}</span>
              </div> 
              <div className="text-gray-400">8/8/24</div>
            </h1>

            <h1 className="text-2xl md:text-3xl">BUILDOPS</h1>

            <p className="text-gray-500 font-semibold text-xs md:text-md">ERP & PMS for Construction firm</p>

            <img src="/image2.jpg" className={`project-image  w-full h-[150px]  md:h-[400px] rounded-xl mt-6  md:mt-12 transition-transform duration-500  ease-in-out  ${visibleImages[`project-image-1`] ? 'md:scale-110' : 'scale-100'}`} />
          </Link>

        </div>

        <div className="projects-3 w-full flex flex-col md:flex-row justify-center items-center bg-black">

          <Link to="/product/3" className="w-full md:w-1/3 h-[350px] md:h-[600px] border border-gray-800  hover:bg-customblackhover flex flex-col justify-between items-start p-6 md:p-12 gap-2 md:gap-4">
          <div className="flex flex-col gap-4 justify-start items-start">

            <h1 className="flex justify-start items-center text-lg md:text-xl gap-6"> 
              <div><span className="text-customgreen">{"{"}</span> Mobile App <span className="text-customgreen">{"}"}</span>
              </div> 
              <div className="text-gray-400">6/20/24</div>
            </h1>

            <h1 className="text-2xl md:text-3xl whitespace-nowrap"> STRIKES</h1>

            <p className="text-gray-500 font-semibold text-xs md:text-md">App that Connect the Influencer and Brand and Audience</p>
          </div>


            <img src="/image1.png"  className={`project-image w-full h-[150px] md:min-h-[250px] rounded-xl mt-6 md:mt-12 transition-transform duration-500 ease-in-out 
              ${visibleImages[`project-image-2`] ? 'md:scale-110' : 'scale-100'}`}  />
          </Link>

          <Link to="/product/4" className="w-full md:w-1/3 h-[430px] md:h-[600px] border border-gray-800 flex flex-col hover:bg-customblackhover justify-between items-start p-6 md:p-12 gap-2 md:gap-4">
          <div className="flex flex-col gap-4 justify-start items-start">

            <h1 className="flex justify-start items-center text-lg md:text-xl gap-6"> 
              <div><span className="text-customgreen">{"{"}</span> Software Development <span className="text-customgreen">{"}"}</span>
              </div> 
              <div className="text-gray-400">7/13/24</div>
            </h1>

            <h1 className="text-2xl md:text-3xl">Real-Time Machine Monitoring System</h1>

            <p className="text-gray-500 font-semibold text-xs md:text-md">Monitorting system for your industry with hardware prototype combined software</p>
          </div>

            <img src="/image2.jpg"  className={`project-image w-full h-[150px] md:min-h-[250px] rounded-xl mt-6 md:mt-12 transition-transform duration-500 ease-in-out 
              ${visibleImages[`project-image-3`] ? 'md:scale-110' : 'scale-100'}`}  />
          </Link>

          <div className="w-full md:w-1/3 border border-gray-800 flex justify-center items-center h-[200px] md:h-[600px]">
            <Link to="/ourproducts" className="flex justify-center items-center rounded-none md:rounded-xl size-[100%] md:size-[90%] hover:size-[100%] hover:rounded-none ease-in-out bg-customgreen text-customblack text-xl gap-4 font-medium transition-all duration-500 group">
              View all Projects <FaArrowRightLong className="size-8 rounded-full bg-customblack p-2 text-customgreen  -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </Link>
          </div>

        </div>

      </section>
  )
}

export default FeaturedProjects
