"use client"

import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/20/solid"
import { AnimatePresence, motion } from "framer-motion"
import { MouseEventHandler } from "react"

type DisclosurePanelProps = {
  question: string
  answer: string
  isOpen: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

const DisclosurePanel = ({
  question,
  answer,
  isOpen,
  onClick,
}: DisclosurePanelProps) => {
  return (
    <>
      <Disclosure as="div" className="my-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className="flex w-full items-center justify-between rounded-lg bg-pink-100 px-4 py-2 text-left font-medium text-pink-900 transition hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-600 focus-visible:ring-opacity-75 sm:text-xl"
              onClick={onClick}
            >
              <span className="flex-1">{question}</span>
              <ChevronUpIcon
                className={`${
                  isOpen ? "rotate-180" : ""
                } h-5 w-5 flex-none text-pink-600 sm:h-6 sm:w-6`}
              />
            </Disclosure.Button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <Disclosure.Panel
                    static
                    className="px-4 pb-2 pt-4 text-justify text-lg leading-8 text-gray-600 sm:text-xl"
                  >
                    {answer}
                  </Disclosure.Panel>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>
    </>
  )
}

export default DisclosurePanel
