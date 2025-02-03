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

    const [isLeftSticky, setIsLeftSticky] = useState(false)
  const leftComponentRef = useRef(null)
  const rightComponentRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (leftComponentRef.current && rightComponentRef.current) {
        const leftRect = leftComponentRef.current.getBoundingClientRect()
        const rightRect = rightComponentRef.current.getBoundingClientRect()

        if (rightRect.top <= 0 && rightRect.bottom > window.innerHeight) {
          setIsLeftSticky(true)
        } else {
          setIsLeftSticky(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


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
                        title: "Industrial IoT (IIoT) Solutions",
                        content: "At Emblock Tech, we provide cutting-edge Industrial IoT (IIoT) solutions tailored for manufacturing, logistics, and energy industries. Our advanced systems enable real-time monitoring, predictive maintenance, and automation to enhance operational efficiency and minimize downtime. By integrating AI-driven analytics and secure cloud infrastructure, we help businesses optimize workflows, reduce costs, and improve asset utilization. Our IIoT solutions ensure seamless data synchronization across devices, allowing for better decision-making and increased productivity."
                    },
                    {
                        id: 2,
                        title: "IoT in Supply Chain & Logistics",
                        content: "Maximize efficiency in supply chain and logistics with Emblock Tech’s IoT-driven solutions. Our technology enables real-time inventory tracking, automated fleet management, and predictive analytics to reduce delays and improve delivery performance. With smart sensors and cloud integration, businesses gain full visibility into their supply chain, ensuring better resource allocation and streamlined operations. Our AI-powered forecasting tools help businesses mitigate risks, optimize routes, and enhance overall supply chain resilience."
                    },
                    {
                        id: 3,
                        title: "ERP Solutions",
                        content: "At Emblock Tech, we offer comprehensive ERP solutions that unify business operations across industries such as manufacturing, textiles, retail, and construction. Our ERP systems centralize key processes like inventory control, financial tracking, and supply chain management, improving efficiency and accuracy. IoT integration enables real-time data collection from industrial devices, allowing businesses to automate workflows and make data-driven decisions. Our scalable ERP solutions are designed to adapt to your business growth, ensuring seamless connectivity and operational excellence."
                    },
                    {
                        id: 4,
                        title: "CRM Solutions",
                        content: "Strengthen customer relationships with Emblock Tech’s CRM solutions, designed for industries like retail, real estate, and service sectors. Our intelligent lead tracking and customer engagement platforms help businesses streamline communication, personalize marketing efforts, and boost customer loyalty. For IoT-enabled businesses, we offer real-time data integration, allowing you to analyze customer behavior, automate sales processes, and enhance customer experiences. With AI-driven insights and secure cloud-based CRM platforms, businesses can optimize their customer interactions and drive long-term growth."
                    },
                    
                ],
                quote: "Empower your business with Emblock Tech’s advanced IoT, ERP, and CRM solutions—delivering seamless automation, enhanced decision-making, and improved operational efficiency. 🚀"
            }
        },
    ]

  return (
    <div className="flex flex-col 
    justify-center items-center w-full h-full   text-black bg-white py-6 md:py-[5%]">
        <AnimatedElement>

        <h1 className="text-[25px] md:text-[40px] lg:text-[60px] w-full md:w-[95%] text-start leading-tight font-normal px-6 md:px-[10%]">
            {services[id-1].name}
        </h1>
        </AnimatedElement>

        <AnimatedElement delay={200}>

        <p className="text-sm md:text-xl w-full md:w-[90%] font-medium  px-6 md:px-[10%] mt-4 md:mt-[2%]">
            {services[id-1].text}
        </p>
        </AnimatedElement>

        <div className="w-full flex flex-col md:flex-row justify-between overflow-y-auto gap-8 p-6 md:px-[10%] mt-8">

            {/* this fixed  */}
            <div
         
          className={`left w-full md:w-[30%] key-features flex flex-col justify-start items-start ${
            isLeftSticky ? "md:fixed md:top-0 md:w-[calc(30%-8rem)]" : ""
          }`}
        >
                <div className="w-full flex flex-col justify-center items-start border-b border-gray-400 pb-4 md:py-8">
                    <p className="text-gray-500 font-normal text-sm md:text-lg">
                        Category
                    </p>
                    <h2 className="text-customblack text-lg font-medium">
                        {services[id-1].category}
                    </h2>
                </div>

                <div className="w-full flex flex-col justify-center items-start border-b border-gray-400 py-4 md:py-8">
                    <p className="text-gray-500 font-normal text-base md:text-xl">
                        Industry Focus
                    </p>
                    <h2 className="text-customblack text-lg  font-medium">
                        {services[id-1].industryFocus}
                    </h2>
                </div>

                <div className="w-full flex flex-col justify-center items-start  py-4 md:py-8">
                    <p className="text-gray-500 font-normal text-base md:text-xl">
                        Key Benefits
                    </p>
                    <h2 className="text-customblack text-lg  font-medium">
                        {services[id-1].keyBenefits}
                    </h2>
                </div>

                <Link to="/contactus" className="rounded-full p-2  pl-4  md:pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group my-4 font-semibold">
                    Contact Us
                    <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
                </Link>
                
            </div>



        {isLeftSticky && <div className="hidden md:block w-1/3" />}


            {/* this div max-h-[500px] and scrollable according to page scroll  */}
            <div  className="details w-full md:w-[65%] flex flex-col gap-4 md:gap-6 justify-center items-start">

                <div className="w-full text-md md:text-xl text-gray-500 font-semibold leading-6">
                    {services[id-1].content}
                </div>
                
                {services[id-1].subparts.map((part) => (
                    <div key={part.id} className="w-full h-fit flex flex-col justify-center items-star gap-4 md:gap-6 md:my-6">
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
            <div className="w-full flex-col justify-start items-start gap-8 p-6 md:py-12 md:px-[10%] md:pb-[10%]">
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
        <section className="h-fit p-6 py-12 md:px-[10%] md:pt-[10%] w-full bg-black text-white flex flex-col justify-start items-start md:gap-8">
            <h1 className="text-[25px] md:text-[60px] w-full text-start font-medium mb-4 md:my-0">
                {services[id-1].middle.title}
            </h1>
            <p className="text-md md:text-xl font-medium w-full text-start   mb-4 md:mb-0">
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
            

            <Link to="/contactus" className="rounded-full p-2  pl-4  md:pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group mt-8 md:my-16  font-semibold">
                Contact Us
                <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
            </Link>
        </section>

        {/* bottom  */}
        {services[id-1].bottom?.text && (

        <section className="w-full px-6 py-12 md:py-24 md:p-[10%] flex flex-col justify-start items-start ">
            <h1 className="text-start w-full text-wrap text-sm md:text-xl font-medium">
                {services[id-1].bottom.text}
            </h1>

            <div className="w-full flex flex-col lg:flex-row justify-between items-start mt-16">
                <div className="w-full lg:w-1/2 flex justify-start items-center">
                    <img src={services[id-1].bottom.image} className="w-full mx-auto md:w-[80%] h-[250px] lg:h-[800px] 2xl:h-[800px] object-cover rounded-xl mb-8" />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-8 mt-8 md:mt-0">
                    {services[id-1].bottom.points.map((p) => (
                        <div key={p.id} className="flex flex-col w-full justify-start items-start gap-4">
                            <h1 className="text-md md:text-xl w-full text-wrap font-medium">
                                {p.title}
                            </h1>
                            <p className="text-sm lg:text-base text-gray-500 font-medium">
                                {p.content}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
            {services[id-1].bottom.quote && <h1 className="text-base md:text-xl font-semibold text-center w-full mt-16">&quot;{services[id-1].bottom.quote}&quot;</h1>}
        </section>
        )}



        {/* other solutions  */}
        <div className="w-full flex flex-col justify-center items-start gap-0  p-6 md:px-[10%]">
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

                        <AnimatedElement delay={1000+(200*index)} className="flex flex-col justify-between items-start p-4 border border-gray-400 rounded-xl gap-4  h-fit md:h-[500px]">

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
