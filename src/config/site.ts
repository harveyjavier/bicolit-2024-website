import logo from "../../public/assets/logo.svg";
import ogImage from "../../public/assets/og.png";
import one from "../../public/assets/advocates/1.png";
import two from "../../public/assets/advocates/2.png";
import three from "../../public/assets/advocates/3.png";
import four from "../../public/assets/advocates/4.png";
import five from "../../public/assets/advocates/5.png";
import six from "../../public/assets/advocates/6.png";

export const siteConfig = {
  name: "Bicol IT",
  url: "https://bicolit.org",
  logo,
  ogImage,
  description:
    "Transforming Bicol into a globally competitive Information Technology hub through Education and Technopreneurship.",
  keywords: ["bicolit", "Bicol IT", "Bicol Information Technology", "Bicolit"],
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
  advocates: [
    {
      imageSource: one,
      name: "Ismael Jerusalem",
      linkedin: "https://ph.linkedin.com/in/ismaeljerusalem",
      position: "President",
    },
    {
      imageSource: two,
      name: "Will Añonuevo",
      linkedin: "https://ph.linkedin.com/in/williamanonuevo",
      position: "Head of Creatives",
    },
    {
      imageSource: three,
      name: "Harvey Havier",
      linkedin: "https://ph.linkedin.com/in/harveyjavier",
      position: "Head of Technology",
    },
    {
      imageSource: four,
      name: "Harris Osianna",
      linkedin: "",
      position: "Head of Partnership and Relations",
    },
    {
      imageSource: five,
      name: "Felix Oliver Zuñiga",
      linkedin: "",
      position: "Finance Officer",
    },
    {
      imageSource: six,
      name: "Kenneth Aycardo",
      linkedin: "",
      position: "Student Council President",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
