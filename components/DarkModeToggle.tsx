"use client"

import { useEffect, useState } from "react"
import { BsMoonStars } from "react-icons/bs"
import { IoSunnyOutline } from "react-icons/io5"

// Define the DarkModeToggle component
const DarkModeToggle = () => {
  // State to manage whether dark mode is active
  const [darkMode, setDarkMode] = useState<boolean>(true)

  // Effect to initialize dark mode state based on user's OS preference
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    setDarkMode(prefersDarkMode.matches) // Set initial dark mode state
  }, [])

  // Effect to update dark mode state and apply changes to the DOM
  useEffect(() => {
    // Toggle the "dark" class on the <html> element based on darkMode state
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  // Return the DarkModeToggle component
  return (
    <div className="pointer-events-auto flex-none">
      <button
        type="button"
        aria-label="Toggle dark mode"
        onClick={toggleDarkMode}
        className="group  rounded-full bg-white/90 px-3 py-2 text-pink-400 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:text-pink-600 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      >
        {/* Display appropriate icon based on darkMode state */}
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
