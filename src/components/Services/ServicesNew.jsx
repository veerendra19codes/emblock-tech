import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaStarOfLife } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AnimatedQuoteSection from "../AnimatedQuoteSection";

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


const ServicesNew = () => {

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
          "EMBLOCK solution has transformed our operations, giving us live insights and instant alerts to reduce downtime. It's user-friendly, efficient, and has greatly improved our productivity!",
        author: "Adithya Raam Sankar",
        designation: "Founder trusspur",
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
      type: "IoT solutions",
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
          "Right from the setup, EMBLOCK's e-commerce solution boosted our online operations, enhancing efficiency and scalability exactly as shown in the demo",
        author: "Devi  Ramanujam",
        designation: "Founder Nishikas",
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
      image2: "/fleet-safety-image2.jpg",
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
      image2: "/gst-solution-image2.jpg",
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

  const solution = solutions[0];

  const quotes = [
    {
        id: 0,
        quote: `"EMBLOCK solution has transformed our operations, giving us live insights and instant alerts to reduce downtime. It's user-friendly, efficient, and has greatly improved our productivity!"`,
        author: "Adithya Raam Sankar",
        designatin: "Founder trusspur",
    },
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
        quote: `“Fleet safety has always been a priority for us, and EMBLOCK delivered exactly what we needed. Driver behavior monitoring and GPS tracking have improved safety and efficiency across our fleet."`,
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
      <AnimatedElement  className="bg-[url('/herobg.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-start px-[10%] py-[5%]">

        <h1 className="w-full lg:w-[80%] text-start text-[25px] md:text-[40px] lg:text-[60px] leading-tight font-normal">
            Innovative IoT and Software Solutions Tailored to Transform Your Business and Empower Your Growth Journey
        </h1>
        <p className="w-full lg:w-[80%] text-start text-base md:text-xl lg:text-2xl  font-medium text-gray-500 mt-8 md:mt-[2%]">
            Over the years, we&apos;ve had the privilege of partnering with a diverse range of clients, from startups to established enterprises, helping them turn their visions into impactful solutions.
        </p>

        <Link to="/contactus" className="rounded-full w-fit  p-2  pl-4 md:pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium  my-6 md:my-24">
          Contact Us Now
          <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
        </Link>
      </AnimatedElement>

      <section className="flex flex-col w-full bg-black text-white p-6 py-12 md:p-[10%]">
        <h1 className="text-start w-full text-[25px] md:text-[40px] lg:text-[60px] font-medium">
          What We&apos;re Experts In:
        </h1>
        <p className="w-full text-start text-sm md:text-lg lg:text-xl font-medium mt-4 md:mt-8">
          From strategy and planning to deployment and optimization, we provide tailored IoT solutions that enhance efficiency, scalability, and security for your business.
        </p>

        <div className="w-full flex flex-col-reverse md:flex-row gap-4 justify-between items-start mt-12 pt-4 md:mt-16 border-t border-gray-700">

          <div className="w-full md:text-4/5 flex flex-col items-start ">
            <h1 className="text-start w-full  text-[25px] md:text-[40px] lg:text-[60px] font-medium">
              IoT Consulting and Strategy Development
            </h1>
            <p className="w-full text-start text-sm md:text-lg font-medium mt-4 md:mt-8">
              We create tailored IoT roadmaps, conducting business assessments and feasibility studies to ensure seamless integration and maximum ROI.
            </p>

            <p className="w-full text-start text-gray-400 text-xs md:text-base font-medium mt-4 md:mt-12">
              Our consulting services are tailored to identify the value IoT can bring to your business and align it with your goals. We begin with a comprehensive business assessment to evaluate your organization&apos;s specific needs and identify areas where IoT can drive operational efficiency, cost savings, or customer engagement. Once the assessment is complete, we create a customized IoT strategy, mapping out actionable services to achieve your objectives. To ensure feasibility, we conduct in-depth technical and financial analyses, validating the viability of your IoT initiatives.
            </p>

            <Link to="/services/1" className="rounded-full w-fit  p-2   pl-4 md:pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium my-4 md:my-12 lg:my-16">
              Learn More
            <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
            </Link>
          </div>

          <label className="w-fit p-1 md:p-2 px-4 bg-white text-black text-xs lg:text-xl rounded-full font-medium mt-4">
            Strategic
          </label>
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row gap-4 justify-between items-start mt-8 pt-4 md:mt-16 border-t border-gray-700">

          <div className="w-full md:text-4/5 flex flex-col items-start">
            <h1 className="text-start w-full  text-[25px] md:text-[40px] lg:text-[60px] font-medium">
              Building Secure & Scalable IoT Ecosystems
            </h1>
            <p className="w-full text-start text-sm md:text-lg font-medium mt-4 md:mt-8">
              Our solutions enhance IoT performance with real-time monitoring, predictive maintenance, and seamless connectivity management.
            </p>

            <p className="w-full text-start text-gray-400 text-xs md:text-base font-medium mt-4 md:mt-12">
              We specialize in developing scalable, secure, and high-performance IoT solutions tailored to your business needs. Our services include IoT platform development, device provisioning, data analytics, and cloud infrastructure to ensure seamless connectivity. With AI-powered analytics and real-time data processing, we help businesses unlock valuable insights. Our security solutions protect devices, data, and networks from threats, ensuring compliance with industry standards. From initial setup to continuous optimization, we provide the technical backbone for your IoT success.
            </p>

            <Link to="/services/2" className="rounded-full w-fit  p-2   pl-4 md:pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium  my-4 md:my-12 lg:my-16">
              Learn More
            <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
            </Link>
          </div>

          <label className="w-fit p-1 md:p-2 px-4 bg-white text-black text-xs lg:text-xl rounded-full font-medium mt-4">
            Technical
          </label>
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start mt-8 pt-4 md:mt-16 border-t border-gray-700 gap-4">

          <div className="w-full md:text-4/5 flex flex-col items-start">
            <h1 className="text-start w-full  text-[25px] md:text-[40px] lg:text-[60px] font-medium">
              Optimizing IoT for Maximum Efficiency
            </h1>
            <p className="w-full text-start text-sm md:text-lg font-medium mt-4 md:mt-8">
              We develop and integrate IoT platforms, device provisioning, cloud infrastructure, and security solutions for reliable and future-proof operations.
            </p>

            <p className="w-full text-start text-gray-400 text-xs md:text-base font-medium mt-4 md:mt-12">
              We streamline IoT deployment, monitoring, and management to ensure smooth, efficient operations. Our solutions include custom IoT applications, connectivity management, edge computing, and predictive maintenance to enhance productivity. With real-time monitoring, automated alerts, and proactive support, we minimize downtime and maximize performance. Our smart asset tracking solutions improve inventory and supply chain management. From integration to long-term support, we keep your IoT ecosystem running at peak efficiency.
            </p>

            <Link to="/services/3" className="rounded-full w-fit  p-2   pl-4 md:pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium my-4 md:my-12 lg:my-16">
              Learn More
            <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
            </Link>
          </div>

          <label className="w-fit p-1 md:p-2 px-4  bg-white text-black text-xs lg:text-xl rounded-full font-medium mt-4">
            Operational
          </label>
        </div>
      </section>

       <section  className="how-it-works w-full h-full flex flex-col justify-center items-center text-black bg-white ">


      <AnimatedElement>
    
      <div className="feature-hero w-full flex flex-col gap-4 justify-center  items-start pl-4 lg:pl-24 py-12 lg:py-24 bg-white animate-fadeInUp">

        <div className="flex gap-2 justify-center items-center">
          <span className="bg-lime-400 text-white size-2 md:size-3 rounded-full">.</span>
          <p className="text-md lg:text-lg font-semibold text-gray-500">Services</p>
        </div>

        <div className="flex justify-center items-start flex-col gap-2 leading-none ">
          <h1 className="text-[25px] md:text-[40px] lg:text-[60px] font-normal text-black leading-none">
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

            <div className="w-full lg:w-[20%] flex justify-start items-center lg:items-start">
                <button className="w-fit button py-2 px-4 border border-gray-800 rounded-full text-black">{service.name}</button>
            </div>

            <h1 className="w-full lg:w-[10%] service-count text-2xl lg:text-3xl font-semibold flex">
                <span className="text-customgreen">{"/"}</span> 0{service.id}
            </h1>

            <div className="description flex flex-col gap-2 w-full lg:w-[70%] items-start justify-start">
                <h1 className="text-black text-lg md:text-2xl pb-2">{service.title}</h1>
                <h1 className="text-black text-sm md:text-lg pb-2">{service.subtext}</h1>
                
                {service.services.map((s) => (
                  <p key={s.id} className="text-gray-500 flex justify-center items-start gap-2 md:pl-4 text-xs md:text-lg"><FaStarOfLife className="text-customgreen size-4 mt-2" />{s.content}</p>
                ))}
              
            </div>

          </div>
        </AnimatedElement>
        ))}         
      </div>

      <div className="cards flex flex-col md:flex-row justify-center items-center w-full gap-6 p-4  py-12 lg:p-24">

          {/* 6 */}
          <AnimatedElement delay={800}>
            <div className="card w-full rounded-xl flex flex-row md:flex-col justify-between items-center bg-customgreen p-6 lg:p-12 h-[100px] md:h-[280px]">
                <h1 className="text-[60px] md:text-[4xl] lg:text-[80px] text-start w-full text-customblack font-medium">95%</h1>
                <div className="w-full flex flex-col justify-end items-center">
                  <p className="text-end w-full text-customgray font-semibold text-sm md:text-lg">Percent</p>
                  <p className="text-end w-full text-green-700 text-sm md:text-xl fotnsembold">Customer Satisfaction</p>
                </div>
            </div>
          </AnimatedElement>

          {/* 7 */}
          <AnimatedElement delay={700}>
            <div className="card w-full rounded-xl flex flex-row md:flex-col justify-between items-center bg-customblack p-6 lg:p-12 h-[100px] md:h-[280px]">
                <h1 className="text-[60px] md:text-[4xl] lg:text-[80px] text-start w-full text-white font-medium">5+</h1>
                <div className="w-full flex flex-col justify-between items-center">
                  <p className="text-end w-full  font-semibold text-gray-500 text-sm md:text-lg">Years</p>
                  <p className="text-end w-full text-gray-500 text-sm md:text-xl font-semibold">of Experience</p>
                </div>
            </div>
          </AnimatedElement>

          {/* 8 */}
          <AnimatedElement delay={800}>
            <div className="card w-full rounded-xl flex flex-row md:flex-col justify-between items-center bg-gray-200 p-6 lg:p-12 h-[100px] md:h-[280px]">
                <h1 className="text-[60px]  md:text-[4xl] lg:text-[80px] text-start w-full text-customblack font-medium">60+</h1>
                <div className="w-full flex flex-col justify-between items-center">
                  <p className="text-end w-full text-customblack font-semibold text-sm md:text-lg">Projects</p>
                  <p className="text-end w-full text-green-700 font-semibold text-sm md:text-xl">Completed</p>
                </div>
            </div>
          </AnimatedElement>

        </div>
       </section>

      <AnimatedQuoteSection quotes={quotes} />

      {/* <section className="w-full flex flex-wrap flex-col justify-center items-start gap-0 py-12 md:py-24 px-6  lg:px-24">
            <AnimatedElement className="w-full flex gap-2 justify-start items-center sm:px-[5%]">
                <span className="bg-lime-400  size-2 md:size-3 rounded-full text-white">.</span>
                <p className="text-md lg:text-lg font-semibold text-gray-400">Other Solutions</p>
            </AnimatedElement>
            
            <AnimatedElement className="text-[25px] md:text-[40px] lg:text-[60px] sm:px-[5%]">
                Some of other Solutions
            </AnimatedElement>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 justify-center">
                {solutions.filter((s) => s.id != solution.id).map((s, index) => (
                  
                    <Link to={`/solutions/${s.id}`} key={s.id} className="card w-full flex justify-center items-center   h-[400px] md:h-[500px]">

                      <AnimatedElement delay={1000+(200*(s.id))} className="card w-full  flex flex-col justify-between items-start p-4 border border-gray-400  rounded-xl  h-[400px] md:h-[500px]">


                    <div className="flex flex-col justify-start  items-start gap-2 md:gap-4">

                    <h1 className="text-xl md:text-2xl uppercase font-medium">
                        {s.title}
                    </h1>
                    <p className="text-customgrayhover font-semibold text-sm md:text-lg">
                        {s.type}
                    </p>
                    </div>
                    <img src={s.image1} className="w-full h-[150px] sm:h-[200px] lg:h-[250px] rounded-xl object-cover" />
                      </AnimatedElement>

                    </Link>
                ))}
        
            </div>
        </section> */}


      <div className="w-full flex flex-col justify-center items-start gap-0 py-12 px-6 md:px-24">
              <AnimatedElement delay={600}>
                <div className="flex gap-2 justify-start items-center">
                  <span className=" bg-lime-400  size-2 md:size-3 rounded-full text-white">.</span>
                  <p className="text-sm md:text-lg font-semibold text-gray-400">Other Solutions</p>
                </div>
              </AnimatedElement>
      
              <AnimatedElement delay={800}>
                <h1 className="text-[25px] md:text-[40px] lg:text-[60px]">Some of other Solutions</h1>
              </AnimatedElement>
      
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {solutions
                  .filter((s) => s.id != solution.id)
                  .map((s, index) => (
                    <Link
                      to={`/solutions/${s.id}`}
                      key={s.id}
                      className="card w-full  flex  justify-center items-start  rounded-xl h-fit sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[450px]"
                    >
                      <AnimatedElement key={s.id} delay={1000 + index * 200} className="w-full h-full">
                        <Link
                          to={`/solutions/${s.id}`}
                          key={s.id}
                          className="card w-full flex flex-col justify-between items-start p-4 border border-gray-400 rounded-xl h-fit gap-4 sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[450px]"
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
                      </AnimatedElement>
                    </Link>
                  ))}
              </div>
            </div>
      
    </div>
  )
}

export default ServicesNew
