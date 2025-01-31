import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom"
import { jobs } from "../../data";

const SingleCareer = () => {
    const { id } = useParams();
    console.log("id: ", id);


  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <section className="bg-[url('/herobg.jpg')] w-full flex flex-col p-6 md:p-32 justify-start items-start md:pt-48">

        <button className=" rounded-full py-2 px-4 bg-transparent border-2 border-gray-400 font-semibold text-sm md:text-lg">We are hiring!</button>

        <h1 className="w-full md:w-[90%] text-[25px] md:text-[60px] font-normal flex-wrap leading-none my-4">
          {jobs[id-1].title} 
        </h1>
        <h1 className="w-full md:w-[90%] text-[25px] md:text-[60px] font-normal flex-wrap leading-none my-4">
          ({jobs[id-1].openPositions} Positions)
        </h1>

        {jobs[id-1].details.map((detail) => (
            <p key={detail.id} className="text-gray-500 font-medium text-sm md:text-2xl w-full md:w-full mt-4 md:mt-8">
                {detail.line}
            </p>
        ))}

        <p className="flex justify-start items-start gap-4 text-lg md:text-2xl font-medium mt-12">
            <span className=" text-black">Role Type</span>
            <span className="text-gray-500">{jobs[id-1].roleType}</span>
        </p>
        <p className="flex justify-start items-start gap-4 text-lg md:text-2xl font-medium mt-4">
            <span className=" text-black">Skills Required</span>
            <span className="text-gray-500">{jobs[id-1].skillsRequired}</span>
        </p>
      </section>

      <section className="details bg-black p-32 w-full flex flex-col ">
        <div className=""></div>
      </section>
    </div>
  )
}

export default SingleCareer
