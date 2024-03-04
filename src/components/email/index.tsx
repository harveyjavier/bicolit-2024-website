import * as React from "react";
import { Hr, Html, Heading, Img } from "@react-email/components";
import { siteConfig } from "@/config/site";

export function Email(props: EmailProps) {
  const { name, subject, content } = props;

  return (
    <Html lang="en" className="flex items-center justify-center flex-col">
      <Img
        src="/bicolit-logo.png"
        alt="Bicol IT Logo"
        width={166}
        height={166}
      />
      <Hr />
      <Heading as="h1">{subject}</Heading>
      <div>
        <span>Name: {name}</span>
      </div>
    </Html>
  );
}

export default Email;
