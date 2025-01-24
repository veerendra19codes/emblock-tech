import { FaStarOfLife } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";
import { ImQuotesRight } from "react-icons/im";

const Testimonials = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-black text-white gap-4 h-full">
      
        <div className="flex gap-2 justify-center items-center">
            <span className="bg-lime-400 text-black size-3 rounded-full">.</span>
            <p className="text-lg font-semibold text-gray-400"> {"{04} - "}Testimonials</p>
        </div>

        <div className="flex w-full flex-col justify-center items-center leading-none gap-2">

            <h1 className="text-[90px]">
                Don&apos;t take my
            </h1>

            <h1 className="text-[90px] flex justify-center items-center relative">
                word for it <FaStarOfLife className="text-customgreen text-3xl top-8 -right-8 absolute" />
            </h1>

        </div>

        <p className="text-gray-400"><span className="text-customgreen">{"*"}</span>Take theirs</p>

        <div className="marqueeright w-full shadow-xl relative bg-black my-16">

            <div className="flex h-[550px] gap-8 justify-center items-center animate-marqueeright whitespace-nowrap">
                {[...Array(20)].map((i) => (
                        <div key={i} className="card h-[550px] border border-gray-700 rounded-xl flex flex-col p-12 min-w-[400px] bg-black">

                    <div className="row flex justify-between items-center mb-8">
                        <div className="ratings flex items-center">
                            <span className="text-white">5.0</span><span className="text-gray-500">{"/"}5</span>
                            <PiStarFourFill className="text-yellow-400" />
                            <PiStarFourFill className="text-yellow-400" />
                            <PiStarFourFill className="text-yellow-400" />
                            <PiStarFourFill className="text-yellow-400" />
                            <PiStarFourFill className="text-yellow-400" />
                        </div>

                        <div className="quotes">
                            <ImQuotesRight className="text-4xl text-customgrayhover" />
                        </div>
                    </div>

                    <div className="review text-wrap min-h-[300px] font-semibold text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero soluta totam iure! Nisi veritatis consequuntur quis tenetur, dolor provident libero cumque rem tempore laborum aliquam eum suscipit illum autem.
                    </div>

                    <div className="author flex justify-start items-center  gap-4">
                        <img src="/profile.png" className="size-12 rounded-full" />
                        <p className="text-gray-400 font-semibold">Tom Shawn</p>
                    </div>
                </div>

                ))}

            </div>

            <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>

    </div>
  )
}

export default Testimonials
