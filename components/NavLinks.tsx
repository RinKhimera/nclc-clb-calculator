"use client"

import { buttonVariants } from "@/components/ui/button"
import { navigation } from "@/constants/Data"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinks = () => {
  const pathname = usePathname()

  return (
    <div className="hidden lg:flex lg:space-x-2">
      {navigation.slice(1).map((navLinks, index) => {
        const isActive = pathname === navLinks.href
        return (
          <Link
            key={index}
            href={navLinks.href}
            className={`min-w-[120px] text-xl ${buttonVariants({
              variant: "ghost",
            })} ${
              isActive &&
              "underline decoration-pink-600 decoration-4 underline-offset-4"
            }`}
          >
            {navLinks.name}
          </Link>
        )
      })}
    </div>
  )
}

export default NavLinks
