import {
  listeningNCLCL,
  readingNCLCL,
  speakingWritingNCLCL,
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

const InputField = ({ label, name, value, onChange, min, max }: InputProps) => {
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
        {name === "listening" &&
          Number(value) >= 331 &&
          Number(value) <= 699 && <p>NCLC: {listeningNCLCL(Number(value))}</p>}

        {name === "reading" && Number(value) >= 331 && Number(value) <= 699 && (
          <p>NCLC: {readingNCLCL(Number(value))}</p>
        )}

        {name === "speaking" &&
          Number(value) >= 331 &&
          Number(value) <= 699 && (
            <p>NCLC: {speakingWritingNCLCL(Number(value))}</p>
          )}

        {name === "writing" && Number(value) >= 331 && Number(value) <= 699 && (
          <p>NCLC: {speakingWritingNCLCL(Number(value))}</p>
        )}
      </div>
    </>
  )
}

export default InputField
