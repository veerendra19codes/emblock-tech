import FaqNew from '../FaqNew';
import  { useEffect, useRef, useState } from 'react';

const AnimatedElement = ({ children, delay=0, className="" }) => {
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
      className={`transform transition-all duration-700  ${className} ${
        isVisible 
          ? `opacity-100 translate-y-0 delay-[${delay}ms]` 
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const HomeFaq = () => {
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
  

  return (
    <div className="w-full flex flex-col justify-center items-center bg-white py-12 sm:py-16 xl:py-40">

      <AnimatedElement className="w-full px-6 gap-4">

        <div className="w-full flex gap-2 justify-start lg:justify-center items-center">
          <span className="bg-lime-400 size-2 md:size-3 rounded-full text-white">.</span>
          <p className="text-sm md:text-lg font-semibold text-gray-400">FAQ</p>
        </div>

        <h1 className="text-[25px] md:text-[40px] lg:text-[60px]">
            Got Questions?
        </h1>
      </AnimatedElement>

      <AnimatedElement delay={200}>
        <FaqNew data={data} />
      </AnimatedElement>
    </div>
  )
}

export default HomeFaq
