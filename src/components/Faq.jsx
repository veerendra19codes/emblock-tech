import AccordionExample from './Accordian'
import  { useEffect, useRef, useState } from 'react';

const AnimatedElement = ({ children, delay=0 }) => {
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
      className={`transform transition-all duration-700 ${
        isVisible 
          ? `opacity-100 translate-y-0 delay-[${delay}ms]` 
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const Faq = () => {
  const data = [
  {
    number: 1,
    title: 'What types of solutions does Emblock Tech provide?',
    content:
      'We offer IoT and software solutions like ERP systems, CRM software, trading apps, and more.',
  },
  {
    number: 2,
    title: 'What is your typical project timeline?',
    content:
      'Timelines vary, but most projects take 4-12 weeks, depending on complexity.',
  },
  {
    number: 3,
    title: 'Do you offer ongoing maintenance and support?',
    content:
      'Absolutely! We offer maintenance and support services to ensure your systems run smoothly and remain up to date. Whether it&apos;s troubleshooting, updates, or adding new features, we&apos;re here to help.',
  },
  {
    number: 4,
    title: 'Can you customize your solutions to fit my existing systems or needs?',
    content:
      'Yes, we can tailor our solutions to integrate seamlessly with your current systems and meet your unique requirements.'
  },
  {
    number: 5,
    title: 'How do you handle revisions and feedback?',
    content:
      'We work closely with you, making revisions based on your feedback at every stage.',
  },
  {
    number: 6,
    title: 'What industries do you serve?',
    content:
      'We work with a variety of industries, including construction, retail, manufacturing, auditing, and more. Our solutions are flexible and customizable to fit different business needs.',
  },
  {
    number: 7,
    title: 'How do you ensure data security in your solutions?',
    content:
      'We use advanced security measures to keep your data safe.',
  },
]
  

  return (
    <div className="w-full flex flex-col justify-center items-center bg-white py-24 md:py-48">

      <AnimatedElement>

         <div className="flex gap-2 justify-center items-center">
            <span className="bg-lime-400 size-2 md:size-3 rounded-full text-white">.</span>
            <p className="text-md md:text-lg font-semibold text-gray-400">FAQ</p>
        </div>

        <h1 className="text-[35px] md:text-[90px]">
            Got Questions?
        </h1>
        </AnimatedElement>

        <AnimatedElement delay={200}>
          <AccordionExample data={data} />
        </AnimatedElement>
    </div>
  )
}

export default Faq
