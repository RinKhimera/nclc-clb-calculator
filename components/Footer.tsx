import Link from "next/link"

const Footer = () => {
  return (
    <>
      <footer className="flex-none">
        <div className="mx-auto border-t border-zinc-100 py-10 dark:border-zinc-700/40 lg:max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <Link
                className="transition hover:text-pink-600 dark:hover:text-pink-500"
                href="/"
              >
                Accueil
              </Link>
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              © 2023 Rin Khimera. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
