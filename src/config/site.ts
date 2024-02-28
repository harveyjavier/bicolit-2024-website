import logo from "../../public/assets/logo.svg";

export const siteConfig = {
  name: "Bicol IT",
  url: "https://bicolit.org",
  ogImage: logo,
  description:
    "Transforming Bicol into a globally competitive Information Technology hub through Education and Technopreneurship.",
  links: [
    {
      title: "About Bicol IT",
      href: "#about",
    },
    {
      title: "Events",
      href: "#events",
    },
    {
      title: "Membership",
      href: "#membership",
    },
    {
      title: "Blogs",
      href: "#blogs",
    },
    {
      title: "Advocates",
      href: "#advocates",
    },
    {
      title: "Partners",
      href: "#partners",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
