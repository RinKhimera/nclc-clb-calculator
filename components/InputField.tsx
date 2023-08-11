import {
  listeningNCLCL,
  readingNCLCL,
  speakingWritingNCLC,
} from "@/constants/NCLCRange"
import { ChangeEvent } from "react"

type InputProps = {
  label: string
  name: string
  value: null | number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  min: number
  max: number
}

const renderNCLCValue = (value: number | null) => {
  return value !== null ? (
    <p>
      NCLC <span className="text-pink-600">{value}</span>
    </p>
  ) : null
}

const InputField = ({ label, name, value, onChange, min, max }: InputProps) => {
  const listeningMin = 331
  const listeningMax = 699
  const speakingWritingMin = 4
  const speakingWritingMax = 20

  let listeningNCLCValue: number | null = null
  let readingNCLCValue: number | null = null
  let speakingNCLCValue: number | null = null
  let writingNCLCValue: number | null = null

  if (
    name === "listening" &&
    Number(value) >= listeningMin &&
    Number(value) <= listeningMax
  ) {
    listeningNCLCValue = listeningNCLCL(Number(value))
  }

  if (
    name === "reading" &&
    Number(value) >= listeningMin &&
    Number(value) <= listeningMax
  ) {
    readingNCLCValue = readingNCLCL(Number(value))
  }

  if (
    name === "speaking" &&
    Number(value) >= speakingWritingMin &&
    Number(value) <= speakingWritingMax
  ) {
    speakingNCLCValue = speakingWritingNCLC(Number(value))
  }

  if (
    name === "writing" &&
    Number(value) >= speakingWritingMin &&
    Number(value) <= speakingWritingMax
  ) {
    writingNCLCValue = speakingWritingNCLC(Number(value))
  }

  return (
    <>
      <div className="flex flex-col gap-1 py-1.5 text-xl transition lg:py-3 lg:text-2xl">
        <label htmlFor={name} className="text-center font-semibold">
          {label}
        </label>
        <div className="flex items-center justify-center gap-5">
          <input
            type="number"
            name={name}
            value={value !== null ? value : ""}
            onChange={onChange}
            min={min}
            max={max}
            required
            className="w-1/2 rounded-xl border border-zinc-100 px-5 py-2 text-center font-semibold text-black transition focus:outline-none focus:ring-2 focus:ring-pink-600 lg:w-1/4"
          />
          <div className="font-bold">
            {renderNCLCValue(listeningNCLCValue)}
            {renderNCLCValue(readingNCLCValue)}
            {renderNCLCValue(speakingNCLCValue)}
            {renderNCLCValue(writingNCLCValue)}
          </div>
        </div>
      </div>
    </>
  )
}

export default InputField
