"use client"

import DisclosurePanel from "@/components/DisclosePanel"
import { faqData } from "@/constants/FAQ"
import { motion } from "framer-motion"
import { useState } from "react"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const Faq = () => {
  const [openPanelIndex, setOpenPanelIndex] = useState<number | null>(null)

  const handlePanelClick = (index: number) => {
    setOpenPanelIndex(index === openPanelIndex ? null : index)
  }

  return (
    <motion.div
      className="relative isolate px-6 pt-12 lg:px-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-3xl pt-24 lg:pt-32">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Des interrogations ? Notre{" "}
          <span className="text-pink-600">foire aux questions</span> peut
          sûrement vous éclairer !
        </h1>

        <div className="w-full pt-8">
          <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2">
            {faqData.map((item, index) => (
              <DisclosurePanel
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={index === openPanelIndex}
                onClick={() => handlePanelClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Faq
