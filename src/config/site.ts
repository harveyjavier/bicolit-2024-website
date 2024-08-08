import logo from "../../public/bicolit-logo.svg";
import ogImage from "../../public/og.png";
import facebook from "@/assets/partners/facebook.svg";
import instagram from "@/assets/partners/ig.svg";
import x from "@/assets/partners/x.svg";
import {
  president,
  headOfCreatives,
  headOfTechnology,
  headOfPartnershipAndRelations,
  financeOfficer,
  boardMember,
} from "@/assets/advocates";
import {
  PeterJohn,
  Kenneth,
  KadmielRoss,
  Renmar,
  Olan,
  Cyril,
  JohnFrancis,
  Dimmie,
  Sean,
  PaulDannielle,
} from "@/assets/student-council";
import {
  BULogo,
  ADNULogo,
  CSPCLogo,
  DWCLLogo,
  STICLogo,
  SLTCFILogo,
} from "@/assets/student-council/school-logo";
import {
  founderHarris,
  founderRico,
  founderRichardGonzales,
  founderRichardNacar,
  founderJason,
} from "../assets/founders";
import placeholder from "@/assets/placeholder.svg";

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
      title: "News and Updates",
      href: "#news-and-updates",
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
      title: "Student Council",
      href: "#student-council",
    },
    {
      title: "Founders",
      href: "#founders",
    },
    {
      title: "Partners",
      href: "#partners",
    },
  ],
  advocates: [
    {
      imageSource: president,
      name: "Ismael Jerusalem",
      linkedin: "https://ph.linkedin.com/in/ismaeljerusalem",
      position: "President",
    },
    {
      imageSource: headOfCreatives,
      name: "Will Añonuevo",
      linkedin: "https://ph.linkedin.com/in/williamanonuevo",
      position: "Head of Creatives",
    },
    {
      imageSource: headOfTechnology,
      name: "Harvey Havier",
      linkedin: "https://ph.linkedin.com/in/harveyjavier",
      position: "Head of Technology",
    },
    {
      imageSource: headOfPartnershipAndRelations,
      name: "Harris Osianna",
      linkedin: "",
      position: "Head of Partnership and Relations",
    },
    {
      imageSource: financeOfficer,
      name: "Felix Oliver Zuñiga",
      linkedin: "https://www.linkedin.com/in/fobzuniga",
      position: "Finance Officer",
    },
    {
      imageSource: boardMember,
      name: "Josh Henry Regondola",
      linkedin: "https://www.linkedin.com/in/henryregondola",
      position: "Board Member",
    },
  ],
  studentCouncil: [
    {
      imageSource: Cyril,
      school: "Camarines Sur Polytechnic Colleges",
      name: "Cyril Christian B. Imperial",
      linkedin: "",
      position: "President",
      schoolLogo: CSPCLogo,
      schoolSite: "https://cspc.edu.ph",
    },
    {
      imageSource: Dimmie,
      school: "Ateneo De Naga University",
      name: "Dimmie Eya Luces",
      linkedin: "",
      position: "Vice President",
      schoolLogo: ADNULogo,
      schoolSite: "https://www.adnu.edu.ph/",
    },
    {
      imageSource: placeholder,
      school: "SLTCFI Legazpi",
      name: "Clarissa B. Vega",
      linkedin: "",
      position: "Secretary",
      schoolLogo: SLTCFILogo,
      schoolSite: "https://sltcfi.com",
    },
    {
      imageSource: PaulDannielle,
      school: "STI College Legazpi",
      name: "Paul Dannielle P. Yanzon",
      linkedin: "",
      position: "Finance Officer",
      schoolLogo: STICLogo,
      schoolSite: "https://sti.edu/",
    },
    {
      imageSource: placeholder,
      school: "Bicol University",
      name: "Paraiso Jhoanna Sherry",
      linkedin: "",
      position: "Events Lead",
      schoolLogo: BULogo,
      schoolSite: "https://www.bicol-u.edu.ph/",
    },
    {
      imageSource: placeholder,
      school: "Bicol University",
      name: "Yunise Ellaine Madriñan",
      linkedin: "",
      position: "Marketing Lead",
      schoolLogo: BULogo,
      schoolSite: "https://www.bicol-u.edu.ph/",
    },
    {
      imageSource: KadmielRoss,
      school: "Divine Word College of Legazpi",
      name: "Kadmiel Ross B. Baiño",
      linkedin: "",
      position: "Growth Lead",
      schoolLogo: DWCLLogo,
      schoolSite: "https://www.dwc-legazpi.edu",
    },
    {
      imageSource: JohnFrancis,
      school: "Camarines Sur Polytechnic Colleges",
      name: "John Francis Lomeda",
      linkedin: "",
      position: "Creative Lead",
      schoolLogo: CSPCLogo,
      schoolSite: "https://cspc.edu.ph",
    },
    {
      imageSource: PeterJohn,
      school: "STI College Legazpi",
      name: "Peter John Arao",
      linkedin: "https://www.linkedin.com/in/peter-john-arao/",
      position: "Tech Lead",
      schoolLogo: STICLogo,
      schoolSite: "https://sti.edu/",
    },
  ],
  founders: [
    {
      imageSource: founderHarris,
      name: "Harris Rainier",
      linkedin: "https://www.linkedin.com/in/ohrainier",
      position: "Founder",
    },
    {
      imageSource: founderRico,
      name: "Rico Zuñiga",
      linkedin: "https://www.linkedin.com/in/ricoz/",
      position: "Founder",
    },
    {
      imageSource: founderJason,
      name: "Jason Batalla",
      linkedin: "https://www.linkedin.com/in/jasonbatalla/",
      position: "Founder",
    },
    {
      imageSource: founderRichardGonzales,
      name: "Richard Gonzales",
      linkedin: "https://www.linkedin.com/in/chardgonzales/",
      position: "Founder",
    },
    {
      imageSource: founderRichardNacar,
      name: "Richard Nacar",
      linkedin: "https://www.linkedin.com/in/richardnacar/",
      position: "Founder",
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
    group: "https://www.facebook.com/groups/194616090699146",
    membership:
      "https://docs.google.com/forms/d/e/1FAIpQLSdA8CorhD6jXJ-EwaAg4gHlv_TVqfwY67VExd9QCYcVENlwvw/viewform",
  },
};

export type SiteConfig = typeof siteConfig;
