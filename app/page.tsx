"use client"

import InputField from "@/components/InputField"
import {
  listeningNCLCL,
  readingNCLCL,
  speakingWritingNCLC,
} from "@/constants/NCLCRange"
import getLowestNCLCValue from "@/hooks/NCLCValue"
import { ChangeEvent, FormEvent, useState } from "react"

export default function Home() {
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

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-500">
        <div className="w-11/12 rounded-xl bg-blue-200 p-5 lg:w-1/4">
          <h1 className="text-bold text-center text-2xl underline">
            Calculatrice NCLC TCF Canada
          </h1>
          <form
            className="mt-5 flex flex-col"
            action="#"
            onSubmit={handleSubmit}
          >
            <InputField
              label="Compréhension orale :"
              name="listening"
              value={listening}
              onChange={handleListeningChange}
              min={331}
              max={699}
            />

            <InputField
              label="Compréhension écrite :"
              name="reading"
              value={reading}
              onChange={handleReadingChange}
              min={342}
              max={699}
            />

            <InputField
              label="Expression orale :"
              name="speaking"
              value={speaking}
              onChange={handleSpeakingChange}
              min={4}
              max={20}
            />

            <InputField
              label="Expression écrite :"
              name="writing"
              value={writing}
              onChange={handleWritingChange}
              min={4}
              max={20}
            />

            <button type="submit">Résultat</button>
          </form>

          {NCLCScore !== null && (
            <div className="mt-5 text-center">
              <p>NCLC {NCLCScore}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
