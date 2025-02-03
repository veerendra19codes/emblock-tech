import { FaArrowRightLong, FaStarOfLife } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia";
import  { useEffect, useRef, useState } from 'react'

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


const Careers = () => {

  const jobs = [
    {
      id: 1,
      type: "Web Applications",
      title: "Front End Developer Intern",
      openPositions: 3,
      text: 'We are looking for passionate Front End Developer Interns to join our "Innovation Hub" and contribute to building dynamic, user-friendly web applications.',
      roleType: "Remote, 0-1 Year Experience",
      skillsRequired: "HTML, CSS, JavaScript, React/Angular, Tailwind CSS, Material UI",
    },
    {
      id: 2,
      type: "Design Prototype",
      title: "UI/UX Intern",
      openPositions: 1,
      text: 'Join our "Creative Lab" as a UI/UX Intern and help craft intuitive, visually stunning user experiences that leave a lasting impact.',
      roleType: "Remote, 0-1 Year Experience",
      skillsRequired: "Figma, Adobe XD, Wireframing, Prototyping",
    },
    {
      id: 3,
      type: "Marketing",
      title: "IoT Consulting Services",
      openPositions:2 ,
      text: '',
      roleType: "Remote, 0-1 Year Experience",
      skillsRequired: "Cold Calling, Client Management, Campaign Strategy, Lead Generation",
    },
  ];


  const steps = [
    {
      id: 1,
      name: "Understand",
      title: "A Team That Values Your Ideas",
      steps: [
        {
          id: 1,
          content: "We believe great ideas can come from anyone, and we listen to every voice."
        },
        {
          id: 2,
          content: "Your unique skills and perspectives will help shape the solutions we build."
        },
        {
          id: 3,
          content: "Collaboration and mutual respect are at the core of how we work."
        },
      ]
    },
    {
      id: 2,
      name: "Plan",
      title: "Shared Vision for Growth",
      steps: [
        {
          id: 1,
          content: "Together, we’ll map out a career path that aligns with your aspirations."
        },
        {
          id: 2,
          content: "We encourage brainstorming and innovative thinking to tackle challenges."
        },
        {
          id: 3,
          content: "You’ll contribute to projects that make a real-world impact while growing your expertise."
        },
      ]
    },
    {
      id: 3,
      name: "Execute",
      title: "A Culture of Creativity and Excellence",
      steps: [
        {
          id: 1,
          content: "Work on exciting, cutting-edge technologies that keep you ahead of the curve."
        },
        {
          id: 2,
          content: "Collaborate with a team that’s passionate about solving problems creatively."
        },
        {
          id: 3,
          content: "Celebrate achievements together, knowing your work drives meaningful results."
        },
      ]
    },
    {
      id: 4,
      name: "Deliver",
      title: "Building Futures, Together",
      steps: [
        {
          id: 1,
          content: "Experience a supportive environment where your growth is a priority."
        },
        {
          id: 2,
          content: "Be part of a company that values long-term relationships and team success."
        },
        {
          id: 3,
          content: "See your ideas come to life and contribute to solutions that shape industries."
        },
      ]
    },

  ];


  const firstJobRef = useRef(null);

  const scrollToFirstJob = () => {
    firstJobRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full overflow-x-hidden">
      <section className="bg-[url('/herobg.jpg')] bg-cover bg-center bg-no-repeat bg- w-full flex flex-col p-6 md:px-[10%] justify-start items-start md:pt-[5%]">

        <AnimatedElement>

        <button className=" rounded-full py-2 px-4 bg-transparent border-2 border-gray-400 font-semibold text-sm md:text-lg">We are hiring!</button>
        </AnimatedElement>

        <AnimatedElement delay={200}>

        <h1 className="w-full md:w-[90%] text-[25px] md:text-[40px] lg:text-[60px] font-normal flex-wrap leading-tight my-4">
          Shape the Future of Technology While Building Your Career with Us
        </h1>
        </AnimatedElement>
        {/* <h1 className="text-[15px] md:text-[60px] font-normal w-full flex-wrap leading-none">
          Building Your Career with Us
        </h1> */}

        <AnimatedElement delay={400}>

        <p className="text-gray-500 font-medium text-sm md:text-lg lg:text-2xl w-full md:w-[90%]  md:mt-4">
          At Emblock Tech, we&apos;re creating innovative solutions and fostering growth. Join a team where your ideas matter, your skills grow, and your impact lasts. Let&apos;s build the future together!
        </p>
        </AnimatedElement>

        <button className="rounded-full p-2 pl-4 md:pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium mt-8 mb-4 md:my-12" onClick={scrollToFirstJob}>
          Connect With Us
          <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
        </button>
      </section>

      <section className="h-fit w-full important-advisory bg-black px-6 py-12 md:p-[10%] flex flex-col justify-start items-start">
        <div className="flex gap-2 justify-center items-center my-2">
            <span className="bg-lime-400 text-black size-2 md:size-3 rounded-full">.</span>
            <p className="text-md lg:text-lg font-semibold text-gray-400">Important Advisory</p>
          </div>

          <div className="flex justify-center items-start flex-col gap-2 leading-none ">
            <h1 className="w-full md:w-[80%] text-[25px] lg:text-[60px] text-white ">
              Official Job Posting Channels and Application Process Into Innovation
            </h1>
            {/* <h1 className="text-[35px] lg:text-[60px] text-white leading-none">
              
            </h1> */}
          </div>

          <div className="text-gray-400 text-xs md:text-lg font-medium flex flex-col justify-start items-start mt-8 md:mt-24">
            <h1>Dear Aspirants,</h1>

            <p className="mt-4">
              We&apos;re excited about your interest in joining our team! To ensure your application is considered, please follow our official application process:
            </p>
            <p className="w-full flex flex-row flex-wrap justify-start items-start gap-2">
              <GoDotFill size={8} className="mt-2" />
              <span className="w-[90%] md:w-[95%]">
                Email Your Resume: Send your updated resume to our official email address.
              </span>
            </p>
            <p className="w-full flex flex-row flex-wrap justify-start items-start gap-2">
              <GoDotFill size={8} className="mt-2" />
              <span className="w-[90%] md:w-[95%]">
                Include Your Portfolio: Attach your GitHub profile, portfolio, or links to projects you&apos;re proud to showcase.
              </span>
            </p>
            <p className="w-full flex flex-row flex-wrap justify-start items-start gap-2">
              <GoDotFill size={8} className="mt-2" />
              <span className="w-[90%] md:w-[95%]">
                LinkedIn Profile: Don&apos;t forget to share your LinkedIn profile link for us to learn more about your professional journey.
              </span>
            </p>
            
            <p className="mt-4">
              Important Advisory:
            </p>
            <p className="w-full flex flex-row flex-wrap justify-start items-start gap-2">
              <GoDotFill size={8} className="mt-2" />
              <span className="w-[90%] md:w-[95%]">
                We post job openings exclusively on our official website, LinkedIn, and recognized platforms. Be cautious of unauthorized postings elsewhere.
              </span>
            </p>
            <p className="w-full flex flex-row flex-wrap justify-start items-start gap-2">
              <GoDotFill size={8} className="mt-2" />
              <span className="w-[90%] md:w-[95%]">
                Applications submitted through unofficial channels will not be considered.
              </span>
            </p>
            
            <p className="my-4">
              Thank you for your interest in Emblock Tech. We look forward to exploring your talent and potential!
            </p>

            <p>
              Best regards,
            </p>
            <p>
              TEAM EMBLOCK
            </p>
          </div>
      </section>

      <section ref={firstJobRef} className="jobs w-full bg-white p-6 md:p-32 felx flex-col justify-start items-start">
        {jobs.map((job, index) => (
          <div key={job.id} id={job.id} ref={index === 0 || job.id == 1 ? firstJobRef : null} className={`w-full flex flex-col justify-between items-start py-12 ${job.id != 1 ? "border-t border-black" : ""}`}>

            <div className="w-full flex  flex-col md:flex-row justify-between items-start gap-4">

              <div className="flex flex-col justify-start items-start">

                <div className="w-full flex gap-2 justify-start items-center">
                  <span className="bg-lime-400 text-white size-2 md:size-3 rounded-full">.</span>
                  <p className="text-md lg:text-lg font-semibold text-gray-400">{job.type}</p>
                </div>

                <div className="flex justify-center items-start flex-col gap-2 leading-none ">
                  <h1 className="text-[25px] lg:text-[60px] text-black leading-none">
                    {job.title}
                  </h1>
                </div>

              </div>

              <Link to={`/careers/${job.id}`} className="w-fit rounded-full p-2 pl-4 md:pl-6  text-md md:text-xl whitespace-nowrap text-black bg-customgreen hidden md:flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium">
                Apply Now
                <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
              </Link>
            </div>

            <button className=" rounded-full py-2 px-4 text-xs md:text-lg bg-transparent border-2 border-gray-400 font-semibold my-4">{job.openPositions} open positions</button>

            <p className="text-gray-500 font-medium text-sm md:text-lg text-start my-4">
              {job.text}
            </p>

            <p className="flex flex-row gap-2 justify-start items-start font-medium text-xs md:text-lg mt-4">
              <span className="text-gray-500">Role Type: </span>
              <p className="text-black flex flex-wrap">{job.roleType}</p>
            </p>

            <p className="flex flex-row gap-2 justify-start items-start font-medium text-xs md:text-lg mt-4">
              <span className="text-gray-500">Skills Required: </span>
              <p className="text-black flex flex-wrap">{job.skillsRequired}</p>
            </p>

            <Link to={`/careers/${job.id}`} className="rounded-full p-1 md:p-2 pl-4   md:pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen md:hidden flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium mt-8">
                Apply Now
                <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
              </Link>
          </div>
        ))}
      </section>

      <section  className="how-we-work w-full h-full flex flex-col justify-center items-center bg-black text-white pb-24">

        {/* 1 */}
          <AnimatedElement>

        <div className="feature-hero w-full flex flex-col gap-4 justify-center  items-start pl-4 md:px-24 py-12 lg:py-40 bg-black animate-fadeInUp">

          <div className="flex gap-2 justify-center items-center">
            <span className="bg-lime-400 text-black size-2 md:size-3 rounded-full">.</span>
            <p className="text-md lg:text-lg font-semibold text-gray-400">Process</p>
          </div>

          <div className="flex justify-center items-start flex-col gap-2 leading-none ">
            <h1 className="text-[25px] lg:text-[90px] text-white leading-none">
              Why work with us?
            </h1>
          </div>

        </div>
        </AnimatedElement>

        <div className="stpes flex flex-col w-full bg-black px-6  lg:px-24">
          {/* 2 */}
          {steps.map((step) => (
          <AnimatedElement delay={step.id*100} key={step.id}>
            <div  className="step py-8  lg:py-16 flex flex-col lg:flex-row w-full justify-center items-start border-t-2 border-gray-900 gap-2">

              <div className="w-full lg:w-[20%] flex justify-start items-center lg:items-start">
                  <button className="w-fit button py-2 px-4 border border-gray-800 rounded-full text-md md:text-lg">{step.name}</button>
              </div>

              <h1 className="w-full lg:w-[10%] step-count text-2xl lg:text-3xl font-semibold flex">
                  <span className="text-customgreen">{"/"}</span> 0{step.id}
              </h1>

              <div className="description flex flex-col gap-2 w-full lg:w-[70%] items-start justify-start">
                  <h1 className="text-white text-lg md:text-2xl pb-2">{step.title}</h1>
                  {step.steps.map((s) => (
                    <p key={s.id} className="text-gray-400 flex justify-center items-start gap-2 md:pl-4 text-sm md:text-lg"><FaStarOfLife className="text-customgreen size-3 md:size-4 mt-2" />{s.content}</p>
                  ))}
                
              </div>

            </div>
          </AnimatedElement>
          ))}         
        </div>
        
        <div className="cards flex flex-col md:flex-row justify-center items-center w-full gap-6 p-4 lg:p-24">

          <AnimatedElement delay={800}>
            <div className="card w-full rounded-xl flex flex-row md:flex-col justify-between items-center bg-customgreen p-6 lg:p-12 h-[100px] md:h-[280px]">
                <h1 className="text-[60px] md:text-[4xl] lg:text-[80px] text-start w-full text-customblack font-medium">95%</h1>
                <div className="w-full flex flex-col justify-end items-end">
                  <p className="text-end w-full text-customgray font-semibold text-sm md:text-lg">Percent</p>
                  <p className="text-end w-full text-green-700 text-sm md:text-xl fotnsembold">Customer Satisfaction</p>
                </div>
            </div>
          </AnimatedElement>

          {/* 7 */}
          <AnimatedElement delay={700}>
            <div className="card w-full rounded-xl flex flex-row md:flex-col justify-between items-center bg-customblack p-6 lg:p-12 h-[100px] md:h-[280px]">
                <h1 className="text-[60px] md:text-[4xl] lg:text-[80px] text-start w-full text-white font-medium">5+</h1>
                <div className="w-full flex flex-col justify-between items-end">
                  <p className="text-end w-full  font-semibold text-gray-500 text-sm md:text-lg">Years</p>
                  <p className="text-end w-full text-gray-500 text-sm md:text-xl font-semibold">of Experience</p>
                </div>
            </div>
          </AnimatedElement>

          {/* 8 */}
          <AnimatedElement delay={800}>
            <div className="card w-full rounded-xl flex flex-row md:flex-col justify-between items-center bg-gray-200 p-6 lg:p-12 h-[100px] md:h-[280px]">
                <h1 className="text-[60px]  md:text-[4xl] lg:text-[80px] text-start w-full text-customblack font-medium">60+</h1>
                <div className="w-full flex flex-col justify-between items-end">
                  <p className="text-end w-full text-customblack font-semibold text-sm md:text-lg">Projects</p>
                  <p className="text-end w-full text-green-700 font-semibold text-sm md:text-xl">Completed</p>
                </div>
            </div>
          </AnimatedElement>

          

        </div>

      </section>


      <SocialMedia />
    </div>
  )
}

export default Careers
