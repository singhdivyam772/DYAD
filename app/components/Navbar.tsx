"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.css";

export default function Navbar() {
  return (
    <section className="supports-backdrop-blur:bg-background/60 shadow-xl fixed  font-roboto left-0 right-0 top-0 z-20 border-b py-3 bg-white backdrop-blur flex justify-between md:px-16 pl-16 pr-8 items-center">
      <a
        href="#home"
        className="flex justify-center font-roboto items-center gap-3 ml-[-3rem]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <h2 className="text-2xl font-semibold">DYAD</h2>
      </a>

      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="lg:gap-3 lg:flex hidden">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#home"
              className={`${navigationMenuTriggerStyle()} text-xl`}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#about"
              className={`${navigationMenuTriggerStyle()} text-xl`}
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#services"
              className={`${navigationMenuTriggerStyle()} text-xl`}
            >
              Services
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#testimonial"
              className={`${navigationMenuTriggerStyle()} text-xl`}
            >
              Testimonial
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#contact"
              className={`${navigationMenuTriggerStyle()} text-xl`}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Sheet for Edit Profile */}
        <Sheet>
          <SheetTrigger asChild>
            <RxHamburgerMenu className="lg:hidden flex font-roboto bg-grey-600 text-xl" />
          </SheetTrigger>
          <SheetContent>
            <NavigationMenuList className=" flex flex-col justify-center items-start -ml-2">
              <NavigationMenuItem>
                <SheetClose asChild>
                  <NavigationMenuLink
                    href="#home"
                    className={`${navigationMenuTriggerStyle()} text-xl`}
                  >
                    Home
                  </NavigationMenuLink>
                </SheetClose>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <SheetClose asChild>
                  <NavigationMenuLink
                    href="#about"
                    className={`${navigationMenuTriggerStyle()} text-xl`}
                  >
                    About
                  </NavigationMenuLink>
                </SheetClose>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <SheetClose asChild>
                  <NavigationMenuLink
                    href="#services"
                    className={`${navigationMenuTriggerStyle()} text-xl`}
                  >
                    Service
                  </NavigationMenuLink>
                </SheetClose>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <SheetClose asChild>
                  <NavigationMenuLink
                    href="#testimonial"
                    className={`${navigationMenuTriggerStyle()} text-xl`}
                  >
                    Testimonial
                  </NavigationMenuLink>
                </SheetClose>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <SheetClose asChild>
                  <NavigationMenuLink
                    href="#contact"
                    className={`${navigationMenuTriggerStyle()} text-xl`}
                  >
                    Contact
                  </NavigationMenuLink>
                </SheetClose>
              </NavigationMenuItem>
            </NavigationMenuList>
          </SheetContent>
        </Sheet>
      </NavigationMenu>
    </section>
  );
}
