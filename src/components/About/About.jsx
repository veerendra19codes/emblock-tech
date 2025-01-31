import { FaQuoteLeft, FaStarOfLife } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full py-6 md:py-24">
      <section className="w-full md:w-[80%] flex flex-col justify-center items-start px-6 md:mx-0">
        <div className=" flex gap-2 justify-center items-center transition-all duration-1000 ease-out">
            <span className="bg-lime-400  size-2 md:size-3 rounded-full text-white">.</span>
            <p className="text-xs md:text-lg font-semibold text-gray-400">Featured projects</p>
        </div>

        <h1 className="w-full text-start text-[35px] md:text-[60px] font-medium">About Us</h1>

        <p className="w-full text-start text-xl md:text-3xl font-medium mt-4">EMBLOCK: Turning Imagination Into Innovation </p>

        <p className="w-full text-start text-sm md:text-2xl font-medium mt-8">Welcome to EMBLOCK, where innovation meets efficiency to redefine how industries operate in a digitally-driven world. At EMBLOCK, we specialize in harnessing the transformative power of Internet of Things (IoT) and advanced software technologies to accelerate digital transformation across diverse sectors. Founded on the core principles of innovation, sustainability, and practicality, our mission is to empower businesses with intelligent solutions that improve operational efficiency and enhance decision-making. </p>

        <div className="w-full flex flex-col md:flex-row justify-between items-center my-12">
          <div className="image left w-full md:w-1/2 flex justify-center md:justify-start items-center">
            <img src="/aboutushero.png" className="w-full md:w-[90%] h-auto rounded-lg" />
          </div>

          <div className="right w-full md:w-1/2 flex flex-col justify-start items-start px-0 md:px-8 mt-8 md:mt-0">
            <h1 className="text-customblack text-xl mt-4 font-medium">IoT Solutions</h1>

            <p className="text-gray-500 font-medium mt-2 text-xs md:text-lg">As trailblazers in IoT innovation, we deliver solutions tailored to industries like manufacturing, construction, logistics, and supply chain management.</p>

            <p className="text-gray-500 font-medium mt-4  text-xs md:text-lg">Key offerings include:</p>

            <p className="text-gray-500 font-medium w-full  text-start flex flex-row flex-wrap justify-between items-start text-xs md:text-lg"><GoDotFill size={8} className="size-2 md:size-4 mt-1 md:mt-0" /> <span className="w-[95%]">Real-Time Machine Monitoring: Gain visibility into equipment performance to reduce downtime and increase productivity.</span></p>
            <p className="text-gray-500 font-medium w-full  text-start flex flex-row flex-wrap justify-between items-start text-xs md:text-lg"><GoDotFill size={8} className="size-2 md:size-4 mt-1 md:mt-0" /> <span className="w-[95%]">Fleet Management Systems: Optimize routes, improve safety, and cut operational costs with data-driven insights.</span></p>
            <p className="text-gray-500 font-medium text-start mt-4 text-xs md:text-lg"> Our IoT solutions empower businesses to operate smarter, reduce waste, and achieve their goals seamlessly</p>



            <h1 className="text-customblack text-xl mt-4 font-medium">Software Solutions</h1>

            <p className="text-gray-500 font-medium mt-2 text-xs md:text-lg">We bring robust, intuitive, and scalable software platforms to the forefront of business innovation.</p>

            <p className="text-gray-500 font-medium mt-4 text-xs md:text-lg">Key offerings include:</p>

            <p className="text-gray-500 font-medium w-full  text-start flex flex-row flex-wrap justify-between items-start text-xs md:text-lg"><GoDotFill size={8} className="size-2 md:size-4 mt-1 md:mt-0" /> <span className="w-[95%]">E-commerce Inventory Management: Track, manage, and optimize inventory for seamless business operations.</span></p>
            <p className="text-gray-500 font-medium w-full  text-start flex flex-row flex-wrap justify-between items-start text-xs md:text-lg"><GoDotFill size={8} className="size-2 md:size-4 mt-1 md:mt-0" /> <span className="w-[95%]">Customer Behavior Analytics: Understand consumer preferences and tailor strategies for maximum engagement.</span></p>
            <p className="text-gray-500 font-medium w-full  text-start flex flex-row flex-wrap justify-between items-start text-xs md:text-lg"><GoDotFill size={8} className="size-2 md:size-4 mt-1 md:mt-0" /> <span className="w-[95%]">Simplified GST Filing for Chartered Accountants: Streamline complex processes for improved accuracy and compliance.</span></p>
            
          </div>
        </div>

        <h1 className="w-full flex justify-center items-center text-md md:text-xl text-customblack font-medium my-8">
          Every solution is designed to simplify workflows, improve accuracy, and enhance user satisfaction.
        </h1>

        
      </section>

      <div className="bg-customblack w-full flex flex-col my-12 px-6 md:px-24 py-12 md:py-24 text-white">
          <div className="transition-all duration-700 ease-out  left w-full text-start  flex flex-col gap-2 md:gap-6 h-full">

            <div className="flex gap-2 justify-start items-center">
              <span className={`bg-lime-400 text-black size-2 md:size-3 rounded-full`}>.</span>
              <p className="text-md lg:text-lg font-semibold text-gray-400">Process</p>
            </div>

            <h1 className={`text-[35px] lg:text-[80px] leading-none text-white`}>
              <h1>Our Vision</h1>
            </h1>

          </div>

          <h1 className="text-lg md:text-3xl font-medium py-4">
            Our vision is to become a global leader in IoT and software solutions, enabling businesses to anticipate and address ever-evolving demands. 
          </h1>

          <div className="w-full flex flex-col md:flex-row justify-between items-center my-4 gap-8 md:gap-0">
            <div className="left w-full md:w-1/2 flex flex-col justify-start items-center gap-4 md:gap-8">
              <h1 className="w-full text-start text-lg md:text-2xl font-medium">We aim to provide tools that:</h1>

              <p className="w-full text-start text-gray-400 font-medium flex justify-start items-start gap-2 flex-wrap">
                <FaStarOfLife className="text-customgreen size-3 md:size-4 mt-1 md:mt-0" />
                <span className="w-[90%] md:w-[95%] text-start flex place-self-end">Enhance operational efficiency by automating processes.</span>
              </p>

              <p className="w-full text-start text-gray-400 font-medium flex flex-row justify-start items-start gap-2 flex-wrap">
                <FaStarOfLife className="text-customgreen size-3 md:size-4 mt-1 md:mt-0" />
                <span className="w-[90%] md:w-[95%] text-start flex">Deliver critical data insights that drive smarter decision-making.</span>
              </p>

              <p className="w-full text-start text-gray-400 font-medium flex flex-row justify-start items-start gap-2 flex-wrap">
                <FaStarOfLife className="text-customgreen size-3 md:size-4 mt-1 md:mt-0" />
                <span className="w-[90%] md:w-[95%] text-start flex">Promote innovation in every facet of business.</span>
              </p>

              <p className="w-full text-start text-gray-400 font-medium flex flex-row justify-start items-start gap-2 flex-wrap">
                <FaStarOfLife className="text-customgreen size-3 md:size-4 mt-1 md:mt-0" />
                <span className="w-[90%] md:w-[95%] text-start flex">Foster sustainable growth by integrating eco-friendly technologies and solutions.</span>
              </p>

              <p className="w-full text-start text-gray-400 font-medium flex flex-row justify-start items-start gap-2 flex-wrap">
                <FaStarOfLife className="text-customgreen size-3 md:size-4 mt-1 md:mt-0" />
                <span className="w-[90%] md:w-[95%] text-start flex">Empower businesses with scalable, adaptable solutions.</span>
              </p>

            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img src="/ourvision.png" className="w-full md:w-[90%] h-auto rounded-xl" />
            </div>
          </div>

          <h1 className="text-center mx-auto flex justify-center items-center text-md md:text-xl text-white font-medium my-8 w-full md:w-[70%] mt-16">
            At EMBLOCK, we envision a smarter, more connected world where innovation and efficiency lead the way. Together, we can pave the path to a future that's not only transformative but also secure, scalable, and sustainable.
          </h1>

        </div>


        <section className="h-[400px] md:h-[600px] flex justify-center items-center px-6 md:px-24 mb-24 md:mb-0">
          <div className="w-1/4 flex justify-end items-start -mt-[100px] md:-mt-[150px]">
            < FaQuoteLeft  className="text-gray-600 size-[40px] md:size-[200px]"  />
          </div>
          <div className="w-3/4 flex flex-col justify-center items-start -mb-[100px] md:-mb-[150px]">
            <h1 className="text-black text-sm md:text-3xl font-medium mb-8">
              &ldquo;Vision without action is a dream. At our core, we transform aspirations into reality through relentless innovation and unwavering dedication.&ldquo;
            </h1>
            <p className="text-xs md:text-lg font-medium mb-4">Vigneshwaran R</p>
            <p className="text-xs md:text-md font-medium">CEO & Founder EMBLOCK</p>
          </div>
        </section>
    </div>
  )
}

export default About

