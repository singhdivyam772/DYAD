"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import "./navbar.css";

export default function Navbar() {
  return (
    <section className="supports-backdrop-blur:bg-background/60 shadow-xl fixed left-0 right-0 top-0 z-20 border-b py-3 bg-white backdrop-blur flex justify-between px-16 items-center">
      <div className="flex justify-center items-center gap-3 ml-[-3rem]">
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
        </svg>{" "}
        <h2 className="text-2xl font-semibold">DYAD</h2>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="gap-3">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#home"
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#about"
              className={navigationMenuTriggerStyle()}
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#services"
              className={navigationMenuTriggerStyle()}
            >
              Services
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#testimonial"
              className={navigationMenuTriggerStyle()}
            >
              Testimonial
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#contact"
              className={navigationMenuTriggerStyle()}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
}
