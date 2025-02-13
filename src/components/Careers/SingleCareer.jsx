import { FaArrowRightLong, FaStarOfLife } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom"
import { jobs } from "../../data";
import { GoDotFill } from "react-icons/go";
import { useEffect, useRef, useState } from "react";


const AnimatedElement = ({ children, delay = 0, className }) => {
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
      className={`transform transition-all duration-700 w-full ${className} ${
        isVisible 
          ? `opacity-100 translate-y-0 delay-[${delay}ms]` 
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};


const SingleCareer = () => {
    const { id } = useParams();
    console.log("id: ", id);


  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <section className="bg-[url('/herobg.jpg')] bg-cover bg-center bg-no-repeat w-full flex flex-col p-6 md:px-[10%] justify-start items-start md:py-[5%]">

      <AnimatedElement>

        <button className=" rounded-full py-2 px-4 bg-transparent border-2 border-gray-400 font-semibold text-sm md:text-lg">We are hiring!</button>
      </AnimatedElement>

      <AnimatedElement delay={200}>

        <h1 className="w-full md:w-[90%] text-[25px] md:text-[40px] lg:text-[60px] font-normal flex-wrap leading-none my-2 md:my-4">
          {jobs[id-1].title} 
        </h1>
        <h1 className="w-full md:w-[90%] text-[25px] md:text-[40px] lg:text-[60px] font-normal flex-wrap leading-none md:my-4">
          ({jobs[id-1].openPositions} Positions)
        </h1>
      </AnimatedElement>

      <AnimatedElement delay={400}>

        {jobs[id-1].details.map((detail) => (
          <p key={detail.id} className="text-gray-500 font-medium text-xs md:text-xl w-full md:w-full mt-4 md:mt-8">
                {detail.line}
            </p>
        ))}
        </AnimatedElement>

        <AnimatedElement delay={800}>

        <p className="flex justify-start items-start gap-2 md:gap-4 text-lg md:text-2xl font-medium mt-12">
            <span className=" text-black text-xs md:text-lg whitespace-nowrap">Role Type:</span>
            <span className="text-gray-500  text-xs md:text-lg flex flex-wrap">{jobs[id-1].roleType}</span>
        </p>
        <p className="flex justify-start items-start gap-2 md:gap-4 text-lg md:text-2xl font-medium mt-4">
            <span className=" text-black  text-xs md:text-lg whitespace-nowrap">Skills Required:</span>
            <span className="text-gray-500 text-xs md:text-lg flex flex-wrap">{jobs[id-1].skillsRequired}</span>
        </p>
        </AnimatedElement>
      </section>

      <section className="details bg-black w-full flex flex-col ">
        <div className="w-full px-6 py-12 md:px-32 md:py-16 key-responsibilities flex flex-col gap-4 justify-start items-start border-b border-gray-700">
          <h1 className="text-white text-lg md:text-2xl font-medium">
            Key Responsibilities
          </h1>
          {jobs[id-1].keyResponsibilities.map((k) => (
            <p key={k.id} className="flex flex-row w-full gap-2 justify-start items-start ">
              <FaStarOfLife className="text-customgreen size-3 md:size-4 mt-2" />
              <p className="w-[90%] md:w[95%] text-gray-500 font-semibold text-sm md:text-xl">
              {k.text}
              </p>
            </p>
          ))}
        </div>

        <div className="w-full px-6 py-12 md:px-32 md:py-16 basic-qualifications flex flex-col gap-4 justify-start items-start border-b border-gray-700">
          <h1 className="text-white text-lg md:text-2xl font-medium">
            Basic Qualifications
          </h1>
          {jobs[id-1].basicQualifications.map((b) => (
            <p key={b.id} className="flex flex-row w-full gap-2 justify-start items-start ">
              <FaStarOfLife className="text-customgreen size-3 md:size-4 mt-2" />
              <p className="w-[90%] md:w[95%] text-gray-500 font-semibold text-sm md:text-xl">
              {b.text}
              </p>
            </p>
          ))}
        </div>

        <div className="w-full px-6 py-12 md:px-32 md:py-16 preferred-qualifications flex flex-col gap-4 justify-start items-start border-b border-gray-700">
          <h1 className="text-white text-lg md:text-2xl font-medium">
            Preferred Qualifications
          </h1>
          {jobs[id-1].prefferedQualifications.map((p) => (
            <p key={p.id} className="flex flex-row w-full gap-2 justify-start items-start ">
              <FaStarOfLife className="text-customgreen size-3 md:size-4 mt-2" />
              <p className="w-[90%] md:w[95%] text-gray-500 font-semibold text-sm md:text-xl">
              {p.text}
              </p>
            </p>
          ))}
        </div>

        <div className="w-full px-6 py-12 md:px-32 md:py-16 why-join-us flex flex-col gap-4 justify-start items-start border-b border-gray-700">
          <h1 className="text-white text-lg md:text-2xl font-medium">
            Why Join Us?
          </h1>
          {jobs[id-1].whyJoinUs.map((w) => (
            <p key={w.id} className="flex flex-row w-full gap-2 justify-start items-start ">
              <FaStarOfLife className="text-customgreen size-3 md:size-4 mt-2" />
              <p className="w-[90%] md:w[95%] text-gray-500 font-semibold text-sm md:text-xl">
              {w.text}
              </p>
            </p>
          ))}
        </div>
      </section>

      <section className="howtoapply w-full text-black bg-gray-100 flex flex-col justify-center items-start px-6 py-12 md:p-32">
          <div className="flex gap-2 justify-center items-center">
            <span className="bg-lime-400 text-white size-2 md:size-3 rounded-full">.</span>
            <p className="text-md lg:text-lg font-semibold text-gray-400">Important Advisory</p>
          </div>

          <div className="flex justify-center items-start flex-col gap-2 leading-none ">
            <h1 className="w-full  text-[25px] md:text-[40px] lg:text-[60px] text-black leading-none font-normal">
              How to apply for this role ?
            </h1>
            
          </div>

          <p className="text-sm md:text-3xl font-medium text-black my-8">
            At Emblock Tech, we believe in hiring individuals who are truly passionate about what they do. To ensure we find the best fit, we follow a structured application process. Please carefully follow the steps below to complete your application:
          </p>

          <h1 className="text-sm md:text-2xl font-medium text-black my-4">
            Step 1: Submit Your Application via Email
          </h1>

          <p className="text-xs md:text-xl">Send an email with following details</p>
          <p className="flex items-center text-xs md:text-xl">📌 Subject Line: Application for {"["} Job Title {"]"} - {"["} Your Name {"]"}</p>

          <p className="flex items-center text-xs md:text-xl mt-4">📌 Email Content</p>
          <p className="text-xs md:text-xl flex items-center gap-2 ml-6"><GoDotFill className="size-2" />Introduction: Briefly introduce yourself</p>
          <p className="text-xs md:text-xl flex items-center gap-2 ml-6"><GoDotFill className="size-2" />Why you? Explain why you are interested in this role and why should we consider you</p>
          <p className="text-xs md:text-xl flex items-center gap-2 ml-6"><GoDotFill className="size-2" />Experience: Highlight your key skills and relevant experience</p>

          <p className="flex items-center text-xs md:text-xl mt-4">📌 Attachments (Mandatory)</p>
          <p className="text-xs md:text-xl flex items-center gap-2 ml-6"><GoDotFill className="size-2" />Resume (PDF format preferred), Portfolio, Github or other projects links, Linkedin profile</p>

          <div className="text-red-500 text-sm md:text-xl font-medium flex flex-col md:flex-row gap-2 items-start md:items-center my-4 justify-start w-full md:w-fit">
            <p className="w-full text-start">
              Send you application to:
            </p>
            <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=career@emblocktech.com" 
  target="_blank" 
  rel="noopener noreferrer"  className="rounded-full p-2 pl-4 md:pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium my-2 md:my-6 md:w-fit">
              career@emblocktech.com
              <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
            </a>
          </div>

          <h1 className="text-sm md:text-2xl font-medium text-black my-4">
            Step 2: Complete the online application form
          </h1>

          <p className="text-xs md:text-xl">To proceed further, you must also fill out the attached application form. This helps us understanc your skills, experience, and preferences better.</p>

          <div className="text-red-500 text-sm md:text-xl font-medium flex  flex-col md:flex-row gap-2 items-start md:items-center justify-start w-full md:w-fit my-4">
            <p className="w-full text-start">
              Google form Link: 
            </p>
            <a href="https://forms.gle/AAaXr7QN7KJKeSNj9" target="_blank" className="rounded-full p-2   pl-4 md:pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium my-0 md:my-6 w-fit">
              Link
              <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
            </a>
          </div>

          <p className="text-sm md:text-2xl font-medium text-black mt-8 md:mt-16">
            What Happens Next?
          </p>
          <p className="text-sm md:text-2xl font-medium text-black ">
            Once we recieve your email and completed form our team will review your application. If shortlisted, we will reach out to you for the next steps.
          </p>
          <p className="text-sm md:text-2xl font-medium text-black">
            We are excited to review your application and explore the possibility of working together. Best of Luck 🚀

          </p>
          <p className="text-sm md:text-2xl font-medium text-black mt-8 ">
            Warm Regards,
          </p>
          <p className="text-sm md:text-2xl font-medium text-black ">
            Team Emblock Tech
          </p>
      </section>   
    </div>
  )
}

export default SingleCareer
