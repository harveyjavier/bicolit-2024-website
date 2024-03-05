import * as React from "react";
import { Hr, Html, Heading, Img, Tailwind } from "@react-email/components";
import { siteConfig } from "@/config/site";

export function Email(
  props: MembershipEmailProps | ContactEmailProps | EmailProps
) {
  return (
    <Tailwind>
      <Html
        lang="en"
        className="flex items-center justify-center flex-col bg-gradient-to-tl to-[#00C2FF] via-[60%] via-[#6633C2] from-[#330066]"
      >
        <Img
          src={`${siteConfig.url}/images/bicolit-logo.png`}
          alt="Bicol IT Logo"
          width={166}
          height={166}
        />
        <Hr />
        <Heading as="h1">{props.subject}</Heading>
        <div>
          <span>
            <span className="text-md font-bold">Name:</span> {props.name}
          </span>
        </div>
      </Html>
    </Tailwind>
  );
}

export default Email;
