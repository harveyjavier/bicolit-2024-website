import logo from "../../public/bicolit-logo.svg";
import ogImage from "../../public/og.png";
import facebook from "../../public/assets/partners/facebook.svg";
import instagram from "../../public/assets/partners/ig.svg";
import x from "../../public/assets/partners/x.svg";
import { bu, dwcl, cspc, adnu } from "../../public/assets/student-council";
import {
  president,
  headOfCreatives,
  headOfTechnology,
  headOfPartnershipAndRelations,
  financeOfficer,
  boardMember,
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
      imageSource: councilPresident,
      school: "Bicol University",
      name: "Kenneth Aycardo",
      linkedin: "",
      position: "President",
      schoolLogo: bu,
      schoolSite: "https://www.bicol-u.edu.ph/",
    },
    {
      imageSource: executiveViceChairPerson,
      school: "Ateneo De Naga University",
      name: "Dimmie Eya Luces",
      linkedin: "",
      position: "Executive Vice Chairperson",
      schoolLogo: adnu,
      schoolSite: "https://www.adnu.edu.ph/",
    },
    {
      imageSource: studentSecretary,
      school: "Bicol University",
      name: "Olan Gomez",
      linkedin: "",
      position: "Secretary",
      schoolLogo: bu,
      schoolSite: "https://www.bicol-u.edu.ph/",
    },
    {
      imageSource: membershipChair,
      school: "Bicol University",
      name: "Renmar Balana",
      linkedin: "",
      position: "Membership Chair",
      schoolLogo: bu,
      schoolSite: "https://www.bicol-u.edu.ph/",
    },
    {
      imageSource: externalRelationsOfficer,
      school: "Bicol University",
      name: "Sean Jethro A. Palacay",
      linkedin: "",
      position: "External Relations Officer",
      schoolLogo: bu,
      schoolSite: "https://www.bicol-u.edu.ph/",
    },
    {
      imageSource: promotionsLead,
      school: "Camarines Sur Polytechnic Colleges",
      name: "John Francis Lomeda",
      linkedin: "",
      position: "Promotions Lead",
      schoolLogo: cspc,
      schoolSite: "https://cspc.edu.ph",
    },
    {
      imageSource: studentFinaceOfficer,
      school: "STI College Legazpi",
      name: "Paul Dannielle P. Yanzon",
      linkedin: "",
      position: "Finance Officer",
      schoolLogo: "",
      schoolSite: "https://sti.edu/campuses-details.asp?campus_id=TEVH",
    },
    {
      imageSource: eventCoordinator,
      school: "Camarinse Sur Polytechnic Colleges",
      name: "Cyril Christian B. Imperial",
      linkedin: "",
      position: "Event Coordinator",
      schoolLogo: cspc,
      schoolSite: "https://cspc.edu.ph",
    },
    {
      imageSource: communityCoordinator,
      school: "Divine Word College of Legazpi",
      name: "Kadmiel Ross B. Baiño",
      linkedin: "",
      position: "Community Coordinator",
      schoolLogo: dwcl,
      schoolSite: "https://www.dwc-legazpi.edu",
    },
    {
      imageSource: technologyOfficer,
      school: "STI College Legazpi",
      name: "Peter John Arao",
      linkedin: "https://www.linkedin.com/in/peter-john-arao/",
      position: "Technology Officer",
      schoolLogo: "",
      schoolSite: "https://sti.edu/campuses-details.asp?campus_id=TEVH",
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
    membership:
      "https://docs.google.com/forms/d/e/1FAIpQLSdA8CorhD6jXJ-EwaAg4gHlv_TVqfwY67VExd9QCYcVENlwvw/viewform",
  },
};

export type SiteConfig = typeof siteConfig;
