"use client"

import InputField from "@/components/InputField"
import {
  listeningCLB,
  readingCLB,
  speakingWritinCLB,
} from "@/constants/CLBRange"
import getLowestNCLCValue from "@/hooks/NCLCValue"
import { AnimatePresence, motion } from "framer-motion"
import { ChangeEvent, FormEvent, useState } from "react"
import { TiDelete } from "react-icons/ti"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
}

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
}

const Ielts = () => {
  const [listening, setListening] = useState<number | null>(null)
  const [reading, setReading] = useState<number | null>(null)
  const [speaking, setSpeaking] = useState<number | null>(null)
  const [writing, setWriting] = useState<number | null>(null)
  const [NCLCScore, setNCLCScore] = useState<number | null>(null)

  const handleListeningChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value

    // Validate the input using a regular expression
    if (/^\d+(\.5)?$/.test(inputValue) || inputValue === "") {
      setListening(inputValue !== "" ? parseFloat(inputValue) : null)
    }
  }

  const handleReadingChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value

    // Validate the input using a regular expression
    if (/^\d+(\.5)?$/.test(inputValue) || inputValue === "") {
      setReading(inputValue !== "" ? parseFloat(inputValue) : null)
    }
  }

  const handleSpeakingChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value

    // Validate the input using a regular expression
    if (/^\d+(\.5)?$/.test(inputValue) || inputValue === "") {
      setSpeaking(inputValue !== "" ? parseFloat(inputValue) : null)
    }
  }

  const handleWritingChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value

    // Validate the input using a regular expression
    if (/^\d+(\.5)?$/.test(inputValue) || inputValue === "") {
      setWriting(inputValue !== "" ? parseFloat(inputValue) : null)
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // Process the form submission here
    let listeningScore = listeningCLB(listening)
    let readingScore = readingCLB(reading)
    let writingScore = speakingWritinCLB(writing)
    let speakingScore = speakingWritinCLB(speaking)

    const lowestScore = getLowestNCLCValue(
      listeningScore,
      readingScore,
      writingScore,
      speakingScore,
    )

    setNCLCScore(lowestScore)
  }

  const clearInput = () => {
    setListening(null)
    setReading(null)
    setSpeaking(null)
    setWriting(null)
    setNCLCScore(null)
  }
  return (
    <>
      <div className="flex h-full justify-center pt-20">
        <motion.div
          className="flex w-11/12 flex-col justify-center rounded-xl border-4 border-zinc-100 p-5 py-10 text-zinc-800 backdrop-blur-3xl dark:border-none dark:bg-zinc-800/50 dark:text-zinc-100 sm:w-2/3 lg:w-1/2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-center text-3xl font-bold tracking-tight transition sm:text-5xl"
            variants={item}
          >
            <span className="text-pink-600">IELTS General</span> CLB
          </motion.h1>
          <motion.form
            className="mt-5 flex flex-col"
            action="#"
            onSubmit={handleSubmit}
            variants={item}
          >
            <InputField
              label="Listening"
              name="listening"
              value={listening}
              onChange={handleListeningChange}
              min={4.5}
              max={10}
              step="0.5"
            />

            <InputField
              label="Reading"
              name="reading"
              value={reading}
              onChange={handleReadingChange}
              min={3.5}
              max={10}
              step="0.5"
            />

            <InputField
              label="Writing"
              name="writing"
              value={writing}
              onChange={handleWritingChange}
              min={4}
              max={10}
              step="0.5"
            />

            <InputField
              label="Speaking"
              name="speaking"
              value={speaking}
              onChange={handleSpeakingChange}
              min={4}
              max={10}
              step="0.5"
            />
            <motion.div className="flex justify-center gap-5" variants={item}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                className="mt-4 w-fit rounded-md bg-zinc-200 px-3 py-2 text-xl font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 dark:bg-zinc-700 dark:hover:bg-zinc-600"
              >
                My final result
              </motion.button>
              <motion.button
                onClick={clearInput}
                whileHover={{ scale: 1.2 }}
                className="mt-4 w-fit rounded-full bg-zinc-200 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 dark:bg-zinc-700 dark:hover:bg-zinc-600"
              >
                <TiDelete className="text-5xl text-zinc-600 dark:text-zinc-400" />
              </motion.button>
            </motion.div>
          </motion.form>

          <AnimatePresence>
            {NCLCScore !== null && (
              <motion.div
                className="mt-5 text-center text-3xl font-bold text-pink-600 underline lg:text-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p>CLB {NCLCScore}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default Ielts
