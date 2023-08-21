"use client"

import DisclosurePanel from "@/components/DisclosePanel"
import { motion } from "framer-motion"
import { useState } from "react"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const faqData = [
  {
    question: "C'est quoi le NCLC ?",
    answer:
      "Le NCLC ou Niveaux de Compétence Linguistique Canadiens, est un système utilisé pour évaluer et comparer votre compétence linguistique. Il aide à savoir si vos résultats aux tests de langue étrangère sont suffisants pour répondre aux normes canadiennes en terme d'immigration, d'études ou d'emploi.",
  },
  {
    question: "Mon résultat est-il éligible à Entrée Express / Arrima ?",
    answer:
      "Pour être admissible à l'un ou l'autre des deux programmes, votre pointage du NCLC doit être d'au moins 7.",
  },
  {
    question: "Comment puis-je passer un test de compétence linguistique ?",
    answer:
      "Dépendamment du pays dans lequel vous vous trouvez et du test que vous souhaitez passer.",
  },
  {
    question: "J'entends souvent parler de 'bonus'. Qu'est-ce que c'est ?",
    answer:
      "En fonction de votre niveau d'études et de votre expérience professionnelle, posséder de solides compétences linguistiques (NCLC 8 ou plus) vous donne droit à des points supplémentaires dans le cadre du Programme des travailleurs qualifiés (fédéral) d'Entrée Express.",
  },
  {
    question: "A combien de points ce bonus me donne-t-il droit ?",
    answer:
      "Si vous possédez un score de NCLC 9 ou plus, vous pouvez obtenir un maximum de 100 points supplémentaires étant titulaire d'une Maîtrise / Master's Degree (+50 points) et justifiant d'au moins 3 années d'expérience professionnelle (+50 points). Un score de NCLC 8 avec les mêmes critères vous rapportera un total de 50 points (25 + 25) tandis qu'un score de NCLC 7 ne vous en rapportera aucun.",
  },
  {
    question: "J'ai mon resultat. Quel programme choisir maintenant ?",
    answer:
      "Cela dépend entièrement de vous et de la constitution de votre dossier (niveau d'éducation, durée de l'expérience professionnelle, domaine de formation, etc). Un NCLC 9 ou plus serait idéal pour Entrée Express. Cependant, si vous disposez d'un NCLC 7, Arrima pourrait s'avérer un choix plus judicieux.",
  },
  // Add more objects as needed
]

const Faq = () => {
  const [openPanelIndex, setOpenPanelIndex] = useState<number | null>(null)

  const handlePanelClick = (index: number) => {
    setOpenPanelIndex(index === openPanelIndex ? null : index)
  }

  return (
    <motion.div
      className="relative isolate px-6 pt-12 lg:px-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-3xl pt-24 lg:pt-32">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Des interrogations ? Notre{" "}
          <span className="text-pink-600">foire aux questions</span> peut
          sûrement vous éclairer !
        </h1>

        <div className="w-full pt-8">
          <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2">
            {faqData.map((item, index) => (
              <DisclosurePanel
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={index === openPanelIndex}
                onClick={() => handlePanelClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Faq
