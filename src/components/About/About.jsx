
const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full text-5xl">
      <section className="w-[80%] flex flex-col justify-center items-center">
        <div className={`${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} 
          flex gap-2 justify-center items-center transition-all duration-1000 ease-out`}>
            <span className="bg-lime-400 text-black size-2 md:size-3 rounded-full">.</span>
            <p className="text-xs md:text-lg font-semibold text-gray-400">Featured projects</p>
        </div>
      </section>
    </div>
  )
}

export default About
