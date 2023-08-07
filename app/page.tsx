"use client"

import InputField from "@/components/InputField"
import {
  listeningNCLCL,
  readingNCLCL,
  speakingWritingNCLC,
} from "@/constants/NCLCRange"
import React, { ChangeEvent, FormEvent, useState } from "react"

export default function Home() {
  const [listening, setListening] = useState<number | string>("")
  const [reading, setReading] = useState<number | string>("")
  const [speaking, setSpeaking] = useState<number | string>("")
  const [writing, setWriting] = useState<number | string>("")
  const [highestScore, setHighestScore] = useState<number | null>(null)

  const handleListeningChange = (event: ChangeEvent<HTMLInputElement>) => {
    setListening(event.target.value)
  }

  const handleReadingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReading(event.target.value)
  }

  const handleSpeakingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSpeaking(event.target.value)
  }

  const handleWritingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWriting(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // Process the form submission here
    const scores = [listening, reading, speaking, writing].map(Number)
    const highest = Math.max(...scores)

    setHighestScore(highest)
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-500">
        <div className="w-11/12 rounded-xl bg-blue-200 p-5 lg:w-1/2">
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

          {highestScore !== null && (
            <div className="mt-5 text-center">
              <p>Highest score: {highestScore}</p>
              <p>NCLC Level: {listeningNCLCL(highestScore)}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
