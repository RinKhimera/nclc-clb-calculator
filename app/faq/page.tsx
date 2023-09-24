"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/constants/Data"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const Faq = () => {
  return (
    <motion.div
      className="relative isolate px-6 pt-12 lg:px-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-3xl pt-24 lg:pt-32">
        <h1 className="mb-8 text-center text-4xl font-bold tracking-tight sm:text-6xl">
          Des interrogations ? Notre{" "}
          <span className="text-pink-600">foire aux questions</span> peut
          sûrement vous éclairer !
        </h1>

        <Accordion type="single" collapsible>
          {faqData.map((item, index) => (
            <AccordionItem value={item.element} key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  )
}

export default Faq
