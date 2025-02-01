import { useEffect, useRef, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import {  Link, useParams } from "react-router-dom";
import Edgecarts from './Edgecarts';

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


const SingleProduct = () => {

    const { id } = useParams();

    const products = [
        {
            id: 1,
            image: "/product1-image1.png",
            path: "/product/1",
            name: "Real-Time Machine Monitoring System",
            platformType: "SaaS",
            industryFocus: "Manufacturing & Production",
            keyBenefits: "Enhanced Operational Efficiency",
            content: "The ultimate solution for enhancing shop floor efficiency and accuracy. EMBLOCK  is  designed for manufacturers in the garment and leather industries, providing real-time data insights to drive operational excellence.",
            subcontent: "EMBLOCK helps manufacturers save time, reduce errors, and make smarter decisions. If you’re looking to optimize efficiency and stay ahead of the curve, this is for you. ",
            subparts: [
                {
                    id: 1,
                    image: "/product1-image1.png",
                    title: "The Shop Floor Struggle",
                    content: "Manufacturers often face significant challenges on the shop floor due to outdated practices. Manual data collection is time-consuming, prone to errors, and inefficient, while limited visibility into machine performance and productivity trends delays critical decision-making. These inefficiencies lead to costly downtime, missed growth opportunities, and increased operational expenses, preventing manufacturers from reaching their full potential."
                },
                {
                    id: 2,
                    image: "/product1-image2.png",
                    title: "Reinventing the Future of Manufacturing",
                    content: "EMBLOCK solves these challenges with automated data collection, eliminating manual errors and providing accurate, real-time insights. Powered by India&apos;s first AI-integrated algorithm, it predicts machine failures, optimizes maintenance, and reduces downtime. Its 360° dashboard offers complete shop floor visibility, enabling quick actions to improve workflows. Scalable and flexible, EMBLOCK adapts to businesses of all sizes."
                },
                {
                    id: 3,
                    image: "/product1-image3.png",
                    title: "",
                    content: ""
                },
            ]
        },
        {
            id: 2,
            image: "/product2-image1.png",
            name: "Strikes",
            path: "/product/2",
            platformType: "Mobile App",
            industryFocus: "Brands and Influencer",
            keyBenefits: "Connect Brands with influencer",
            content: "STRIKES is a revolutionary mobile app that brings brands, influencers, and customers together on a single, seamless platform. With STRIKES, brands can create powerful campaigns, influencers can collaborate effortlessly, and customers can enjoy exclusive offers and purchase directly through the app. It’s the perfect ecosystem for modern marketing and shopping.",
            subcontent: "Build Better, Smarter, and Faster. If you're looking to revolutionize your construction processes, this is the tool for you.",
            subparts: [
                {
                    id: 1,
                    image: "/product2-image1.png",
                    title: "For Brands: Create Campaigns and Drive Results",
                    content: "STRIKES empowers brands to craft impactful campaigns that resonate with their audience. With just a few clicks, brands can launch tailored campaigns to promote their products or services. The app provides tools to attract the right influencers who align with their brand values and target audience, ensuring successful collaborations. Additionally, brands can track the performance of their campaigns with in-app analytics, maximizing outreach and achieving better ROI."
                },
                {
                    id: 2,
                    image: "/product2-image2.png",
                    title: "For Influencers: Discover Opportunities and Monetize Your Reach",
                    content: "STRIKES provides influencers with a platform to grow their careers and partner with leading brands. Influencers can browse a wide range of campaigns that match their niche and audience. They have the flexibility to bid on campaigns or instantly accept offers that suit their style. By using STRIKES, influencers can build their portfolios, showcasing successful collaborations and attracting more opportunities."
                },
                {
                    id: 3,
                    image: "/product2-image3.png",
                    title: "Join STRIKES Today",
                    content: `Whether you're a brand aiming to expand your audience, an influencer looking to grow your career, or a customer searching for great deals, STRIKES is the app for you. Experience a new way to connect, collaborate, and shop—all in one place.

Download STRIKES now and be part of the future of collaboration!
`
                },
            ]
        },
        {
            id: 3,
            image: "/edgecarts-image1.png",
            name: "Edgecarts",
            path: "/product/3",
            platformType: "E-commerce",
            industryFocus: "Brands",
            keyBenefits: "Enhanced Operational Efficiency",
            content: "EDGECARTS makes entering the online marketplace simple and risk-free. Businesses can launch unique e-commerce websites with no upfront costs or hidden fees. We prioritize your success, charging only a 10% commission on each sale.",
            subcontent: "Build Your Business, Not Your Budget. With EDGECARTS, you can focus on growth while we handle the rest.",
            subparts: [
                {
                    id: 1,
                    image: "/edgecarts-image1.png",
                    title: "Breaking Down E-Commerce Barriers",
                    content: "Launching an e-commerce store often comes with high costs, technical challenges, and maintenance hassles, keeping small businesses and entrepreneurs out of the digital market. EDGECARTS eliminates these barriers with zero setup costs, free maintenance, and a unique domain for every store. Our transparent pricing ensures you only pay a 10% commission per sale—no hidden fees."
                },
                {
                    id: 2,
                    image: "/edgecarts-image2.png",
                    title: "A Smarter Future for Construction",
                    content: "EDGECARTS is more than just an e-commerce platform; it&apos;s your gateway to building a thriving online business. Whether you*apos;re a small business owner or an entrepreneur with big dreams, our solution gives you the tools and support to grow without limits"
                },
                {
                    id: 3,
                    image: "/edgecarts-image3.png",
                    title: "Your Success, Our Commitment. Join EDGECARTS today and transform the way you do business online.",
                    content: ""
                },
            ]
        },
        {
            id: 4,
            image: "/product4-image1.png",
            name: "Buildops",
            path: "/product/4",
            platformType: "SaaS",
            industryFocus: "Construction and Architect",
            keyBenefits: "Enhanced Operational Efficiency",
            content: "Our ERP and PMS SaaS is designed specifically for the construction industry, empowering businesses with real-time insights, efficient project management, and seamless collaboration. This solution transforms the way construction projects are planned, executed, and delivered.",
            subcontent: "Build Better, Smarter, and Faster. If you're looking to revolutionize your construction processes, this is the tool for you.",
            subparts: [
                {
                    id: 1,
                    image: "/product4-image1.png",
                    title: "Overcoming the Challenges of Construction Management",
                    content: "Construction firms often face challenges like misaligned schedules, resource wastage, and delayed timelines due to outdated management tools. These hurdles result in inefficiencies and unnecessary costs that disrupt project delivery and impact profitability. Our ERP and PMS solution addresses these issues, offering real-time tracking of progress, automated resource allocation, and streamlined workflows to ensure your projects stay on track and within budget."
                },
                {
                    id: 2,
                    image: "/product4-image2.png",
                    title: "A Smarter Future for Construction",
                    content: "Empower your construction firm with cutting-edge technology designed to simplify project management. Whether you're managing multiple sites or complex operations, our SaaS provides the tools you need to succeed in a competitive industry. Start building a smarter future today with our ERP and PMS solution for construction companies."
                },
                {
                    id: 3,
                    image: "/product4-image3.png",
                    title: "",
                    content: ""
                },
            ]
        },    
    ]

  return id == 3 ? (
            <Edgecarts />
        ): (

       
    <div className="flex flex-col justify-center items-center w-full h-full p-6 py-12 md:p-28">
        <AnimatedElement>

        <h1 className="text-[35px] md:text-[40px] lg:text-[60px] uppercase w-full text-start font-medium">
            {products[id-1].name}
        </h1>
        </AnimatedElement>

        <div className="w-full flex flex-col md:flex-row justify-between overflow-y-auto gap-8 mt-16">

            {/* this fixed  */}
            <div className="left w-full md:w-1/3 key-features flex flex-col justify-start items-start ">
                <div className="w-full flex flex-col justify-center items-start border-b border-gray-400 py-4 md:py-8">
                    <p className="text-gray-400 font-normal text-base md:text-lg">
                        Platform Type
                    </p>
                    <h2 className="text-customblack text-lg md:text-xl font-medium">
                        {products[id-1].platformType}
                    </h2>
                </div>

                <div className="w-full flex flex-col justify-center items-start border-b border-gray-400 py-4 md:py-8">
                    <p className="text-gray-400 font-normal text-base md:text-lg">
                        Industry Focus
                    </p>
                    <h2 className="text-customblack text-lg md:text-xl  font-medium">
                        {products[id-1].industryFocus}
                    </h2>
                </div>

                <div className="w-full flex flex-col justify-center items-start  py-4 md:py-8">
                    <p className="text-gray-400 font-normal text-base md:text-lg">
                        Key Benefits
                    </p>
                    <h2 className="text-customblack text-lg md:text-xl  font-medium">
                        {products[id-1].keyBenefits}
                    </h2>
                </div>

                <button className="rounded-full p-2   pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group my-4 font-semibold">
                    Visit Website 
                    <FaArrowRightLong className="bg-white text-customgray rounded-full size-10 p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
                </button>
                
            </div>

            {/* this div max-h-[500px] and scrollable according to page scroll  */}
            <div className="details w-full md:w-2/3 flex flex-col gap-4 md:gap-6 justify-center items-start">

                <div className="w-full text-lg md:text-2xl text-customgray font-semibold leading-6">
                    {products[id-1].content}
                </div>
                <p className="w-full text-base md:text-xl text-customgrayhover font-semibold">
                    {products[id-1].subcontent}
                </p>

                {products[id-1].subparts.map((part) => (
                    <div key={part.id} className="w-full flex flex-col justify-center items-star gap-4 md:gap-6 my-6">
                        <img src={part.image} className="w-full h-[250px] lg:h-[400px] 2xl:h-[500px] object-cover rounded-xl" />
                        <h1 className="w-full text-xl md:text-2xl text-customgray font-semibold leading-6">
                            {part.title}
                        </h1>
                        <p className="w-full text-base md:text-xl text-customgrayhover font-semibold">
                            {part.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-0">
            {/* <div className="flex gap-2 justify-center items-center"> */}
                <AnimatedElement className="w-full flex justify-start items-center gap-2">

                <span className="bg-lime-400  size-2 md:size-3 rounded-full text-white">.</span>
                <p className="text-md md:text-lg font-semibold text-gray-400">Our Products</p>
                </AnimatedElement>
            {/* </div> */}
            
            <AnimatedElement className="text-[25px] md:text-[40px] lg:text-[60px] mb-24">
                Our Extended Products
            </AnimatedElement>

            <div className="w-full flex flex-col md:flex-row gap-4">
                {products.filter((product) => product.id != id).map((product, index) => (
                    <Link to={product.path} key={product.id} className="card w-full lg:w-1/3  ">
                        <AnimatedElement delay={1000+(200*index)} className='flex flex-col justify-between items-start p-4  border border-gray-400 rounded-xl h-[400px] md:h-[550px] 2xl:h-[600px]'>


                    <div className="flex flex-col justify-start  items-start gap-2 md:gap-4 font-medium">

                    <h1 className="text-xl md:text-2xl lg:text-2xl uppercase 2xl:text-3xl font-medium">
                        {product.name}
                    </h1>
                    <p className="text-customgrayhover font-semibold text-sm md:text-md lg:text-lg 2xl:text-xl">
                        {product.subcontent}
                    </p>
                    </div>
                    <img src={product.image} className="w-full h-[150px] sm:h-[250px] rounded-xl 2xl:h-[350px]" />
                        </AnimatedElement>
                    </Link>
                ))}
                
                
            </div>
        </div>
    </div>
     )
  
}

export default SingleProduct
