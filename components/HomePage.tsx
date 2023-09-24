"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "./ui/badge"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const HomePage = () => {
  return (
    <>
      <div className="relative isolate px-6 pt-12 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl pt-24 lg:pt-32"
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <Badge variant="outline" className="space-x-2 px-5 text-base">
              <div>Comprendre comment mes résultats sont évalués.</div>
              <a
                href="https://www.canada.ca/fr/immigration-refugies-citoyennete/organisation/publications-guides/bulletins-guides-operationnels/exigences-normalisees/exigences-linguistiques/tableaux-equivalences-resultats-tests.html"
                target="_blank"
                className="font-semibold text-pink-600"
              >
                <span className="" aria-hidden="true" />
                En savoir plus <span aria-hidden="true">&rarr;</span>
              </a>
            </Badge>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="text-pink-600">Hey !</span> Quel résultat
              allons-nous évaluer aujourd&apos;hui ?
            </h1>
            <p className="mt-6 text-lg leading-8">
              <span className="hidden md:block">
                Découvrez votre Niveau de Compétence Linguistique Canadien !
                Cette application vous aide à déterminer votre admissibilité au
                programme{" "}
                <a
                  href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/admissibilite/travailleurs-qualifies-federal.html#linguistiques"
                  target="_blank"
                  className="text-pink-600"
                >
                  Entrée Express
                </a>{" "}
                et{" "}
                <a
                  href="https://www.quebec.ca/immigration/travailler-quebec/travailleurs-qualifies/programme-regulier-travailleurs-qualifies/invitation"
                  target="_blank"
                  className="text-pink-600"
                >
                  Arrima.
                </a>
              </span>{" "}
              Les tests de compétences linguistiques pris en compte sont le Test
              de Connaissance du Français pour le Canada et l&apos;International
              English Language Testing System - formation générale. Prêt à
              connaître votre niveau ?
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-x-6 gap-y-4  sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
              >
                {/* <Link
                  href="/tcfcanada"
                  className={`min-w-[120px] text-xl ${buttonVariants({
                    variant: "outline",
                  })}`}
                >
                  TCF - Canada
                </Link> */}
                <Link
                  href="/tcfcanada"
                  className="block min-w-[250px] rounded-md bg-pink-600 px-3.5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 lg:text-lg"
                >
                  TCF - Canada
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
              >
                <Link
                  href="/ielts"
                  className="block min-w-[250px] rounded-md bg-pink-600 px-3.5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 lg:text-lg"
                >
                  IELTS - General
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default HomePage
