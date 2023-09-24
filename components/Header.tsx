import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import NavLinks from "./NavLinks"
import HamburgerToggle from "./hamburger-toggle"
import { ModeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Button asChild variant="outline" size="icon">
            <Link href="/">
              <HomeIcon className="h-6 w-6" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex gap-x-5 lg:hidden">
          <ModeToggle />
          <HamburgerToggle />
        </div>

        {/* Desktop Menu */}
        <NavLinks />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
