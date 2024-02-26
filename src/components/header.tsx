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

  const headerClass = `container flex z-20 sticky top-0 justify-between items-center flex-row w-full ${
    scrolled ? "backdrop-blur-md transition-all" : ""
  }`;

  return (
    <div className={headerClass}>
      <Link href="/">
        <Image
          src={siteConfig.ogImage}
          alt="Bicol IT Logo"
          height={70}
          width={70}
          priority
        />
      </Link>

      {/* Mobile drawer button */}
      <div className={isDrawerOpen ? "hidden" : "md:hidden"}>
        <button onClick={toggleDrawer} title="Menu button" type="button">
          <svg
            className="h-6 w-6"
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
        <button onClick={toggleDrawer} title="Close button" type="button">
          <svg
            className="h-6 w-6"
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
      <div className="items-center justify-between gap-10 mr-2 hidden md:flex">
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
        <div className="md:hidden absolute backdrop-blur-md transition-all w-full h-fit top-16 left-0">
          {/* Render your navigation links here */}
          <div className="flex flex-col items-center w-full h-fit ">
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
    </div>
  );
}
