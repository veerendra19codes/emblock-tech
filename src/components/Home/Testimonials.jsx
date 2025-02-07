import { PiStarFourFill } from "react-icons/pi";
import { ImQuotesRight } from "react-icons/im";

const Testimonials = () => {
  const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);
    const reviews = [
        {
            id: 1,
            author: "Sanskar",
            review: "Emblock Tech did an amazing job setting up a real-time machine monitoring system for us. The solution works perfectly, and it&apos;s made a big difference in how we manage operations. Couldn&apos;t be happier with the results!"
        },
        {
            id: 2,
            author: "Devi",
            review: "I needed software for store management, and Emblock Tech delivered exactly what I wanted. The whole process was smooth, and the software is super easy to use. "
        },
        {
            id: 3,
            author: "piramanayagam",
            review: "The team created a great website and software for my auditing firm. They listened to what I needed and made sure everything worked perfectly. Really happy with how everything turned out"
        },
        {
            id: 4,
            author: "Bala Venkatesh",
            review: "Emblock Tech built an ERP and PMS system for our construction business, and it's been a game-changer. They understood exactly what we needed and delivered on time. "
        },
        {
            id: 5,
            author: "Nigesh",
            review: "The team at Emblock Tech did an excellent job creating a custom ERP for our construction business. It's made managing projects so much easier, and the whole system runs smoothly."
        },
        {
            id: 6,
            author: "Avani",
            review: "I reached out to Emblock Tech for a software solution, and they delivered exactly what I needed. The team was super professional and made the whole process stress-free. Couldn't have asked for better service!"
        },
        {
            id: 7,
            author: "Syed Irfan",
            review: "Emblock Tech handled both our ERP system and website for my textile industry, and they nailed it! Everything looks great and works perfectly. The team was always available to answer questions, which made the whole experience even better."
        },
        {
            id: 8,
            author: "Mohammed Kasim",
            review: "They built a CRM for our business, and it&apos;s so easy to use, and it's helped us stay on top of customer relationships. I'm really impressed with their work"
        },
        {
            id: 9,
            author: "Niraj",
            review: "I needed a trading app for my business, and Emblock Tech delivered beyond my expectations. The app is user-friendly, fast, and has all the features I wanted. Amazing job by the team!"
        },
        {
            id: 10,
            author: "Aditya",
            review: "I had an idea for an IoT hardware project, and Emblock Tech brought it to life. They made the whole process super easy, and the final prototype was exactly what I needed. Great experience working with them!"
        },
    ]
    

  return (
    <div className="flex flex-col w-full justify-center items-center bg-black text-white gap-2 h-full pt-8">
      
        <div className="flex gap-2 justify-center items-center">
            <span className="bg-lime-400 text-black size-2 md:size-3 rounded-full">.</span>
            <p className="text-sm md:text-lg font-semibold text-gray-400">Testimonials</p>
        </div>

        <div className="flex w-full flex-col justify-center items-center leading-tight">

            <h1 className="text-[25px] md:text-[40px] lg:text-[60px]">
                Don&apos;t take our
            </h1>

            <h1 className="text-[25px] md:text-[40px] lg:text-[60px] flex justify-center items-center relative">
                word for it 
                
            </h1>
        </div>

        <p className="text-gray-400 text-sm md:text-lg"><span className="text-customgreen">{"*"}</span>Take theirs</p>

        <div className="marqueeright  w-full shadow-xl relative bg-black my-8 group"  >
{/* */}
            <div className={`flex h-[400px] md:h-[550px]  gap-4 md:gap-10 justify-center items-center   whitespace-nowrap pause-on-hover animate-marqueeright md:animate-marqueerightslow `} >
                {numbers.map((i) => (
                    <div key={i} className="card h-[300px] md:h-[500px] border border-gray-700 rounded-xl flex flex-col p-4 md:p-12 min-w-[200px] md:min-w-[400px] bg-black">

                        <div className="row flex justify-between items-center mb-8">
                            <div className="ratings flex items-center text-xs md:text-md 2xl:text-lg">
                                <span className="text-white text-xs md:text-md 2xl:text-lg">5.0</span><span className="text-gray-500">{"/"}5</span>
                                <PiStarFourFill className="text-yellow-400" />
                                <PiStarFourFill className="text-yellow-400" />
                                <PiStarFourFill className="text-yellow-400" />
                                <PiStarFourFill className="text-yellow-400" />
                                <PiStarFourFill className="text-yellow-400" />
                            </div>

                            <div className="quotes">
                                <ImQuotesRight className="text-xl md:text-4xl text-customgrayhover" />
                            </div>
                        </div>

                        <div className="review text-wrap min-h-[180px] max-h-[200px]  md:min-h-[300px] font-semibold text-xs md:text-xl">
                            {reviews[i%10].review}
                        </div>

                        <div className="author flex justify-start items-center  gap-4">
                            <img src="/profile.webp" className="size-8 md:size-12 rounded-full" />
                            <p className="text-gray-400 font-semibold text-xs md:text-xl">{reviews[i%10].author}</p>
                        </div>
                    </div>

                ))}

            </div>

            <div className="absolute top-0 left-0 w-6 md:w-24 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-6 md:w-24 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>

    </div>
  )
}

export default Testimonials
