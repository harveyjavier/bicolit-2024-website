"use client";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import { useStateContext } from "@/lib/state";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/navigation-menu";
import { cn } from "@/lib/utils";

const teams: { title: string; href: string; description: string | null }[] = [
  {
    title: "- Advocates",
    href: "#advocates",
    description: "",
  },
  {
    title: "- Student Council",
    href: "#student-council",
    description: "",
  },
  {
    title: "- Founders",
    href: "#founders",
    description: "",
  },
];

const hiddenNavLink = ["Advocates", "Student Council", "Founders", "Partners"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { setState } = useStateContext();

  const handleChangeNavLink = (link: string) => {
    setState((state: any) => ({ ...state, link }));
  };

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

  const headerClass = `sticky top-4 left-0 right-0 flex z-20 w-full justify-between items-center transition-all flex-row  ${
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
      <div className="items-center justify-between md:gap-6 lg:gap-10  hidden md:flex">
        {siteConfig.links.map((link) =>
          hiddenNavLink.includes(link.title) ? (
            ""
          ) : (
            <Link
              href={link.href}
              key={link.href}
              className="text-sm text-white font-helvetica_light"
            >
              {link.title}
            </Link>
          )
        )}
        <NavigationMenu className="text-white">
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem className="w-full">
              <NavigationMenuTrigger>Team</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col shrink-0 flex-nowrap text-nowrap">
                  {teams.map((team) => (
                    <ListItem
                      key={team.title}
                      title={team.title}
                      href={team.href}
                      onClick={() => handleChangeNavLink(team.href)}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="rounded-md px-2 font-helvetica_bold font-bold bg-[#6633CC] hover:bg-[#330066] focus:bg-[#330066] text-white text-center">
              <Link
                href={siteConfig.contacts.membership}
                target="_blank"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Join Us Now
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile drawer */}
      {isDrawerOpen && (
        <div className="md:hidden px-4 pt-4 fixed backdrop-blur-lg transition-all w-full h-svh top-14 left-0">
          {/* Render your navigation links here */}
          <div className="flex flex-col justify-between gap-4 w-full h-fit">
            {siteConfig.links.map((link) =>
              hiddenNavLink.includes(link.title) ? (
                ""
              ) : (
                <Link
                  href={link.href}
                  key={link.href}
                  className="text-sm text-white font-helvetica_light"
                >
                  {link.title}
                </Link>
              )
            )}
            <Accordion
              type="single"
              collapsible
              className="text-white w-full items-center justify-center"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="w-full justify-between">
                  Team
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                  <Link
                    href="#advocates"
                    key="#advocates"
                    className="mt-4"
                    onClick={() => handleChangeNavLink("#advocates")}
                  >
                    Advocates
                  </Link>
                  <Link
                    href="#student-council"
                    key="#student-council"
                    onClick={() => handleChangeNavLink("#student-council")}
                  >
                    Student Council
                  </Link>
                  <Link
                    href="#founders"
                    key="#founders"
                    onClick={() => handleChangeNavLink("#founders")}
                  >
                    Founders
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="#partners"
              key="#partners"
              className="text-sm text-white font-helvetica_light"
            >
              Partners
            </Link>
            <a
              href={siteConfig.contacts.membership}
              target="_blank"
              className="pt-[0.7rem] mb-4 pb-2 px-2 rounded-md font-helvetica_bold font-bold bg-[#6633CC] hover:bg-[#330066] focus:bg-[#330066] text-white text-center"
            >
              Join Us Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors hover:bg-[#330066] focus:bg-[#330066] ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
