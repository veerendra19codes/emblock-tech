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
      className={`w-70 dark:bg-gray-800' my-4 h-[100px] cursor-pointer select-none overflow-hidden rounded-lg border  dark:border-gray-700`}
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? 'expanded' : 'collapsed'}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between p-4 text-gray-900 dark:text-gray-100">
        <h2 className="m-0 text-lg font-semibold text-black flex gap-2"><span className="text-gray-400"> 0{number} {"/"} </span>{title}</h2>
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
        <p className="m-0 text-sm text-gray-900 dark:text-gray-100">
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
    title: 'What is your typical project timeline',
    content:
      'The timeline for a project typically ranges from 4 to 8 weeks, depending on the scope and complexity. After an initial consultation, I’ll provide a detailed timeline with key milestones so you know what to expect at each stage.',
  },
  {
    number: 2,
    title: 'Do you offer ongoing maintenance and support?',
    content:
      'Yes, I offer ongoing maintenance and support packages to ensure your website stays updated and runs smoothly. This includes updates, bug fixes, and any necessary changes as your business grows.',
  },
  {
    number: 3,
    title: 'Can you work with existing brand guidelines?',
    content:
      'Absolutely! I’m experienced in working with existing brand guidelines to ensure your website aligns with your established identity. I can seamlessly incorporate your branding while enhancing your digital presence.',
  },
  {
    number: 4,
    title: 'How do you handle revisions and feedback?',
    content:
      'Revisions and feedback are a crucial part of the process. I typically offer a set number of revision rounds to refine the design based on your input. I ensure clear communication throughout, so your vision is brought to life effectively.',
  },
]

const AccordionExample = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-8 w-[70%]">
        <Accordion items={accordionItems} />
      </div>
    </div>
  )
}

export default AccordionExample