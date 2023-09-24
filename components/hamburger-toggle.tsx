"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navigation } from "@/constants/Data"
import { Bars3Icon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

const HamburgerToggle = () => {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Bars3Icon className="h-7 w-7" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu de navigation</SheetTitle>
        </SheetHeader>

        <Separator className="my-10" />

        <div className="space-y-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href

            return (
              <SheetClose key={item.name} asChild>
                <Link
                  href={item.href}
                  className={`block text-lg font-semibold ${
                    isActive &&
                    "underline decoration-pink-600 decoration-4 underline-offset-4"
                  }`}
                >
                  {item.name}
                </Link>
              </SheetClose>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default HamburgerToggle
