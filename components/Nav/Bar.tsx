"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImage from "../../public/assets/funnerd-logo.png";
import { useMenu } from "./MenuContext";
import { MobileNavMenu } from "./MobileMenu";

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
              <Image
              src={logoImage}
              alt="funnerd-logo"
              width={70}
              height={70}
              priority
            />
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
              <button
                type="button"
                className="group px-4 h-12 w-full md:w-auto cursor-pointer bg-black font-medium hover:bg-blue hover:border bover:border-black transition-colors duration-500 delay-[0.1s] ease-[cubic-bezier(0.19,1,0.22,1)]"
              >
                <div className="overflow-hidden relative">
                  <p className="!text-white text-[1.125rem] tracking-tight group-hover:translate-y-[-25px] duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Get free assessment
                  </p>
                  <p
                    aria-hidden
                    className="absolute text-[1.125rem] tracking-tight left-0 top-5 text-white group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                  >
                    Get free assessment
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>{isOpen && <MobileNavMenu />}</AnimatePresence>
    </header>
  );
};
