import {
  listeningCLB,
  readingCLB,
  speakingWritinCLB,
} from "@/constants/CLBRange"
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
  step?: string
}

const renderNCLCValue = (value: number | null, name: string) => {
  if (value !== null) {
    if (name === "NCLC") {
      return (
        <p>
          NCLC <span className="text-pink-600">{value}</span>
        </p>
      )
    } else if (name === "CLB") {
      return (
        <p>
          CLB <span className="text-pink-600">{value}</span>
        </p>
      )
    } else {
      return null
    }
  } else {
    return null
  }
}

const InputField = ({
  label,
  name,
  step,
  value,
  onChange,
  min,
  max,
}: InputProps) => {
  const listeningReadingMin = 331
  const listeningReadingMax = 699
  const speakingWritingMin = 4
  const speakingWritingMax = 20
  const clbMin = 3.5
  const clbMax = 10

  let listeningNCLCValue: number | null = null
  let readingNCLCValue: number | null = null
  let speakingNCLCValue: number | null = null
  let writingNCLCValue: number | null = null
  let listeningCLBValue: number | null = null
  let readingCLBValue: number | null = null
  let speakingCLBValue: number | null = null
  let writingCLBValue: number | null = null

  if (
    name === "listeningNCLC" &&
    Number(value) >= listeningReadingMin &&
    Number(value) <= listeningReadingMax
  ) {
    listeningNCLCValue = listeningNCLCL(Number(value))
  }

  if (
    name === "readingNCLC" &&
    Number(value) >= listeningReadingMin &&
    Number(value) <= listeningReadingMax
  ) {
    readingNCLCValue = readingNCLCL(Number(value))
  }

  if (
    name === "speakingNCLC" &&
    Number(value) >= speakingWritingMin &&
    Number(value) <= speakingWritingMax
  ) {
    speakingNCLCValue = speakingWritingNCLC(Number(value))
  }

  if (
    name === "writingNCLC" &&
    Number(value) >= speakingWritingMin &&
    Number(value) <= speakingWritingMax
  ) {
    writingNCLCValue = speakingWritingNCLC(Number(value))
  }

  if (
    name === "listening" &&
    Number(value) >= clbMin &&
    Number(value) <= clbMax
  ) {
    listeningCLBValue = listeningCLB(Number(value))
  }

  if (
    name === "reading" &&
    Number(value) >= clbMin &&
    Number(value) <= clbMax
  ) {
    readingCLBValue = readingCLB(Number(value))
  }

  if (
    name === "writing" &&
    Number(value) >= clbMin &&
    Number(value) <= clbMax
  ) {
    writingCLBValue = speakingWritinCLB(Number(value))
  }

  if (
    name === "speaking" &&
    Number(value) >= clbMin &&
    Number(value) <= clbMax
  ) {
    speakingCLBValue = speakingWritinCLB(Number(value))
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
            step={step}
            required
            className="w-1/2 rounded-xl border border-zinc-100 px-5 py-2 text-center font-semibold text-black transition focus:outline-none focus:ring-2 focus:ring-pink-600 lg:w-1/4"
          />
          <div className="font-bold">
            {renderNCLCValue(listeningNCLCValue, "NCLC")}
            {renderNCLCValue(readingNCLCValue, "NCLC")}
            {renderNCLCValue(speakingNCLCValue, "NCLC")}
            {renderNCLCValue(writingNCLCValue, "NCLC")}
            {renderNCLCValue(listeningCLBValue, "CLB")}
            {renderNCLCValue(readingCLBValue, "CLB")}
            {renderNCLCValue(writingCLBValue, "CLB")}
            {renderNCLCValue(speakingCLBValue, "CLB")}
          </div>
        </div>
      </div>
    </>
  )
}

export default InputField
