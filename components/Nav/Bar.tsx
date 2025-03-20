"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenu } from "./MenuContext";
import { MobileNavMenu } from "./MobileMenu";
import { Button } from "../Button";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
];

export const Navbar = () => {
  const { isOpen, toggleMenu } = useMenu();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full h-20 z-[99] backdrop-blur-md">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-row space-x-4 items-center text-[1rem] md:text-2xl font-bold hover:opacity-90 transition-opacity"
            >
              {/* <Image
              src="/images/msf-logo.png"
              alt="Msf-logo"
              width={50}
              height={50}
              priority
            /> */}
              <span className="font-humanist">Funnerd Tutors</span>
            </Link>

            {/* Toggle Menu */}
            <button
              className="lg:hidden px-2 py-1 bg-white border border-black"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-8 h-8 text-black" />
              ) : (
                <Menu className="w-8 h-8 text-black" />
              )}
            </button>

            {/* Nav menu */}
            <nav className="hidden lg:flex  items-center gap-6 ">
              {navItems.map((item, index) => (
                <div className="text-black/60 text-xl" key={index}>
                  <Link
                    href={item.path}
                    className={`
                    ${
                      isActive(item.path) &&
                      "text-black font-bold underline decoration-2 decoration-blue underline-offset-4"
                    }  
                    `}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* button */}
            
            <div className="hidden lg:flex">
              <Button>Get free assessment</Button>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>{isOpen && <MobileNavMenu />}</AnimatePresence>
    </header>
  );
};
