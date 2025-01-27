import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const products = [
    {
      id: 1,
      image: "/image1.png",
      title: "Real-Time Machine Monitoring System",
      description: "Emblock Real-time Machine Monitoring System",
      path: "/product/1",
    },
    {
      id: 2,
      image: "/image2.jpg",
      title: "Strikes",
      description: "App that connects Influencer and Brand and Audience",
      path: "/product/2",
    },
    {
      id: 3,
      image: "/image3.png",
      title: "Edgecarts",
      description: "Free E-commerce for all",
      path: "/product/3",
    },
    {
      id: 4,
      image: "/image4.jpg",
      title: "Buildops",
      description: "ERP and Project Management System for Construction",
      path: "/product/4",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-12 md:py-48 px-6 gap-16 md:gap-32">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Link
      ref={cardRef}
      to={product.path}
      className={`card flex flex-col w-full md:w-[70%] gap-4 justify-center items-center md:gap-12 transition-all duration-1000 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20" // Start with opacity-0 and translate-y-20
      }`}
    >
      <img src={product.image} className="w-full h-4/5 rounded-xl" />

      <div className="title-and-link w-full flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-8">
          <h1 className="text-[25px] md:text-[50px] text-start uppercase font-normal md:font-semibold w-full md:w-4/5 leading-none">
            {product.title}
          </h1>
          <p className="text-customgray text-start text-lg md:text-2xl flex flex-wrap">
            {product.description}
          </p>
        </div>
        <button className="w-full md:w-1/5 rounded-full px-6 py-4 bg-customblack text-white font-semibold whitespace-nowrap flex justify-center items-center">
          Learn More
        </button>
      </div>
    </Link>
  );
};

export default OurProducts;
