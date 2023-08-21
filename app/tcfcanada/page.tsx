"use client"

import InputField from "@/components/InputField"
import {
  listeningNCLCL,
  readingNCLCL,
  speakingWritingNCLC,
} from "@/constants/NCLCRange"
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

const TcfCanada = () => {
  const [listening, setListening] = useState<number | null>(null)
  const [reading, setReading] = useState<number | null>(null)
  const [speaking, setSpeaking] = useState<number | null>(null)
  const [writing, setWriting] = useState<number | null>(null)
  const [NCLCScore, setNCLCScore] = useState<number | null>(null)

  const handleListeningChange = (event: ChangeEvent<HTMLInputElement>) => {
    setListening(parseInt(event.target.value, 10))
  }

  const handleReadingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReading(parseInt(event.target.value, 10))
  }

  const handleSpeakingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSpeaking(parseInt(event.target.value, 10))
  }

  const handleWritingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWriting(parseInt(event.target.value, 10))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // Process the form submission here
    let listeningScore = listeningNCLCL(listening)
    let readingScore = readingNCLCL(reading)
    let speakingScore = speakingWritingNCLC(speaking)
    let writingScore = speakingWritingNCLC(writing)

    const lowestScore = getLowestNCLCValue(
      listeningScore,
      readingScore,
      speakingScore,
      writingScore
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
            NCLC <span className="text-pink-600">TCF Canada</span>
          </motion.h1>
          <motion.form
            className="mt-5 flex flex-col"
            action="#"
            onSubmit={handleSubmit}
            variants={item}
          >
            <InputField
              label="Compréhension orale :"
              name="listeningNCLC"
              value={listening}
              onChange={handleListeningChange}
              min={331}
              max={699}
            />

            <InputField
              label="Compréhension écrite :"
              name="readingNCLC"
              value={reading}
              onChange={handleReadingChange}
              min={342}
              max={699}
            />

            <InputField
              label="Expression orale :"
              name="speakingNCLC"
              value={speaking}
              onChange={handleSpeakingChange}
              min={4}
              max={20}
            />

            <InputField
              label="Expression écrite :"
              name="writingNCLC"
              value={writing}
              onChange={handleWritingChange}
              min={4}
              max={20}
            />

            <motion.div className="flex justify-center gap-5" variants={item}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                className="mt-4 w-fit rounded-md bg-zinc-200 px-3 py-2 text-xl font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 dark:bg-zinc-700 dark:hover:bg-zinc-600"
              >
                Ma note finale
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
                <p>NCLC {NCLCScore}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default TcfCanada
