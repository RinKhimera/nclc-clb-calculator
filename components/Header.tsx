"use client"

import { useEffect, useState } from "react"
import { BsMoonStars } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"
import { IoSunnyOutline } from "react-icons/io5"

type Props = {
  defaultMode?: "light" | "dark"
}

// Define the DarkModeToggle component
const DarkModeToggle = ({ defaultMode = "light" }: Props) => {
  // State to manage whether dark mode is active
  const [darkMode, setDarkMode] = useState<boolean>(
    // Initialize dark mode state based on user's OS preference
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )

  // Effect to update dark mode state and apply changes to the DOM
  useEffect(() => {
    if (darkMode) {
      // Add "dark" class to the <html> element
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className="pointer-events-auto flex-none">
      <button
        type="button"
        aria-label="Toggle dark mode"
        onClick={toggleDarkMode}
        className="group  rounded-full bg-white/90 px-3 py-2 text-pink-400 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:text-pink-600 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      >
        {darkMode ? (
          <BsMoonStars className="m-0.5 text-lg" />
        ) : (
          <IoSunnyOutline className="text-2xl" />
        )}
      </button>
    </div>
  )
}

export default DarkModeToggle
