import { useEffect, useRef, useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import { Link, useParams } from "react-router-dom"
import { FaQuoteLeft } from "react-icons/fa"


const Solutions = () => {
  const useInView = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)
  
    useEffect(() => {
      if (!ref.current) return
  
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Once element is visible, stop observing
          observer.unobserve(ref.current)
        }
      }, options)
  
      observer.observe(ref.current)
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, [ref, options]) // Added isVisible to dependencies
  
    return [ref, isVisible]
  }
  
  const AnimatedSection = ({ children, delay = 0, className="" }) => {
    const [ref, isVisible] = useInView({ threshold: 0.1 })
  
    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ease-out transform ${className} ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    )
  }
  const { id } = useParams()
  const [isRightSticky, setIsRightSticky] = useState(false)
  const leftComponentRef = useRef(null)
  const rightComponentRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (leftComponentRef.current && rightComponentRef.current) {
        const leftRect = leftComponentRef.current.getBoundingClientRect()
        const rightRect = rightComponentRef.current.getBoundingClientRect()

        if (leftRect.top <= 0 && leftRect.bottom > window.innerHeight) {
          setIsRightSticky(true)
        } else {
          setIsRightSticky(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const solutions = [
    {
      id: 1,
      title: "EMBLOCK IoT Solutions for Manufacturing",
      type: "Iot solutions",
      description:
        "The manufacturing industry is at the heart of the global economy, driving innovation and productivity. With the rapid evolution of technology, manufacturers are transitioning to smart factories and adopting advanced systems under the Industry 4.0 framework. However, this transition comes with challenges, including integrating new technologies with existing systems, managing labor shortages, and meeting fluctuating market demands. Compliance with stringent environmental and quality regulations adds to the complexity, necessitating advanced solutions for seamless operations.",
      focusAreasText: "EMBLOCK addresses the core needs of the manufacturing industry by focusing on:",
      focusAreas: [
        {
          id: 1,
          title: "Production Efficiency:",
          point: "Enhancing operational workflows.",
        },
        {
          id: 2,
          title: "Automation:",
          point: " Reducing reliance on manual processes.",
        },
        {
          id: 3,
          title: "Real-Time Monitoring: ",
          point: "Providing a clear picture of machine performance and productivity.",
        },
        {
          id: 4,
          title: "Predictive Maintenance: ",
          point: "Ensuring machinery is always in optimal condition to avoid disruptions.",
        },
        {
          id: 5,
          title: "Quality Control:",
          point: "Delivering consistent product standards that meet regulatory requirements.",
        },
      ],
      services: "UI/UX Design",
      industry: "Manufactoring",
      focus: "Increase Productivity",
      image1: "/manufacturing-image1.png",
      image2: "/manufacturing-image2.png",
      painPoint:
        "Manufacturers face a variety of challenges that can disrupt operations and hinder growth. Labor shortages are a persistent issue, with many companies struggling to meet production goals without increasing operational costs. Additionally, unplanned production delays caused by equipment failures or inefficiencies in production lines often result in lost time and revenue. Limited visibility into production status and inventory levels can further exacerbate supply chain disruptions, making it difficult to align supply with demand. Finally, compliance with environmental and quality regulations adds another layer of complexity, requiring continuous monitoring and reporting to avoid costly penalties.",
      bottomText:
        "EMBLOCK brings transformative benefits to the manufacturing industry, making it an indispensable solution for forward-thinking businesses. By minimizing unplanned downtime and reducing maintenance costs, EMBLOCK significantly enhances operational efficiency. Its predictive maintenance capabilities ensure machinery runs smoothly, avoiding unexpected disruptions. With automated data collection and advanced analytics, manufacturers can streamline workflows, improve decision-making, and increase overall productivity. Additionally, continuous monitoring helps companies adhere to strict environmental and quality standards, ensuring compliance and mitigating the risk of regulatory fines.",
      bottomTexts: [],
      solution: {
        image: "/manufacturing-middle-image.jpeg",
        header: "EMBLOCK provides an all-encompassing solution designed to address these challenges effectively.",
        keyFeatures: [
          {
            id: 1,
            text: "Real-Time Monitoring: Offers continuous oversight of machinery and production lines to ensure optimal performance.",
          },
          {
            id: 2,
            text: "Predictive Maintenance: Uses advanced data analytics to foresee potential equipment failures and prevent downtime.",
          },
          {
            id: 3,
            text: "Performance Metrics: Features a comprehensive dashboard that provides actionable insights into key operational metrics.",
          },
          {
            id: 4,
            text: "Scalability: Designed to integrate seamlessly with both existing and advanced systems, allowing for future growth.",
          },
        ],
        bottomTextHeader: "Efficiency Improvements:",
        bottomText:
          "EMBLOCK enables manufacturers to streamline operations, reduce downtime, and maximize output. By automating monitoring and leveraging data-driven decision-making, businesses can achieve higher productivity while keeping operational costs low.",
      },
      quote: {
        quote:
          "EMBLOCK has completely transformed our construction management. With real-time video streaming, image recognition for attendance, and integrated PMS & ERP, it’s a single solution for everything we need on-site.",
        author: "Bala venkatesh",
        designation: "Founder Aargaa Construction",
      },
    },
    {
      id: 2,
      title: "EMBLOCK Construction Solutions",
      type: "Construction Solutions",
      description:
        "The construction industry is a cornerstone of economic growth, driving infrastructure development and urbanization. However, it faces significant challenges in today's competitive environment. Fluctuating material costs, labor shortages, and increasingly stringent regulations create obstacles for project managers and construction firms alike. These issues often result in project delays, budget overruns, and reduced productivity, making it essential for businesses to adopt advanced tools to streamline operations and maintain profitability.",
      focusAreasText: "EMBLOCK's solutions are specifically designed to address these challenges, focusing on:",
      focusAreas: [
        {
          id: 1,
          title: "Advanced Project Management: ",
          point: " Ensuring seamless execution from planning to completion.",
        },
        {
          id: 2,
          title: "Efficient Resource Allocation: ",
          point: " Leveraging predictive analytics to optimize the use of materials and labor.",
        },
      ],
      services: "Project Managements",
      industry: "Construction",
      focus: "Streamline Operations",
      image1: "/construction-image1.webp",
      image2: "/construction-image2.webp",
      painPoint:
        "The construction industry faces a variety of persistent challenges that impact efficiency and profitability. Project delays are a common concern, often caused by miscommunication, inefficient workflows, or labor shortages. Budget overruns arise due to poor resource management and fluctuating material costs, straining financial resources. Compliance with safety and building codes is another critical challenge, as failure to meet standards can result in costly penalties and reputational damage. Additionally, effective communication across project teams often remains a hurdle, leading to missed deadlines and reduced productivity.",
      bottomText:
        "EMBLOCK provides unparalleled benefits for the construction industry, helping companies maintain a competitive edge. By ensuring cost efficiency through tighter budget control and risk mitigation, our solutions minimize financial strain. Projects stay on schedule thanks to robust project management tools, improving client satisfaction and operational efficiency. Superior resource management reduces unnecessary expenditures and downtime, ensuring materials and labor are used effectively. With improved workflows and streamlined communication, construction firms can elevate their productivity and profitability.",
      bottomTexts: [],
      solution: {
        image: "/construction-middle-image.jpg",
        header:
          "EMBLOCK provides cutting-edge solutions to overcome these challenges and drive success in construction projects.",
        keyFeatures: [
          {
            id: 1,
            text: " Advanced Project Management: Our system streamlines every phase of construction, from initial planning and execution to real-time monitoring, ensuring smooth operations and timely project delivery.",
          },
          {
            id: 2,
            text: "Client Communication and Feedback Tools: Maintain consistent communication with clients, gather feedback, and integrate their input seamlessly into project workflows for improved satisfaction.",
          },
          {
            id: 3,
            text: "Resource Optimization: Utilizes predictive analytics to optimize the use of materials and labor, reducing waste and costs.",
          },
          {
            id: 4,
            text: "Workflow Automation: Streamlines operations, reducing delays and improving decision-making with data-driven insights.",
          },
        ],
        bottomTextHeader: "Efficiency Improvements:",
        bottomText:
          "With EMBLOCK, construction firms can automate manual tasks, minimize risks, and achieve better coordination across teams. Our solutions enable businesses to deliver projects on time and within budget, ensuring long-term profitability and operational success.",
      },
      quote: {
        quote:
          "EMBLOCK has completely transformed our construction management. With real-time video streaming, image recognition for attendance, and integrated PMS & ERP, it’s a single solution for everything we need on-site.",
        author: "Bala venkatesh",
        designation: "Founder Aargaa Construction",
      },
    },
    {
      id: 3,
      title: "EMBLOCK Pipeline Monitoring and Leak Detection  ",
      type: "E-commerce solutions",
      description:
        "The oil and gas industry is a critical sector that fuels global economies, but it also faces immense challenges in maintaining safety, operational efficiency, and regulatory compliance. Aging infrastructure, environmental concerns, and the need for modernization have made leak detection and predictive maintenance more essential than ever. EMBLOCK addresses these challenges with a state-of-the-art solution designed for real-time pipeline monitoring and leak detection. Our technology enhances operational safety, prevents costly spills, and ensures pipeline integrity.",
      focusAreasText:
        "EMBLOCK’s innovative technology is designed to tackle key areas within the oil and gas industry:",
      focusAreas: [
        {
          id: 1,
          title: "Safety Monitoring:",
          point: " Real-time detection of leaks to prevent hazardous incidents.",
        },
        {
          id: 2,
          title: "Predictive Maintenance:",
          point: " AI-powered analytics to identify vulnerabilities before they escalate into major failures. ",
        },
        {
          id: 3,
          title: "Environmental Compliance:",
          point: " Ensuring oil and gas operators meet strict environmental standards by preventing spills and leaks.",
        },
      ],
      services: "Pipeline Integrity Management",
      industry: "Oil and Gas",
      focus: "Leak Detection & Predictive Maintenance",
      image1: "/pipeline-monitoring-image1.png",
      image2: "/pipeline-monitoring-image2.png",
      painPoint:
        "Oil and gas companies face several significant challenges that threaten both their operations and the environment. Undetected leaks can lead to severe environmental damage, regulatory penalties, and financial losses. Safety risks are heightened by aging infrastructure, increasing the likelihood of equipment failure. Additionally, the industry operates under stringent compliance requirements, and failure to meet these regulations can result in hefty fines and reputational damage. EMBLOCK’s advanced leak detection technology directly addresses these pain points, providing operators with early warnings to minimize hazards and prevent costly downtime.",
      bottomText: "EMBLOCK delivers transformative benefits for oil and gas operations:",
      bottomTexts: [
        {
          id: 1,
          title: "Enhanced Safety:",
          text: " Reduces the risk of pipeline failures and catastrophic incidents through proactive monitoring.",
        },
        {
          id: 2,
          title: "Operational Efficiency:",
          text: " Remote monitoring and predictive maintenance optimize performance and reduce manual inspections.",
        },
        {
          id: 3,
          title: "Environmental Protection:",
          text: "  Ensures compliance with strict regulations and prevents costly spills.",
        },
        {
          id: 4,
          title: "Cost Savings:",
          text: " Lowers expenses related to emergency repairs, legal fines, and production downtime.",
        },
      ],
      solution: {
        image: "/pipeline-monitoring-middle-image.jpeg",
        header:
          "EMBLOCK offers a turnkey e-commerce solution tailored to the specific needs of the retail industry, eliminating the barriers to entry for businesses looking to establish their online presence.",
        keyFeatures: [
          {
            id: 1,
            text: "E-Commerce Integration: A robust platform built on Magento, designed for scalability, customization, and seamless setup.",
          },
          {
            id: 2,
            text: "Product Listing and Order Management: Comprehensive tools to manage inventory, product catalogs, and orders efficiently.",
          },
          {
            id: 3,
            text: "Logistics Integration: Built-in functionality for seamless coordination with logistics providers, ensuring timely deliveries.",
          },
          {
            id: 4,
            text: "Commission-Based Model: Eliminates high upfront costs by operating on a pay-as-you-earn model, reducing financial risks for retailers.",
          },
        ],
        bottomTextHeader: "Efficiency Improvements:",
        bottomText:
          "By removing the financial and technical burdens of e-commerce setup, EMBLOCK empowers retailers to focus on growing their product offerings and marketing strategies. The platform’s user-friendly interface and seamless shopping experience foster customer loyalty and improve satisfaction, enabling businesses to thrive in an increasingly competitive market.",
      },
      quote: {
        quote:
          "EMBLOCK's pipeline monitoring and leak detection system has transormed our operations with real-time insights and precise anomaly detection. Seamless integration and reliability make it an invaluable asset.",
        author: "Krithick Kumar",
        designation: "",
      },
    },
    {
      id: 4,
      title: "EMBLOCK: Elevate Your Fleet Safety",
      type: "Transports",

      description:
        "The logistics and supply chain industry is the backbone of global commerce, ensuring goods are transported efficiently and safely. However, the sector is under immense pressure to meet rising demands for timely deliveries while managing operational costs and adhering to strict safety standards. Managing driver behavior, maintaining safety compliance, and mitigating risks such as wrongful liability claims are ongoing challenges. EMBLOCK addresses these issues by offering advanced safety and monitoring solutions designed to transform fleet operations and enhance overall efficiency.",
      focusAreasText: "EMBLOCK's solutions focus on the following key areas:",
      focusAreas: [
        {
          id: 1,
          title: "Safety Management: ",
          point: "Advanced tools to monitor and improve driver behavior, reducing risks on the road.",
        },
        {
          id: 2,
          title: "Real-Time Data Analysis:",
          point: "Instant access to fleet performance and safety data for informed decision-making.",
        },
        {
          id: 3,
          title: "Driver Behavior Monitoring:",
          point: " AI-driven risk profiling and HD dashcams ensure accountability and promote safer driving practices.",
        },
      ],
      services: "Fleet Monitoring and Management",
      industry: "Logistics and Supply Chain",
      focus: "Operational Efficiency",
      image1: "/fleet-safety-image1.png",
      image2: "/fleet-safety-image2.png",
      painPoint:
        "Logistics and supply chain businesses face several critical challenges that impact their efficiency and profitability. High costs associated with accidents and insurance claims can strain budgets, while unsafe driving behaviors lead to inefficiencies and increased risks. One of the most significant issues is the difficulty in exonerating drivers wrongfully accused of traffic violations, resulting in unnecessary legal disputes and reputational damage. EMBLOCK’s solutions directly address these pain points by improving accountability, enhancing safety standards, and providing indisputable video evidence when needed.",
      bottomText: "EMBLOCK delivers unparalleled value to logistics and supply chain businesses by:",
      bottomTexts: [
        {
          id: 1,
          title: "Enhancing Safety and Compliance:",
          text: "Tools like driver behavior monitoring and AI-driven profiling promote safer routes and fewer accidents.",
        },
        {
          id: 2,
          title: "Reducing Insurance Premiums:",
          text: "Safer driving practices and reduced incidents result in significant cost savings on insurance.",
        },
        {
          id: 3,
          title: "Protecting Against False Claims: ",
          text: "High-quality video evidence ensures swift exoneration of drivers wrongfully accused of violations.",
        },
        {
          id: 4,
          title: "Boosting Operational Efficiency:",
          text: " A safer and more accountable fleet leads to smoother logistics operations and improved reliability.",
        },
      ],
      solution: {
        image: "/fleet-safety-middle-image.png",
        header: "EMBLOCK offers cutting-edge technology to resolve these challenges and elevate logistics operations.",
        keyFeatures: [
          {
            id: 1,
            text: "HD Dashcams with Real-Time Data: Capture every moment on the road while providing live alerts to improve response times.",
          },
          {
            id: 2,
            text: "AI-Driven Risk Profiling: Analyze driver behavior to identify risks and coach improvements effectively.",
          },
          {
            id: 3,
            text: "Exoneration Footage: Irrefutable video evidence to protect drivers and companies from false claims.",
          },
          {
            id: 4,
            text: "Predictive Maintenance Insights: Leverage telematics data to monitor vehicle health and schedule maintenance proactively, reducing unexpected breakdowns and downtime.",
          },
        ],
        bottomTextHeader: "Improving Operations and Reducing Costs:",
        bottomText:
          "By promoting safer driving practices, EMBLOCK helps reduce accident rates and associated insurance premiums. The system minimizes the risk of costly legal disputes with reliable video evidence, ensuring quick resolution of incidents. With improved safety and compliance, fleet efficiency is enhanced, allowing businesses to focus on timely deliveries and customer satisfaction.",
      },
      quote: {
        quote:
          "Fleet safety has always been a priority for us, and EMBLOCK delivered exactly what we needed. Driver behavior monitoring and GPS tracking have improved safety and efficiency across our fleet.",
        author: "Syed Irfan",
        designation: " Founder-NATIONAL TRANSPORT ",
      },
    },
    {
      id: 5,
      title: "EMBLOCK: Efficient Solution For GST",
      type: "Accounting",
      description:
        "The accounting industry is rapidly embracing automation to simplify complex tasks and meet growing compliance demands. Professionals are under constant pressure to manage large volumes of data, adapt to frequent regulatory changes, and ensure accuracy in tax filings. EMBLOCK’s accounting solution focuses on streamlining tax compliance, particularly GST filing for monthly and yearly returns, making it an ideal tool for accountants handling multiple clients. Our software empowers accountants to meet their goals efficiently and accurately, reducing the time and effort required for compliance management.",
      focusAreasText:
        "EMBLOCK’s software is designed to address critical aspects of the accounting process, including:",
      focusAreas: [
        {
          id: 1,
          title: "Tax Compliance Automation:",
          point: "Advanced tools to monitor and improve driver behavior, reducing risks on the road.",
        },
        {
          id: 2,
          title: "Regulatory Updates: ",
          point: "Provides real-time notifications of changes in GST regulations to ensure compliance.",
        },
        {
          id: 3,
          title: "Workload Management:",
          point:
            "Enables accountants to handle multiple clients seamlessly by organizing and automating routine tasks.",
        },
      ],
      services: "Tax Filing",
      industry: "Accounting",
      focus: "Compliance Automation",
      image1: "/gst-solution-image1.png",
      image2: "/gst-solution-image2.png",
      painPoint:
        "Accounting professionals face several challenges that affect their efficiency and productivity. Manual errors during data entry and tax preparation are common, leading to potential compliance issues and penalties. Additionally, the time-consuming nature of creating and submitting GST forms can limit the capacity of accountants to manage multiple clients. Keeping up with frequent updates to tax laws and regulations further complicates the process, leaving little room for strategic decision-making. EMBLOCK’s solution addresses these pain points by automating repetitive tasks and reducing the risk of errors, allowing accountants to focus on delivering value to their clients.",
      bottomText: "EMBLOCK’s accounting software offers several benefits to professionals and firms:",
      bottomTexts: [
        {
          id: 1,
          title: "Significant Time Savings:",
          text: " Automation eliminates manual tasks, allowing accountants to focus on high-value activities.",
        },
        {
          id: 2,
          title: "Enhanced Accuracy: ",
          text: "Reduced manual intervention minimizes errors, improving overall reliability.",
        },
        {
          id: 3,
          title: "Improved Compliance:",
          text: " Real-time updates ensure all filings meet the latest tax laws and regulations.",
        },
        {
          id: 4,
          title: "Cost Efficiency:",
          text: "Enables accounting firms to manage more clients without increasing operational costs or risks.",
        },
      ],
      solution: {
        image: "/gst-solution-middle-image.png",
        header:
          "EMBLOCK’s accounting software provides cutting-edge tools to simplify and enhance tax compliance processes.",
        keyFeatures: [
          {
            id: 1,
            text: "  Automated Form Generation: Transforms Excel data into GST forms quickly and accurately.",
          },
          {
            id: 2,
            text: "Error Detection and Correction: Identifies inconsistencies in data and suggests corrections for flawless filings.",
          },
          {
            id: 3,
            text: "Real-Time Regulatory Updates: Keeps accountants informed of the latest GST laws and compliance requirements.",
          },
          {
            id: 4,
            text: "Data Analytics and Insights: Provides trends and insights for better decision-making and strategic planning.",
          },
        ],
        bottomTextHeader: "Enhancing Accuracy and Efficiency:",
        bottomText:
          "By automating the creation of GST forms and integrating error-checking mechanisms, our solution minimizes the potential for human errors. The software ensures compliance with real-time regulatory updates, while analytics provide actionable insights that help accountants make informed decisions. The result is a faster, more accurate tax filing process that supports accountants in managing their workload effectively.",
      },
      quote: {
        quote:
          "Managing GST used to be a nightmare until we switched to EMBLOCK. Automated tax calculations and seamless filing have made compliance effortless!.",
        author: "CA Avani Daxini",
        designation: "Founder Buddybooks",
      },
    },
  ]

  const solution = solutions[id - 1]


  return (
    <div className="flex justify-start items-center py-4 md:py-[5%] min-h-screen w-full flex-col">
      {/* {solutions.map((solution) => ( */}
      <section key={solution.id} className="top w-full flex flex-col justify-start items-center py-0 ">
        <AnimatedSection delay={200} className="w-full">
          <h1 className="w-full md:w-[90%] text-[25px] md:text-[40px] lg:text-[60px] text-start text-customblack font-normal flex flex-wrap px-6 leading-tight md:px-[10%]  md:py-0">
            {solution.title}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={400} className="w-full">
          <p className="w-full md:w-[90%] text-customblack text-start text-xs md:text-lg lg:text-2xl flex flex-wrap font-semibold mt-4  md:mt-[2%] px-6 md:px-[10%]">
            {solution.description}
          </p>
        </AnimatedSection>

        <div className="focus w-full relative flex flex-col-reverse md:flex-row justify-between items-start mt-8 md:mt-16  pl-0 md:px-[10%] mb-12">
          <section
            
            className="left w-full md:w-[65%] px-6 md:px-0  flex flex-col justify-start items-start mt-8 md:mt-0"
          >
            <h2 className="text-customblack text-start w-full font-semibold text-xl md:text-3xl flex flex-wrap">
              Focus Areas of the Solution:
            </h2>

            <p className="w-full text-start text-customgrayhover flex flex-wrap text-sm md:text-xl font-semibold mt-4 md:mt-8">
              {solution.focusAreasText}
            </p>

            <ul className="w-full flex flex-col items-start justify-start list-disc text-customblack">
              {solution.focusAreas.map((f) => (
                <li
                  key={f.id}
                  className="w-full text-start text-customgrayhover flex flex-wrap text-sm md:text-xl font-semibold mt-2"
                >
                  <span className="text-customblack flex items-center gap-2">
                    <GoDotFill size={8} /> {f.title}
                  </span>{" "}
                  {f.point}
                </li>
              ))}
            </ul>

            <img
              src={solution.image1 || "/placeholder.svg"}
              alt="image"
              className="w-full rounded-xl  object-cover my-8 md:my-16 h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px] 2xl:h-[500px]"
            />

            <div className="painPoint w-full flex flex-col justify-start items-start">
              <h1 className="text-customblack text-start w-full font-semibold text-xl md:text-3xl flex flex-wrap">
                Pain Points:
              </h1>
              <p className="w-full text-start text-customgrayhover flex flex-wrap text-sm md:text-xl font-semibold mt-4 md:mt-8">
                {solution.painPoint}
              </p>
            </div>

            <img
              src={solution.image2 || "/placeholder.svg"}
              alt="image"
              className="w-full rounded-xl object-cover mt-8 md:my-16 h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px] 2xl:h-[500px]"
            />

            <p className="w-full text-start text-customgrayhover flex flex-wrap text-sm md:text-xl font-semibold mt-8">
              {solution.bottomText}
            </p>

            <ul className="w-full flex flex-col items-start justify-start list-disc text-customblack">
              {solution.bottomTexts.map((b) => (
                <li
                  key={b.id}
                  className="w-full text-start text-customgrayhover flex flex-wrap text-sm md:text-xl font-semibold mt-2"
                >
                  <span className="text-customblack flex items-center gap-2">
                    <GoDotFill size={8} /> {b.title}
                  </span>{" "}
                  {b.text}
                </li>
              ))}
            </ul>
          </section>

          <section
            
            className={`px-6 md:px-0 w-full md:w-[30%] h-auto  ${isRightSticky ? "md:fixed md:top-0 md:right-0 w-[34%] md:pr-[10%]" : ""} `}
          >
            <div className="left w-full key-features flex flex-col justify-start items-start ">
              <div className="w-full flex flex-col justify-center items-start border-b border-gray-300 py-4">
                <p className="text-gray-500 font-normal text-base md:text-xl">Services</p>
                <h2 className="text-customblack text-lg  font-medium">{solution.services}</h2>
              </div>

              <div className="w-full flex flex-col justify-center items-start border-b border-gray-300 py-4">
                <p className="text-gray-500 font-normal text-base md:text-xl">Industry</p>
                <h2 className="text-customblack text-lg font-medium">{solution.industry}</h2>
              </div>

              <div className="w-full flex flex-col justify-center items-start  py-4">
                <p className="text-gray-500 font-normal text-base md:text-xl">Focus</p>
                <h2 className="text-customblack text-lg  font-medium">{solution.focus}</h2>
              </div>

              <Link
                to="/contactus"
                className="rounded-full p-2 pl-4 md:pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group my-4 font-medium"
              >
                Contact Us
                <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" />
              </Link>
            </div>
          </section>
        </div>
      </section>
      {/* ))} */}

      <section className="w-full bg-black px-6 md:px-24 py-12 md:py-24 xl:py-48 text-white flex flex-col justify-center items-center">
        <h1 className="text-2xl font-medium text-start w-full mb-4 md:mb-12 lg:mb-0">Our Solutions</h1>

        <div className="w-full middle flex gap-2 flex-col-reverse lg:flex-row justify-between items-center">
          <div className="left w-full lg:w-1/2 flex flex-col justify-start items-start">
            <p className="w-full text-start text-gray-400 flex flex-wrap text-md md:text-xl font-semibold my-4 md:my-8">
              {solution.solution.header}
            </p>

            <p className="w-full text-start text-gray-400 flex flex-wrap text-sm md:text-xl font-semibold">
              Key features:
            </p>

            <ul className="w-full flex flex-col items-start justify-start list-disc text-customblack gap-4">
              {solution.solution.keyFeatures.map((f) => (
                <li
                  key={f.id}
                  className="w-full text-start text-gray-400 flex flex-row flex-wrap text-sm md:text-xl font-semibold justify-between items-start"
                >
                  <GoDotFill size={8} className="mt-2" /> <span className="w-[95%]"> {f.text} </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="right w-full lg:w-1/2 flex justify-center items-center mt-4 md:mt-0">
            <img
              src={solution.solution.image || "/placeholder.svg"}
              className="size-full md:size-[90%] h-[250px] md:h-[350px]  lg:h-[400px] 2xl:h-[550px] object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="bottom w-full flex flex-col gap-4 justify-start mt-8 md:mt-12">
          <h1 className="text-white text-md md:text-2xl font-medium">{solution.solution.bottomTextHeader}</h1>
          <p className="text-gray-400 text-sm md:text-xl font-medium">{solution.solution.bottomText}</p>
        </div>
      </section>

      {/* quote  */}
      <section className="w-full h-[400px] md:h-[700px] 2xl:h-[800px] flex justify-center items-center ">
        <AnimatedSection delay={800}>
          {/* <section className="w-full h-[400px] md:h-[800px] flex justify-center items-center px-6 md:px-24">
            <div className="w-1/5 flex justify-end items-start -mt-[170px] sm:-mt-[130px] md:-mt-[200px]">
              <FaQuoteLeft className="text-gray-600 size-[40px] md:size-[200px]" />
            </div>
            <div className="w-4/5 flex flex-col justify-start  items-start -mb-[100px] sm:-mb-[50px] md:-mb-[200px] pr-[5%]">
              <h1 className="text-black text-sm md:text-3xl font-medium mb-8">&ldquo;{solution.quote.quote}&ldquo;</h1>
              <p className="text-xs md:text-lg font-medium mb-4">{solution.quote.author}</p>
              <p className="text-xs md:text-md font-medium">{solution.quote.designation}</p>
            </div>
          </section> */}
          <section className="w-full h-[400px] sm:h-[600px] md:h-[800px] flex justify-start items-center px-6 md:px-24  sm:pb-24 md:pb-48 lg:-mt-24">

            <div className="h-[200px] w-fit flex justify-end items-start ">
              <FaQuoteLeft className="text-gray-600 size-4 sm:size-[80px] md:size-[130px] lg:size-[200px]" />
            </div>

            <div className="h-[200px] w-fit flex flex-col justify-start  items-start mt-[30px] sm:mt-[150px] md:mt-[220px] lg:mt-[350px] pr-[5%]">
              <h1 className=" text-black text-[8px] sm:text-[12px] md:text-xl font-medium mb-8">&ldquo;{solution.quote.quote}&ldquo;</h1>

              <div className="flex flex-col md:gap-4 justify-start items-start">

                <p className=" text-[6px] sm:text-xs md:text-lg font-medium mb-4">{solution.quote.author}</p>

                <p className="text-[6px] sm:text-xs md:text-base font-medium">{solution.quote.designation}</p>

              </div>

            </div>
          </section>
        </AnimatedSection>
      </section>

      <div className="w-full flex flex-col justify-center items-start gap-0 pb-12 px-6 md:px-24">
        <AnimatedSection delay={600}>
          <div className="flex gap-2 justify-center items-center">
            <span className="bg-lime-400  size-2 mdsize-3 rounded-full text-white">.</span>
            <p className="text-sm md:text-lg font-semibold text-gray-400">Other Solutions</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <h1 className="text-[25px] md:text-[40px] lg:text-[60px]">Some of other Solutions</h1>
        </AnimatedSection>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {solutions
            .filter((s) => s.id != solution.id)
            .map((s, index) => (
              <Link
                to={`/solutions/${s.id}`}
                key={s.id}
                className="card w-full  flex  justify-center items-start  rounded-xl h-[380px] md:h-[450px] lg:h-[500px] xl:h-[450px]"
              >
                <AnimatedSection key={s.id} delay={400 + index * 200} className="w-full h-full">
                  <Link
                    onClick={() => set}
                    to={`/solutions/${s.id}`}
                    key={s.id}
                    className="card w-full flex flex-col justify-between items-start p-4 border border-gray-400 rounded-xl h-[380px] md:h-[450px] lg:h-[500px] xl:h-[450px]"
                  >
                    <div className="flex flex-col justify-start  items-start gap-2 md:gap-4">
                      <h1 className="text-xl md:text-2xl uppercase font-medium">{s.title}</h1>
                      <p className="text-customgrayhover font-semibold text:sm md:text-lg">{s.type}</p>
                    </div>
                    <img
                      src={s.image1 || "/placeholder.svg"}
                      className="w-full h-[200px] sm:h-[250px] rounded-xl object-cover"
                    />
                  </Link>
                </AnimatedSection>
              </Link>
            ))}
        </div>
      </div>

      
    </div>
  )
}

export default Solutions

