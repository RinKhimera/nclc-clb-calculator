"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const About = () => {
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
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              A propos de cette application.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Elle découle d&apos;une initiative personnelle visant à faciliter
              l&apos;interprétation des résultats des tests de compétence
              linguistique en vue d&apos;une immigration au Canada. Il est
              important de{" "}
              <a
                href="https://www.canada.ca/fr/immigration-refugies-citoyennete/organisation/publications-guides/bulletins-guides-operationnels/exigences-normalisees/exigences-linguistiques/tableaux-equivalences-resultats-tests.html"
                target="_blank"
                className="text-pink-600"
              >
                comprendre comment cet outil détermine votre NCLC.
              </a>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              La première phase de ce processus est l&apos;obtention de
              l&apos;examen linguistique. Cette ressource constitue ma modeste
              contribution à but non lucratif, destinée à soutenir la
              concrétisation de votre rêve canadien.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Si vous trouvez cette application utile et souhaitez
              m&apos;apporter votre soutien, je vous invite simplement à la
              partager avec votre entourage. Si vous avez des commentaires à
              partager, n&apos;hésitez pas à{" "}
              <a href="mailto:dixiades@gmail.com" className="text-pink-600">
                m&apos;envoyer un email.
              </a>
            </p>
            <div className="mt-16 flex flex-col text-lg italic leading-8 text-gray-600">
              <p>
                Développé avec passion par moi et propulsé par{" "}
                <a href="https://nextjs.org/" className="text-pink-600">
                  Next.js
                </a>
              </p>
              <p>© 2023 Samuel Pokam. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default About
