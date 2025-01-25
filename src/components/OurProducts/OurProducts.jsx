
const OurProducts = () => {
    const products = [
        {
            id: 1,
            image: "/image1.png",
            title: "Real-Time Machine Monitoring System",
            description: "Emblock Real-time Machine Monitoring System",
        },
        {
            id: 2,
            image: "/image2.jpg",
            title: "Strikes",
            description: "App that connects Influencer and Brand and Audience",
        },
        {
            id: 3,
            image: "/image3.png",
            title: "Edgecarts",
            description: "Free E-commerce for all",
        },
        {
            id: 4,
            image: "/image4.jpg",
            title: "Buildops",
            description: "ERP and Project Management System for Construction",
        },
    ]
  return (
    <div className="flex flex-col justify-center items-center py-12  md:py-48 px-6 gap-16 md:gap-32">
      {products.map((product) => (
        <div key={product.id} className="card flex flex-col w-full md:w-[70%]  gap-4 justify-center items-center md:gap-12">

            <img src={product.image} className="w-full h-4/5 rounded-xl" /> 

            <div className="title-and-link w-full flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="flex flex-col justify-center items-start gap-2 md:gap-8">

                    <h1 className="text-[25px] md:text-[50px] uppercase font-normal md:font-semibold w-full md:w-4/5 leading-none">
                        {product.title}
                    </h1>
                    <p className="text-customgray text-lg md:text-2xl flex flex-wrap">
                        {product.description}
                    </p> 
                </div>

                <button className="w-full md:w-1/5 rounded-full px-6 py-4 bg-customblack text-white font-semibold whitespace-nowrap">
                    Learn More
                </button>

            </div>
            
        </div>
      ))}
    </div>
  )
}

export default OurProducts
