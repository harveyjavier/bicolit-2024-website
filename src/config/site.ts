import logo from "../../public/bicolit-logo.svg";
import ogImage from "../../public/og.png";
import facebook from "../../public/assets/partners/facebook.svg";
import instagram from "../../public/assets/partners/ig.svg";
import x from "../../public/assets/partners/x.svg";
import {
  president,
  headOfCreatives,
  headOfTechnology,
  headOfPartnershipAndRelations,
  financeOfficer,
} from "../../public/assets/advocates";
import {
  councilPresident,
  externalRelationsOfficer,
  studentFinaceOfficer,
  eventCoordinator,
  technologyOfficer,
  communityCoordinator,
  studentSecretary,
  promotionsLead,
  membershipChair,
  executiveViceChairPerson,
} from "../../public/assets/student-council/";

import {
  founderHarris,
  founderRico,
  founderRichardGonzales,
  founderRichardNacar,
  founderJason,
} from "../../public/assets/founders";

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
      title: "Student Council",
      href: "#student-council",
    },
    {
      title: "Founder",
      href: "#founder",
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
      linkedin: "",
      position: "Finance Officer",
    },
  ],
  studentCouncil: [
    {
      imageSource: councilPresident,
      name: "Kenneth Aycardo",
      linkedin: "",
      position: "President",
    },
    {
      imageSource: executiveViceChairPerson,
      name: "Dimmie Eya Luces",
      linkedin: "",
      position: "Executive Vice Chairperson",
    },
    {
      imageSource: studentSecretary,
      name: "Olan Gomez",
      linkedin: "",
      position: "Secretary",
    },
    {
      imageSource: membershipChair,
      name: "Renmar Balana",
      linkedin: "",
      position: "Membership Chair",
    },
    {
      imageSource: externalRelationsOfficer,
      name: "Sean Jethro A. Palacay",
      linkedin: "",
      position: "External Relations Officer",
    },
    {
      imageSource: promotionsLead,
      name: "John Francis Lomeda",
      linkedin: "",
      position: "Promotions Lead",
    },
    {
      imageSource: studentFinaceOfficer,
      name: "Paul Dannielle P. Yanzon",
      linkedin: "",
      position: "Finance Officer",
    },
    {
      imageSource: eventCoordinator,
      name: "Cyril Christian B. Imperial",
      linkedin: "",
      position: "Event Coordinator",
    },
    {
      imageSource: communityCoordinator,
      name: "Kadmiel Ross B. Baiño",
      linkedin: "",
      position: "Community Coordinator",
    },
    {
      imageSource: technologyOfficer,
      name: "Peter John Arao",
      linkedin: "https://www.linkedin.com/in/peter-john-arao/",
      position: "Technology Officer",
    },
  ],
  founders: [
    {
      imageSource: founderHarris,
      name: "Harris Rainer",
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
  },
};

export type SiteConfig = typeof siteConfig;
