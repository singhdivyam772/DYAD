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
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import dyadLogo from "../../assets/DYAD_logo.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <section className="supports-backdrop-blur:bg-background/60 shadow-xl fixed  font-roboto left-0 right-0 top-0 z-20 border-b py-3 bg-white backdrop-blur flex justify-between  pl-16 pr-8 items-center">
      <a
        href="#home"
        className="flex justify-center font-roboto items-center gap-3 ml-[-3rem]"
      >
        <Image alt="dyadlogo" src={dyadLogo} width={64} height={64} />
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
