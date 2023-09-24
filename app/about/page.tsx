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
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              A propos de cette{" "}
              <span className="text-pink-600">application.</span>
            </h1>

            <div className="my-10">
              <p className="mt-6 text-lg leading-8">
                Elle découle d&apos;une initiative personnelle visant à
                faciliter l&apos;interprétation des résultats des tests de
                compétence linguistique en vue d&apos;une immigration au Canada.
                Il est important de{" "}
                <a
                  href="https://www.canada.ca/fr/immigration-refugies-citoyennete/organisation/publications-guides/bulletins-guides-operationnels/exigences-normalisees/exigences-linguistiques/tableaux-equivalences-resultats-tests.html"
                  target="_blank"
                  className="text-pink-600"
                >
                  comprendre comment cet outil détermine votre NCLC.
                </a>
              </p>
              <p className="mt-6 text-lg leading-8">
                Si vous trouvez cette application utile et souhaitez
                m&apos;apporter votre soutien, je vous invite simplement à la
                partager avec votre entourage. Si vous avez des commentaires à
                partager, n&apos;hésitez pas à{" "}
                <Link
                  href="mailto:dixiades@gmail.com"
                  className="text-pink-600"
                >
                  m&apos;envoyer un email.
                </Link>{" "}
                Vous pouvez également me retrouver sur{" "}
                <Link
                  href="https://www.linkedin.com/in/samuel-pokam/"
                  target="_blank"
                  className="text-pink-600"
                >
                  LinkedIn
                </Link>{" "}
                et{" "}
                <Link
                  href="https://github.com/RinKhimera"
                  target="_blank"
                  className="text-pink-600"
                >
                  GitHub.
                </Link>
              </p>
            </div>

            <div className="flex flex-col text-lg italic leading-8">
              <p>
                Développé avec passion par moi et propulsé par{" "}
                <Link
                  href="https://nextjs.org/"
                  target="_blank"
                  className="text-pink-600"
                >
                  Next.js
                </Link>
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
