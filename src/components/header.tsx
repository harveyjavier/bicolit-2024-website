"use client";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
        setDrawerOpen(false);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const headerClass = `container sticky top-4 left-0 right-0 flex z-20 w-full justify-between items-center transition-all flex-row  ${
    scrolled ? "backdrop-blur-lg top-4 rounded-full" : "bg-none"
  } `;

  const drawerButtonClass = `h-6 w-6 transition-transform transform ${
    isDrawerOpen ? "rotate-90" : "rotate-0"
  }`;

  return (
    <header className={headerClass}>
      <Link href="#home">
        <Image
          src={siteConfig.logo}
          alt="Bicol IT Logo"
          height={79}
          width={79}
          priority
        />
      </Link>

      {/* Mobile drawer button */}
      <div className={isDrawerOpen ? "hidden" : "md:hidden"}>
        <button
          onClick={toggleDrawer}
          title="Menu button"
          type="button"
          className="transform-gpu"
        >
          <svg
            className={`h-6 w-6 ${drawerButtonClass}`}
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div className={isDrawerOpen ? "flex" : "hidden"}>
        <button
          onClick={toggleDrawer}
          title="Close button"
          type="button"
          className="transform-gpu"
        >
          <svg
            className="h-6 w-6 transition-transform transform rotate-0"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation links */}
      <div className="items-center justify-between gap-10 hidden md:flex">
        {siteConfig.links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="text-sm text-white font-helvetica_light"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Mobile drawer */}
      {isDrawerOpen && (
        <div className="md:hidden fixed backdrop-blur-lg transition-all rounded-b-lg w-full h-fit top-14 left-0">
          {/* Render your navigation links here */}
          <div className="flex flex-col items-center w-full h-fit">
            {siteConfig.links.map((link) => (
              <Link
                onClick={() => setDrawerOpen(false)}
                href={link.href}
                key={link.href}
                className="text-sm text-white font-helvetica_light mb-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
