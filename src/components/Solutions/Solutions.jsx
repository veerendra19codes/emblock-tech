import { FaArrowRightLong } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import { Link, useParams } from "react-router-dom"
import { FaQuoteLeft } from "react-icons/fa"

const Solutions = () => {
  const { id } = useParams()
  const solutionIndex = Number.parseInt(id) - 1
  const solutions = [
    {
      id: 1,
      title: "EMBLOCK: IoT Solutions for Manufacturing",
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
      category: "Mobile App",
      client: "Stonks Inc",
      image1: "/image1.png",
      image2: "/image2.jpg",
      painPoint:
        "Manufacturers face a variety of challenges that can disrupt operations and hinder growth. Labor shortages are a persistent issue, with many companies struggling to meet production goals without increasing operational costs. Additionally, unplanned production delays caused by equipment failures or inefficiencies in production lines often result in lost time and revenue. Limited visibility into production status and inventory levels can further exacerbate supply chain disruptions, making it difficult to align supply with demand. Finally, compliance with environmental and quality regulations adds another layer of complexity, requiring continuous monitoring and reporting to avoid costly penalties.",
      bottomText:
        "EMBLOCK brings transformative benefits to the manufacturing industry, making it an indispensable solution for forward-thinking businesses. By minimizing unplanned downtime and reducing maintenance costs, EMBLOCK significantly enhances operational efficiency. Its predictive maintenance capabilities ensure machinery runs smoothly, avoiding unexpected disruptions. With automated data collection and advanced analytics, manufacturers can streamline workflows, improve decision-making, and increase overall productivity. Additionally, continuous monitoring helps companies adhere to strict environmental and quality standards, ensuring compliance and mitigating the risk of regulatory fines.",
      bottomTexts: [],
      solution: {
        image: "/image1.png",
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
          "EMBLOCK has completely transformed our construction management. With real-time video streaming, image recognition for attendance, and integrated PMS & ERP, it's a single solution for everything we need on-site.",
        author: "Bala venkatesh",
        designation: "Founder Aargaa Construction",
      },
    },
    {
      id: 2,
      title: "Building Success: EMBLOCK Construction Solutions",
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
      services: "UI/UX Design",
      category: "Mobile App",
      client: "Stonks Inc",
      image1: "/image1.png",
      image2: "/image2.jpg",
      painPoint:
        "The construction industry faces a variety of persistent challenges that impact efficiency and profitability. Project delays are a common concern, often caused by miscommunication, inefficient workflows, or labor shortages. Budget overruns arise due to poor resource management and fluctuating material costs, straining financial resources. Compliance with safety and building codes is another critical challenge, as failure to meet standards can result in costly penalties and reputational damage. Additionally, effective communication across project teams often remains a hurdle, leading to missed deadlines and reduced productivity.",
      bottomText:
        "EMBLOCK provides unparalleled benefits for the construction industry, helping companies maintain a competitive edge. By ensuring cost efficiency through tighter budget control and risk mitigation, our solutions minimize financial strain. Projects stay on schedule thanks to robust project management tools, improving client satisfaction and operational efficiency. Superior resource management reduces unnecessary expenditures and downtime, ensuring materials and labor are used effectively. With improved workflows and streamlined communication, construction firms can elevate their productivity and profitability.",
      bottomTexts: [],
      solution: {
        image: "/image1.png",
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
          "EMBLOCK has completely transformed our construction management. With real-time video streaming, image recognition for attendance, and integrated PMS & ERP, it's a single solution for everything we need on-site.",
        author: "Bala venkatesh",
        designation: "Founder Aargaa Construction",
      },
    },
  ]

  const solution = solutions[solutionIndex]

  if (!solution) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Solution not found</h1>
      </div>
    )
  }

  return (
    <>
      <style jsx>{`
        .sticky-sidebar {
          position: sticky;
          top: 2rem;
          height: fit-content;
          max-height: calc(100vh - 4rem);
          overflow-y: auto;
        }

        @media (max-width: 768px) {
          .sticky-sidebar {
            position: static;
            max-height: none;
            overflow-y: visible;
          }
        }
      `}</style>
      <div className="flex justify-start items-center py-4 md:py-32 w-full flex-col">
        <section key={solution.id} className="top w-full flex flex-col justify-start items-start py-0 md:py-24">
          {/* Header section */}
          <h1 className="w-full text-[35px] md:text-[70px] text-start text-customblack font-normal flex flex-wrap leading-none px-6 md:px-32">
            {solution.title}
          </h1>

          <p className="text-customblack text-start text-md md:text-2xl flex flex-wrap font-semibold mt-8 md:mt-24 px-6 md:px-32">
            {solution.description}
          </p>

          {/* Main content section with sticky behavior */}
          <div className="w-full relative mt-16">
            <div className="container mx-auto px-6 md:px-32">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left side content */}
                <div className="w-full md:w-3/5">
                  <div className="pb-24">
                    <h2 className="text-customblack text-start w-full font-semibold text-xl md:text-3xl flex flex-wrap">
                      Focus Areas of the Solution:
                    </h2>

                    <p className="w-full text-start text-customgrayhover flex flex-wrap text-sm md:text-xl font-semibold mt-8">
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
                          </span>
                          {f.point}
                        </li>
                      ))}
                    </ul>

                    <img
                      src={solution.image1 || "/placeholder.svg"}
                      alt="image"
                      className="w-full rounded-xl object-contain my-16"
                    />

                    <div className="painPoint w-full flex flex-col justify-start items-start">
                      <h1 className="text-customblack text-start w-full font-semibold text-xl md:text-3xl flex flex-wrap">
                        Pain Points:
                      </h1>
                      <p className="w-full text-start text-customgrayhover flex flex-wrap text-sm md:text-xl font-semibold mt-8">
                        {solution.painPoint}
                      </p>
                    </div>

                    <img
                      src={solution.image2 || "/placeholder.svg"}
                      alt="image"
                      className="w-full rounded-xl object-contain my-16"
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
                          </span>
                          {b.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sticky sidebar */}
                <div className="w-full md:w-2/5">
                  <div className="sticky-sidebar">
                    <div className="w-full key-features flex flex-col justify-start items-start p-8 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="w-full flex flex-col justify-center items-start border-b border-gray-300 py-4">
                        <p className="text-gray-400 font-normal text-base">Service</p>
                        <h2 className="text-customblack text-lg font-medium">{solution.services}</h2>
                      </div>

                      <div className="w-full flex flex-col justify-center items-start border-b border-gray-300 py-4">
                        <p className="text-gray-400 font-normal text-base">Category</p>
                        <h2 className="text-customblack text-lg font-medium">{solution.category}</h2>
                      </div>

                      <div className="w-full flex flex-col justify-center items-start py-4">
                        <p className="text-gray-400 font-normal text-base">Client</p>
                        <h2 className="text-customblack text-lg font-medium">{solution.client}</h2>
                      </div>

                      <button className="rounded-full p-2 pl-6 text-md md:text-lg whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500 hover:shadow-none group my-4 font-semibold">
                        Case studies
                        <FaArrowRightLong className="bg-white text-customgray rounded-full size-10 p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-black px-6 md:px-24 py-24 md:py-48 text-white flex flex-col justify-center items-center">
          <h1 className="text-2xl font-medium text-start w-full">Our Solutions</h1>

          <div className="w-full middle flex gap-2 flex-col-reverse md:flex-row justify-between items-center">
            <div className="left w-full md:w-1/2 flex flex-col justify-start items-start">
              <p className="w-full text-start text-gray-400 flex flex-wrap text-md md:text-xl font-semibold my-8">
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

            <div className="right w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
              <img
                src={solution.solution.image || "/placeholder.svg"}
                className="size-full md:size-[90%]  rounded-xl"
              />
            </div>
          </div>

          <div className="bottom w-full flex flex-col gap-4 justify-start my-12">
            <h1 className="text-white text-md md:text-2xl font-medium">{solution.solution.bottomTextHeader}</h1>
            <p className="text-gray-400 text-sm md:text-xl font-medium">{solution.solution.bottomText}</p>
          </div>
        </section>

        <section className="w-full h-[400px] md:h-[800px] flex justify-center items-center px-6 md:px-24">
          <div className="w-1/5 flex justify-end items-start -mt-[150px] md:-mt-[200px]">
            <FaQuoteLeft className="text-gray-600 size-[40px] md:size-[200px]" />
          </div>
          <div className="w-4/5 flex flex-col justify-center items-start -mb-[100px] md:-mb-[200px]">
            <h1 className="text-black text-sm md:text-3xl font-medium mb-8">&ldquo;{solution.quote.quote}&ldquo;</h1>
            <p className="text-xs md:text-lg font-medium mb-4">{solution.quote.author}</p>
            <p className="text-xs md:text-md font-medium">{solution.quote.designation}</p>
          </div>
        </section>

        <div className="w-full flex flex-col justify-center items-start gap-0 py-24 px-6 md:px-24">
          <div className="flex gap-2 justify-center items-center">
            <span className="bg-lime-400  size-2 md:size-3 rounded-full text-white">.</span>
            <p className="text-md md:text-lg font-semibold text-gray-400">Other Solutions</p>
          </div>

          <h1 className="text-[35px] md:text-[80px]">Some of other Solutions</h1>

          <div className="w-full flex flex-col md:flex-row gap-4 mt-8 ">
            {solutions
              .filter((s, index) => index !== solutionIndex)
              .map((s) => (
                <Link
                  to={`/solutions/${s.id}`}
                  key={s.id}
                  className="card w-full md:w-1/3 flex flex-col justify-between items-start p-6 border border-gray-400 rounded-xl h-[400px] md:h-[500px]"
                >
                  <div className="flex flex-col justify-start  items-start gap-2 md:gap-4">
                    <h1 className="text-xl md:text-2xl uppercase">{s.title}</h1>
                    <p className="text-customgrayhover font-semibold text-sm md:text-lg">{s.type}</p>
                  </div>
                  <img
                    src={solution.image1 || "/placeholder.svg"}
                    className="w-full h-[150px] md:h-[250px] rounded-xl"
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Solutions

