import {
  listeningNCLCL,
  readingNCLCL,
  speakingWritingNCLC,
} from "@/constants/NCLCRange"
import { ChangeEvent } from "react"

type InputProps = {
  label: string
  name: string
  value: string | number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  min: number
  max: number
}

const renderNCLCValue = (value: number | null) => {
  return value !== null ? <p>NCLC {value}</p> : null
}

// function getLowestNCLCValue(
//   listeningNCLCValue: number | null,
//   readingNCLCValue: number | null,
//   speakingNCLCValue: number | null,
//   writingNCLCValue: number | null
// ): number | null {
//   const valuesArray = [
//     listeningNCLCValue,
//     readingNCLCValue,
//     speakingNCLCValue,
//     writingNCLCValue,
//   ].filter((value) => value !== null) as number[]

//   if (valuesArray.length === 0) {
//     return null // No valid values
//   }

//   return Math.min(...valuesArray)
// }

// const finalNCLC = getLowestNCLCValue(
//   listeningNCLCValue,
//   readingNCLCValue,
//   speakingNCLCValue,
//   writingNCLCValue
// )

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
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <div className="flex items-center gap-5">
        <input
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          required
          className="w-1/2 rounded-lg px-5 py-2"
        />
        {renderNCLCValue(listeningNCLCValue)}
        {listeningNCLCValue && <p>NCLCC {listeningNCLCValue} </p>}
        {renderNCLCValue(readingNCLCValue)}
        {renderNCLCValue(speakingNCLCValue)}
        {renderNCLCValue(writingNCLCValue)}
      </div>
    </>
  )
}

export default InputField
