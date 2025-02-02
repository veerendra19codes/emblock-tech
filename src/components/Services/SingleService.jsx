import { useEffect, useRef, useState } from 'react';
import { FaStarOfLife } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import {  Link, useParams } from "react-router-dom";

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

const SingleService = () => {

    const { id } = useParams();

    const services = [
        {
            id: 1,
            image: "/service1-image1.png",
            path: "/services/1",
            name: "Transform Your Business with a Winning IoT Strategy",
            text: "At Emblock Tech, we help businesses create a roadmap for IoT success. Our Strategic IoT Services are designed to align technology adoption with your unique goals, ensuring every investment drives measurable value.",
            category: "Strategy",
            industryFocus: "Brands",
            keyBenefits: "Enhanced Operational Efficiency",
            content: "We assess your business needs and design a custom IoT adoption plan, ensuring long-term scalability and ROI.",
            subparts: [
                {
                    id: 1,
                    image: "/service1-image1.png",
                    title: "Feasibility Studies",
                    content: "Before taking any major steps, we conduct detailed feasibility studies to assess the technical and financial viability of your IoT initiatives. Our team evaluates the compatibility of proposed IoT solutions with your existing infrastructure, operational processes, and business model. We also analyze costs, timelines, and potential risks to provide a clear picture of the project's sustainability. This thorough analysis helps mitigate risks and ensures that the implementation phase proceeds smoothly, delivering the intended results without unnecessary delays or unforeseen expenses."
                },
                {
                    id: 2,
                    image: "/service1-image2.png",
                    title: "",
                    content: ""
                },
            ],
            bottomText: [
                {
                    id: 1,
                    title: "Business Assessments",
                    content: "To help you unlock the true potential of IoT, we perform a detailed business assessment to identify areas where IoT-driven innovation can have the greatest impact. This involves analyzing your operations, workflows, and key performance indicators (KPIs) to pinpoint inefficiencies or missed opportunities. Based on this analysis, we recommend tailored IoT solutions that improve operational efficiency, enhance customer experiences, and create new revenue streams. By focusing on value-driven innovation, we ensure that every IoT initiative contributes to your business growth and overall success."
                },
            ],
            middle: {
                title: "Why Choose Our Strategic IoT Services?",
                subtitle: "Our Collaborative & Results-Driven Approach",
                points: [
                    {
                        id: 1,
                        text: "Tailored, data-driven strategies that fit your industry.",
                    },
                    {
                        id: 2,
                        text: "Cross-industry expertise ensures adaptable solutions.",
                    },
                    {
                        id: 3,
                        text: " Proven success in aligning IoT goals with business expansion.",
                    },
                ]
            }
        },
        {
            id: 2,
            image: "/service2-image1.png",
            path: "/services/2",
            name: "Innovating IoT Ecosystems with Next-Generation Solutions",
            text: "Welcome to Emblock Tech, your trusted partner in Technical IoT Services. We design, integrate, and secure advanced IoT ecosystems that fuel innovation, enhance efficiency, and drive measurable growth. From device provisioning to data analytics and cloud infrastructure, we deliver tailored solutions for seamless performance.",
            category: "Technical",
            industryFocus: "Brands",
            keyBenefits: "Enhanced Operational Efficiency",
            content: "Our Technical IoT Services are designed to create, integrate, and secure robust IoT ecosystems that drive your business forward.",
            subparts: [
                {
                    id: 1,
                    image: "/service2-image1.png",
                    title: "IoT Platform Development and Integration",
                    content: "IoT Platform Development and Integration"
                },
                {
                    id: 2,
                    image: "/service2-image2.png",
                    title: "Device and Sensor Provisioning",
                    content: "From selecting the right hardware to developing custom firmware, we handle every aspect of device and sensor provisioning. Our goal is to ensure your IoT devices perform optimally while maintaining the highest security standards. We manage the entire lifecycle of your devices, from initial setup to ongoing maintenance, ensuring reliable and consistent performance. This comprehensive approach minimizes downtime and maximizes the effectiveness of your IoT ecosystem."
                },
            ],
            bottomText: [
                
            ],
            middle: {
                title: "Enhance Your IoT Strategy with Emblock Tech",
                subtitle: "At Emblock Tech, we’re dedicated to empowering your business with the latest IoT technologies. Our comprehensive operational IoT Services ensure that every aspect of your IoT ecosystem is optimized for performance, security, and scalability. Partner with us to transform your operations, drive innovation, and stay ahead in today’s competitive landscape.",
                points: [
                    {
                        id: 1,
                        text: "TailOur wide range of services covers everything from platform development and device provisioning to data analytics and security solutions.",
                    },
                    {
                        id: 2,
                        text: "We ensure your IoT systems operate smoothly and efficiently, maximizing performance and minimizing downtime.",
                    },
                    {
                        id: 3,
                        text: " Protect your data and devices with our top-tier security solutions, safeguarding your IoT ecosystem against threats and vulnerabilities.",
                    },
                    {
                        id: 4,
                        text: "Our IoT platforms are designed to grow with your business, allowing for seamless scalability and adaptability to changing needs.",
                    },
                ]
            },
            bottom: {
                text: "At Emblock Tech, we deliver advanced technical IoT solutions tailored to your business needs. Our expertise includes developing and integrating scalable IoT platforms with your existing ERP and CRM systems, ensuring seamless operations. We provision reliable devices and sensors with robust security, and utilize AI-powered data analytics to transform raw data into actionable insights. Our secure cloud infrastructure supports real-time data processing and reliable backups, while our comprehensive security measures protect your entire IoT ecosystem from cyber threats. Partner with us to drive innovation and optimize your IoT initiatives.",
                image: "/service2-image3.png",
                points: [
                    {
                        id: 1,
                        title: "Data Collection and Analytics",
                        content: "Turn your raw IoT data into meaningful insights with our AI-powered analytics. We help you make informed decisions by transforming data into actionable business intelligence, driving growth and efficiency. Our solutions cover comprehensive data gathering, processing, and visualization, enabling you to understand trends and patterns within your data. With predictive analytics, we assist you in anticipating future outcomes and optimizing your operations accordingly."
                    },
                    {
                        id: 2,
                        title: "Cloud Services and Infrastructure Management",
                        content: "Our secure and scalable cloud solutions are built for IoT applications. We offer real-time data processing, reliable backups, and comprehensive infrastructure management to keep your IoT ecosystem running smoothly. Our cloud services ensure that your data is accessible, secure, and efficiently managed, supporting your business’s growth and adapting to your evolving needs. We provide robust support to maintain optimal performance and scalability of your cloud infrastructure."
                    },
                    {
                        id: 3,
                        title: "Security Solutions for IoT",
                        content: "Protecting your IoT ecosystem is our priority. We implement advanced data encryption, compliance protocols, and robust cybersecurity measures to keep your data and devices safe from threats. Our security solutions ensure that your IoT systems are resilient against cyber-attacks and compliant with industry standards. We continuously monitor and update our security measures to safeguard your business, giving you peace of mind to focus on your core operations."
                    }
                ]
            }
        },
        {
            id: 3,
            image: "/service3-image1.png",
            path: "/services/3",
            name: "Maximize Efficiency with Our IoT Operational Services",
            text: "At Emblock Tech, we help businesses streamline IoT deployment, monitoring, and maintenance to achieve maximum efficiency. Our Operational IoT Services are designed to optimize system performance and provide real-time insights that enhance productivity and drive business growth.",
            category: "Operational",
            industryFocus: "Brands",
            keyBenefits: "Enhanced Operational Efficiency",
            content: "Our Technical IoT Services are designed to create, integrate, and secure robust IoT ecosystems that drive your business forward.",
            subparts: [
                {
                    id: 1,
                    image: "/service3-image1.png",
                    title: "Custom IoT Application Development",
                    content: "We develop intuitive mobile and web applications that enable seamless interaction with your IoT ecosystem. Our custom applications are tailored to meet your specific business needs, ensuring a user-friendly experience and efficient management of your IoT devices. We prioritize scalability and integration, allowing your applications to grow alongside your business. Additionally, our solutions support various platforms, ensuring accessibility and flexibility for all users."
                },
                {
                    id: 2,
                    image: "/service3-image2.png",
                    title: "Connectivity Solutions and Management",
                    content: "Our team designs and manages reliable IoT networks, ensuring uninterrupted communication between your devices. We implement robust connectivity solutions that support scalable and secure data transmission, keeping your operations running smoothly. By leveraging the latest networking technologies, we ensure high availability and low latency for critical applications. Our proactive management approach minimizes downtime and optimizes network performance for sustained efficiency."
                },
            ],
            bottomText: [
                
            ],
            middle: {
                title: "Enhance Your IoT Strategy with Emblock Tech",
                subtitle: "At Emblock Tech, we’re dedicated to empowering your business with the latest IoT technologies. Our comprehensive operational IoT Services ensure that every aspect of your IoT ecosystem is optimized for performance, security, and scalability. Partner with us to transform your operations, drive innovation, and stay ahead in today’s competitive landscape.",
                points: [
                    {
                        id: 1,
                        text: "TailOur wide range of services covers everything from platform development and device provisioning to data analytics and security solutions.",
                    },
                    {
                        id: 2,
                        text: "We ensure your IoT systems operate smoothly and efficiently, maximizing performance and minimizing downtime.",
                    },
                    {
                        id: 3,
                        text: "Protect your data and devices with our top-tier security solutions, safeguarding your IoT ecosystem against threats and vulnerabilities.",
                    },
                    {
                        id: 3,
                        text: "Our IoT platforms are designed to grow with your business, allowing for seamless scalability and adaptability to changing needs.",
                    },
                ]
            },
            bottom: {
                text: "At Emblock Tech, we deliver advanced technical IoT solutions tailored to your business needs. Our expertise includes developing and integrating scalable IoT platforms with your existing ERP and CRM systems, ensuring seamless operations. We provision reliable devices and sensors with robust security, and utilize AI-powered data analytics to transform raw data into actionable insights. Our secure cloud infrastructure supports real-time data processing and reliable backups, while our comprehensive security measures protect your entire IoT ecosystem from cyber threats. Partner with us to drive innovation and optimize your IoT initiatives.",
                image: "/service3-image3.png",
                points: [
                    {
                        id: 1,
                        title: "Data Collection and Analytics",
                        content: "Turn your raw IoT data into meaningful insights with our AI-powered analytics. We help you make informed decisions by transforming data into actionable business intelligence, driving growth and efficiency. Our solutions cover comprehensive data gathering, processing, and visualization, enabling you to understand trends and patterns within your data. With predictive analytics, we assist you in anticipating future outcomes and optimizing your operations accordingly."
                    },
                    {
                        id: 2,
                        title: "Cloud Services and Infrastructure Management",
                        content: "Our secure and scalable cloud solutions are built for IoT applications. We offer real-time data processing, reliable backups, and comprehensive infrastructure management to keep your IoT ecosystem running smoothly. Our cloud services ensure that your data is accessible, secure, and efficiently managed, supporting your business’s growth and adapting to your evolving needs. We provide robust support to maintain optimal performance and scalability of your cloud infrastructure."
                    },
                    {
                        id: 3,
                        title: "Security Solutions for IoT",
                        content: "Protecting your IoT ecosystem is our priority. We implement advanced data encryption, compliance protocols, and robust cybersecurity measures to keep your data and devices safe from threats. Our security solutions ensure that your IoT systems are resilient against cyber-attacks and compliant with industry standards. We continuously monitor and update our security measures to safeguard your business, giving you peace of mind to focus on your core operations."
                    },
                ]
            }
        },
    ]

  return (
    <div className="flex flex-col 
    justify-center items-center w-full h-full   text-black bg-white">
        <AnimatedElement>

        <h1 className="text-[25px] md:text-[40px] lg:text-[60px] w-full text-start font-medium p-6 py-12 md:px-[10%] md:pt-[10%]">
            {services[id-1].name}
        </h1>
        </AnimatedElement>

        <AnimatedElement delay={200}>

        <p className="text-md md:text-2xl font-medium  p-6 md:px-[10%] mb-12">
            {services[id-1].text}
        </p>
        </AnimatedElement>

        <div className="w-full flex flex-col md:flex-row justify-between overflow-y-auto gap-8 p-6 md:px-[10%]">

            {/* this fixed  */}
            <div className="left w-full md:w-1/3 key-features flex flex-col justify-start items-start ">
                <div className="w-full flex flex-col justify-center items-start border-b border-gray-400 py-4 md:py-8">
                    <p className="text-gray-500 font-normal text-sm md:text-lg">
                        Category
                    </p>
                    <h2 className="text-customblack text-md md:text-xl font-medium">
                        {services[id-1].category}
                    </h2>
                </div>

                <div className="w-full flex flex-col justify-center items-start border-b border-gray-400 py-4 md:py-8">
                    <p className="text-gray-500 font-normal text-sm md:text-lg">
                        Industry Focus
                    </p>
                    <h2 className="text-customblack text-md md:text-xl  font-medium">
                        {services[id-1].industryFocus}
                    </h2>
                </div>

                <div className="w-full flex flex-col justify-center items-start  py-4 md:py-8">
                    <p className="text-gray-500 font-normal text-sm md:text-lg">
                        Key Benefits
                    </p>
                    <h2 className="text-customblack text-md md:text-xl  font-medium">
                        {services[id-1].keyBenefits}
                    </h2>
                </div>

                <Link to="/contactus" className="rounded-full p-2   pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group my-4 font-semibold">
                    Contact Us
                    <FaArrowRightLong className="bg-white text-customgray rounded-full size-10 p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
                </Link>
                
            </div>

            {/* this div max-h-[500px] and scrollable according to page scroll  */}
            <div className="details w-full md:w-2/3 flex flex-col gap-4 md:gap-6 justify-center items-start">

                <div className="w-full text-md md:text-xl text-gray-500 font-semibold leading-6">
                    {services[id-1].content}
                </div>
                
                {services[id-1].subparts.map((part) => (
                    <div key={part.id} className="w-full flex flex-col justify-center items-star gap-4 md:gap-6 my-6">
                        <img src={part.image} className="w-full h-[250px] lg:h-[400px] 2xl:h-[500px] object-cover rounded-xl" />
                        <h1 className="w-full text-lg md:text-2xl text-customgray font-semibold leading-6">
                            {part.title}
                        </h1>
                        <p className="w-full text-xs md:text-xl text-customgrayhover font-semibold">
                            {part.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {services[id-1].bottomText.length > 0  && (
            <div className="w-full flex-col justify-start items-start gap-8 p-6 py-12 md:px-[10%] md:pb-[10%]">
                {services[id-1].bottomText.map((b) => (
                    <div key={b.id} className="w-full flex flex-col justify-start items-start gap-4">
                        <h1 className="w-full text-lg md:text-2xl text-customgray font-semibold ">
                            {b.title}
                        </h1>
                        <p className="w-full text-xs md:text-xl text-customgrayhover font-semibold">
                            {b.content}
                        </p>
                    </div>
                ))}
            </div>
        )}


        {/* middle  */}
        <section className="p-6 py-24 md:px-[10%] md:pt-[10%] w-full bg-black text-white flex flex-col justify-start items-start gap-2 md:gap-8">
            <h1 className="text-[25px] md:text-[60px] w-full text-start font-medium my-4 md:my-0">
                {services[id-1].middle.title}
            </h1>
            <p className="text-md md:text-xl font-medium w-full text-start my-2 md:my-0 mb-4 md:mb-0">
                {services[id-1].middle.subtitle}
            </p>

            {services[id-1].middle.points.map((p) => (
                    <p key={p.id} className="w-full flex flex-row justify-start items-start gap-2 md:gap-4 flex-wrap text-xs md:text-lg text-gray-400">
                        <FaStarOfLife className="text-customgreen size-2 mt-2 md:size-4 " /> 
                        <span className="w-[90%] lg:w-[95%]">
                            {p.text}
                        </span>
                    </p>
            ))}
            

            <button className="rounded-full p-2   pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group mt-16  md:my-4 font-semibold">
                Contact Us
                <FaArrowRightLong className="bg-white text-customgray rounded-full size-10 p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
            </button>
        </section>

        {/* bottom  */}
        {services[id-1].bottom?.text && (

        <section className="w-full p-6 py-24 md:p-[10%] flex flex-col justify-start items-start gap-16">
            <h1 className="text-start w-full text-wrap text-sm md:text-xl font-medium">
                {services[id-1].bottom.text}
            </h1>

            <div className="w-full flex flex-col md:flex-row justify-between items-start">
                <div className="w-full md:w-1/2 flex justify-start items-center">
                    <img src={services[id-1].bottom.image} className="w-full md:w-[80%] h-[250px] lg:h-[400px] 2xl:h-[500px] object-cover rounded-xl" />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-8 mt-8 md:mt-0">
                    {services[id-1].bottom.points.map((p) => (
                        <div key={p.id} className="flex flex-col w-full justify-start items-start gap-4">
                            <h1 className="text-sm md:text-xl w-full text-wrap font-medium">
                                {p.title}
                            </h1>
                            <p className="text-xs md:text-lg text-gray-500 font-medium">
                                {p.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        )}



        {/* other solutions  */}
        <div className="w-full flex flex-col justify-center items-start gap-0 mt-8 p-6 md:p-[10%]">
            <AnimatedElement delay={600} className="w-full  flex gap-2 justify-start items-center">
                <span className="bg-customgreen  size-2 md:size-3 rounded-full text-white">.</span>
                <p className="text-md md:text-lg font-semibold text-gray-400">Our services</p>
            </AnimatedElement>
            
            <h1 className="text-[25px] md:text-[40px] lg:text-[60px]">
                Our Extended services
            </h1>

            <div className="w-full flex flex-col md:flex-row gap-4 mt-12">
                {services.filter((service) => service.id != id).map((service, index) => (
                    <Link to={service.path} key={service.id} className="card w-full md:w-1/3 ">
                        <AnimatedElement delay={1000+(200*index)} className="flex flex-col justify-between items-start p-4 border border-gray-400 rounded-xl h-[400px] md:h-[550px]">


                    <div className="flex flex-col justify-start  items-start gap-2 md:gap-4">

                    <h1 className="text-xl md:text-2xl 2xl:text-3xl uppercase font-medium">
                        {service.name}
                    </h1>
                    <p className="text-customgrayhover font-semibold text-sm md:text-lg">
                        {service.subcontent}
                    </p>
                    </div>
                    <img src={service.image} className="w-full h-[200px] sm:h-[250px] lg:h-[350px] rounded-xl object-cover" />
                        </AnimatedElement>
                    </Link>
                ))}
                
                
            </div>
        </div>
    </div>
  )
}

export default SingleService
