import Footer from "@/components/Footer"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NCLC - CLB Calculator",
  description:
    "Calculation tool for Canadian Language Benchmarks / Outil de calcul des Niveaux de compétence linguistique canadiens",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
        <div className=" inset-0 mx-auto flex min-h-screen w-full flex-col justify-between bg-white px-4 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 sm:w-11/12 sm:px-8 lg:max-w-6xl lg:px-24">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
