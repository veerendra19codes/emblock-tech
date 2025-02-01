import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Faq from '../Faq';
import SocialMedia from '../SocialMedia';
import toast, { Toaster } from 'react-hot-toast';
import FaqNew from '../FaqNew';
import ContactUsFaq from './ContactUsAccordian';
import AnimatedQuoteSection from '../AnimatedQuoteSection';


const ContactUs = () => {

  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    
    const email = formData.get("email");
    const message = formData.get("message");

    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error("Invalid Email");
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Invalid Email Format");
      return;
    } else if (!message) {
      toast.error("Message is empty");
      return;
    }

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      toast.success("email sent successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("something went wrong")
    }
  };

   const data = [
  {
    number: 1,
    title: "How do EMBLOCK's solutions enhance manufacturing operations?",
    content:
      'Our solutions provide real-time monitoring of machinery, enabling predictive maintenance, reducing downtime, and improving overall production efficiency.',
  },
  {
    number: 2,
    title: "What features do EMBLOCK's logistics solutions offer?",
    content:
      'We offer features like HD dashcams for safety, automated risk profiling for better driver management, and real-time tracking to optimize fleet operations."',
  },
  {
    number: 3,
    title: "Can EMBLOCK's solutions be integrated with existing systems?",
    content:
      'Yes, our solutions are designed to be compatible with existing ERP, PMS, and other operational systems to ensure seamless integration and data synchronization',
  },
  {
    number: 4,
    title: 'What support does EMBLOCK offer for its products?',
    content:
      'We provide comprehensive support including installation, training, and ongoing technical assistance to ensure our clients get the most out of our solutions'
  },
  {
    number: 5,
    title: 'How does EMBLOCK ensure data security in its IoT devices? ',
    content:
      'Data security is paramount at EMBLOCK. We employ robust encryption and compliance with international security standards to protect all data handled by our devices.',
  },
  {
    number: 6,
    title: "What industries can benefit from EMBLOCK's IoT solutions?",
    content:
      'While our solutions are versatile enough for various industries, they are particularly beneficial for manufacturing, logistics, supply chain, and even construction sectors',
  },
  {
    number: 7,
    title: "How does the installation process of EMBLOCK's devices work?",
    content:
      'Our team conducts a thorough site assessment followed by a customized installation plan to fit the specific needs of each client, ensuring minimal disruption and optimal functionality.',
  },
]

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
    <div className="flex flex-col justify-center items-center overflow-x-hidden w-full">
        <section className="bg-[url('/herobg.jpg')] bg-cover bg-center bg-no-repeat bg- w-full flex flex-col p-6 md:p-32 justify-start items-start md:pt-48">

        <div className=" flex gap-2 justify-center items-center transition-all duration-1000 ease-out">
            <span className="bg-lime-400  size-2 md:size-3 rounded-full text-white">.</span>
            <p className="text-xs md:text-lg font-semibold text-gray-400">Get in touch</p>
        </div>

        <h1 className="w-full text-start text-[35px] md:text-[60px] font-medium">We&apos;re happy to help</h1>

        <p className="w-full text-start text-xl md:text-3xl font-medium my-6 md:my-12">At EmBlock, we value your inquiries, feedback, and suggestions. Whether you have a question about our services, need assistance, or want to explore a partnership, we’d love to hear from you. </p>
        
        <Link to="/services" className="rounded-full p-2   pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium my-12">
            Become a client 
          <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
        </Link>

        
      </section>

      <section className=" bg-black w-full flex flex-col justify-center items-center p-6 py-12 md:p-[10%] text-white">

        <div className="w-full flex flex-col justify-start items-start">
          <div className=" flex gap-2 justify-center items-center transition-all duration-1000 ease-out">
              <span className="bg-lime-400  size-2 md:size-3 rounded-full text-customblack">.</span>
              <p className="text-xs md:text-lg font-semibold text-gray-400">Process</p>
          </div>

          <h1 className="w-full text-start text-[25px] md:text-[60px] font-medium text-white">Feel free to reach out to us - our team is here to help!</h1>
        </div>

        <div className="map-and-contact w-full flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="map w-full md:w-1/2 flex justify-start items-center">
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7768.833871562424!2d77.70846808950584!3d13.199119993995087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1cfe75446265%3A0x296c70e9a129418e!2sKempegowda%20International%20Airport%20Bengaluru!5e0!3m2!1sen!2sin!4v1738332183791!5m2!1sen!2sin"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full md:w-[400px] h-[300px] md:h-[600px]"></iframe>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-12 md:py-0">
            <h1 className="text-lg md:text-3xl  font-medium">
              Get in touch
            </h1>

            <p className="text-xs md:text-lg font-medium mt-4">
              You can reach us through various channels, and our dedicated team is always ready to assist with any questions, concerns, or support you need.
            </p>

            <p className="text-lg md:text-3xl font-medium mt-16">
              Send us a message
            </p>

            <form onSubmit={handleSubmit} className="w-full form flex flex-col justify-center items-center mt-4 gap-8">
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}></input>
              <div className="w-full flex justify-between items-center gap-8">

                <div className="w-1/2 flex flex-col justify-start items-start">
                  <label className="text-xs md:text-lg text-start">
                    Name
                  </label>
                  <input type="text" name="name" className="w-full border-b border-white p-2 text-gray-400 outline-none bg-transparent focus:border-b focus:border-white text-xs md:text-lg" placeholder="name" />
                </div>

                <div className="w-1/2 flex flex-col justify-start items-start">
                  <label className="text-xs md:text-lg text-start">
                    Email*
                  </label>
                  <input type="text" name="email" className="w-full border-b border-white p-2 text-gray-400 bg-transparent outline-none text-xs md:text-lg" placeholder="email" />
                </div>

              </div>

              <div className="w-full flex justify-between items-center gap-8">

                <div className="w-1/2 flex flex-col justify-start items-start">
                  <label className="text-xs md:text-lg text-start">
                    Phone Number
                  </label>
                  <input type="number" name="phoneNumber" className="w-full border-b border-white p-2 text-gray-400 bg-transparent outline-none text-xs md:text-lg" placeholder="phone number" />
                </div>

                <div className="w-1/2 flex flex-col justify-start items-start">
                  <label className="text-xs md:text-lg text-start">
                    Company website
                  </label>
                  <input type="text" name="companyWebsite" className="w-full border-b border-white p-2 text-gray-400 bg-transparent outline-none text-xs md:text-lg" placeholder="company website" />
                </div>

              </div>

              <textarea type="text" name="message" placeholder="send us a message" rows={10} className="mt-8 w-full bg-black border border-gray-400 text-gray-400 p-2 outline-none rounded-xl text-xs md:text-lg" />

              <button  className="rounded-full p-2  md:pl-6 text-md md:text-xl whitespace-nowrap text-black bg-customgreen flex gap-4 justify-center items-center shadow-md shadow-customgreen transition-all duration-1000 ease-out delay-500  hover:shadow-none group font-medium mt-4">
                Send a message*
                <FaArrowRightLong className="bg-white text-customgray rounded-full size-6 md:size-10 p-1 md:p-3 font-thin transition-transform -rotate-45 group-hover:rotate-0" /> 
              </button>
              <Toaster />
              
            </form>
          </div>

        </div>

      </section>

      {/* <Faq /> */}
      <ContactUsFaq />

      {/* <section className="quote h-[500px] md:h-[800px] flex justify-center items-center px-6 md:px-24  md:mb-0 bg-black">
          <div className="w-1/5 flex justify-end items-start -mt-[200px] md:-mt-[200px]">
            < FaQuoteLeft  className="text-gray-300 size-[40px] md:size-[200px]"  />
          </div>
          <div className="w-4/5 flex flex-col justify-center items-start -mb-[000px] md:-mb-[100px] pr-[5%] text-white ">
            <h1 className="text-sm md:text-3xl font-medium mb-8">
              &ldquo;Vision without action is a dream. At our core, we transform aspirations into reality through relentless innovation and unwavering dedication.&ldquo;
            </h1>
            <p className="text-xs md:text-lg font-medium mb-4">Vigneshwaran R</p>
            <p className="text-xs md:text-md font-medium">CEO & Founder EMBLOCK</p>
          </div>
        </section> */}
      
      <AnimatedQuoteSection quotes={quotes} className="bg-black text-white" />


        <SocialMedia />
    </div>
  )
}

export default ContactUs
