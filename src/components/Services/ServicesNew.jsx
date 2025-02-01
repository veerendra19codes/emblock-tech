import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaStarOfLife } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedQuoteSection from "../AnimatedQuoteSection";

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

const services = [
    {
      id: 1,
      name: "Analyze",
      title: "Understanding Your Unique Needs",
      subtext: "Empowering businesses with IoT strategies that align with goals, maximize value, and drive sustainable growth.",
      services: [
        {
          id: 1,
          content: " In-Depth Consultation: We work closely with your team to understand your goals, operations, and challenges."
        },
        {
          id: 2,
          content: " Data-Driven Insights: Through research and analysis, we uncover opportunities to enhance efficiency and innovation."
        },
        {
          id: 3,
          content: "Customized Recommendations: We tailor our solutions to align with your unique business objectives."
        },
      ]
    },
    {
      id: 2,
      name: "Design",
      title: "Crafting Tailored IoT Solutions",
      subtext: "Our team designs IoT solutions that integrate seamlessly with your systems, ensuring scalability and future-proofing.",
      services: [
        {
          id: 1,
          content: "Solution Architecture: We create robust frameworks that fit your industry and requirements."
        },
        {
          id: 2,
          content: "User-Centric Design: We focus on usability, creating interfaces and systems that are intuitive and efficient."
        },
        {
          id: 3,
          content: "Scalability & Flexibility: We design solutions that grow with your business, adapting to future demands."
        },
      ]
    },
    {
      id: 3,
      name: "Build",
      title: "Bringing Ideas to Life",
      subtext: "In this phase, we implement your IoT solution with precision, ensuring every detail aligns with your",
      services: [
        {
          id: 1,
          content: "System Integration: We integrate IoT devices and platforms into your existing infrastructure seamlessly."
        },
        {
          id: 2,
          content: "Custom Development: We develop tailored applications, platforms, and features that meet your specific needs.",
        },
        {
          id: 3,
          content: "Rigorous Testing: We ensure every aspect of the solution performs optimally through comprehensive testing."
        },
      ]
    },
    {
      id: 4,
      name: "Optimize",
      title: "Continuous Improvement and Support",
      subtext: "Our job doesn’t stop after deployment. We provide ongoing optimization and supports",
      services: [
        {
          id: 1,
          content: " Performance Monitoring: We track system performance and make necessary adjustments for peak efficiency."
        },
        {
          id: 2,
          content: "Proactive Maintenance: Regular updates and fixes keep your system secure and up-to-date."
        },
        {
          id: 3,
          content: " Analytics and Insights: We provide actionable insights from collected data to help you make informed decisions."
        },
      ]
    },

  ]



const ServicesNew = () => {

   const solutions = [
    {
      id: 1,
      title: "EMBLOCK: IoT Solutions for Manufacturing",
      type: "Iot solutions",
      description: "The manufacturing industry is at the heart of the global economy, driving innovation and productivity. With the rapid evolution of technology, manufacturers are transitioning to smart factories and adopting advanced systems under the Industry 4.0 framework. However, this transition comes with challenges, including integrating new technologies with existing systems, managing labor shortages, and meeting fluctuating market demands. Compliance with stringent environmental and quality regulations adds to the complexity, necessitating advanced solutions for seamless operations.",
      focusAreasText: "EMBLOCK addresses the core needs of the manufacturing industry by focusing on:",
      focusAreas: [
        {
          id: 1,
          title: "Production Efficiency:",
          point: "Enhancing operational workflows."
        },
        {
          id: 2,
          title: "Automation:",
          point: " Reducing reliance on manual processes."
        },
        {
          id: 3,
          title: "Real-Time Monitoring: ",
          point: "Providing a clear picture of machine performance and productivity."
        },
        {
          id: 4,
          title: "Predictive Maintenance: ",
          point: "Ensuring machinery is always in optimal condition to avoid disruptions."
        },
        {
          id: 5,
          title: "Quality Control:",
          point: "Delivering consistent product standards that meet regulatory requirements."
        },
      ],
      services: "UI/UX Design",
      category: "Mobile App",
      client: "Stonks Inc",
      image1: "/image1.png",
      image2: "/image2.jpg",
      painPoint: "Manufacturers face a variety of challenges that can disrupt operations and hinder growth. Labor shortages are a persistent issue, with many companies struggling to meet production goals without increasing operational costs. Additionally, unplanned production delays caused by equipment failures or inefficiencies in production lines often result in lost time and revenue. Limited visibility into production status and inventory levels can further exacerbate supply chain disruptions, making it difficult to align supply with demand. Finally, compliance with environmental and quality regulations adds another layer of complexity, requiring continuous monitoring and reporting to avoid costly penalties.",
      bottomText: "EMBLOCK brings transformative benefits to the manufacturing industry, making it an indispensable solution for forward-thinking businesses. By minimizing unplanned downtime and reducing maintenance costs, EMBLOCK significantly enhances operational efficiency. Its predictive maintenance capabilities ensure machinery runs smoothly, avoiding unexpected disruptions. With automated data collection and advanced analytics, manufacturers can streamline workflows, improve decision-making, and increase overall productivity. Additionally, continuous monitoring helps companies adhere to strict environmental and quality standards, ensuring compliance and mitigating the risk of regulatory fines.",
      bottomTexts: [],
      solution: {
        image: "/image1.png",
        header: "EMBLOCK provides an all-encompassing solution designed to address these challenges effectively.",
        keyFeatures: [
          {
            id:1,
            text: "Real-Time Monitoring: Offers continuous oversight of machinery and production lines to ensure optimal performance."
          },
          {
            id:2,
            text: "Predictive Maintenance: Uses advanced data analytics to foresee potential equipment failures and prevent downtime."
          },
          {
            id:3,
            text: "Performance Metrics: Features a comprehensive dashboard that provides actionable insights into key operational metrics."
          },
          {
            id:4,
            text: "Scalability: Designed to integrate seamlessly with both existing and advanced systems, allowing for future growth."
          },
        ],
        bottomTextHeader: "Efficiency Improvements:",
        bottomText: "EMBLOCK enables manufacturers to streamline operations, reduce downtime, and maximize output. By automating monitoring and leveraging data-driven decision-making, businesses can achieve higher productivity while keeping operational costs low."
      },
      quote: {
        quote: "EMBLOCK has completely transformed our construction management. With real-time video streaming, image recognition for attendance, and integrated PMS & ERP, it’s a single solution for everything we need on-site.",
        author: "Bala venkatesh",
        designation: "Founder Aargaa Construction",
      }
    },
    {
      id: 2,
      title: "Building Success: EMBLOCK Construction Solutions",
      type: "Construction Solutions",
      description: "The construction industry is a cornerstone of economic growth, driving infrastructure development and urbanization. However, it faces significant challenges in today's competitive environment. Fluctuating material costs, labor shortages, and increasingly stringent regulations create obstacles for project managers and construction firms alike. These issues often result in project delays, budget overruns, and reduced productivity, making it essential for businesses to adopt advanced tools to streamline operations and maintain profitability.",
      focusAreasText: "EMBLOCK's solutions are specifically designed to address these challenges, focusing on:",
      focusAreas: [
        {
          id: 1,
          title: "Advanced Project Management: ",
          point: " Ensuring seamless execution from planning to completion."
        },
        {
          id: 2,
          title: "Efficient Resource Allocation: ",
          point: " Leveraging predictive analytics to optimize the use of materials and labor."
        },
      ],
      services: "UI/UX Design",
      category: "Mobile App",
      client: "Stonks Inc",
      image1: "/image1.png",
      image2: "/image2.jpg",
      painPoint: "The construction industry faces a variety of persistent challenges that impact efficiency and profitability. Project delays are a common concern, often caused by miscommunication, inefficient workflows, or labor shortages. Budget overruns arise due to poor resource management and fluctuating material costs, straining financial resources. Compliance with safety and building codes is another critical challenge, as failure to meet standards can result in costly penalties and reputational damage. Additionally, effective communication across project teams often remains a hurdle, leading to missed deadlines and reduced productivity.",
      bottomText: "EMBLOCK provides unparalleled benefits for the construction industry, helping companies maintain a competitive edge. By ensuring cost efficiency through tighter budget control and risk mitigation, our solutions minimize financial strain. Projects stay on schedule thanks to robust project management tools, improving client satisfaction and operational efficiency. Superior resource management reduces unnecessary expenditures and downtime, ensuring materials and labor are used effectively. With improved workflows and streamlined communication, construction firms can elevate their productivity and profitability.",
      bottomTexts: [],
      solution: {
        image: "/image1.png",
        header: "EMBLOCK provides cutting-edge solutions to overcome these challenges and drive success in construction projects.",
        keyFeatures: [
          {
            id:1,
            text: " Advanced Project Management: Our system streamlines every phase of construction, from initial planning and execution to real-time monitoring, ensuring smooth operations and timely project delivery."
          },
          {
            id:2,
            text: "Client Communication and Feedback Tools: Maintain consistent communication with clients, gather feedback, and integrate their input seamlessly into project workflows for improved satisfaction."
          },
          {
            id:3,
            text: "Resource Optimization: Utilizes predictive analytics to optimize the use of materials and labor, reducing waste and costs."
          },
          {
            id:4,
            text: "Workflow Automation: Streamlines operations, reducing delays and improving decision-making with data-driven insights."
          },
        ],
        bottomTextHeader: "Efficiency Improvements:",
        bottomText: "With EMBLOCK, construction firms can automate manual tasks, minimize risks, and achieve better coordination across teams. Our solutions enable businesses to deliver projects on time and within budget, ensuring long-term profitability and operational success."
      },
      quote: {
        quote: "EMBLOCK has completely transformed our construction management. With real-time video streaming, image recognition for attendance, and integrated PMS & ERP, it’s a single solution for everything we need on-site.",
        author: "Bala venkatesh",
        designation: "Founder Aargaa Construction",
      }
    },
    {
      id: 3,
      title: "EMBLOCK: E-Commerce Solution of Brands ",
      type: "E-commerce solutions",
      description: "The retail industry is undergoing a significant transformation, driven by the rapid adoption of digital solutions and  e-commerce platforms. As businesses strive to remain competitive, they face increasing pressure to reduce operational costs, adopt scalable online solutions, and deliver exceptional customer experiences. EMBLOCK addresses these challenges by offering a seamless, scalable, and customizable e-commerce platform built on Magento, allowing retailers to establish and grow their online presence without incurring hefty setup charges.",
      focusAreasText: "EMBLOCK's solutions are designed to meet the specific demands of the retail industry. We focus on:",
      focusAreas: [
        {
          id: 1,
          title: "E-Commerce Integration:",
          point: "  Providing retailers with a platform to set up online stores without setup charges, ensuring a smooth transition to digital operations."
        },
        {
          id: 2,
          title: "Customizable Functionality:",
          point: "Built on Magento, the platform offers scalability "
        },
        {
          id: 3,
          title: "Operational Efficiency:",
          point: " Streamlining product listing, order management, and logistics integration to simplify day-to-day operations."
        },
      ],
      services: "UI/UX Design",
      category: "Mobile App",
      client: "Stonks Inc",
      image1: "/image1.png",
      image2: "/image2.jpg",
      painPoint: "Retailers frequently encounter several obstacles when attempting to establish or expand their online presence. Setting up and managing online platforms often involves high upfront costs and technical complexity, discouraging many businesses from transitioning to e-commerce. Integration issues with logistics and order management further add to the challenges, complicating operations and affecting efficiency. Additionally, many retailers struggle to deliver a smooth online shopping experience, leading to reduced customer satisfaction and lower retention rates.",
      bottomText: "EMBLOCK delivers a wide range of benefits for the retail industry:",
      bottomTexts: [
        {
          id: 1,
          title: "Cost Efficiency:",
          text: "A commission-based model that eliminates the need for significant upfront investments.",
        },
        {
          id: 2,
          title: "Enhanced Sales:",
          text: "Expanding online presence allows retailers to reach a broader audience and increase revenue.",
        },
        {
          id: 3,
          title: "Customer Retention:",
          text: " A smooth and customizable online shopping experience keeps customers engaged and coming back.",
        },
        {
          id: 4,
          title: "Scalability: ",
          text: "The platform grows with your business, accommodating new product lines, higher sales volumes, and additional integrations.",
        },
      ],
      solution: {
        image: "/image1.png",
        header: "EMBLOCK offers a turnkey e-commerce solution tailored to the specific needs of the retail industry, eliminating the barriers to entry for businesses looking to establish their online presence.",
        keyFeatures: [
          {
            id:1,
            text: "E-Commerce Integration: A robust platform built on Magento, designed for scalability, customization, and seamless setup."
          },
          {
            id:2,
            text: "Product Listing and Order Management: Comprehensive tools to manage inventory, product catalogs, and orders efficiently."
          },
          {
            id:3,
            text: "Logistics Integration: Built-in functionality for seamless coordination with logistics providers, ensuring timely deliveries."
          },
          {
            id:4,
            text: "Commission-Based Model: Eliminates high upfront costs by operating on a pay-as-you-earn model, reducing financial risks for retailers."
          },
        ],
        bottomTextHeader: "Efficiency Improvements:",
        bottomText: "By removing the financial and technical burdens of e-commerce setup, EMBLOCK empowers retailers to focus on growing their product offerings and marketing strategies. The platform’s user-friendly interface and seamless shopping experience foster customer loyalty and improve satisfaction, enabling businesses to thrive in an increasingly competitive market."
      },
      quote: {
        quote: "Right from the setup, EMBLOCK's e-commerce solution boosted our online operations, enhancing efficiency and scalability exactly as shown in the demo",
        author: "Devi  Ramanujam",
        designation: "Founder Nishikas",
      }
    },
    {
      id: 4,
      title: "EMBLOCK: Elevate Your Fleet Safety",
      type: "Transports",

      description: "The logistics and supply chain industry is the backbone of global commerce, ensuring goods are transported efficiently and safely. However, the sector is under immense pressure to meet rising demands for timely deliveries while managing operational costs and adhering to strict safety standards. Managing driver behavior, maintaining safety compliance, and mitigating risks such as wrongful liability claims are ongoing challenges. EMBLOCK addresses these issues by offering advanced safety and monitoring solutions designed to transform fleet operations and enhance overall efficiency.",
      focusAreasText: "EMBLOCK's solutions focus on the following key areas:",
      focusAreas: [
        {
          id: 1,
          title: "Safety Management: ",
          point: "Advanced tools to monitor and improve driver behavior, reducing risks on the road."
        },
        {
          id: 2,
          title: "Real-Time Data Analysis:",
          point: "Instant access to fleet performance and safety data for informed decision-making."
        },
        {
          id: 3,
          title: "Driver Behavior Monitoring:",
          point: " AI-driven risk profiling and HD dashcams ensure accountability and promote safer driving practices."
        },
      ],
      services: "UI/UX Design",
      category: "Mobile App",
      client: "Stonks Inc",
      image1: "/image1.png",
      image2: "/image2.jpg",
      painPoint: "Logistics and supply chain businesses face several critical challenges that impact their efficiency and profitability. High costs associated with accidents and insurance claims can strain budgets, while unsafe driving behaviors lead to inefficiencies and increased risks. One of the most significant issues is the difficulty in exonerating drivers wrongfully accused of traffic violations, resulting in unnecessary legal disputes and reputational damage. EMBLOCK’s solutions directly address these pain points by improving accountability, enhancing safety standards, and providing indisputable video evidence when needed.",
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
        image: "/image1.png",
        header: "EMBLOCK offers cutting-edge technology to resolve these challenges and elevate logistics operations.",
        keyFeatures: [
          {
            id:1,
            text: "HD Dashcams with Real-Time Data: Capture every moment on the road while providing live alerts to improve response times."
          },
          {
            id:2,
            text: "AI-Driven Risk Profiling: Analyze driver behavior to identify risks and coach improvements effectively."
          },
          {
            id:3,
            text: "Exoneration Footage: Irrefutable video evidence to protect drivers and companies from false claims."
          },
          {
            id:4,
            text: "Predictive Maintenance Insights: Leverage telematics data to monitor vehicle health and schedule maintenance proactively, reducing unexpected breakdowns and downtime."
          },
        ],
        bottomTextHeader: "Improving Operations and Reducing Costs:",
        bottomText: "By promoting safer driving practices, EMBLOCK helps reduce accident rates and associated insurance premiums. The system minimizes the risk of costly legal disputes with reliable video evidence, ensuring quick resolution of incidents. With improved safety and compliance, fleet efficiency is enhanced, allowing businesses to focus on timely deliveries and customer satisfaction."
      },
      quote: {
        quote: "Fleet safety has always been a priority for us, and EMBLOCK delivered exactly what we needed. Driver behavior monitoring and GPS tracking have improved safety and efficiency across our fleet.",
        author: "Syed Irfan",
        designation: " Founder-NATIONAL TRANSPORT ",
      }
    },
    {
      id: 5,
      title: "EMBLOCK: Efficient Solution For GST",
      type: "Accounting",
      description: "The accounting industry is rapidly embracing automation to simplify complex tasks and meet growing compliance demands. Professionals are under constant pressure to manage large volumes of data, adapt to frequent regulatory changes, and ensure accuracy in tax filings. EMBLOCK’s accounting solution focuses on streamlining tax compliance, particularly GST filing for monthly and yearly returns, making it an ideal tool for accountants handling multiple clients. Our software empowers accountants to meet their goals efficiently and accurately, reducing the time and effort required for compliance management.",
      focusAreasText: "EMBLOCK’s software is designed to address critical aspects of the accounting process, including:",
      focusAreas: [
        {
          id: 1,
          title: "Tax Compliance Automation:",
          point: "Advanced tools to monitor and improve driver behavior, reducing risks on the road."
        },
        {
          id: 2,
          title: "Regulatory Updates: ",
          point: "Provides real-time notifications of changes in GST regulations to ensure compliance."
        },
        {
          id: 3,
          title: "Workload Management:",
          point: "Enables accountants to handle multiple clients seamlessly by organizing and automating routine tasks."
        },
      ],
      services: "UI/UX Design",
      category: "Mobile App",
      client: "Stonks Inc",
      image1: "/image1.png",
      image2: "/image2.jpg",
      painPoint: "Accounting professionals face several challenges that affect their efficiency and productivity. Manual errors during data entry and tax preparation are common, leading to potential compliance issues and penalties. Additionally, the time-consuming nature of creating and submitting GST forms can limit the capacity of accountants to manage multiple clients. Keeping up with frequent updates to tax laws and regulations further complicates the process, leaving little room for strategic decision-making. EMBLOCK’s solution addresses these pain points by automating repetitive tasks and reducing the risk of errors, allowing accountants to focus on delivering value to their clients.",
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
        image: "/image1.png",
        header: "EMBLOCK’s accounting software provides cutting-edge tools to simplify and enhance tax compliance processes.",
        keyFeatures: [
          {
            id:1,
            text: "  Automated Form Generation: Transforms Excel data into GST forms quickly and accurately."
          },
          {
            id:2,
            text: "Error Detection and Correction: Identifies inconsistencies in data and suggests corrections for flawless filings."
          },
          {
            id:3,
            text: "Real-Time Regulatory Updates: Keeps accountants informed of the latest GST laws and compliance requirements."
          },
          {
            id:4,
            text: "Data Analytics and Insights: Provides trends and insights for better decision-making and strategic planning."
          },
        ],
        bottomTextHeader: "Enhancing Accuracy and Efficiency:",
        bottomText: "By automating the creation of GST forms and integrating error-checking mechanisms, our solution minimizes the potential for human errors. The software ensures compliance with real-time regulatory updates, while analytics provide actionable insights that help accountants make informed decisions. The result is a faster, more accurate tax filing process that supports accountants in managing their workload effectively."
      },
      quote: {
        quote: "Managing GST used to be a nightmare until we switched to EMBLOCK. Automated tax calculations and seamless filing have made compliance effortless!.",
        author: "CA Avani Daxini",
        designation: "Founder Buddybooks",
      }
    },
  ]

  const solution = solutions[0];

  const quotes = [
    {
        id: 1,
        quote: `"EMBLOCK has completely transformed our construction management. With real-time video streaming, image recognition for attendance, and integrated PMS & ERP, it’s a single solution for everything we need on-site."`,
        author: "Bala venkatesh",
        designatin: "Founder Aargaa Construction",
    },
    {
        id: 2,
        quote: `“Right from the setup, EMBLOCK's e-commerce solution boosted our online operations, enhancing efficiency and scalability exactly as shown in the demo”`,
        author: "Devi  Ramanujam",
        designatin: "Founder Nishika",
    },
    {
        id: 3,
        quote: `“Fleet safety has always been a priority for us, and EMBLOCK delivered exactly what we needed. Driver behavior monitoring and GPS tracking have improved safety and efficiency across our fleet.`,
        author: "Syed Irfan ",
        designatin: "Founder-NATIONAL TRANSPORT ",
    },
    {
        id: 4,
        quote: `“Managing GST used to be a nightmare until we switched to EMBLOCK. Automated tax calculations and seamless filing have made compliance effortless!."`,
        author: "CA Avani Daxin",
        designatin: "Founder Buddybooks",
    },
  ]

  return (
    <div className="flex flex-col w-full overflow-x-hidden justify-start items-start">
      <section className="bg-[url('/herobg.jpg')] bg-no-repeat flex flex-col justify-start p-[10%] ">

        <h1 className="w-full text-start text-[25px] md:text-[60px] font-medium">
            Innovative IoT and Software Solutions Tailored to Transform Your Business and Empower Your Growth Journey
        </h1>
        <p className="w-full text-start text-xl md:text-3xl font-medium text-gray-500 mt-12">
            Over the years, we’ve had the privilege of partnering with a diverse range of clients, from startups to established enterprises, helping them turn their visions into impactful solutions.
        </p>

        <Link to="/services" className="rounded-full w-fit  p-2   pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium my-12 md:my-24">
          Contact Us Now
          <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
        </Link>
      </section>

      <section className="flex flex-col w-full bg-black text-white p-6 md:p-[10%]">
        <h1 className="text-start w-full text-[25px] md:text-[60px] font-medium">
          What We&apos;re Experts In:
        </h1>
        <p className="w-full text-start text-md md:text-2xl font-medium mt-8">
          From strategy and planning to deployment and optimization, we provide tailored IoT solutions that enhance efficiency, scalability, and security for your business.
        </p>

        <div className="w-full flex flex-col-reverse md:flex-row gap-4 justify-between items-start mt-16">

          <div className="w-full md:text-4/5 flex flex-col items-start">
            <h1 className="text-start w-full  text-[25px] md:text-[50px] font-medium">
              IoT Consulting and Strategy Development
            </h1>
            <p className="w-full text-start text-md md:text-2xl font-medium mt-8">
              We create tailored IoT roadmaps, conducting business assessments and feasibility studies to ensure seamless integration and maximum ROI.
            </p>

            <p className="w-full text-start text-gray-400 text-sm md:text-xl font-medium mt-12">
              Our consulting services are tailored to identify the value IoT can bring to your business and align it with your goals. We begin with a comprehensive business assessment to evaluate your organization’s specific needs and identify areas where IoT can drive operational efficiency, cost savings, or customer engagement. Once the assessment is complete, we create a customized IoT strategy, mapping out actionable services to achieve your objectives. To ensure feasibility, we conduct in-depth technical and financial analyses, validating the viability of your IoT initiatives.
            </p>

            <Link to="/services/1" className="rounded-full w-fit  p-2   pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium my-12 md:mt-24">
              Learn More
            <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
            </Link>
          </div>

          <button className="w-fit md:w-1/5 p-2 px-4 bg-white text-black text-lg rounded-full font-medium mt-4">
            Strategic
          </button>
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row gap-4 justify-between items-start mt-16">

          <div className="w-full md:text-4/5 flex flex-col items-start">
            <h1 className="text-start w-full  text-[25px] md:text-[50px] font-medium">
              Building Secure & Scalable IoT Ecosystems
            </h1>
            <p className="w-full text-start text-md md:text-2xl font-medium mt-8">
              Our solutions enhance IoT performance with real-time monitoring, predictive maintenance, and seamless connectivity management.
            </p>

            <p className="w-full text-start text-gray-400 text-sm md:text-xl font-medium mt-12">
              We specialize in developing scalable, secure, and high-performance IoT solutions tailored to your business needs. Our services include IoT platform development, device provisioning, data analytics, and cloud infrastructure to ensure seamless connectivity. With AI-powered analytics and real-time data processing, we help businesses unlock valuable insights. Our security solutions protect devices, data, and networks from threats, ensuring compliance with industry standards. From initial setup to continuous optimization, we provide the technical backbone for your IoT success.
            </p>

            <Link to="/services/2" className="rounded-full w-fit  p-2   pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium my-12 md:mt-24">
              Learn More
            <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
            </Link>
          </div>

          <button className="w-fit md:w-1/5 py-2 px-4 bg-white text-black text-lg rounded-full font-medium mt-4">
            Technical
          </button>
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start mt-16 gap-4">

          <div className="w-full md:text-4/5 flex flex-col items-start">
            <h1 className="text-start w-full  text-[25px] md:text-[50px] font-medium">
              Optimizing IoT for Maximum Efficiency
            </h1>
            <p className="w-full text-start text-md md:text-2xl font-medium mt-8">
              We develop and integrate IoT platforms, device provisioning, cloud infrastructure, and security solutions for reliable and future-proof operations.
            </p>

            <p className="w-full text-start text-gray-400 text-sm md:text-xl font-medium mt-12">
              We streamline IoT deployment, monitoring, and management to ensure smooth, efficient operations. Our solutions include custom IoT applications, connectivity management, edge computing, and predictive maintenance to enhance productivity. With real-time monitoring, automated alerts, and proactive support, we minimize downtime and maximize performance. Our smart asset tracking solutions improve inventory and supply chain management. From integration to long-term support, we keep your IoT ecosystem running at peak efficiency.
            </p>

            <Link to="/services/3" className="rounded-full w-fit  p-2   pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium my-12 md:mt-24">
              Learn More
            <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
            </Link>
          </div>

          <button className="w-fit md:w-1/5 px-4 p-2 bg-white text-black text-lg rounded-full font-medium mt-4">
            Operational
          </button>
        </div>
      </section>

       <section  className="how-it-works w-full h-full flex flex-col justify-center items-center text-black bg-white ">


      <AnimatedElement>
    
      <div className="feature-hero w-full flex flex-col gap-4 justify-center  items-start pl-4 lg:pl-24 py-12 lg:py-40 bg-white animate-fadeInUp">

        <div className="flex gap-2 justify-center items-center">
          <span className="bg-lime-400 text-black size-2 md:size-3 rounded-full">.</span>
          <p className="text-md lg:text-lg font-semibold text-gray-500">Services</p>
        </div>

        <div className="flex justify-center items-start flex-col gap-2 leading-none ">
          <h1 className="text-[25px] lg:text-[90px] text-black leading-none">
            Why Our Services?
          </h1>
        </div>

      </div>
      </AnimatedElement>

      <div className="stpes flex flex-col w-full px-6  lg:px-24">
        {/* 2 */}
        {services.map((service) => (
        <AnimatedElement delay={service.id*100} key={service.id}>
          <div  className="service py-8  lg:py-16 flex flex-col lg:flex-row w-full justify-center items-start border-t-2 border-gray-300 gap-2">

            <div className="w-full lg:w-[20%] flex justify-center lg:justify-start items-center lg:items-start">
                <button className="w-1/2 button py-2 px-4 border border-gray-800 rounded-full text-black">{service.name}</button>
            </div>

            <h1 className="w-full lg:w-[10%] service-count text-2xl lg:text-3xl font-semibold flex">
                <span className="text-customgreen">{"/"}</span> 0{service.id}
            </h1>

            <div className="description flex flex-col gap-2 w-full lg:w-[70%] items-start justify-start">
                <h1 className="text-black text-lg md:text-2xl pb-2">{service.title}</h1>
                <h1 className="text-black text-sm md:text-lg pb-2">{service.subtext}</h1>
                
                {service.services.map((s) => (
                  <p key={s.id} className="text-gray-500 flex justify-center items-start gap-2 md:pl-4 text-xs md:text-lg"><FaStarOfLife className="text-customgreen size-8" />{s.content}</p>
                ))}
              
            </div>

          </div>
        </AnimatedElement>
        ))}         
      </div>

      <div className="cards flex flex-col lg:flex-row justify-center items-center w-full gap-6 p-4  py-12 lg:p-24">

          {/* 6 */}
          <AnimatedElement delay={800}>
            <div className="card w-full rounded-xl flex flex-col bg-customgreen p-6 lg:p-12 h-[240px] lg:h-[280px] justify-between">
                <h1 className="text-[60px] lg:text-[80px] text-start w-full text-customblack font-medium">95%</h1>
                <div className="flex flex-col justify-end items-center">
                  <p className="text-end w-full text-customgray font-semibold">Percent</p>
                  <p className="text-end w-full text-green-700 text-xl fotnsembold">Customer Satisfaction</p>
                </div>
            </div>
          </AnimatedElement>

          {/* 7 */}
          <AnimatedElement delay={700}>
            <div className="card w-full rounded-xl flex flex-col bg-customblack p-6 lg:p-12 text-white h-[240px] lg:h-[280px] justify-between relative">
                <h1 className="text-[60px] lg:text-[80px] text-start w-full  font-medium">5+</h1>
                <div className="flex flex-col justify-between items-center">
                  <p className="text-end w-full  font-semibold">Years</p>
                  <p className="text-end w-full text-gray-500 text-xl font-semibold">of Experience</p>
                </div>
            </div>
          </AnimatedElement>

          {/* 8 */}
          <AnimatedElement delay={800}>
            <div className="card w-full rounded-xl flex flex-col bg-gray-200 p-6 lg:p-12 h-[240px] lg:h-[280px] justify-between">
                <h1 className="text-[60px] lg:text-[80px] text-start w-full text-customblack font-medium">60+</h1>
                <div className="flex flex-col justify-between items-center">
                  <p className="text-end w-full text-customblack font-semibold">Projects</p>
                  <p className="text-end w-full text-green-700 text-xl font-semibold">Completed</p>
                </div>
            </div>
          </AnimatedElement>

        </div>
       </section>



      {/* <section className="quote h-[500px] md:h-[600px] flex justify-center items-center px-6 md:px-24 py-24 md:mb-0 bg-black">
        <div className="w-1/5 flex justify-end items-start -mt-[180px] md:-mt-[150px]">
          < FaQuoteLeft  className="text-gray-400 size-[40px] md:size-[200px]"  />
        </div>
        <div className="w-4/5 flex flex-col justify-center items-start -mb-[50px] md:-mb-[150px] pr-[5%] text-white">
          <h1 className=" text-sm md:text-3xl font-medium mb-8">
            &ldquo;Vision without action is a dream. At our core, we transform aspirations into reality through relentless innovation and unwavering dedication.&ldquo;
          </h1>
          <p className="text-xs md:text-lg font-medium mb-4">Vigneshwaran R</p>
          <p className="text-xs md:text-md font-medium">CEO & Founder EMBLOCK</p>
        </div>
      </section> */}

      <AnimatedQuoteSection quotes={quotes} />



      <section className="w-full flex flex-col justify-center items-start gap-0 py-12 md:py-24 px-6 md:px-24">
            <div className="flex gap-2 justify-center items-center">
                <span className="bg-lime-400  size-2 md:size-3 rounded-full text-white">.</span>
                <p className="text-md md:text-lg font-semibold text-gray-400">Other Solutions</p>
            </div>
            
            <h1 className="text-[35px] md:text-[80px]">
                Some of other Solutions
            </h1>

            <div className="w-full flex flex-col md:flex-row gap-4 mt-8 ">
                {solutions.filter((s) => s.id != solution.id).map((s) => (
                    <Link to={`/solutions/${s.id}`} key={s.id} className="card w-full md:w-1/3 flex flex-col justify-between items-start p-6 border border-gray-400 rounded-xl h-[400px] md:h-[500px]">

                    <div className="flex flex-col justify-start  items-start gap-2 md:gap-4">

                    <h1 className="text-xl md:text-2xl uppercase">
                        {s.title}
                    </h1>
                    <p className="text-customgrayhover font-semibold text-sm md:text-lg">
                        {s.type}
                    </p>
                    </div>
                    <img src={solution.image1} className="w-full h-[150px] md:h-[250px] rounded-xl" />
                    </Link>
                ))}
                
                
            </div>
        </section>

      
    </div>
  )
}

export default ServicesNew
