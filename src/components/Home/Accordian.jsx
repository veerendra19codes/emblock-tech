import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const AccordionItem = ({
number,
  title,
  content,
  isExpanded,
  onToggle,
}) => {
  const cardVariants = {
    collapsed: {
      height: '60px',
      transition: { type: 'spring', stiffness: 300, damping: 15 },
    },
    expanded: {
      height: 'auto',
      transition: { type: 'spring', stiffness: 300, damping: 15 },
    },
  }

  const contentVariants = {
    collapsed: { opacity: 0 },
    expanded: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  }

  const chevronVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  }

  return (
    <motion.div
      className={`w-70 ' my-4 h-[100px] cursor-pointer select-none overflow-hidden rounded-lg border  `}
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? 'expanded' : 'collapsed'}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between p-4 text-gray-900">
        <h2 className="m-0 text-sm md:text-lg font-semibold text-black flex gap-2"><span className="text-gray-400 text-xs md:text-lg px-1"> 0{number} </span>{title}</h2>
        <motion.div variants={chevronVariants}>
          <ChevronDown size={18} />
        </motion.div>
      </div>
      <motion.div
        className="text-md select-none px-4 py-4"
        variants={contentVariants}
        initial="collapsed"
        animate={isExpanded ? 'expanded' : 'collapsed'}
      >
        <p className="m-0 text-sm text-gray-900">
          {content}
        </p>
      </motion.div>
    </motion.div>
  )
}

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items?.map((item, index) => (
        <AccordionItem
          key={index}
          number={item.number}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}

const accordionItems = [
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

const AccordionExample = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-4 md:p-8 w-full md:w-[70%]">
        <Accordion items={accordionItems} />
      </div>
    </div>
  )
}

export default AccordionExample