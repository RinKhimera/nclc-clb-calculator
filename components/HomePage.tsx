"use client"

import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import Link from "next/link"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const HomePage = () => {
  return (
    <>
      <motion.div
        className="mt-16 max-w-2xl lg:max-w-5xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 transition dark:text-zinc-100 sm:text-5xl">
          Salut&apos; ! Quel résultat allons-nous comparer aujourd&apos;hui ?
        </h1>
        <div className="my-8 flex max-w-lg flex-col gap-5">
          <Link
            href="/tcfcanada"
            className="text-xl font-bold tracking-tight text-zinc-800 underline underline-offset-auto transition hover:text-pink-600 dark:text-zinc-100 sm:text-3xl"
          >
            Test de Connaissance du Français - Canada (TCF Canada)
          </Link>
          <h3 className="text-xl font-bold tracking-tight text-zinc-800 underline underline-offset-auto dark:text-zinc-100 sm:text-3xl">
            Test de Connaissance du Français - Québec (TCF Québec)
          </h3>
        </div>
      </motion.div>
    </>
  )
}

export default HomePage
