"use client"

import Image from "next/image"
import { useState } from "react"
const listeningOptions = [
  { value: "beginner", label: "549-699", nclc: "10+" },
  { value: "intermediate", label: "523-548", nclc: "9" },
  { value: "advanced", label: "503-522", nclc: "8" },
  { value: "expert", label: "458-502", nclc: "7" },
]

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null) // Set the initial selected option

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value
    const selectedOption = listeningOptions.find(
      (option) => option.value === selectedValue
    )
    setSelectedOption(selectedOption)
  }
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-500">
        <div className="w-11/12 rounded-xl bg-blue-200 p-5 lg:w-1/2">
          <h1 className="text-bold text-center text-2xl underline">
            Calculatrice NCLC TCF Canada
          </h1>
          <form className="mt-5 flex flex-col" action="submit">
            <label htmlFor="listening" className="font-semibold">
              Compréhension orale :
            </label>
            <div>
              <select
                name="listening"
                id="listening"
                className="w-2/3 rounded-lg px-3 py-2"
                onChange={handleSelectChange} // Attach the event handler
                value={selectedOption ? selectedOption.value : ""}
              >
                <option value="" disabled>
                  Select an option
                </option>{" "}
                {/* Add a default disabled option */}
                {listeningOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {selectedOption && <p>Selected NCLC: {selectedOption.nclc}</p>}
            </div>

            <label htmlFor="reading" className="font-semibold">
              Compréhension écrite :
            </label>
            <div>
              <input
                type="text"
                name="reading"
                id="reading"
                className="w-1/2 rounded-lg px-5 py-2"
              />
              {/* <input
              type="text"
              name="reading"
              id="reading"
              className="w-1/3 rounded-lg px-5 py-2"
            /> */}
            </div>

            <label htmlFor="speaking" className="font-semibold">
              Expression orale :
            </label>
            <div>
              <input
                type="text"
                name="speaking"
                id="speaking"
                className="w-1/2 rounded-lg px-5 py-2"
              />
              {/* <input
              type="text"
              name="speaking"
              id="speaking"
              className="w-1/3 rounded-lg px-5 py-2"
            /> */}
            </div>

            <label htmlFor="writing" className="font-semibold">
              Expression écrite :
            </label>
            <div>
              <input
                type="text"
                name="writing"
                id="writing"
                className="w-1/2 rounded-lg px-5 py-2"
              />
              {/* <input
              type="text"
              name="writing"
              id="writing"
              className="w-1/3 rounded-lg px-5 py-2"
            /> */}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
