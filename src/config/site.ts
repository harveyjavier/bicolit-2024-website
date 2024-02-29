import logo from "../../public/assets/logo.svg";
import ogImage from "../../public/assets/og.png";
import one from "../../public/assets/advocates/1.png";
import two from "../../public/assets/advocates/2.png";
import three from "../../public/assets/advocates/3.png";
import four from "../../public/assets/advocates/4.png";
import five from "../../public/assets/advocates/5.png";
import six from "../../public/assets/advocates/6.png";
import facebook from "../../public/assets/partners/facebook.svg";
import instagram from "../../public/assets/partners/ig.svg";
import x from "../../public/assets/partners/x.svg";

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
  formDetails: [
    {
      placeholder: "First Name",
      type: "text",
      name: "first_name",
    },
    {
      placeholder: "Last Name",
      type: "text",
      name: "last_name",
    },
    {
      placeholder: "Email Address",
      type: "email",
      name: "email",
    },
    {
      placeholder: "Mobile Number",
      type: "tel",
      name: "mobile_number",
    },
  ],
  contacts: {
    info: [
      {
        key: "HQ",
        value:
          "2F RJV Commercial Building, Rizal St., Cor. Gov. Reynolds St., Old Albay District, Legazpi City, 4500, Albay, Philippines",
      },
      {
        key: "Mobile",
        value: "+63 9999123456",
      },
      {
        key: "Email",
        value: "hello@bicolit.org",
      },
    ],
    links: [
      {
        name: "Facebook",
        logo: facebook,
        url: "https://www.facebook.com/bicolit.org",
      },
      {
        name: "Instagram",
        logo: instagram,
        url: "https://instagram.com/bicolit",
      },
      {
        name: "X",
        logo: x,
        url: "https://x.com/bicolit",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
