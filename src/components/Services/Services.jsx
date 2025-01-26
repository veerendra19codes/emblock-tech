import { FaArrowRightLong } from "react-icons/fa6"

const Services = () => {

  const services = [
    {
      id: 1,
      type: "Advisory Services",
      name: "IoT Consulting Services",
      image: "/image1.png",
      platformType: "Agnostic",
      industryFocus: "Cross-Industry",
      detail: "At Emblock Tech, we guide businesses through the complexities of IoT adoption, from initial planning to full-scale implementation. Our consulting services focus on identifying opportunities, evaluating technological requirements, and creating a roadmap for success. We ensure your IoT investments align with your goals and deliver measurable value.",
      buttonText: "IoT",
    },
    {
      id: 2,
      type: "Hardware Development",
      name: "Custom IoT Device Development",
      image: "/image1.png",
      platformType: "Embedded Systems",
      industryFocus: "Manufacturing & Production",
      detail: "We specialize in designing and developing custom IoT devices that cater to unique business needs. From concept to prototype and production, our experts deliver devices with advanced sensors, connectivity options, and robust performance to enhance operational efficiency and customer satisfaction",
      buttonText: "IoT",
    },
    {
      id: 3,
      type: "Software Development",
      name: "IoT Platform Development",
      image: "/image1.png",
      platformType: "Cloud-Based",
      industryFocus: "Technology",
      detail: "Emblock Tech creates scalable and secure IoT platforms to manage devices, monitor data, and enable seamless communication between connected systems. Our platforms support diverse applications, including smart cities, industrial automation, and home automation, providing a unified interface for all IoT operations.",
      buttonText: "IoT",
    },
    {
      id: 4,
      type: "App Development",
      name: "Application Design & Development",
      image: "/image1.png",
      platformType: "Application Design & Development",
      industryFocus: "Manufacturing  & Production",
      detail: "We craft intuitive IoT applications that enable users to control, monitor, and analyze their IoT ecosystems. Whether for mobile or web, our apps are designed with user experience in mind, ensuring ease of use while providing powerful features for real-time data access and remote management.",
      buttonText: "Software",
    },
    {
      id: 5,
      type: "System Integration",
      name: "System Integration Services",
      image: "/image1.png",
      platformType: "Multi-Platform",
      industryFocus: "Cross-Industry",
      detail: "Our integration services bring together disparate IoT devices, systems, and software into a cohesive and efficient ecosystem. We ensure seamless interoperability and connectivity, enabling businesses to leverage the full potential of their IoT infrastructure without disruption.",
      buttonText: "IoT",
    },
    {
      id: 6,
      type: "Data Analysis",
      name: "Data Analytics & Insights",
      image: "/image1.png",
      platformType: "Analytics Tools",
      industryFocus: "Cross-Industry",
      detail: "We specialize in designing and developing custom IoT devices that cater to unique business needs. From concept to prototype and production, our experts deliver devices with advanced sensors, connectivity options, and robust performance to enhance operational efficiency and customer satisfaction",
      buttonText: "Data",
    },
    {
      id: 7,
      type: "Cybersecurity",
      name: "Security Solutions",
      image: "/image1.png",
      platformType: "Network Security",
      industryFocus: "Cross-Industry",
      detail: "Security is paramount in IoT systems. Emblock Tech provides comprehensive security solutions, including encryption, secure communication protocols, and threat detection systems. We safeguard your IoT networks and devices from cyber threats, ensuring data integrity and compliance with industry standards.",
      buttonText: "Security",
    },
    {
      id: 8,
      type: "Maintenance",
      name: "IoT Maintenance & Support Services",
      image: "/image1.png",
      platformType: "Customer Support",
      industryFocus: "Technology",
      detail: "We offer end-to-end maintenance and support services to ensure your IoT systems operate at peak performance. From regular updates and troubleshooting to hardware replacements and performance monitoring, we keep your IoT ecosystem running smoothly.",
      buttonText: "IoT",
    },
    {
      id: 9,
      type: "Cloud Infrastructure",
      name: "Cloud-Based IoT Solutions",
      image: "/image1.png",
      platformType: "Cloud Solutions",
      industryFocus: "Cross-Industry",
      detail: "Our integration services bring together disparate IoT devices, systems, and software into a cohesive and efficient ecosystem. We ensure seamless interoperability and connectivity, enabling businesses to leverage the full potential of their IoT infrastructure without disruption.",
      buttonText: "Cloud",
    },
    {
      id: 10,
      type: "Industrial Automation",
      name: "Industrial IoT (IIoT) Solutions",
      image: "/image1.png",
      platformType: "Edge Computing",
      industryFocus: "Emblock Tech delivers IIoT solutions tailored to industries like manufacturing, logistics, and energy. Our systems enhance productivity through real-time monitoring, predictive maintenance, and automation, helping businesses achieve higher efficiency and reduced downtime.",
      buttonText: "IoT",
    },
    {
      id: 11,
      type: "Logistics Optimization",
      name: "IoT in Supply Chain & Logistics",
      image: "/image1.png",
      platformType: "Cloud-Based",
      industryFocus: "Retail & E-commerce",
      detail: "Our IoT solutions for supply chain and logistics optimize inventory management, improve fleet tracking, and enhance delivery efficiency. By providing real-time visibility and predictive analytics, we help businesses streamline operations and reduce costs.",
      buttonText: "Supply chain",
    },
    {
      id: 12,
      type: "ERP Solutions",
      name: "ERP Solutions",
      image: "/image1.png",
      platformType: "Cloud-Based",
      industryFocus: "Textile, Garments, Construction, Manufacturing",
      detail: "Emblock Tech delivers comprehensive ERP solutions for businesses across industries, including manufacturing, textiles, retail, and construction. Our ERP systems centralize operations like inventory management, financial tracking, and supply chain coordination, ensuring businesses operate efficiently. For IoT-integrated industries, we offer real-time data syncing from devices for seamless automation and insights.",
      buttonText: "Software",
    },
    {
      id: 13,
      type: "CRM Solutions",
      name: "CRM Solutions",
      image: "/image1.png",
      platformType: "Applications",
      industryFocus: "Retail, E-commerce, Real Estate",
      detail: "Our CRM solutions are tailored to help businesses across industries, such as retail, real estate, and service sectors, build stronger customer relationships. From lead tracking to personalized communication, our CRM platforms enhance customer engagement and loyalty. IoT integration is available for industries like retail, enabling real-time customer behavior analysis for targeted marketing.",
      buttonText: "Software",
    }
  ]

  return (
    <div className="flex flex-col w-full">
      {services.map((service) => (
        <div key={service.id} className={`w-full flex flex-col p-6 md:p-24 justify-start items-start gap-12 ${service.id % 2 == 0 ? "bg-black" : "bg-white"}`}>

          <div className="transition-all duration-700 ease-out  left w-full text-start  flex flex-col gap-6 h-full">

            <div className="flex gap-2 justify-start items-center">
              <span className={`bg-lime-400 text-black size-2 md:size-3 rounded-full ${service.id % 2 == 0 ? "text-black" :"text-white"}`}>.</span>
              <p className="text-md lg:text-lg font-semibold text-gray-400">{service.type}</p>
            </div>

            <h1 className={`text-[35px] lg:text-[80px] leading-none ${service.id % 2 == 0 ? "text-white" :"text-black"}`}>
              <h1>{service.name}</h1>
            </h1>

          </div>

          <div className="w-full image-and-details flex flex-col md:flex-row justify-between gap-12 items-start">
            <img src={service.image} alt="image" className="w-full md:w-1/2 h-auto rounded-xl" />

            <div className="w-full md:w-1/2 h-full flex flex-col justify-between items-start gap-8">

              <div className="top flex justify-start items-start gap-6 md:gap-12">

                <div className="card flex flex-col justify-start items-start gap-2 md:gap-4">
                  <p className="text-gray-400 text-md md:text-xl font-medium text-start">Platform Type</p>
                  <h1 className={`textlg md:text-2xl font-medium text-start ${service.id % 2 == 0 ? "text-white" :"text-black"}`}>{service.platformType}</h1>
                </div>

                <div className="card flex flex-col justify-start items-start gap-2 md:gap-4">
                  <p className="text-gray-400 text-md md:text-xl font-medium text-start">Industry Focus</p>
                  <h1 className={`textlg md:text-2xl  font-medium text-start ${service.id % 2 == 0 ? "text-white" :"text-black"}`}>{service.industryFocus}</h1>
                </div>

              </div>

              <p className="text-gray-400 flex flex-wrap leading-none text-md md:text-xl font-medium">
                {service.detail}
              </p>

              <div className="w-full bottom-buttons gap-4 md:gap-8 flex justify-start  items-center">
                <button className="rounded-full min-w-[100px] md:min-w-[150px] font-medium py-2 md:py-3 border border-customblack bg-white text-customblack px-4 text-md md:text-xl">{service.buttonText}</button>

                <button className="rounded-full p-1 md:p-2   pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-2 md:gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium">
                  Enquiry Now
                  <FaArrowRightLong className="bg-white text-customgray rounded-full size-8 md:size-10 p-2 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
                  </button>
              </div>

            </div>

          </div>

        </div>
      ))}

    
    </div>

  )
}

export default Services
